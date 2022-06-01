import React from 'react';
import Helmet from 'react-helmet';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Recipes from './components/Recipes';
import TagContainer from './components/TagContainer';

const RecipesPage = ({ match }) => {
  console.log(match);
  return (
    <>
      <Helmet>
        <title>{'About | CookingSimple'}</title>
      </Helmet>
      <Nav />
      <main class='page'>
        <section class='recipes-container'>
          <TagContainer />
          <Recipes />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RecipesPage;
