import type { ZodSchema } from "zod";

/**
 * A reusable helper function to validate any data against a Zod schema.
 * Throws a formatted error if validation fails, otherwise returns the typed data.
 */
export function validateData<T>(schema: ZodSchema<T>, data: unknown): T {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    throw new Error(`Validation failed: ${parsed.error?.message || "Invalid data"}`);
  }

  return parsed.data;
}
