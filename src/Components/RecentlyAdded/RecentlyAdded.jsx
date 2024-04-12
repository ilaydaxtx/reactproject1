import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './RecentlyAdded.scss'; 


const RecentlyAdded = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3001/items',
      method: 'GET',
      success: function(data) {
        setItems(data);
      },
      error: function(error) {
        console.log('Error fetching data: ', error);
      }
    });
  }, []);

  return (
    
    <div>
      <h1 className='recentlyadded'>Recently Added</h1>
      <div className="items-container">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <img src={item.imageUrl} alt={item.title} />
          <h3 className='item-title'>{item.title}</h3>
          <p className='item-year'>Year: {item.year} | Category: {item.category}</p>
          <div className='price-btn-container'>
            <p className="price">${item.price}</p>
            <button className="details-button">View Details</button>
          </div>
          <div className='item-bids-container'>
            <p className='item-bids'>{item.bids} bids so far.</p>
            <p className='item-bids2'>Bidding closes in {item.daysRemaining} Days</p>
          </div>
          
        </div>
      ))}
      </div>

     
    </div>
  );
};

export default RecentlyAdded;