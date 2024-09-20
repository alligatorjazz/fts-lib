import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container, Link, Text } from "@react-email/components";
import { site } from "../../types.js";
import { ReactDonate } from "./ReactDonate.js";
export function Footer() {
    return (_jsx(_Fragment, { children: _jsxs(Container, { className: "mx-auto text-center mb-4", children: [_jsxs(Container, { className: "mb-2", children: [_jsx(Link, { href: site, className: "uppercase font-bold text-xl m-0 text-textColor", children: ">: From The Superhighway" }), _jsxs(Text, { className: "m-0 mb-2 italic", children: ["...is a ", _jsx(Link, { className: "text-accentColor", href: "https://falchionstudios.com", children: "Falchion Studios" }), " project."] }), _jsx(ReactDonate, {})] }), _jsxs(Container, { className: "mb-4", children: [_jsx(Text, { className: "m-0", children: "6404 Mainsail Ct" }), _jsx(Text, { className: "m-0", children: "Orlando, FL 32807" })] })] }) }));
}
