/*
  Warnings:

  - Added the required column `update_at` to the `city_weather` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warning` to the `city_weather` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."city_weather" ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "warning" BOOLEAN NOT NULL;
