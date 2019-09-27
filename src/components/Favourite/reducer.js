import {handleActions} from 'redux-actions';
import {addFavouriteLocation, clearFavourites} from './actions';

export const initialState = ['Москва', 'краснодар'];

export const favouriteReducer = handleActions({
    [addFavouriteLocation]: (state, action) => ([...new Set([...state, action.payload])]),
    [clearFavourites]: () => initialState
}, initialState);