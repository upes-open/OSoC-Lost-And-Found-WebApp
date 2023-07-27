import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./category.css";
import image from './bg.jpg'
import dark from './dark.jpg';
import books from './main-category/books.jpg';
import devices from './main-category/devices.jpg';
import cards from './main-category/cards.jpg';
import others from './main-category/others.jpg';


const CategorySelection = (props) => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { name: 'Cards', image: cards, subcategories: ['College ID Card', 'ATM Card', "Driver's License", 'Aadhar Card', 'Any Other Card'] },
    { name: 'Books', image: books, subcategories: ['Notebook', 'Book', 'Novel', 'Any Other Book'] },
    { name: 'Electronic Devices', image: devices, subcategories: ['Mobile Phone', 'Laptop', 'Smart Watch', 'Charger', 'Any Other Device'] },
    { name: 'Others', image: others, subcategories: ['Bottle', 'Wallet', 'Bag', 'Any other Item'] },
  ];

  const handleSubcategorySelect = (subcategory) => {
    navigate(`/items/${subcategory}`);
  };

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  useEffect(() => {
    if (props.theme !== 'dark') {
      document.body.style.background = `url(${image}) `;
      document.body.style.backgroundSize = 'cover';
    }
    else {
      document.body.style.background = `url(${dark}) `;
      document.body.style.backgroundSize = 'cover';
    }

    return () => {
      document.body.style.background = null;
    };
  }, [props.theme]);

  return (
    <>
      <div style={{ marginBottom: '150px'}}>
        <h1 className='text-center pt-5' style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>Select A Category</h1>
        <div className="category-blocks">
          {categories.map((category) => (
            <div
              key={category.name}
              className={'category-block'}
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundImage: `url(${category.image})`, backgroundSize: "cover" }}
            >
              <div className="category-overlay">
                {hoveredCategory === category.name ? (
                  <div className="subcategory-buttons">
                    {category.subcategories.map((subcategory) => (
                      <Button
                        key={subcategory}
                        variant="contained"
                        color="secondary"
                        style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", borderRadius: "10px" }}
                        onClick={() => handleSubcategorySelect(subcategory)}
                      >
                        {subcategory}
                      </Button>
                    ))}
                  </div>
                ) :
                  (category.name)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySelection;
