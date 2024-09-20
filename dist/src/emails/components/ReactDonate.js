import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Column, Img, Link, Section, Text } from "@react-email/components";
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
const patreonImg = "https://fleet.falchionstudios.com/v1/storage/buckets/66d637ac0025bbded989/files/66d637ea001afb6f302f/view?project=66d350170017a5c23f69";
export function ReactDonate() {
    return (_jsx(Link, { "aria-label": "A link to the From The Superhighway Patreon page.", href: "https://patreon.com/fromthesuperhighway", className: "", children: _jsxs(Section, { className: "bg-fgColor uppercase w-64 px-4 py-2 text-textColor", children: [_jsx(Column, { children: _jsx(Img, { src: patreonImg, width: "16", height: "16", alt: "Patreon", className: "inline-block" }) }), _jsx(Column, { children: _jsx(Text, { className: "text-sm inline pl-2", children: "Support us on Patreon!" }) })] }) }));
}
