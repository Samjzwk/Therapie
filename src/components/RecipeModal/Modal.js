import React, { useEffect, useState, Fragment } from 'react';
import Modal from 'react-modal';
import './Modal.scss';
import axios from 'axios';
import {getMeasure} from '../../utils/js/convertMeasure'

Modal.setAppElement('#therapie');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';

const JoinModal = ({ showModal, closeModal, idDrink }) => {

  const [informations, setInformation] = useState();

  useEffect(()=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    async function getRecipeInformation(){
      await axios
      .get(url)
      .then(
        response => {        
          setInformation(response.data.drinks)
        })
      .catch(
        error => console.error(error)
      );
    };
    getRecipeInformation();
  },[idDrink])

  const getIngredients = () => {
    let ingredients = []
    for(let i = 1; i <= 15; i++){
      //au vue de la conception de l'api, voici une solution permettant de récupérer et d'associer un ingrédient à sa mesure
      if(informations[0][`strIngredient${i}`]) ingredients.push({'name':[informations[0][`strIngredient${i}`]],'measure':informations[0][`strMeasure${i}`]})
    }
    return ingredients.map((ingredient,index)=>(
      <li key={index}>
        <span className="ingredient__mesure">{`${getMeasure(ingredient.measure)}`}</span><span> {`${ingredient.name}`}</span>
      </li>
    ));
  }

  return (
    <Fragment>
    {informations !== undefined &&
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Ingrédients & instructions"
        className="modal"
      >
      <div className='modal__picture'  style={{'backgroundImage':`url(${informations[0].strDrinkThumb})`}}></div>
      <div className="modal__body">
        <span className="modal__alcool">{informations[0].strAlcoholic}</span>
        <h2 className="modal__title">{informations[0].strDrink}</h2>
        <i className="modal__close fa fa-times" onClick={closeModal}></i>
        <ul className="modal__ingredients">
        {getIngredients()}
        </ul>
        <div className="modal__steps">
        <h4>Instructions</h4>
          <span>{informations[0].strInstructions}</span>
        </div>
      </div>
    </Modal>
    }
    </Fragment>
  );
};

export default JoinModal;
