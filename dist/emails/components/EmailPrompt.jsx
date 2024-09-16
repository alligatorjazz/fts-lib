import { Text } from "@react-email/components";
export function EmailPrompt({ children, className }) {
    return <Text className={[className].join(" ")}><span className="mr-2">{">:"}</span>{children}</Text>;
}
