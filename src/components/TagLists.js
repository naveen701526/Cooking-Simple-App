import React from 'react';
import '../css/main.css';
import '../css/normalize.css';
import TagList from './TagList';
const TagLists = () => {
  return (
    <main className='page'>
      <section className='tags-wrapper'>
        <TagList name='Beef' number='1' />
        <TagList name='Breakfast' number='2' />
        <TagList name='Carrots' number='3' />
        <TagList name='Dinner' number='4' />
        <TagList name='Food' number='1' />
      </section>
    </main>
  );
};

export default TagLists;
