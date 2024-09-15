import { Html, Text, Button, Head, Preview, Body, Container, Heading, Tailwind, Hr, Section, Font, Link, Row, Markdown } from "@react-email/components";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import tailwindConfig from "./tailwind.config";
import { ReactDonate } from "./components/ReactDonate";
import { site, type IssueEmail } from "fts-lib";


export default function Confirmation() {
	const latestLink = site + "/latest";

	return (
		<Tailwind config={tailwindConfig}>
			<Html>
				<Head>
					<title>Confirm Your FTS Subscription</title>
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
				<Preview>Looking forward to surfing the superhighway with you.</Preview>
				<Body className="text-textColor bg-bgColor p-4">
					<Link href={site} className="leading-tight text-textColor" target="_blank">
						<Section>
							<Heading as="h1" className="text-3xl uppercase">
								{">: From The Superhighway"}
							</Heading>
							<Heading as="h2" className="text-lg">Confirm your subscription!</Heading>
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
						Hey there! Looks like you signed up for the **FROM THE SUPERHIGHWAY** newsletter. If you did, all you need to do now is click the button below, and you'll be added to our list and taken to the latest issue of the newsletter.
					</Markdown>
					<Container className="mx-auto text-center">
						<Button className="bg-fgColor p-3 text-textColor " href={latestLink}>{">: "} Confirm Your Email</Button>
					</Container>
					<Markdown
						markdownCustomStyles={{
							h3: { fontSize: "1.2em", fontWeight: "bold" },
							h4: { fontSize: "1em", fontStyle: "italic" },
							link: { color: "rgb(241,181,234)" },
							p: { lineHeight: "1.5em" },
							image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
						}}
					>
						If you didn't sign up, you can safely ignore this email - sorry for the confusion.	
					</Markdown>
					<p>- ajazz</p>
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