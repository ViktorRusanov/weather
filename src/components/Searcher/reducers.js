import {handleActions} from 'redux-actions';
import {clearSearchLocation, setSearchLocation} from './actions';

const initStateLocation = '';

export const searcherReducer = handleActions({
        [setSearchLocation]: (state, action) => action.payload,
        [clearSearchLocation]: () => initStateLocation
    },
    initStateLocation);
