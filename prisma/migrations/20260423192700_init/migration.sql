/*
  Warnings:

  - You are about to drop the `CommunityPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produce` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RentalSpace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SustainabilityCert` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VendorProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommunityPost" DROP CONSTRAINT "CommunityPost_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_produceId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_vendorId_fkey";

-- DropForeignKey
ALTER TABLE "Produce" DROP CONSTRAINT "Produce_vendorId_fkey";

-- DropForeignKey
ALTER TABLE "RentalSpace" DROP CONSTRAINT "RentalSpace_vendorId_fkey";

-- DropForeignKey
ALTER TABLE "SustainabilityCert" DROP CONSTRAINT "SustainabilityCert_vendorId_fkey";

-- DropForeignKey
ALTER TABLE "VendorProfile" DROP CONSTRAINT "VendorProfile_userId_fkey";

-- DropTable
DROP TABLE "CommunityPost";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "Produce";

-- DropTable
DROP TABLE "RentalSpace";

-- DropTable
DROP TABLE "SustainabilityCert";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VendorProfile";

-- DropEnum
DROP TYPE "CertificationStatus";

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "UserRole";

-- DropEnum
DROP TYPE "UserStatus";
