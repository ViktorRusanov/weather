import {
    getForecastByCoordinatesRequest,
    getForecastByNameRequest,
    getWeatherByCoordinatesRequest,
    getWeatherByNameRequest
} from 'api';
import {createAction} from 'redux-actions';
import {LOAD_ERROR, SET_FORECAST, SET_WEATHER} from './constants';

export const setWeather = createAction(SET_WEATHER);
export const setForecast = createAction(SET_FORECAST);
export const setLoadError = createAction(LOAD_ERROR);

const requestWrapper = (request, action, dispatch) =>
    request
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(weather => dispatch(action(weather)))
        .then(() => dispatch(setLoadError(false)))
        .catch(() => dispatch(setLoadError(true)));

export const getForecastByName = (location) => (dispatch) =>
    requestWrapper(
        getForecastByNameRequest(location),
        setForecast,
        dispatch
    );

export const getForecastByCoordinates = (coordinates) => (dispatch) =>
    requestWrapper(
        getForecastByCoordinatesRequest(coordinates),
        setForecast,
        dispatch
    );

export const getWeatherByCoordinates = (coordinates) => (dispatch) =>
    requestWrapper(
        getWeatherByCoordinatesRequest(coordinates),
        setWeather,
        dispatch
    );

export const getWeatherByName = (searchValue) => (dispatch) =>
    requestWrapper(
        getWeatherByNameRequest(searchValue),
        setWeather,
        dispatch
    );
