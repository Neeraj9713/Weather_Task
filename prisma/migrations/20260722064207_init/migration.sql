-- CreateTable
CREATE TABLE "public"."city_weather" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "forecast_min" DOUBLE PRECISION NOT NULL,
    "forecast_max" DOUBLE PRECISION NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "city_weather_pkey" PRIMARY KEY ("id")
);
