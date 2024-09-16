"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = Footer;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const types_js_1 = require("../../types.js");
const ReactDonate_js_1 = require("./ReactDonate.js");
function Footer() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(components_1.Container, { className: "mx-auto text-center mb-4", children: [(0, jsx_runtime_1.jsxs)(components_1.Container, { className: "mb-2", children: [(0, jsx_runtime_1.jsx)(components_1.Link, { href: types_js_1.site, className: "uppercase font-bold text-xl m-0 text-textColor", children: ">: From The Superhighway" }), (0, jsx_runtime_1.jsxs)(components_1.Text, { className: "m-0 mb-2 italic", children: ["...is a ", (0, jsx_runtime_1.jsx)(components_1.Link, { className: "text-accentColor", href: "https://falchionstudios.com", children: "Falchion Studios" }), " project."] }), (0, jsx_runtime_1.jsx)(ReactDonate_js_1.ReactDonate, {})] }), (0, jsx_runtime_1.jsxs)(components_1.Container, { className: "mb-4", children: [(0, jsx_runtime_1.jsx)(components_1.Text, { className: "m-0", children: "6404 Mainsail Ct" }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: "m-0", children: "Orlando, FL 32807" })] })] }), (0, jsx_runtime_1.jsx)(components_1.Section, { className: "text-center text-sm", children: (0, jsx_runtime_1.jsx)(components_1.Link, { href: `${types_js_1.site}/unsubscribe`, className: "text-accentColor", children: "Unsubscribe" }) })] }));
}
