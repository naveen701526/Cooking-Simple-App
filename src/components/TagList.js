import React from 'react';
import '../css/main.css';
import '../css/normalize.css';
import { Link } from 'react-router-dom';

const TagList = ({ name, number }) => {
  return (
    <>
      <Link to='/tag-template' className='tag'>
        <h5>{name}</h5>
        <p>{number} recipe</p>
      </Link>
    </>
  );
};

export default TagList;
