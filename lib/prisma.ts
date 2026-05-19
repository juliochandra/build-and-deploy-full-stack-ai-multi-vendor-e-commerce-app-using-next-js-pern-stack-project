import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { env } from "./env";

const adapter: PrismaPg = new PrismaPg(env.DATABASE_URL);
const prisma: PrismaClient = new PrismaClient({ adapter });

export { prisma };
