import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Recipes from './components/Recipes';

const TagTemplate = () => {
  return (
    <>
      <Nav />
      <main className='page'>
        <div className='featured-recipes'>
          <h4>Beef</h4>
          <Recipes />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TagTemplate;
