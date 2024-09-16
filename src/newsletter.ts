import { render } from "@react-email/components";
import sendgrid from "@sendgrid/mail";
import dayjs from "dayjs";
import "dotenv/config";
import Parser from 'rss-parser';
import NewIssue from "../emails/NewIssue";
import { Issue, type IssueEmail } from "./types";
import Confirmation from "../emails/Confirmation";

const testTarget = "dimitrisonic@gmail.com";
type FeedItem = {
	"content:encoded": string,
	"content:encodedSnippet": string,
	description: string
};

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

async function sendLatestIssue(to: string): Promise<unknown> {
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
		from: "newsletter@fromthesuperhighway.com",
		to,
		subject: issue.data.title,
		html,
		asm: {
			groupId: 26518,
			groupsToDisplay: [26518]
		}
	});

	return `Email sent to ${to}.`;
}

async function sendConfirmationEmail(to: string): Promise<unknown> {
	const issue = await getLatestIssue();
	console.log(`Preparing send for confirmation email for "${to}"`);

	console.log("Building HTML render...")
	const html = await render(Confirmation(), { pretty: true });
	console.log("Render complete.")
	console.log("Building plain text render...")
	const plain = await render(Confirmation(), { plainText: true });
	console.log("Render complete.")

	console.log("Loading Sendgrid API...");
	const sendgrid = loadSendgridApi();

	await sendgrid.send({
		from: "newsletter@fromthesuperhighway.com",
		to,
		subject: issue.data.title,
		html,
		asm: {
			groupId: 26518,
			groupsToDisplay: [26518]
		}
	});

	return `Email sent to ${to}.`;
}