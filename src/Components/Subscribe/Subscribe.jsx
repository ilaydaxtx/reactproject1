import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import './Subscribe.scss';

const Subscribe = () => {
  return (
    <div className='sub-container'>
      <div className="image-wrapper">
        <img src='baimmegafon.png' alt="Subscribe" />
      </div>
      <div className="content">
        <h1>Subscribe to our Newsletter</h1>
        <h4>Receive latest news, updates, and many other things <br />every week.</h4>
        <input className='email' type='form' placeholder='Enter your email address' style={{ textAlign: 'left' }} />
        <button className='email-icon'><FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ff8400" }} /></button>
      </div>
    </div>
  );
};

export default Subscribe;
