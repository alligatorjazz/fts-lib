import type { ReactNode } from "react";
import { Text } from "@react-email/components";
export function EmailPrompt({ children, className }: { children: ReactNode, className?: string }) {
	return <Text className={[className].join(" ")}><span className="mr-2">{">:"}</span>{children}</Text>
}