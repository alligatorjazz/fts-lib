import { Container, Link, Section, Text } from "@react-email/components";
import { site } from "../../types.js";
import { ReactDonate } from "./ReactDonate.js";

export function Footer() {
	return (
		<>
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
			</Container><Section className="text-center text-sm">
				<Link href={`${site}/unsubscribe`} className="text-accentColor">Unsubscribe</Link>
			</Section>
		</>
	);
}