import {handleAction, handleActions} from 'redux-actions';
import {setForecast, setLoadError, setWeather} from './actions';

const initialState = {};

export const forecastReducer = handleAction(
    setForecast,
    (state, action) => action.payload,
    initialState);

export const weatherReducer = handleActions({
    [setWeather]: (state, action) => action.payload
}, {});

export const errorReducer = handleActions({
    [setLoadError]: (state, action) => action.payload
}, false);