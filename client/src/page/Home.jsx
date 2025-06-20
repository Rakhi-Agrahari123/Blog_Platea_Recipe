import React from 'react';
import Hero from '../components/Hero';
import Rating_FoodView from '../utility/Rating_FoodView';
import Recipes from '../components/Recipes';
import FoodTypes from '../components/FoodTypes';
import RecipeMenu from '../components/RecipeMenu';


const Home = () => {
  return (
    <>
      <Hero />
      <RecipeMenu />
      <Rating_FoodView />
      <Recipes />
      <FoodTypes />
    </>
  )
}

export default Home;