import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('Claro');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'Claro' ? 'Oscuro' : 'Claro'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}