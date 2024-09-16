"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsletterAddress = exports.site = exports.IssueSchema = void 0;
exports.printZodError = printZodError;
const zod_1 = require("zod");
const zod_validation_error_1 = require("zod-validation-error");
function printZodError(error, message) {
    if (message)
        console.error(message);
    console.dir((0, zod_validation_error_1.fromZodError)(error), { depth: null });
}
// DATA MODELS
// from zod docs:
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean(), zod_1.z.null()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([literalSchema, zod_1.z.array(jsonSchema), zod_1.z.record(jsonSchema)]));
exports.IssueSchema = zod_1.z.object({
    "title": zod_1.z.string(),
    "publishDate": zod_1.z.union([zod_1.z.string(), zod_1.z.date()]),
    "description": zod_1.z.string(),
    "tags": zod_1.z.array(zod_1.z.string()).optional()
});
exports.site = "https://fromthesuperhighway.com";
exports.newsletterAddress = "newsletter@fromthesuperhighway.com";
