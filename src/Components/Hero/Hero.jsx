import React from 'react'
import './Hero.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import Vazo from '../Assets/vazo1.png';



const Hero = () => {
  const data1 = [{"year": 1332}, {"Bids so far": 29}, {"origin": "China"}];
  return (
    <div className='Hero'>
      <div className='title-container'>
        <div className='title'>
          <h1>World's Biggest</h1>
        </div>
        <div className='title-2'>
          <h1>Antique Collection</h1>
        </div>
        <div className='text-container'>
          <p className='text'>from they fine john he give of rich he. They age and draw<br /> mrs. like. Improving end distruts may instantly was<br /> household applauded incommode</p>
        </div>
      </div>
      <div>
        <button className='dsc-btn'>Discover Now</button>
        <button className='icon-btn'><FontAwesomeIcon icon={faCircle} style={{ color: "#ff8400" }} size='xl' className='icon' /> Watch Video</button>
      </div>
      <div className='vazo-img'>
      <img src={Vazo}/>
      </div>
      <div className='bids-container'>
        <div>
          {data1.map((item, index) => (
            <div key={index}>
              {Object.entries(item).map(([key, value]) => (
                <div key={key}>
                  <h2  className='values-container' style={{color: "black"}}>{value}</h2>
                  <p className='keys-container' >{key}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className='year-btn'><FontAwesomeIcon icon={faLifeRing} style={{color: "#ff8400",}} /></button>
      <button className='bids-btn' ><FontAwesomeIcon icon={faTrophy} style={{color: "#ff8400",}} /></button>
      <button className='origin-btn'><FontAwesomeIcon icon={faBuilding} style={{color: "#ff8400",}} /></button>
    </div>
  )
}

export default Hero