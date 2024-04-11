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
    
    <div className="items-container">   
      {items.map(item => (
        <div key={item.id} className="item-card">
          <img src="/Components/Assets/chair.png" alt={item.title} />
          <h3>{item.title}</h3>
          <p>Year: {item.year} | Category: {item.category}</p>
          <p className="price">${item.price}</p>
          <p>{item.bids} bids so far. Bidding closes in {item.daysRemaining} Days</p>
          <button className="details-button">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;