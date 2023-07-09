import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HelpUsFind = () => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await axios.get('/lostItems');
        setLostItems(response.data);
      } catch (error) {
        console.error('Error fetching lost items:', error);
      }
    };

    fetchLostItems();
  }, []);

  return (
    <div className="help-us-find">
      <style>
        {`
          .help-us-find {
            padding: 20px;
          }

          .help-us-find__title {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .help-us-find__items {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .help-us-find__item {
            border: 1px solid #ccc;
            padding: 10px;
          }

          .help-us-find__item-image {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
            margin-bottom: 10px;
          }

          .help-us-find__item-title {
            font-size: 18px;
            margin-bottom: 10px;
          }

          .help-us-find__item-description {
            margin-bottom: 10px;
          }

          .help-us-find__item-button {
            display: inline-block;
            background-color: #f5f5f5;
            color: #333;
            padding: 5px 10px;
            border-radius: 5px;
            text-decoration: none;
          }
        `}
      </style>
      <h1 className="help-us-find__title">Help Us Find</h1>
      <div className="help-us-find__items">
        {lostItems.length > 0 ? (
          lostItems.map((item) => (
            <div key={item._id} className="help-us-find__item">
              {item.image && (
                <img src={item.image} alt={item.title} className="help-us-find__item-image" />
              )}
              <h3 className="help-us-find__item-title">{item.title}</h3>
              <p className="help-us-find__item-description">{item.description}</p>
              <Link to={`/report-found/${item._id}`} className="help-us-find__item-button">
                REPORT AS FOUND
              </Link>
            </div>
          ))
        ) : (
          <p>No lost items found.</p>
        )}
      </div>
    </div>
  );
};

export default HelpUsFind;
