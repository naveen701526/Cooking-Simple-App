import React from 'react';
import Helmet from 'react-helmet';
import Footer from './components/Footer';
import Nav from './components/Nav';
import TagLists from './components/TagLists';

const Tags = () => {
  return (
    <>
      <Helmet>
        <title>{'Tags | CookingSimple'}</title>
      </Helmet>
      <Nav />
      <TagLists />
      <Footer />
    </>
  );
};

export default Tags;
