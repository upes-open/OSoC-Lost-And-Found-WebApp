import React from 'react'
import './Login.css';
import logo from './lostfound1.jpg';
import { Button } from '@mui/material';

export default function Login(props) {

  return (
    <div className={`bdy ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
    <div className='row'>
        <div className='banner-ad col col-sm-6' style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>
          <h2 className='title'><span style={{color:'#9C27B0'}}>Lost</span>  & <span className='found'>Found</span></h2>
           <h1 className='title' style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>Welcome !</h1>
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
