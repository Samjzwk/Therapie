import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../RecipeModal/Modal';
import { ReactComponent as BeerDivider } from '../../assets/beerDivider.svg'
import { ReactComponent as CocktailDivider } from '../../assets/cocktailDivider.svg'
import { ReactComponent as ShakeDivider } from '../../assets/shakeDivider.svg'
import SearchBar from '../Search/Search';
import './list.scss'

const List = React.memo(({recipesArray}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [searchList, setSearchList] = useState([]);

  let queryParams = useLocation(); 

  useEffect(()=>{
    setSearchList(recipesArray);
  },[recipesArray])

  const searchFunction = (value) => {
    const searchResult = recipesArray.filter(recipe=>{
      return recipe.strDrink.toLowerCase().includes(value);
    });
    setSearchList(searchResult);
  }

  const getRenderRecipe = (recipe) => {
    return (
        <li onClick={() => {setSelectedId(recipe.idDrink); setShowModal(true); }} className="recipe" key={recipe.idDrink}>
          <div className="recipe__picture" style={{ 'backgroundImage': `radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% ),
          url(${recipe.strDrinkThumb})`}}></div> {/*Ici on vien appliquer un style "dynamique" pour afficher l'image d'une recette, en plus de lui mettre un radial-gradient */}
          <p className="recipe__title">{recipe.strDrink}</p>
          <button className="recipe__button" ><i className="fa fa-angle-right" aria-hidden="true"></i></button>
        </li> // Lorsque l'on clique sur une recette de la liste, on vient ici modifier le state pour l'id selectionné et passé de false à true le state pour montrer la modal !
    )
  }

  const recipes = searchList.map((recipe) => getRenderRecipe(recipe));

  /**
   * Mieux de le faire avec le context api de React je trouve car il fait aussi partie du "theme", mais nous pouvons aussi l'utilisé de cette façons avec le hook useLocation
   * le hook useLocation afin de récupérer la catégorie actuel.
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
      <SearchBar searchTermFunction={searchFunction}/>
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
