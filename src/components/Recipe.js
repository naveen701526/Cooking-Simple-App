import React from 'react';
import '../css/main.css';
import { Link } from 'react-router-dom';
const Recipe = ({ number, name, desc }) => {
  return (
    <Link to={`/recipes/${number}`} className='recipe'>
      <img
        src={require(`../assets/recipes/recipe-${number}.jpeg`)}
        className='img recipe-img'
        alt=''
      />
      <h5>{name}</h5>
      <p>{desc}</p>
    </Link>
  );
};

export default Recipe;
