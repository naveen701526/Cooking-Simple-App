import React from 'react';

const ContactForm = () => {
  return (
    <article>
      <form className='form contact-form'>
        <div className='form-row'>
          <label html='name' className='form-label'>
            your name
          </label>
          <input type='text' name='name' id='name' className='form-input' />
        </div>
        <div className='form-row'>
          <label html='email' className='form-label'>
            your email
          </label>
          <input type='text' name='email' id='email' className='form-input' />
        </div>
        <div className='form-row'>
          <label html='message' className='form-label'>
            message
          </label>
          <textarea
            name='message'
            id='message'
            className='form-textarea'
          ></textarea>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </article>
  );
};

export default ContactForm;
