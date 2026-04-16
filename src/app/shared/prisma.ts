import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from '../../../prisma/generated/prisma/client';
import config from '../../config';

const adapter = new PrismaPg({
  connectionString: config.database_url as string,
});
export const prisma = new PrismaClient({ adapter });