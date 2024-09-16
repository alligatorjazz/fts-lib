import { render } from "@react-email/components";
import { getLatestIssue, loadSendgridApi } from "./utils";
import { prompt } from "./utils";
import NewIssue from "../emails/NewIssue";

const testTarget = "dimitrisonic@gmail.com";
async function sendLatestIssue(to: string): Promise<unknown> {
	const { issue, count } = await getLatestIssue();
	console.log(`Preparing send for Issue #${count}: ${issue.slug}`);
	console.log(JSON.stringify(issue.data, null, 4))
	// const result = prompt("Is this the issue you want to send? (y/N) | ")
	// if (result !== "y") {
	// 	return "Aborted send."
	// }

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
		html
	});

	return "Email sent to UNIMPLEMENTED.";
}
