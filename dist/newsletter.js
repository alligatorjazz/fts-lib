var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { render } from "@react-email/components";
import sendgrid from "@sendgrid/mail";
import dayjs from "dayjs";
import "dotenv/config";
import Parser from 'rss-parser';
import NewIssue from "./emails/NewIssue";
import Confirmation from "./emails/Confirmation";
const testTarget = "dimitrisonic@gmail.com";
const defaultEmail = {
    from: "newsletter@fromthesuperhighway.com",
    asm: {
        groupId: 26518,
        groupsToDisplay: [26518]
    }
};
export function loadSendgridApi() {
    const key = process.env["SENDGRID_API_KEY"];
    if (!key || key.length === 0) {
        throw new Error("Sendgrid API key missing or malformed.");
    }
    sendgrid.setApiKey(key);
    return sendgrid;
}
export function getIssues() {
    return __awaiter(this, void 0, void 0, function* () {
        const parser = new Parser({
            customFields: {
                item: ["content:encoded", "content:encodedSnippet"]
            }
        });
        const feed = yield parser.parseURL('https://fromthesuperhighway.com/rss.xml');
        const emails = [];
        feed.items.forEach(item => {
            var _a;
            if (!item.title || !item.link) {
                return;
            }
            const data = {
                title: item.title,
                description: item.description,
                publishDate: (_a = item.pubDate) !== null && _a !== void 0 ? _a : new Date("1970"),
                tags: item.categories
            };
            const slug = item.link.split("/").at(-1);
            if (!slug) {
                return;
            }
            const body = item['content:encoded'];
            emails.push({ data, slug, body });
        });
        return emails;
    });
}
export function getLatestIssue() {
    return __awaiter(this, void 0, void 0, function* () {
        const sortedIssues = (yield getIssues()).sort(({ data: { publishDate: date1 } }, { data: { publishDate: date2 } }) => dayjs(date1).diff(date2));
        return sortedIssues[0];
    });
}
export function sendLatestIssue(to) {
    return __awaiter(this, void 0, void 0, function* () {
        const issue = yield getLatestIssue();
        console.log(`Preparing send for Issue "${issue.data.title}"`);
        console.log("Building HTML render...");
        const html = yield render(NewIssue({ issue }), { pretty: true });
        console.log("Render complete.");
        console.log("Building plain text render...");
        const plain = yield render(NewIssue({ issue }), { plainText: true });
        console.log("Render complete.");
        console.log("Loading Sendgrid API...");
        const sendgrid = loadSendgridApi();
        console.log("Sending test email to: ", testTarget);
        yield sendgrid.send(Object.assign(Object.assign({}, defaultEmail), { to, subject: issue.data.title, html }));
        return `Email sent to ${to}.`;
    });
}
export function sendConfirmationEmail(to) {
    return __awaiter(this, void 0, void 0, function* () {
        const issue = yield getLatestIssue();
        console.log(`Preparing send for confirmation email for "${to}"`);
        console.log("Building HTML render...");
        const html = yield render(Confirmation(), { pretty: true });
        console.log("Render complete.");
        console.log("Building plain text render...");
        const plain = yield render(Confirmation(), { plainText: true });
        console.log("Render complete.");
        console.log("Loading Sendgrid API...");
        const sendgrid = loadSendgridApi();
        yield sendgrid.send(Object.assign(Object.assign({}, defaultEmail), { to, subject: issue.data.title, html }));
        return `Email sent to ${to}.`;
    });
}
