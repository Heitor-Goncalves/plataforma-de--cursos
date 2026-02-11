import React, { createContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => React.useContext(ThemeContext);

// Forçar modo escuro: útil quando queremos apenas o tema escuro ativo.
export const ThemeProvider = ({ children }) => {
  const isDarkMode = true;
  const toggleTheme = () => {
    // Intencionalmente vazio — tema fixo em dark mode
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="dark-mode">{children}</div>
    </ThemeContext.Provider>
  );
};