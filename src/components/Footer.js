import React from 'react';

const Footer = () => {
  function getDate() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <footer className='page-footer'>
      <p>
        &copy; <span id='date'>{getDate()} </span>
        <span className='footer-logo'>CookingSimple</span> Built by
        <button
          onClick={() => openInNewTab('https://naveen-metta.netlify.app/')}
          className='footer-button'
        >
          {' '}
          Naveen Metta
        </button>
      </p>
    </footer>
  );
};

export default Footer;
