import React, {useState, useLayoutEffect} from 'react';

export const themes = {
 cocktail: '--backgroundTheme: #14434D',
 'milk / float / shake': '--backgroundTheme: #602642',
 beer: '--backgroundTheme: #582A00'
};


export const ThemeContext = React.createContext({});


export function ThemeProvider(props) {
  const [theme, setTheme] = useState('cocktail');

  useLayoutEffect(() => {
    applyTheme(themes[theme]);
  // if state changes, repaints the app
  }, [theme]);

  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme;
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
