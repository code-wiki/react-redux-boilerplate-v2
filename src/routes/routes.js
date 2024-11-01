import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeContextProvider } from './ThemeContext';
import Home from '../containers/App';
import ErrorBoundary from '../containers/ErrorBoundary';

export default function Root() {
    return (
        <ReduxProvider store={store}>
            <ThemeContextProvider>
                <ErrorBoundary>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </ErrorBoundary>
            </ThemeContextProvider>
        </ReduxProvider>
    );
}
