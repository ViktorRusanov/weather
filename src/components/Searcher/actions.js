import {createAction} from 'redux-actions';
import {CLEAR_SEARCH_LOCATION, SET_SEARCH_LOCATION} from './constants';

export const setSearchLocation = createAction(SET_SEARCH_LOCATION);
export const clearSearchLocation = createAction(CLEAR_SEARCH_LOCATION);
