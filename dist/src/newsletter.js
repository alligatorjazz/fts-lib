import { render } from "@react-email/components";
import sendgrid from "@sendgrid/mail";
import client from "@sendgrid/client";
import dayjs from "dayjs";
import "dotenv/config";
import Parser from 'rss-parser';
import NewIssue from "./emails/NewIssue.js";
import Confirmation from "./emails/Confirmation.js";
const defaultEmail = {
    from: "newsletter@fromthesuperhighway.com",
    // asm: {
    // 	groupId: 26518,
    // 	groupsToDisplay: [26518]
    // },
    trackingSettings: {
        subscriptionTracking: {
            enable: true,
            html: `<div style="text-align: center; width: 100%; color: rgb(241, 181, 234) !important;"><% Unsubscribe %></div>`,
            text: "<% Unsubscribe %>"
        }
    }
};
export function loadSendgridMail() {
    const key = process.env["SENDGRID_API_KEY"];
    if (!key || key.length === 0) {
        throw new Error("Sendgrid API key missing or malformed.");
    }
    sendgrid.setApiKey(key);
    return sendgrid;
}
export function loadSendgridClient() {
    const key = process.env["SENDGRID_API_KEY"];
    if (!key || key.length === 0) {
        throw new Error("Sendgrid API key missing or malformed.");
    }
    client.setApiKey(key);
    return client;
}
export async function getIssues() {
    const parser = new Parser({
        customFields: {
            item: ["description", "poster", "markdown"]
        }
    });
    const feed = await parser.parseURL('https://fromthesuperhighway.com/rss.xml');
    const emails = [];
    feed.items.forEach((item) => {
        if (!item.title || !item.link) {
            return;
        }
        const data = {
            title: item.title,
            description: item.description,
            publishDate: item.pubDate ?? new Date("1970"),
            tags: item.categories,
            poster: item.poster
        };
        const slug = item.link.split("/").at(-1);
        if (!slug) {
            return;
        }
        const body = item["markdown"];
        emails.push({ data, slug, body });
    });
    return emails;
}
export async function getLatestIssue() {
    const sortedIssues = (await getIssues()).sort(({ data: { publishDate: date1 } }, { data: { publishDate: date2 } }) => dayjs(date1).diff(date2));
    return sortedIssues[0];
}
export async function sendLatestIssue(to) {
    const issue = await getLatestIssue();
    console.log(`Preparing send for Issue "${issue.data.title}"`);
    console.log("Building HTML render...");
    const html = await render(NewIssue({ issue }), { pretty: true });
    console.log("Render complete.");
    console.log("Building plain text render...");
    const plain = await render(NewIssue({ issue }), { plainText: true });
    console.log("Render complete.");
    console.log("Loading Sendgrid API...");
    const sendgrid = loadSendgridMail();
    console.log("Sending test email to: ", to);
    await sendgrid.send({
        ...defaultEmail,
        to,
        subject: issue.data.title,
        html
    });
    return `Email sent to ${to}.`;
}
export async function sendConfirmationEmail(to, code) {
    const issue = await getLatestIssue();
    console.log(`Preparing send for confirmation email for "${to}"`);
    console.log("Building HTML render...");
    const html = await render(Confirmation({ code }), { pretty: true });
    console.log("Render complete.");
    console.log("Building plain text render...");
    const plain = await render(Confirmation({ code }), { plainText: true });
    console.log("Render complete.");
    console.log("Loading Sendgrid API...");
    const sendgrid = loadSendgridMail();
    await sendgrid.send({
        ...defaultEmail,
        to,
        subject: issue.data.title,
        html,
    });
    return `Email sent to ${to}.`;
}
export function getFullList() {
    const client = loadSendgridClient();
    const data = {
        "query": "CONTAINS(list_ids, '72d99cd4-4eb0-4560-bb4c-7ac117044175')"
    };
    const request = {
        url: `/v3/marketing/contacts/search`,
        method: 'POST',
        body: data
    };
    return client.request(request);
}
