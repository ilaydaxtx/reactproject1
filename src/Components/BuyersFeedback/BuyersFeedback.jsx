import React from 'react'
import './BuyersFeedback.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BuyersFeedback = () => {
  return (
    <div className='fdbk-container'>
        <div className='angel-container'>
        </div>
        <div className='fdbk'>
            <h1>Buyer's Feedback</h1>
            <p>Whoe front da of piate heard ah ought. His defective <br />
                nor convinced residense won. Conenction has put <br />
                impossible own apartments boisterous.</p>
            <button className='user-btn'><FontAwesomeIcon icon={faIdBadge} style={{color: "#ff8400",}} size='xl' /></button>
            <h2>Selena Hakim</h2>
            <h3>UI Designer</h3>
            <div className='stars'>
                <button className='star'><FontAwesomeIcon icon={faStar} style={{color: "#ff8400",}} /></button>
                <button className='star'><FontAwesomeIcon icon={faStar} style={{color: "#ff8400",}} /></button>
                <button className='star'><FontAwesomeIcon icon={faStar} style={{color: "#ff8400",}} /></button>
                <button className='star'><FontAwesomeIcon icon={faStar} style={{color: "#ff8400",}} /></button>
                <button className='star'><FontAwesomeIcon icon={faStar} style={{color: "#ff8400",}} /></button>
            </div>
        </div>

    </div>
  )
}

export default BuyersFeedback