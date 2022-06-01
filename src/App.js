import React from 'react';
import './css/main.css';
import './css/normalize.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TagContainer from './components/TagContainer';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import About from './About';
import Tags from './Tags';
import Contact from './Contact';
import Helmet from 'react-helmet';
import SingleRecipe from './SingleRecipe';
import RecipesPage from './RecipesPage';
import TagTemplate from './TagTemplate';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Helmet>
                  <title>{'CookingSimple | Home'}</title>
                </Helmet>
                <Nav />
                <main className='page'>
                  <Hero />
                  <section className='recipes-container'>
                    <TagContainer />
                    <Recipes />
                  </section>
                </main>
                <Footer />
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/recipes/:id' element={<SingleRecipe />} />
          <Route path='/tag-template' element={<TagTemplate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
