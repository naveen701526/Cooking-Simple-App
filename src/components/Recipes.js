import React from 'react';
import Recipe from './Recipe';

const Recipes = () => {
  return (
    <div className='recipes-list'>
      <Recipe number='1' name='Carne Asada' desc='Prep : 15min | Cook : 5min' />
      <Recipe number='2' name='Greek Ribs' desc='Prep : 15min | Cook : 5min' />
      <Recipe
        number='3'
        name='Vegetable Soup'
        desc='Prep : 15min | Cook : 5min'
      />
      <Recipe
        number='4'
        name='Banana Pancakes'
        desc='Prep : 15min | Cook : 5min'
      />
    </div>
  );
};

export default Recipes;
