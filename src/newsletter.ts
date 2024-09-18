import { render } from "@react-email/components";
import sendgrid, { MailDataRequired } from "@sendgrid/mail";
import dayjs from "dayjs";
import "dotenv/config";
import Parser from 'rss-parser';
import { Issue, type IssueEmail } from "./types.js";
import NewIssue from "./emails/NewIssue.js";
import Confirmation from "./emails/Confirmation.js";


const testTarget = "dimitrisonic@gmail.com";
type FeedItem = {
	"content:encoded": string,
	"content:encodedSnippet": string,
	description: string
};

const defaultEmail = {
	from: "newsletter@fromthesuperhighway.com",
	asm: {
		groupId: 26518,
		groupsToDisplay: [26518]
	}
} satisfies Partial<MailDataRequired>

export function loadSendgridApi() {
	const key = process.env["SENDGRID_API_KEY"];
	if (!key || key.length === 0) {
		throw new Error("Sendgrid API key missing or malformed.");
	}

	sendgrid.setApiKey(key);
	return sendgrid;
}

export async function getIssues(): Promise<IssueEmail[]> {
	const parser: Parser<Record<string, any>, FeedItem> = new Parser({
		customFields: {
			item: ["content:encoded", "content:encodedSnippet"]
		}
	});
	const feed = await parser.parseURL('https://fromthesuperhighway.com/rss.xml');
	const emails: IssueEmail[] = [];
	feed.items.forEach(item => {
		if (!item.title || !item.link) { return; }
		const data: Issue = {
			title: item.title,
			description: item.description,
			publishDate: item.pubDate ?? new Date("1970"),
			tags: item.categories
		}

		const slug = item.link.split("/").at(-1);
		if (!slug) { return; }
		const body = item['content:encoded'];
		emails.push({ data, slug, body } as IssueEmail);
	});

	return emails;
}

export async function getLatestIssue(): Promise<IssueEmail> {
	const sortedIssues = (await getIssues()).sort((
		{ data: { publishDate: date1 } },
		{ data: { publishDate: date2 } }
	) => dayjs(date1).diff(date2));

	return sortedIssues[0];
}

export async function sendLatestIssue(to: string): Promise<unknown> {
	const issue = await getLatestIssue();
	console.log(`Preparing send for Issue "${issue.data.title}"`);

	console.log("Building HTML render...")
	const html = await render(NewIssue({ issue }), { pretty: true });
	console.log("Render complete.")
	console.log("Building plain text render...")
	const plain = await render(NewIssue({ issue }), { plainText: true });
	console.log("Render complete.")

	console.log("Loading Sendgrid API...");
	const sendgrid = loadSendgridApi();
	console.log("Sending test email to: ", testTarget);

	await sendgrid.send({
		...defaultEmail,
		to,
		subject: issue.data.title,
		html
	});

	return `Email sent to ${to}.`;
}

export async function sendConfirmationEmail(to: string, code: string): Promise<unknown> {
	const issue = await getLatestIssue();
	console.log(`Preparing send for confirmation email for "${to}"`);

	console.log("Building HTML render...")
	const html = await render(Confirmation({ code }), { pretty: true });
	console.log("Render complete.")
	console.log("Building plain text render...")
	const plain = await render(Confirmation({ code }), { plainText: true });
	console.log("Render complete.")

	console.log("Loading Sendgrid API...");
	const sendgrid = loadSendgridApi();

	await sendgrid.send({
		...defaultEmail,
		to,
		subject: issue.data.title,
		html,
	});

	return `Email sent to ${to}.`;
}