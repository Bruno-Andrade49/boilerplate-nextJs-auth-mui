import React, { createContext, useState, ReactNode, useContext } from 'react';
import midnightShadowsTheme from 'theme/ThemeDark';
import crystalBreezeTheme from 'theme/ThemeLight';
import { ThemeProvider } from '@mui/material/styles';


export const CustomThemeContext = createContext<any | undefined>(undefined);

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<any>(crystalBreezeTheme);

  function mudarTema() {
    if (theme === crystalBreezeTheme) {
      setTheme(midnightShadowsTheme);
    } else {
      setTheme(crystalBreezeTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{ theme, mudarTema }}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
