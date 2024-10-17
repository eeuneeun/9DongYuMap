import { PrismaClient } from "@prisma/client";

const DB_URL = process.env.DATABASE_URL;
export const prisma = new PrismaClient({
  datasources: {
    db: {
      provider: "mysql",
      url: DB_URL,
    },
  },
  log: [{ level: "query", emit: "event" }],
});
