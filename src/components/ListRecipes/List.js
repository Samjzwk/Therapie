import React, { Fragment, useState } from 'react';
import Modal from '../RecipeModal/Modal';
import {useLocation} from "react-router-dom";
import { ReactComponent as BeerDivider } from '../../assets/beerDivider.svg'
import { ReactComponent as CocktailDivider } from '../../assets/cocktailDivider.svg'
import { ReactComponent as ShakeDivider } from '../../assets/shakeDivider.svg'
import './list.scss'

const List = React.memo(({recipesArray}) => {
  let queryParams = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const recipes = recipesArray.map((recipe) => {
    return (
    <li onClick={() => {setSelectedId(recipe.idDrink); setShowModal(true); }} className="recipe" key={recipe.idDrink}>
      <div className="recipe__picture" style={{ 'backgroundImage': `radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% ), url(${recipe.strDrinkThumb})`}}></div>
      <p className="recipe__title">{recipe.strDrink}</p>
      <button className="recipe__button" ><i className="fa fa-angle-right" aria-hidden="true"></i></button>
    </li>
  )});

  /**
   * better to do with context api of React, but here you can see how to use the useLocation hook of react-router-dom
  */
  const getShapeDivider = () => {
    const param = new URLSearchParams(queryParams.search).get('cat');
    let divider = null;
    switch (param) {
      case 'cocktail':
        divider = <CocktailDivider/>
        break;
      case 'beer':
        divider = <BeerDivider />
        break;
      default:
        divider = <ShakeDivider/>
        break;
    }
    return divider
  }

  return (
    <Fragment>
    <div className="recipes__container">
      <ul className="recipes__list">
        {recipes}
      </ul>
      <div className="custom__shape-divider">
        {getShapeDivider()}
      </div>
    </div>
    <Modal showModal={showModal} idDrink={selectedId} closeModal={() => setShowModal(false)} />
    </Fragment>
  );
})

export default List;
