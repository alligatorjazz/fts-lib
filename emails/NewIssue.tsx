import { Html, Text, Button, Head, Preview, Body, Container, Heading, Tailwind, Hr, Section, Font, Link, Row, Markdown } from "@react-email/components";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import tailwindConfig from "./tailwind.config";
import { ReactDonate } from "./components/ReactDonate";
import { IssueEmail, site } from "../src/types";

// TODO: have the astro config and the emails inherit from the same source

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
					<Container className="mx-auto text-center mb-4">
						<Container className="mb-2">
							<Link href={site} className="uppercase font-bold text-xl m-0 text-textColor">{">: From The Superhighway"}</Link>
							<Text className="m-0 mb-2 italic">...is a <Link className="text-accentColor" href="https://falchionstudios.com">Falchion Studios</Link> project.</Text>
							<ReactDonate />
						</Container>
						<Container className="mb-4">
							<Text className="m-0">6404 Mainsail Ct</Text>
							<Text className="m-0">Orlando, FL 32807</Text>
						</Container>

					</Container>
					<Section className="text-center text-sm">
						<Link href={`${site}/unsubscribe`} className="text-accentColor">Unsubscribe</Link>
					</Section>
				</Body>

			</Html>
		</Tailwind >
	);
}