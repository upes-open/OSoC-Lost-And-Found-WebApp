import React from 'react'
import './Login.css';
import logo from './lostfound1.jpg';
import { Button } from '@mui/material';

export default function Login() {
  return (
    <div className='bdy'>
    <div className='row'>
        <div className='banner-ad col col-sm-6'>
          <h2 className='title'><span style={{color:'#9C27B0'}}>Lost</span>  & <span>Found</span></h2>
           <h1 className='title'>Welcome !</h1>
           <p className="ps-5 mt-3" style={{ fontSize: "1rem",fontFamily: "'Poppins', sans-serif" }}>We help you find lost items and reunite them with their owners. Whether you've lost something valuable or found an item that belongs to someone else, we've got you covered. For more info you can checkout </p>
          <div className='login-btn'>
                <Button variant="contained" color="secondary" style={{ textTransform: "none", borderRadius: "10px", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Login with Outlook</Button>
          </div>
        </div>
        <div className='banner col col-sm-6'>
        <img src={logo} alt='logo' className='logo' />
      </div>
    </div>
   

    </div>
  )
}