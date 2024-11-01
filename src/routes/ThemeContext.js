import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const ThemeContextUpdate = createContext();

export function UseTheme() {
    return useContext(ThemeContext);
}
export function UseThemeUpdate() {
    return useContext(ThemeContextUpdate);
}

export function ThemeContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((prevState) => !!!prevState);

    return (
        <ThemeContext.Provider value={darkMode}>
            <ThemeContextUpdate.Provider value={toggleDarkMode}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    );
}
