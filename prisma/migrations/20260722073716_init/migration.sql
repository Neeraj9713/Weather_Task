/*
  Warnings:

  - A unique constraint covering the columns `[city]` on the table `city_weather` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "city_weather_city_key" ON "public"."city_weather"("city");
