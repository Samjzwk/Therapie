import React, { useEffect, useState, useContext } from 'react';
import Layout from "../components/layout/OnePage"
import ListRecipes from "../components/ListRecipes/List"
import {useLocation} from "react-router-dom";
import axios from 'axios';
import { ThemeContext } from '../utils/context/ThemeContexte';

function Recipes(props) {
  const [recipes, setRecipes] = useState([]); //initialisation du state et de sa fonction de modification.
  let queryParams = useLocation(); 
  const { setTheme } = useContext(ThemeContext); // on vient récupérer et utiliser la fonction de modification du theme du contexte pour changer celon la catégorie choisit


  useEffect(()=>{
    const param = new URLSearchParams(queryParams.search).get('cat'); // on vient utiliser le hook useLocation de react-router-dom afin de récuperer la catégorie en cours que contient l'url
    setTheme(param);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
    async function getRecipes(){
      await axios
      .get(url)
      .then(
        response => setRecipes(response.data.drinks) //on vient stocker la réponse api dans le state déclarer plus haut
        )
      .catch(
        error => console.error(error)
      );
    };
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams.search]) // ici useEffect s'éxécutera de nouveau si une des variables présentes dans le tableau des dépendances changent

  return (
    <Layout>
      <ListRecipes recipesArray={recipes} />
    </Layout>
  );
}

export default Recipes;
