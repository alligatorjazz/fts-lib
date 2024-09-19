import { z } from "zod";
import { fromZodError } from "zod-validation-error";
export function printZodError(error, message) {
    if (message)
        console.error(message);
    console.dir(fromZodError(error), { depth: null });
}
// DATA MODELS
// from zod docs:
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const jsonSchema = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]));
export const IssueSchema = z.object({
    "title": z.string(),
    "publishDate": z.union([z.string(), z.date()]),
    "description": z.string(),
    "tags": z.array(z.string()).optional(),
    "poster": z.string()
});
export const site = "https://fromthesuperhighway.com";
export const newsletterAddress = "newsletter@fromthesuperhighway.com";
