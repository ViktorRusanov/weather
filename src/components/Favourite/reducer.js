import {handleActions} from 'redux-actions';
import {addFavouritesLocation, clearFavourites} from './actions';

export const initialState = [];

export const favouritesReducer = handleActions({
    [addFavouritesLocation]: (state, action) => ([...new Set([...state, action.payload])]),
    [clearFavourites]: () => initialState
}, initialState);