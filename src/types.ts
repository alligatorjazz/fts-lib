import { ZodError, z } from "zod";
import { fromZodError } from "zod-validation-error";

export function printZodError(error: unknown, message?: string) {
	if (message) console.error(message);
	console.dir(fromZodError(error as ZodError), { depth: null });
}

// UI TYPES
export type NavbarType = "relative" | "fixed" | "transparent";

// DATA MODELS

// from zod docs:
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
export type Json = Literal | { [key: string]: Json } | Json[];
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
	z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);


export const IssueSchema = z.object({
	"title": z.string(),
	"publishDate": z.union([z.string(), z.date()]),
	"description": z.string(),
	"tags": z.array(z.string()).optional()
});

export type IssueEmail = { data: Issue, slug: string, body: string };
export type Issue = z.infer<typeof IssueSchema>;

export interface CloudFunctionContext {
	req: {
		bodyText: string;
		bodyRaw: string;
		method: string;
	};
	res: {
		send: (data: string) => void;
		json: (data: object, status?: number) => void;
	};
	log: typeof console.log;
	error: typeof console.error;
}

export const site = "https://fromthesuperhighway.com";
export const newsletterAddress = "newsletter@fromthesuperhighway.com";