import "dotenv/config";
import promptSync from "prompt-sync";
import { sendConfirmationEmail } from "../src/newsletter.js";
const prompt = promptSync();

async function main() {
	await sendConfirmationEmail("downtheladder@falchionstudios.com", "0f2e6e78-4b66-48f6-b93e-da57d6ae0215");
}
main()
	.then((res) => {
		console.log(res)
	})
	.catch(err => console.error(err))
	.finally(() => console.log("finished"));
