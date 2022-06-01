import React from 'react';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Helmet from 'react-helmet';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>{'Contact | CookingSimple'}</title>
      </Helmet>
      <Nav />
      <main className='page'>
        <section className='contact-container'>
          <ContactInfo />
          <ContactForm />
        </section>
        <section className='featured-recipes'>
          <h5 className='featured-title'>Look At This Awesomesouce!</h5>
          <div class='recipes-list'>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
