import React from 'react'
import './Navbar.scss'



const Navbar = () => {
  return (
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
        <button className='button'>Our Collections</button>
            

        
    </div>
  )
}

export default Navbar
