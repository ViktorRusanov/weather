import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {initialState, rootReducer} from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);

    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // die
    }
};
const persistFavorite = loadState();
export const store = createStore(rootReducer, persistFavorite, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState({
        favorite: store.getState().favorite
    });
});
