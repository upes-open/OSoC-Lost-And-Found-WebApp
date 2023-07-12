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
        <div className='login'>
          <h2>Sign Up Here</h2>
          <div className='form'>
          <form>
              <div>
                    <label for='firstname'>First Name:</label>
                    <br/>
                    <input type='text' className='inpt' name='username' id='firstname' placeholder='firstname' required/>
                </div>
                    <div>
                    <label for='sname'>Secon Name:</label>
                    <br/>
                    <input type='text' className='inpt'  name='sname' id='sname' required/>
                </div>
                <div>
                    <label for='email'>Email:</label>
                    <br/>
                    <input type='email'  className='inpt' name='email' id='email' required/>
                </div>
                <div>
                    <label for='phoneNo'>Phone No:</label>
                    <br/>
                    <input type='tel' className='inpt' name='phoneNo' id='phoneNo ' required/>
                </div>
                <div>
                  <input type='checkbox' /> Terms & Conditions
                </div>
                  <button type='submit'>SUBMIT</button>

                <div className='loginAlt'>
                   <p>Already have an account? <a href='/login'>Login</a></p>
                </div>
          </form>
        
          </div>
        </div>
    </div>
  )
}
