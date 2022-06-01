import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import '../css/normalize.css';

const RecipeHero = () => {
  return (
    <section className='recipe-hero'>
      <img
        src={require('../assets/recipes/recipe-4.jpeg')}
        className='img recipe-hero-img'
        alt=''
      />
      <article className='recipe-info'>
        <h2>Banana Pancakes</h2>
        <p>
          Shabby chic humblebrag banh mi bushwick, banjo kale chips meggings.
          Cred selfies sartorial, cloud bread disrupt blue bottle seitan.
          Dreamcatcher tousled bitters, health goth vegan venmo whatever street
          art lyft shabby chic pitchfork beard. Drinking vinegar poke tbh,
          iPhone coloring book polaroid truffaut tousled ramps pug trust fund
          letterpress. Portland four loko austin chicharrones bitters
          single-origin coffee. Leggings letterpress occupy pour-over.
        </p>
        <div className='recipe-icons'>
          <article>
            <i className='fas fa-clock'></i>
            <h5>prep time</h5>
            <p>30 min.</p>
          </article>
          <article>
            <i className='far fa-clock'></i>
            <h5>cook time</h5>
            <p>15 min.</p>
          </article>
          <article>
            <i className='fas fa-user-friends'></i>
            <h5>serving</h5>
            <p>6 servings</p>
          </article>
        </div>
        <p className='recipe-tags'>
          Tags : <Link to='/tag-template'>beef</Link>
          <Link to='/tag-template'>breakfast</Link>
          <Link to='/tag-template'>pancakes</Link>
          <Link to='/tag-template'>food</Link>
        </p>
      </article>
    </section>
  );
};

export default RecipeHero;
