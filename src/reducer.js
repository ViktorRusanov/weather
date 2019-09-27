import { combineReducers } from 'redux'
import {searcherReducer, weatherReducer} from './components/Searcher';
import {favouriteReducer} from './components/Favourite/reducer';
import {forecastReducer, errorReducer} from './components/Widgets/reducers';

export const rootReducer = combineReducers({
    searchLocation: searcherReducer,
    weather: weatherReducer,
    forecast: forecastReducer,
    favouriteList: favouriteReducer,
    error: errorReducer
});