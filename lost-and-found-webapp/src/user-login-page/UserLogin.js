import React from 'react'
import logo from '../images/Logofornavbar.png'
// import './UserLogin.css';

export default function UserLogin() {
  return (
    <div className='bdy'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='login-form'>
          <h2>Login</h2>
          <form>
          <div className='form-group'>
            <div className='InptGrp1'>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
          </div>
            <div className='InptGrp2'>
                <div class="mb-3">
                  <label for="email1" class="form-label">Phone No</label>
                  <input type="number" class="form-control" id="email1" aria-describedby="emailHelp" />
                  {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                  <label for="password1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password1" />
                </div>
            </div>
          </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="Check1" />
              <label class="form-check-label" for="Check1">Terms & Conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        </div>
    </div>
  )
}
