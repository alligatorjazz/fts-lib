import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body, Button, Container, Font, Head, Heading, Hr, Html, Link, Markdown, Preview, Section, Tailwind } from "@react-email/components";
import { site } from "../types.js";
import { Footer } from "./components/Footer.js";
import tailwindConfig from "./tailwind.config.js";
export default function Confirmation() {
    const latestLink = site + "/latest";
    return (_jsx(Tailwind, { config: tailwindConfig, children: _jsxs(Html, { children: [_jsxs(Head, { children: [_jsx("title", { children: "Confirm Your FTS Subscription" }), _jsx(Font, { fontFamily: "Cousine", fallbackFontFamily: "Verdana", webFont: {
                                url: "https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                                format: "woff2"
                            }, fontWeight: 400, fontStyle: "normal" })] }), _jsx(Preview, { children: "Looking forward to surfing the superhighway with you." }), _jsxs(Body, { className: "text-textColor bg-bgColor p-4", children: [_jsx(Link, { href: site, className: "leading-tight text-textColor", target: "_blank", children: _jsxs(Section, { children: [_jsx(Heading, { as: "h1", className: "text-3xl uppercase", children: ">: From The Superhighway" }), _jsx(Heading, { as: "h2", className: "text-lg", children: "Confirm your subscription!" })] }) }), _jsx(Hr, {}), _jsx(Markdown, { markdownCustomStyles: {
                                h3: { fontSize: "1.2em", fontWeight: "bold" },
                                h4: { fontSize: "1em", fontStyle: "italic" },
                                link: { color: "rgb(241,181,234)" },
                                p: { lineHeight: "1.5em" },
                                image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
                            }, children: "Hey there! Looks like you signed up for the **FROM THE SUPERHIGHWAY** newsletter. If you did, all you need to do now is click the button below, and you'll be added to our list and taken to the latest issue of the newsletter." }), _jsx(Container, { className: "mx-auto text-center", children: _jsxs(Button, { className: "bg-fgColor p-3 text-textColor ", href: latestLink, children: [">: ", " Confirm Your Email"] }) }), _jsx(Markdown, { markdownCustomStyles: {
                                h3: { fontSize: "1.2em", fontWeight: "bold" },
                                h4: { fontSize: "1em", fontStyle: "italic" },
                                link: { color: "rgb(241,181,234)" },
                                p: { lineHeight: "1.5em" },
                                image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
                            }, children: "If you didn't sign up, you can safely ignore this email - sorry for the confusion." }), _jsx("p", { children: "- ajazz" }), _jsx(Hr, { className: "my-8" }), _jsx(Footer, {})] })] }) }));
}
