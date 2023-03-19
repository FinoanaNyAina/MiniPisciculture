import React, { createContext, useState } from 'react';

// Création d'un contexte
const ThemeContext = createContext('light');

// Fournisseur de contexte
function ThemeProvider(props) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// Composant consommateur de contexte
function ThemeButton() {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => (
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

// Composant consommateur de contexte
function ThemeDisplay() {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => (
                <div>
                    The current theme is: {theme}
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

// Composant parent qui utilise le fournisseur de contexte et les composants consommateurs
function App() {
    return (
        <ThemeProvider>
            <div>
                <h1>Theme Example</h1>
                <ThemeButton />
                <ThemeDisplay />
            </div>
        </ThemeProvider>
    );
}

export default App;
