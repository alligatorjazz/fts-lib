"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactDonate = ReactDonate;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
const patreonImg = "https://fleet.falchionstudios.com/v1/storage/buckets/66d637ac0025bbded989/files/66d637ea001afb6f302f/view?project=66d350170017a5c23f69";
function ReactDonate() {
    return ((0, jsx_runtime_1.jsx)(components_1.Link, { "aria-label": "A link to the From The Superhighway Patreon page.", href: "https://patreon.com/fromthesuperhighway", className: "", children: (0, jsx_runtime_1.jsxs)(components_1.Section, { className: "bg-fgColor uppercase w-64 px-4 py-2 text-textColor", children: [(0, jsx_runtime_1.jsx)(components_1.Column, { children: (0, jsx_runtime_1.jsx)(components_1.Img, { src: patreonImg, width: "16", height: "16", alt: "Patreon", className: "inline-block" }) }), (0, jsx_runtime_1.jsx)(components_1.Column, { children: (0, jsx_runtime_1.jsx)(components_1.Text, { className: "text-sm inline pl-2", children: "Support us on Patreon!" }) })] }) }));
}
