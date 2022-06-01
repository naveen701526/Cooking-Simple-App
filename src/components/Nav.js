import React, { useState } from 'react';

import { Link } from 'react-router-dom';
const Nav = () => {
  const [links, setLinks] = useState(false);
  function toggleClass() {
    if (!links) setLinks(true);
    else setLinks(false);
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='nav-logo'>
            <img src={require('../assets/logo.png')} alt='simply recipes' />
          </Link>
          <button onClick={toggleClass} className={`nav-btn btn`}>
            <i className='fas fa-align-justify'></i>
          </button>
        </div>
        <div className={`nav-links ${links ? '' : 'show-links'}`}>
          <Link to='/' className='nav-link'>
            home
          </Link>
          <Link to='/about' className='nav-link'>
            about
          </Link>
          <Link to='/tags' className='nav-link'>
            tags
          </Link>
          <Link to='/recipes' className='nav-link'>
            recipes
          </Link>

          <div className='nav-link contact-link'>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
