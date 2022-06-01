import React from 'react';
import '../css/main.css';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <section className='about-page'>
      <article>
        <h2>I'm baby coloring book poke taxidermy</h2>
        <p>
          Taxidermy forage glossier letterpress heirloom before they sold out
          you probably haven't heard of them banh mi biodiesel chia.
        </p>
        <p>
          Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.
        </p>
        <Link to='/contact' className='btn'>
          contact
        </Link>
      </article>

      <img
        src={require('../assets/about.jpeg')}
        alt='Person Pouring Salt in Bowl'
        className='img about-img'
      />
    </section>
  );
};

export default Article;
