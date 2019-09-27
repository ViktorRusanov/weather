import {createAction} from 'redux-actions';
import {ADD_FAVOURITE_CITY, CLEAR_FAVOURITES} from './constatnts';

export const addFavouriteLocation = createAction(ADD_FAVOURITE_CITY);
export const clearFavourites = createAction(CLEAR_FAVOURITES);