import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL){
  throw new Error("DATABASE_URL is not defined");
}

const sql = neon(DB_URL);

export const db = drizzle(sql);

