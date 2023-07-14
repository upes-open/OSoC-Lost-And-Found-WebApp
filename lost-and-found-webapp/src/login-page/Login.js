import React from 'react'
import './Login.css';
import logo from './lost-and-found.jpg';

export default function Login() {
  return (
    <div className='bdy'>
    <div className='banner'>
      <img src={logo} alt='logo' className='logo' />
    </div>
    <div className='login-form'>
      <h1 className='login-title'>Login to continue</h1>
      <div className='form'>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="check1" />
            <label class="form-check-label" for="check1">Remember me</label>
          </div>
          <button type="submit" class="submit-btn">Submit</button>

          <div className="alt">
            <p>Or login with</p>
            <div className="alt-btns">
              <button className="alt-btn1"><i class="fab fa-facebook"></i></button>
              <button className="alt-btn2"><i class="fab fa-twitter"></i></button>
          </div>
          </div>

      </div>
    </div>

{/* 
    <div class="container">
      <div class="row">
        <div class="col-sm-10 banner">
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div class="col-sm-2 login-form">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="check1" />
              <label class="form-check-label" for="check1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div> */}



    </div>
  )
}
