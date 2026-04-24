import { PrismaPg } from "@prisma/adapter-pg";

import config from '../../config';
import { PrismaClient } from "../../../.prisma/client";

const adapter = new PrismaPg({
  connectionString: config.database_url as string,
});
export const prisma = new PrismaClient({ adapter });