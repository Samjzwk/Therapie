import React from 'react';
import { NavLink  } from "react-router-dom";
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <h1 className="header__title"><NavLink  to={`/`}>Therapie</NavLink></h1>
      <nav className="header__navigation">
        <ul>
          <li className="header__link"><NavLink to={`/recipes?cat=cocktail`}>Cocktails</NavLink></li>
          <li className="header__link"><NavLink to={`/recipes?cat=milk%20/%20float%20/%20shake`}>Shakes</NavLink></li>
          <li className="header__link"><NavLink to={`/recipes?cat=beer`}>Beers</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
