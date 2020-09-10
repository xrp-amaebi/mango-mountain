import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import platformReducer from '../reducers/platform';
import filtersReducer from '../reducers/filters';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default () => {
    const store = createStore(
        combineReducers({
            platform: platformReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};