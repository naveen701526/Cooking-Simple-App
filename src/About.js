import React from 'react';
import './css/main.css';
import Helmet from 'react-helmet';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Article from './components/Article';
import Recipe from './components/Recipe';
import Footer from './components/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>{'About | CookingSimple'}</title>
      </Helmet>
      <Nav />
      <main className='page'>
        <Article />
        <h5 className='featured-title'>Look At This Awesomesouce!</h5>
        <div className='recipes-list'>
          <Recipe
            number='1'
            name='Carne Asada'
            desc='Prep : 15min | Cook : 5min'
          />
          <Recipe
            number='2'
            name='Greek Ribs'
            desc='Prep : 15min | Cook : 5min'
          />
          <Recipe
            number='3'
            name='Vegetable Soup'
            desc='Prep : 15min | Cook : 5min'
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
