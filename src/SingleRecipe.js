import React from 'react';
import Nav from './components/Nav';

import RecipeHero from './components/RecipeHero';
import RecipeContent from './components/RecipeContent';
import Footer from './components/Footer';
import Helmet from 'react-helmet';

const SingleRecipe = () => {
  return (
    <>
      <Helmet>
        <title>{'Recipe | CookingSimple'}</title>
      </Helmet>
      <Nav />
      <main className='page'>
        <div className='recipe-page'>
          <RecipeHero />
          <RecipeContent />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleRecipe;
