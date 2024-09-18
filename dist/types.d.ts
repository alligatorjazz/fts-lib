import { z } from "zod";
export declare function printZodError(error: unknown, message?: string): void;
export type NavbarType = "relative" | "fixed" | "transparent";
declare const literalSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
type Literal = z.infer<typeof literalSchema>;
export type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const IssueSchema: z.ZodObject<{
    title: z.ZodString;
    publishDate: z.ZodUnion<[z.ZodString, z.ZodDate]>;
    description: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    publishDate: string | Date;
    description: string;
    tags?: string[] | undefined;
}, {
    title: string;
    publishDate: string | Date;
    description: string;
    tags?: string[] | undefined;
}>;
export type IssueEmail = {
    data: Issue;
    slug: string;
    body: string;
};
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
export declare const site = "https://fromthesuperhighway.com";
export declare const newsletterAddress = "newsletter@fromthesuperhighway.com";
export {};
