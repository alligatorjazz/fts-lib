"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Confirmation;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const types_js_1 = require("../types.js");
const Footer_js_1 = require("./components/Footer.js");
const tailwind_config_js_1 = __importDefault(require("./tailwind.config.js"));
function Confirmation() {
    const latestLink = types_js_1.site + "/latest";
    return ((0, jsx_runtime_1.jsx)(components_1.Tailwind, { config: tailwind_config_js_1.default, children: (0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsxs)(components_1.Head, { children: [(0, jsx_runtime_1.jsx)("title", { children: "Confirm Your FTS Subscription" }), (0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "Cousine", fallbackFontFamily: "Verdana", webFont: {
                                url: "https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                                format: "woff2"
                            }, fontWeight: 400, fontStyle: "normal" })] }), (0, jsx_runtime_1.jsx)(components_1.Preview, { children: "Looking forward to surfing the superhighway with you." }), (0, jsx_runtime_1.jsxs)(components_1.Body, { className: "text-textColor bg-bgColor p-4", children: [(0, jsx_runtime_1.jsx)(components_1.Link, { href: types_js_1.site, className: "leading-tight text-textColor", target: "_blank", children: (0, jsx_runtime_1.jsxs)(components_1.Section, { children: [(0, jsx_runtime_1.jsx)(components_1.Heading, { as: "h1", className: "text-3xl uppercase", children: ">: From The Superhighway" }), (0, jsx_runtime_1.jsx)(components_1.Heading, { as: "h2", className: "text-lg", children: "Confirm your subscription!" })] }) }), (0, jsx_runtime_1.jsx)(components_1.Hr, {}), (0, jsx_runtime_1.jsx)(components_1.Markdown, { markdownCustomStyles: {
                                h3: { fontSize: "1.2em", fontWeight: "bold" },
                                h4: { fontSize: "1em", fontStyle: "italic" },
                                link: { color: "rgb(241,181,234)" },
                                p: { lineHeight: "1.5em" },
                                image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
                            }, children: "Hey there! Looks like you signed up for the **FROM THE SUPERHIGHWAY** newsletter. If you did, all you need to do now is click the button below, and you'll be added to our list and taken to the latest issue of the newsletter." }), (0, jsx_runtime_1.jsx)(components_1.Container, { className: "mx-auto text-center", children: (0, jsx_runtime_1.jsxs)(components_1.Button, { className: "bg-fgColor p-3 text-textColor ", href: latestLink, children: [">: ", " Confirm Your Email"] }) }), (0, jsx_runtime_1.jsx)(components_1.Markdown, { markdownCustomStyles: {
                                h3: { fontSize: "1.2em", fontWeight: "bold" },
                                h4: { fontSize: "1em", fontStyle: "italic" },
                                link: { color: "rgb(241,181,234)" },
                                p: { lineHeight: "1.5em" },
                                image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
                            }, children: "If you didn't sign up, you can safely ignore this email - sorry for the confusion." }), (0, jsx_runtime_1.jsx)("p", { children: "- ajazz" }), (0, jsx_runtime_1.jsx)(components_1.Hr, { className: "my-8" }), (0, jsx_runtime_1.jsx)(Footer_js_1.Footer, {})] })] }) }));
}
