import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [themes, setThemes] = useState ([
        { themeName: 'light', syntax: '#555', ui: '#ddd', bg: '#eee' },
        { themeName: 'dark', syntax: '#ddd', ui: '#333', bg: '#555'}

    ]);
    const [currentTheme, setCurrentTheme] = useState ('light');

    toggleDarkLightTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    } 

    return (
        <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;
