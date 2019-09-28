import {createAction} from 'redux-actions';
import {ADD_FAVOURITES_CITY, CLEAR_FAVOURITES} from './constatnts';

export const addFavouritesLocation = createAction(ADD_FAVOURITES_CITY);
export const clearFavourites = createAction(CLEAR_FAVOURITES);