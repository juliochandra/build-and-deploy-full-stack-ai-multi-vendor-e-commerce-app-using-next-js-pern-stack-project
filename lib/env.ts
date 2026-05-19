/** biome-ignore-all lint/nursery/useExplicitType: <> */
/** biome-ignore-all lint/style/useNamingConvention: <> */
import "dotenv/config";
import { z } from "zod";
import { validateData } from "./validate";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DATABASE_URL: z.url("DATABASE_URL must be a valid connection URL"),
  NEXT_PUBLIC_CURRENCY_SYMBOL: z.string().min(1).default("$"),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
    .string()
    .min(1, "Clerk publishable key is required"),
  CLERK_SECRET_KEY: z.string().min(1, "Clerk secret key is required"),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = validateData(envSchema, process.env);
