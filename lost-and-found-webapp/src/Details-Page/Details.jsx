import React, { useState } from 'react';
import './styles.css';
import { FaUserAlt, FaEnvelope, FaCodeBranch, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const Details = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    sapId: '',
    branch: '',
    year: '',
    contactNumber: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  console.log(formValues);

  return (
    
    <div class="container">
  <form action="#">
  <div class="text">
    User Details Form
  </div>
    <div class="form-row">
    <div class="input-data">
  <input type="text" required onChange={handleChange} name='name' />
  <div class="underline"></div>
  <label for="">
    <span class="input-icon"><FaUserAlt /></span>
    Name
  </label>
</div>
      <div class="input-data">
        <input type="text" required onChange={handleChange} name='email' />
        <div class="underline"></div>
        <label for="">
          <span className='input-icon'><FaEnvelope /></span>
          Email
          </label>
      </div>
      <div class="input-data">
        <input type="text" required name='sapId' onChange={handleChange}/>
        <div class="underline"></div>
        <label for="">
          SAP ID</label>
      </div>
      <div class="input-data">
        <input type="text" required name='branch' onChange={handleChange} />
        <div class="underline"></div>
        <label for="">
          <span className='input-icon'> <FaCodeBranch /> </span>
           Branch</label>
      </div>
      <div class="input-data">
        <input type="text" required name='year'  onChange={handleChange}  />
        <div class="underline"></div>
        <label for=""> 
        <span class='input-icon'> <FaCalendarAlt/> </span>
        Year</label>
      </div> 
      <div class="input-data">
        <input type="text" required name='contactNumber'  onChange={handleChange}  />
        <div class="underline"></div>
        <label for="">
          <span class='input-icon'><FaPhoneAlt /></span>
          Contact Number</label>
      </div> 
      <div className='date-input'>
      <label for="">Date of Claiming Item</label>
        <input type="date" required name='date'  onChange={handleChange}  />       
      </div> 
      <div>
  <button type="submit" class="gradient-button" onClick={handleSubmit}>
    Submit
  </button>
</div>
       </div>
  </form>
</div>
  );
};

export default Details;
