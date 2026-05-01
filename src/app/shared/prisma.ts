import { PrismaPg } from "@prisma/adapter-pg";

import config from '../../config';
import { PrismaClient } from "@prisma/client";

// Check if DATABASE_URL is available
if (!config.database_url) {
  throw new Error('DATABASE_URL environment variable is required but not set');
}

const adapter = new PrismaPg({
  connectionString: config.database_url,
});
export const prisma = new PrismaClient({ adapter });