import { Body, Button, Container, Font, Head, Heading, Hr, Html, Link, Markdown, Preview, Section, Tailwind } from "@react-email/components";
import { site } from "../types";
import { Footer } from "./components/Footer";
import tailwindConfig from "./tailwind.config";


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
					<Footer />
				</Body>

			</Html>
		</Tailwind >
	);
}