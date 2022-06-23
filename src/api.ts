import axios, { AxiosInstance, AxiosResponse } from 'axios';

const TIMEZONE_API_KEY = 'aNCKLnheRzVnQjLMTmDt';
const WEATHER_API_KEY = '9563608e31c6432d8d085340222006';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const client:AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`
});

export const getLocation = async () => {
  const response: AxiosResponse<any, any> = await axios.get(`https://timezoneapi.io/api/ip/?token=${TIMEZONE_API_KEY}`);

  return response.data
}

export const getForecast = async (city: string = 'London', aqi: boolean = false) => {
  const data = await client.get(`/forecast.json?key=${WEATHER_API_KEY}&q=${city}&aqi=${aqi ? 'yes': 'no'}`);
  console.log(data);
}
