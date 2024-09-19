import "dotenv/config";
import { sendLatestIssue } from "../src/newsletter.js";

sendLatestIssue("manefforts@gmail.com")
	.then((result) => {
		console.log(result);
	})
	.catch(err => console.error(err))
	.finally(() => console.log("finished"));
	