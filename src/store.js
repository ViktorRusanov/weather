import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducer';
import {persistState, saveState} from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, persistState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState({
        favorite: store.getState().favorite
    });
});
