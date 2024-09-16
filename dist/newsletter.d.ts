import sendgrid from "@sendgrid/mail";
import "dotenv/config";
import { type IssueEmail } from "./types";
export declare function loadSendgridApi(): sendgrid.MailService;
export declare function getIssues(): Promise<IssueEmail[]>;
export declare function getLatestIssue(): Promise<IssueEmail>;
export declare function sendLatestIssue(to: string): Promise<unknown>;
export declare function sendConfirmationEmail(to: string): Promise<unknown>;
