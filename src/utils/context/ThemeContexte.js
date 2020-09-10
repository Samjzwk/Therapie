import React, {useState, useLayoutEffect} from 'react';

export const themes = {
 cocktail: '--backgroundTheme: #14434D',
 'milk / float / shake': '--backgroundTheme: #602642',
 beer: '--backgroundTheme: #582A00'
}; // object permettant de changer la couleur du theme, plus précisement de mettre une variable css global et de la changer celon la catégorie actuelle


export const ThemeContext = React.createContext({});


export function ThemeProvider(props) {
  const [theme, setTheme] = useState('cocktail');

  useLayoutEffect(() => {
    applyTheme(themes[theme]);
  // si le theme change, nous appliquons le changement de theme.
  }, [theme]);

  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme; // on vient ici renseigner la variable css globale pour l'utiliser par la suite: exemple dans le fichier list.scss ligne 41
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
