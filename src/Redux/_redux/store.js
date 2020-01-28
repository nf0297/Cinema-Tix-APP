import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import ReducerMovie from '../_reducers/ReducerMovie';

const middlewares = [logger, promiseMiddleware];

const reducers = combineReducers ({
    ReducerMovie
});

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;