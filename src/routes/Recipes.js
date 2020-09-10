import React, { useEffect, useState, useContext } from 'react';
import Layout from "../components/layout/OnePage"
import ListRecipes from "../components/ListRecipes/List"
import {useLocation} from "react-router-dom";
import axios from 'axios';
import { ThemeContext } from '../utils/context/ThemeContexte';

function Recipes(props) {
  const [recipes, setRecipes] = useState([]);
  let queryParams = useLocation();
  const { setTheme } = useContext(ThemeContext);


  useEffect(()=>{
    const param = new URLSearchParams(queryParams.search).get('cat');
    setTheme(param);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
    async function getRecipes(){
      await axios
      .get(url)
      .then(
        response => setRecipes(response.data.drinks)
        )
      .catch(
        error => console.error(error)
      );
    };
    getRecipes();
  }, [queryParams.search, setTheme])

  return (
    <Layout>
      <ListRecipes recipesArray={recipes} />
    </Layout>
  );
}

export default Recipes;
