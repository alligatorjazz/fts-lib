"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPrompt = EmailPrompt;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
function EmailPrompt({ children, className }) {
    return (0, jsx_runtime_1.jsxs)(components_1.Text, { className: [className].join(" "), children: [(0, jsx_runtime_1.jsx)("span", { className: "mr-2", children: ">:" }), children] });
}
