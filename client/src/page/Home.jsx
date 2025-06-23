import Hero from '../components/Hero';
import Rating_FoodView from '../utility/Rating_FoodView';
import Recipes from '../components/Recipes';
import FoodTypes from '../components/FoodTypes';
import RecipeMenu from '../components/RecipeMenu';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    // once: true,     // whether animation should happen only once
  });
}, []);


  return (
    <>
      {/* <Hero />
      <RecipeMenu />
      <Rating_FoodView />
      <Recipes />
      <FoodTypes /> */}

      <Hero data-aos="fade-up" />
<RecipeMenu data-aos="fade-left" />
<Rating_FoodView data-aos="zoom-in" />
<Recipes data-aos="fade-right" />
<FoodTypes data-aos="fade-up" />
    </>
  )
}

export default Home;