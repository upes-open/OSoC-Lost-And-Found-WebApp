import React from 'react'
import './UserReg-Page.css'
import logo from '../images/Logofornavbar.png'
import HelpUs from '../help-us-find-page/HelpUs'

export default function UserReg() {
  return (
    <div className='bdy'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='login-form'>
          <form>
              <h2>Register</h2>
              <div className='form-group'>
                <div className='InptGrp1'>
                  <div class="mb-3">
                    <label for="firstname" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" />
                  </div>
                    <div class="mb-3">
                      <label for="email1" class="form-label">Phone No</label>
                      <input type="number" class="form-control" id="email1" aria-describedby="emailHelp" />
                      {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
              </div>
              <div className='InptGrp2'>
                <div class="mb-3">
                  <label for="lastname" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="text" class="form-control" id="email" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <div class="PassInpts">
                  <div class="mb-3">
                    <label for="password1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password1" />
                  </div>
                  <div class="mb-3">
                    <label for="password2" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="password2" />
                  </div>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="Check1" />
              <label class="form-check-label" for="Check1">Terms & Conditions</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div className="login-link">
              <p>Already have an account? <a href="/login">Login</a></p>
            </div>
          </form>

        </div>
    </div>
  )
}
