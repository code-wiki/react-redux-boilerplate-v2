// src/reducers/index.js
import { combineReducers } from 'redux';
import { IncrementReducer } from './increment.reducer';

const rootReducer = combineReducers({
    CurrentCount: IncrementReducer,
});

export default rootReducer;
