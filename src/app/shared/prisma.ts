import config from '../../config';
import { PrismaClient } from "@prisma/client";

// Check if DATABASE_URL is available
if (!config.database_url) {
  throw new Error('DATABASE_URL environment variable is required but not set');
}

export const prisma = new PrismaClient();