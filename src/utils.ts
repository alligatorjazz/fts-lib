import "dotenv/config";
import dayjs from "dayjs";
import fm from "front-matter";
import { readdirSync, readFileSync } from "fs";
import { join, basename } from "path";
import Prompt from "prompt-sync";
import sendgrid from "@sendgrid/mail";
import { IssueEmail, IssueSchema } from "./types";

export function loadSendgridApi() {
	const key = process.env["SENDGRID_API_KEY"];
	if (!key || key.length === 0) {
		throw new Error("Sendgrid API key missing or malformed.");
	}

	sendgrid.setApiKey(key);
	return sendgrid;
}
export const prompt = Prompt()

export function getIssues(): IssueEmail[] {
	const base = join(".", "src/content/issues");
	const list = readdirSync(base).map(filename => {
		const fullPath = join(base, filename);
		const slug = basename(fullPath, ".md");
		const buffer = readFileSync(fullPath);
		const frontmatter = fm(buffer.toString());
		return {
			data: IssueSchema.parse(frontmatter.attributes),
			body: frontmatter.body,
			slug
		}
	});

	return list as IssueEmail[];
}

export async function getLatestIssue(): Promise<{ issue: IssueEmail, count: number }> {
	const issues = getIssues().sort((a, b) =>
		dayjs(b.data.publishDate).diff(a.data.publishDate)
	);

	return { issue: issues[0], count: issues.length }
}