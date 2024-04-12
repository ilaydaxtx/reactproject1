import React from 'react';
import './TopCategories.scss';



const TopCategories = () => {
  return (
    <div className="top-categories">
      <h2>Top Categories</h2>
      <p className="description">
        Party we years to order allow asked of. We so opinio friends me message as delight.
      </p>
      <div className="category-container">
        <div className='c1-weapons-skulls'>
            <div className='weapons-container'>
                <button className='weapons-container-btn'>122</button>
                <h1>Weapons</h1>
                <p>Worefall</p>
            </div>
            
            <div className='skulls-container'>
                <button className='skulls-container-btn'>71</button>
                <h1>Skulls</h1>
                <p>Worefall</p>
            </div>

        </div>
        <div className='c2-statues'>
            <button className='statues-btn'>35</button>
            <h1>Statues</h1>
            <p>Worefall</p>
        </div>

        <div className='c3-keep-watches-furniture'>
            <div className='keep-container'>
                <button className='keep-btn'>413</button>
                <h1>Keep</h1>
                <p>Worefall</p>
            </div>
            <div className='watch-furniture-container'>
                <div className='watches-container'>
                    <button className='watch-btn'>98</button>
                    <h1>Watches</h1>
                    <p>Worefall</p>
                </div>
                <div className='furniture-container'>
                    <button className='furniture-btn'>812</button>
                    <h1>Furniture</h1>
                    <p>Worefall</p>
                </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default TopCategories;