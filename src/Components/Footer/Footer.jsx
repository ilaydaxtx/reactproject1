import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
        <div className='navbar'>
        <div className='nav-head'>
            <h5><b>Siboria</b></h5>
            <p className='orange-dot'>.</p>
        </div>
        <ul className='nav-menu'>
            <li className='nav-item-active'>Home</li>
            <li className='nav-item'>Collections</li>
            <li className='nav-item'>How We Collect</li>
            <li className='nav-item'>Sell An Antique</li>
            <li className='nav-item'>Blog</li>
        </ul>
        <button className='socials1'><FontAwesomeIcon icon={faFacebook} /></button>
        <button className='socials1'><FontAwesomeIcon icon={faTwitter} /></button>
        <button className='socials1'><FontAwesomeIcon icon={faGooglePlusG} /></button>
        </div>
    </div>
  )
}

export default Footer