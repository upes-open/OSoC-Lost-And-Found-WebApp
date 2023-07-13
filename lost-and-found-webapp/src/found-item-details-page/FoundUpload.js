import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./found.css";
import image from "./bg.jpeg";
import Switch from 'react-switch';

const FoundUpload = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [place, setPlace] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [details, setDetails] = useState('');
  const [isIdentifiable, setIsIdentifiable] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsIdentifiable(checked);
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('date', date);
    formData.append('category', category);
    formData.append('subcategory', subcategory);
    formData.append('itemName', itemName);
    formData.append('place', place);
    formData.append('ownerName', ownerName);
    formData.append('details', details);
    formData.append('isIdentifiable', isIdentifiable);
    formData.append('itemImage', itemImage);

    try {
      await axios.post('http://localhost:5000/api/submitForm', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset form fields after successful submission
      setDescription('');
      setDate('');
      setCategory('');
      setSubcategory('');
      setItemName('');
      setItemImage(null);
      setPlace('');
      setOwnerName('');
      setDetails('');
      setIsIdentifiable(false);
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  useEffect(() => {
    document.body.style.background = `url(${image}) `;
    document.body.style.backgroundSize = 'cover';
    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (
    <>
      <h1>Found Item details</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="col-5">
          <label htmlFor="description">Description
            <input
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
          <label htmlFor="date">Date
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="col-3">
          <label htmlFor="place">Place you Found the Item
            <input
              type="text"
              id="place"
              placeholder='Enter the place you found the item'
              style={{ marginTop: "22px", paddingBottom: "15px" }}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="col-3">
          <label htmlFor="category">Category
            <select className='pb-1 pt-2'
              id="category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select category</option>
              <option value="cards">Cards</option>
              <option value="electronicDevices">Electronic Devices</option>
              <option value="books">Books</option>
              <option value="others">Others</option>
            </select>
          </label>
        </div>

        {category && (
          <div className="col-3">
            <label htmlFor="subcategory">Subcategory
              {category === 'cards' && (
                <select
                  id="subcategory"
                  value={subcategory}
                  className='pb-1 pt-2'
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="collegeIDCard">College ID Card</option>
                  <option value="ATMCard">ATM Card</option>
                  <option value="driversLicense">Driver's License</option>
                  <option value="aadharCard">Aadhar Card</option>
                  <option value="other">Any other card</option>
                </select>
              )}

              {category === 'electronicDevices' && (
                <select
                  id="subcategory"
                  value={subcategory}
                  className='pb-1 pt-2'
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="mobilePhone">Mobile Phones</option>
                  <option value="laptop">Laptop</option>
                  <option value="smartWatch">Smart Watch</option>
                  <option value="charger">Charger</option>
                  <option value="other">Any other electronic device</option>
                </select>
              )}

              {category === 'books' && (
                <select
                  id="subcategory"
                  value={subcategory}
                  className='pb-1 pt-2'
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="notebook">Notebooks/Registers</option>
                  <option value="book">Book</option>
                  <option value="novel">Novel</option>
                  <option value="other">Any other book</option>
                </select>
              )}

              {category === 'others' && (
                <select
                  id="subcategory"
                  className='pb-1 pt-2'
                  value={subcategory}
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="bottle">Bottles</option>
                  <option value="wallet">Wallets</option>
                  <option value="bag">Bags</option>
                  <option value="other">Any other item</option>
                </select>
              )}
            </label>
          </div>
        )}

        {subcategory === 'other' && (
          <div className="col-3">
            <label htmlFor="itemName">Name of Item
              <input
                type="text"
                id="itemName"
                style={{ marginTop: "22px", paddingBottom: "15px" }}
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        <div className="col-3">
          <label htmlFor="itemImage" type="file">Image
            <div>
              <input className='select pt-1'
                type="file"
                id="itemImage"
                onChange={(e) => setItemImage(e.target.files[0])}
                required
              />
            </div>
          </label>
        </div>

        <div class="col-4">
          <label>Item is Identifiable?
            <center style={{ position: "relative", marginBottom: "8px", paddingTop: "10px" }}>
              <Switch
                onChange={handleSwitchChange}
                checked={isIdentifiable}
                className="react-switch"
                id="itemIdentifiableSwitch"
              />
            </center>
          </label>
        </div>

        {isIdentifiable && (
          <>
            <div className="col-3">
              <label htmlFor="ownername">Owner Name
                <input
                  type="text"
                  id="ownerName"
                  value={ownerName}
                  placeholder="Enter owner name"
                  style={{ marginTop: "22px", paddingBottom: "15px" }}
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="col-3">
              <label htmlFor="anydetails">Any other details
                <input
                  type="text"
                  id="anydetails"
                  placeholder='Enter any other details'
                  style={{ marginTop: "22px", paddingBottom: "15px" }}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </label>
            </div>
          </>
        )}

        <div className='col-submit'>
          <button type="submit" className="submitbtn" >Submit</button>
        </div>
      </form>
    </>
  );
};

export default FoundUpload;
