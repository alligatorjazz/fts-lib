import "dotenv/config";
import { getFullList, sendLatestIssue } from "../src/newsletter.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
async function main() {
    console.log("Beginning newsletter send...");
    console.log("Please input the test email you want to use.");
    const testEmail = prompt("Test Email: ");
    if (!testEmail) {
        throw new Error("You need to run a test email send before continuing.");
    }
    console.log("Sending latest issue to test email.");
    await sendLatestIssue(testEmail);
    console.log("Email sent. Check it over to ensure everything looks good.");
    console.log("Are you ready to send?");
    const startReady = prompt("(y/N): ")?.toLowerCase() === "y";
    if (!startReady) {
        throw new Error("Exited send script - not ready.");
    }
    console.log("Fetching email list from Sendgrid...");
    const list = await getFullList();
    const [_, data] = list;
    const emails = data.result.map(({ email }) => email);
    console.log("Email list retrieved. List:");
    console.log(emails);
    console.log("Does this list look right?");
    const listReady = prompt("(y/N): ")?.toLowerCase() === "y";
    if (!listReady) {
        throw new Error("Exited send script - not ready.");
    }
    console.log("Going to send to this list. Are you sure?");
    const finalReady = prompt("(y/N): ")?.toLowerCase() === "y";
    if (!finalReady) {
        throw new Error("Exited send script - not ready.");
    }
    for (const email of emails) {
        console.log("Sending latest issue to ", email, ".");
        await sendLatestIssue(email);
        console.log("Send complete.");
    }
    console.log("All sends complete.");
    return true;
}
main()
    .then((res) => {
    console.log(res);
})
    .catch(err => console.error(err))
    .finally(() => console.log("finished"));
