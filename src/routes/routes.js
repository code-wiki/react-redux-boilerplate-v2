import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/App';
import ErrorBoundary from '../containers/ErrorBoundary';

export default function routes() {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </Provider>
    );
}
