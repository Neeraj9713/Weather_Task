const prisma = require('../config/prisma');

exports.getCityWeather = async (city, temperature) => {

    return await prisma.city_weather.upsert({
        where: { city: city },
        update: { temperature: temperature.temperature, forecast_min: temperature.forecast_min, forecast_max: temperature.forecast_max, warning: temperature.temperature > 30 ? true : false },
        create: { city: city, temperature: temperature.temperature, forecast_min: temperature.forecast_min, forecast_max: temperature.forecast_max, warning: temperature.temperature > 30 ? true : false }
    });
}

exports.updateCityWeather = async (city, data) => {
    return await prisma.city_weather.update({
        where: { city: city },
        data: { temperature: data.temperature, forecast_min: data.forecast_min, forecast_max: data.forecast_max, warning: data.temperature > 30 ? true : false }
    });
}