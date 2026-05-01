import { PrismaPg } from "@prisma/adapter-pg";
import { config } from 'dotenv';

import { PrismaClient } from "@prisma/client";

// Load environment variables from .env file (for local development)
config({ path: './.env' });

// Check if DATABASE_URL is available
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required but not set');
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
export const prisma = new PrismaClient({ adapter });