const API_KEY = '8c6a659a431a792c4748b2599281a5fe';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getWeatherByNameRequest = (query) =>
    fetch(`${BASE_URL}weather?q=${query}&&units=metric&appid=${API_KEY}`);

export const getWeatherByCoordinatesRequest = ({lat, lon}) =>
    fetch(`${BASE_URL}weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

export const getForecastByNameRequest = (query) =>
    fetch(`${BASE_URL}forecast?q=${query}&units=metric&appid=${API_KEY}`);

export const getForecastByCoordinatesRequest = ({lat, lon}) =>
    fetch(`${BASE_URL}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

export const getIconUrl = (icon) =>
    `http://openweathermap.org/img/wn/${icon}@2x.png`;