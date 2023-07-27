import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './lost.css';
import image from './bg.jpeg';
import dark from './darkbg.jpg';

const LostUpload = (props) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [sapId, setSapId] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [place, setPlace] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('date', date);
    formData.append('phone', phone);
    formData.append('name', name);
    formData.append('sapId', sapId);
    formData.append('category', category);
    formData.append('subcategory', subcategory);
    formData.append('itemName', itemName);
    formData.append('itemImage', itemImage);
    formData.append('place', place);

    try {
      await axios.post('https://lost-and-found.cyclic.app/api/submitLostItem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset form fields after successful submission
      setDescription('');
      setDate('');
      setPhone('');
      setName('');
      setSapId('');
      setCategory('');
      setSubcategory('');
      setItemName('');
      setItemImage(null);
      setPlace('');
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubcategory('');
    setItemName('');
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
    if (e.target.value === 'other') {
      setItemName('');
    }
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

  const renderSubcategoryOptions = () => {
    switch (category) {
      case 'Cards':
        return (
          <select style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
            id="subcategory"
            value={subcategory}
            className="pb-1 pt-2"
            onChange={handleSubcategoryChange}
            required
          >
            <option value="">Select subcategory</option>
            <option value="College ID Card">College ID Card</option>
            <option value="ATM Card">ATM Card</option>
            <option value="Driver's License">Driver's License</option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="other">Any other card</option>
          </select>
        );
      case 'Electronic Devices':
        return (
          <select style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
            id="subcategory"
            value={subcategory}
            className="pb-1 pt-2"
            onChange={handleSubcategoryChange}
            required
          >
            <option value="">Select subcategory</option>
            <option value="Mobile Phone">Mobile Phones</option>
            <option value="Laptop">Laptop</option>
            <option value="Smart Watch">Smart Watch</option>
            <option value="Charger">Charger</option>
            <option value="other">Any other electronic device</option>
          </select>
        );
      case 'Books':
        return (
          <select style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
            id="subcategory"
            value={subcategory}
            className="pb-1 pt-2"
            onChange={handleSubcategoryChange}
            required
          >
            <option value="">Select subcategory</option>
            <option value="Notebook">Notebooks/Registers</option>
            <option value="Book">Book</option>
            <option value="Novel">Novel</option>
            <option value="other">Any other book</option>
          </select>
        );

      case 'Others':
        return (
          <select style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
            id="subcategory"
            className="pb-1 pt-2"
            value={subcategory}
            onChange={handleSubcategoryChange}
            required
          >
            <option value="">Select subcategory</option>
            <option value="Bottle">Bottles</option>
            <option value="Wallet">Wallets</option>
            <option value="Bag">Bags</option>
            <option value="other">Any other item</option>
          </select>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <h1 style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>Lost Item details</h1>

      <form style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}` , marginBottom: '150px'}} onSubmit={handleFormSubmit}>
        <div className="col-5">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="description">
            Description
            <input style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
              type="text"
              id="description"
              value={description}
              placeholder="Enter description of the item"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="col-4">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="date">
            Date
            <input style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="col-3">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="phone">
            Phone No.
            <input style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
              type="tel"
              id="phone"
              value={phone}
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="col-3">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="name">
            Name
            <input style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="col-3">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="sapId">
            SAP ID
            <input style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
              type="text"
              id="sapId"
              value={sapId}
              placeholder="Enter your SAP ID"
              onChange={(e) => setSapId(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="col-3">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="category">
            Category
            <select style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
              className="pb-1 pt-2"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select category</option>
              <option value="Cards">Cards</option>
              <option value="Electronic Devices">Electronic Devices</option>
              <option value="Books">Books</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>

        {category && (
          <div className="col-3">
            <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="subcategory">
              Subcategory
              {renderSubcategoryOptions()}
            </label>
          </div>
        )}

        {subcategory === 'other' && (
          <div className="col-3">
            <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="itemName">
              Name of Item
              <input 
                type="text"
                id="itemName"
                style={{ marginTop: '22px', paddingBottom: '15px' , backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}}
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        <div className="col-3">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="itemImage" type="file">
            Image
            <div>
              <input style={{backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`,}}
                className="select pt-1"
                type="file"
                id="itemImage"
                onChange={(e) => setItemImage(e.target.files[0])}
              />
            </div>
          </label>
        </div>

        <div className="col-3">
          <label style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}} htmlFor="place">
            Place you Lost the Item
            <input 
              type="text"
              id="place"
              placeholder="Enter the place you lost the item"
              style={{ marginTop: '22px', paddingBottom: '15px' , backgroundColor: `${props.theme === 'dark' ? 'rgb(74 72 72)' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </label>
        </div>

        <div className="col-submit">
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LostUpload;
