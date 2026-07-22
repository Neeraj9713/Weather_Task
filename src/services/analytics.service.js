const weatherService = require('./weather.service');
const cityRepository = require('../repositories/city.repository');

exports.processCities = async (cities) => {
  
    const weatherData = [];
    for(city of cities) {
        const weather = await weatherService.getWeatherByCity(city);

        await cityRepository.getCityWeather(city, weather);

        weatherData.push({
            city: city,
            temperature: weather.temperature
        });

    }
    const temperatureData = weatherData.map(data => data.temperature);
    const averageTemperature = temperatureData.reduce((sum, temp) => sum + temp, 0) / temperatureData.length;

    const highestTemperature = weatherData.reduce((a,b) => a.temperature > b.temperature ? a : b);

    const lowestTemperature = weatherData.reduce((a,b) => a.temperature < b.temperature ? a : b);

    const hotCities = weatherData.filter(data => data.temperature > 30).map(data => data.city);
    return {
        averageTemperature: Number(averageTemperature.toFixed(2)),
        highestTemperature: {
            city: highestTemperature.city,
            temperature: highestTemperature.temperature
        },
        lowestTemperature: {
            city: lowestTemperature.city,
            temperature: lowestTemperature.temperature
        },
        hotCities
    };
}

exports.getCityAnalytics = async (city) => {
    const forecast = await weatherService.getForecast(city);

    const current = await weatherService.getCurrentWeather(city);

    const warning = forecast.forecast_max > 35 ? "temp exceed 35 C" : "Normal";

    await cityRepository.updateCityWeather(city, {
        temperature: current.temperature,
        forecastMin: forecast.forecast_min,
        forecastMax: forecast.forecast_max
    })

    return {
        city,
        currentTemperature: current.temperature,
        forecastMin: forecast.forecast_min,
        forecastMax: forecast.forecast_max,
        warning
    };
}