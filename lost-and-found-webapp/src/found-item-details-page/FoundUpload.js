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
      await axios.post('https://misty-rose-hare.cyclic.app/api/submitFoundItem', formData, {
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
              <option value="Cards">Cards</option>
              <option value="Electronic Devices">Electronic Devices</option>
              <option value="Books">Books</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>

        {category && (
          <div className="col-3">
            <label htmlFor="subcategory">Subcategory
              {category === 'Cards' && (
                <select
                  id="subcategory"
                  value={subcategory}
                  className='pb-1 pt-2'
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="College ID Card">College ID Card</option>
                  <option value="ATM Card">ATM Card</option>
                  <option value="Driver's License">Driver's License</option>
                  <option value="Aadhar Card">Aadhar Card</option>
                  <option value="Any other item">Any other card</option>
                </select>
              )}

              {category === 'Electronic Devices' && (
                <select
                  id="subcategory"
                  value={subcategory}
                  className='pb-1 pt-2'
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="Mobile Phone">Mobile Phones</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Smart Watch">Smart Watch</option>
                  <option value="Charger">Charger</option>
                  <option value="Any other item">Any other electronic device</option>
                </select>
              )}

              {category === 'Books' && (
                <select
                  id="subcategory"
                  value={subcategory}
                  className='pb-1 pt-2'
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="Notebook">Notebooks/Registers</option>
                  <option value="Book">Book</option>
                  <option value="Novel">Novel</option>
                  <option value="Any other item">Any other book</option>
                </select>
              )}

              {category === 'Others' && (
                <select
                  id="subcategory"
                  className='pb-1 pt-2'
                  value={subcategory}
                  onChange={handleSubcategoryChange}
                  required
                >
                  <option value="">Select subcategory</option>
                  <option value="Bottle">Bottles</option>
                  <option value="Wallet">Wallets</option>
                  <option value="Bag">Bags</option>
                  <option value="Any other item">Any other item</option>
                </select>
              )}
            </label>
          </div>
        )}

        {subcategory === 'Any other item' && (
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
