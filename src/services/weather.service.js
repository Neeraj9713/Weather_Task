const axios = require('axios');

const API_KEY = process.env.OPEN_WEATHER_API_KEY;
const BASE_URL = process.env.WEATHER_API_URL;

exports.getWeatherByCity = async (city) => {
    const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get(url);  
        return {
            city: response.data.name,
            temperature: response.data.main.temp,
            forecast_min: response.data.main.temp_min,
            forecast_max: response.data.main.temp_max
        }
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
        throw error;
    }

}

exports.getCurrentWeather = async(city)=>{
      const response = await axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);

      return {
        city: response.data.name,
        temperature: response.data.main.temp
    }
} 

exports.getForecast = async (city) => {
    const response = await axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);

    const list = response.data.list;

    const temperatures = list.map(item => item.main.temp);
    return {
        forecast_min: Math.min(...temperatures),
        forecast_max: Math.max(...temperatures)
    }
}

