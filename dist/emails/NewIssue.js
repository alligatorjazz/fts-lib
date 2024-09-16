import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faker } from "@faker-js/faker";
import { Body, Button, Container, Font, Head, Heading, Hr, Html, Link, Markdown, Preview, Section, Tailwind } from "@react-email/components";
import dayjs from "dayjs";
import { site } from "../types.js";
import { Footer } from "./components/Footer.js";
import tailwindConfig from "./tailwind.config.js";
export default function NewIssue({ issue }) {
    const issueLink = issue?.slug ? `${site}/issues/${issue.slug}` : site;
    return (_jsx(Tailwind, { config: tailwindConfig, children: _jsxs(Html, { children: [_jsxs(Head, { children: [_jsx("title", { children: issue?.data.title ?? "Issue Title" }), _jsx(Font, { fontFamily: "Cousine", fallbackFontFamily: "Verdana", webFont: {
                                url: "https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                                format: "woff2"
                            }, fontWeight: 400, fontStyle: "normal" })] }), _jsx(Preview, { children: issue?.data.description ?? faker.lorem.text() }), _jsxs(Body, { className: "text-textColor bg-bgColor p-4", children: [_jsx(Link, { href: issueLink, className: "leading-tight text-textColor", target: "_blank", children: _jsxs(Section, { children: [_jsxs(Heading, { as: "h1", className: "text-3xl", children: [">: FTS | ", `${dayjs(issue?.data.publishDate ?? Date.now()).format("MM.YYYY")}`] }), _jsx(Heading, { as: "h2", className: "text-lg", children: issue?.data.title ?? faker.lorem.sentence({ min: 5, max: 10 }).toLowerCase() }), _jsx(Heading, { as: "h2", className: "text-sm", children: issue?.data.description ?? faker.lorem.sentence() })] }) }), _jsx(Hr, {}), _jsx(Markdown, { markdownCustomStyles: {
                                h3: { fontSize: "1.2em", fontWeight: "bold" },
                                h4: { fontSize: "1em", fontStyle: "italic" },
                                link: { color: "rgb(241,181,234)" },
                                p: { lineHeight: "1.5em" },
                                image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
                            }, children: issue?.body ?? [
                                faker.lorem.paragraph(),
                                "### >: " + faker.lorem.sentence().toLowerCase(),
                                faker.lorem.paragraphs(2),
                                "### >: " + faker.lorem.sentence().toLowerCase(),
                                faker.lorem.paragraphs(2),
                                `![An image.](${faker.image.urlLoremFlickr()})`,
                                "### >: " + faker.lorem.sentence().toLowerCase(),
                                faker.lorem.paragraphs(2)
                            ].join("\n") }), _jsx(Container, { className: "mx-auto text-center", children: _jsxs(Button, { className: "bg-fgColor p-3 text-textColor ", href: issueLink, children: [">: ", " Read On Site"] }) }), _jsx(Hr, { className: "my-8" }), _jsx(Footer, {})] })] }) }));
}
