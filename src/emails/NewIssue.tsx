import { faker } from "@faker-js/faker";
import { Body, Button, Container, Font, Head, Heading, Hr, Html, Link, Markdown, Preview, Section, Tailwind } from "@react-email/components";
import dayjs from "dayjs";
import { IssueEmail, site } from "../types";
import { Footer } from "./components/Footer";
import tailwindConfig from "./tailwind.config";


export default function NewIssue({ issue }: { issue?: IssueEmail }) {
	const issueLink = issue?.slug ? `${site}/issues/${issue.slug}` : site;

	return (
		<Tailwind config={tailwindConfig}>
			<Html>
				<Head>
					<title>{issue?.data.title ?? "Issue Title"}</title>
					<Font
						fontFamily="Cousine"
						fallbackFontFamily="Verdana"
						webFont={{
							url: "https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap",
							format: "woff2"
						}}
						fontWeight={400}
						fontStyle="normal"
					/>
				</Head>
				<Preview>{issue?.data.description ?? faker.lorem.text()}</Preview>
				<Body className="text-textColor bg-bgColor p-4">
					<Link href={issueLink} className="leading-tight text-textColor" target="_blank">
						<Section>
							<Heading as="h1" className="text-3xl">
								{">: FTS | "}{`${dayjs(issue?.data.publishDate ?? Date.now()).format("MM.YYYY")}`}
							</Heading>
							<Heading as="h2" className="text-lg">{issue?.data.title ?? faker.lorem.sentence({ min: 5, max: 10 }).toLowerCase()}</Heading>
							<Heading as="h2" className="text-sm">
								{issue?.data.description ?? faker.lorem.sentence()}
							</Heading>
						</Section>
					</Link>
					<Hr />
					<Markdown
						markdownCustomStyles={{
							h3: { fontSize: "1.2em", fontWeight: "bold" },
							h4: { fontSize: "1em", fontStyle: "italic" },
							link: { color: "rgb(241,181,234)" },
							p: { lineHeight: "1.5em" },
							image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
						}}
					>
						{issue?.body ?? [
							faker.lorem.paragraph(),
							"### >: " + faker.lorem.sentence().toLowerCase(),
							faker.lorem.paragraphs(2),
							"### >: " + faker.lorem.sentence().toLowerCase(),
							faker.lorem.paragraphs(2),
							`![An image.](${faker.image.urlLoremFlickr()})`,
							"### >: " + faker.lorem.sentence().toLowerCase(),
							faker.lorem.paragraphs(2)
						].join("\n")}
					</Markdown>
					<Container className="mx-auto text-center">
						<Button className="bg-fgColor p-3 text-textColor " href={issueLink}>{">: "} Read On Site</Button>
					</Container>
					<Hr className="my-8" />
					<Footer />
				</Body>

			</Html>
		</Tailwind >
	);
}