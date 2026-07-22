const prisma = require("./src/config/prisma");
async function test() {
  const user = await prisma.city_weather.create({
    data: {
      city: "New York",
      temperature: 25.5,
      forecast_min: 20.0,
        forecast_max: 30.0
    }
  });
  console.log(user);
}