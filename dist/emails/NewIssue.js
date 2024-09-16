"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewIssue;
const jsx_runtime_1 = require("react/jsx-runtime");
const faker_1 = require("@faker-js/faker");
const components_1 = require("@react-email/components");
const dayjs_1 = __importDefault(require("dayjs"));
const types_js_1 = require("../types.js");
const Footer_js_1 = require("./components/Footer.js");
const tailwind_config_js_1 = __importDefault(require("./tailwind.config.js"));
function NewIssue({ issue }) {
    var _a, _b, _c, _d, _e, _f;
    const issueLink = (issue === null || issue === void 0 ? void 0 : issue.slug) ? `${types_js_1.site}/issues/${issue.slug}` : types_js_1.site;
    return ((0, jsx_runtime_1.jsx)(components_1.Tailwind, { config: tailwind_config_js_1.default, children: (0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsxs)(components_1.Head, { children: [(0, jsx_runtime_1.jsx)("title", { children: (_a = issue === null || issue === void 0 ? void 0 : issue.data.title) !== null && _a !== void 0 ? _a : "Issue Title" }), (0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "Cousine", fallbackFontFamily: "Verdana", webFont: {
                                url: "https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                                format: "woff2"
                            }, fontWeight: 400, fontStyle: "normal" })] }), (0, jsx_runtime_1.jsx)(components_1.Preview, { children: (_b = issue === null || issue === void 0 ? void 0 : issue.data.description) !== null && _b !== void 0 ? _b : faker_1.faker.lorem.text() }), (0, jsx_runtime_1.jsxs)(components_1.Body, { className: "text-textColor bg-bgColor p-4", children: [(0, jsx_runtime_1.jsx)(components_1.Link, { href: issueLink, className: "leading-tight text-textColor", target: "_blank", children: (0, jsx_runtime_1.jsxs)(components_1.Section, { children: [(0, jsx_runtime_1.jsxs)(components_1.Heading, { as: "h1", className: "text-3xl", children: [">: FTS | ", `${(0, dayjs_1.default)((_c = issue === null || issue === void 0 ? void 0 : issue.data.publishDate) !== null && _c !== void 0 ? _c : Date.now()).format("MM.YYYY")}`] }), (0, jsx_runtime_1.jsx)(components_1.Heading, { as: "h2", className: "text-lg", children: (_d = issue === null || issue === void 0 ? void 0 : issue.data.title) !== null && _d !== void 0 ? _d : faker_1.faker.lorem.sentence({ min: 5, max: 10 }).toLowerCase() }), (0, jsx_runtime_1.jsx)(components_1.Heading, { as: "h2", className: "text-sm", children: (_e = issue === null || issue === void 0 ? void 0 : issue.data.description) !== null && _e !== void 0 ? _e : faker_1.faker.lorem.sentence() })] }) }), (0, jsx_runtime_1.jsx)(components_1.Hr, {}), (0, jsx_runtime_1.jsx)(components_1.Markdown, { markdownCustomStyles: {
                                h3: { fontSize: "1.2em", fontWeight: "bold" },
                                h4: { fontSize: "1em", fontStyle: "italic" },
                                link: { color: "rgb(241,181,234)" },
                                p: { lineHeight: "1.5em" },
                                image: { maxHeight: "420px", width: "100%", objectFit: "contain", padding: "1rem 0" }
                            }, children: (_f = issue === null || issue === void 0 ? void 0 : issue.body) !== null && _f !== void 0 ? _f : [
                                faker_1.faker.lorem.paragraph(),
                                "### >: " + faker_1.faker.lorem.sentence().toLowerCase(),
                                faker_1.faker.lorem.paragraphs(2),
                                "### >: " + faker_1.faker.lorem.sentence().toLowerCase(),
                                faker_1.faker.lorem.paragraphs(2),
                                `![An image.](${faker_1.faker.image.urlLoremFlickr()})`,
                                "### >: " + faker_1.faker.lorem.sentence().toLowerCase(),
                                faker_1.faker.lorem.paragraphs(2)
                            ].join("\n") }), (0, jsx_runtime_1.jsx)(components_1.Container, { className: "mx-auto text-center", children: (0, jsx_runtime_1.jsxs)(components_1.Button, { className: "bg-fgColor p-3 text-textColor ", href: issueLink, children: [">: ", " Read On Site"] }) }), (0, jsx_runtime_1.jsx)(components_1.Hr, { className: "my-8" }), (0, jsx_runtime_1.jsx)(Footer_js_1.Footer, {})] })] }) }));
}
