import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from "@react-email/components";
export function EmailPrompt({ children, className }) {
    return _jsxs(Text, { className: [className].join(" "), children: [_jsx("span", { className: "mr-2", children: ">:" }), children] });
}
