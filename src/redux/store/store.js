// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, thunk),
});

export default store;
