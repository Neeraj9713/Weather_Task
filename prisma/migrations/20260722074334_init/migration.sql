/*
  Warnings:

  - Changed the type of `temperature` on the `city_weather` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."city_weather" DROP COLUMN "temperature",
ADD COLUMN     "temperature" DOUBLE PRECISION NOT NULL;
