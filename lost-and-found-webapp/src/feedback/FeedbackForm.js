import React from 'react';
import './feedback.css';
import { Button, TextField } from '@mui/material';

const FeedbackForm = (props) => {
  const [details, setDetails] = React.useState({ email: "", feedback: "" });
  const host = "https://shiny-seal-loafers.cyclic.app";

  const onChange = async (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    // API call
    const url = `${host}/feedback`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: details.email, feedback: details.feedback })
    });

    const json = await response.json();
    console.log(json);
    setDetails({email:"", feedback:""});
  }

  return (
    <>
        <div className={`body ${props.theme === 'dark' ? 'dark-mode' : ''}`}></div>
          <div className="addnotes "  style={{ paddingTop: "50px" ,margin:"auto" }}>
            <div className=" right ps-5 pe-5 pt-4 mb-5" style={{backgroundColor: `${props.theme === 'dark' ? '#333' : ''}`, color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>
              <div className="d-flex justify-content-center mb-2">
                <h3 style={{ fontWeight: "bold", fontFamily: '"Mons", sans-serif' }}>Feedback Form</h3>
              </div>
              <p className="mb-4 text-center">Thank you for taking your time to provide feedback. We appreciate hearing from you and will review your comments carefully.</p>

              <form className={`feedback-form ${props.theme === 'dark' ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <p className='container' style={{ marginBottom: "6px" }}>Email</p>
                  <TextField variant="outlined" color="secondary" type="email" onChange={onChange} value={details.email} placeholder='Email' id="email" name="email"
                    InputProps={{
                      style: {
                        borderRadius: '10px',
                        color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`,
                      },
                    }} />
                </div>

                <h6 className="container mt-4" style={{ marginBottom: "-1px" }}>How would you rate us?</h6>
                <div className='container-star '>
                  <div className="star-widget">
                    <input type="radio" name="rate" id="rate-5" />
                    <label htmlFor="rate-5" className='fas fa-star' ></label>

                    <input type="radio" name="rate" id="rate-4" />
                    <label htmlFor="rate-4" className='fas fa-star'></label>

                    <input type="radio" name="rate" id="rate-3" />
                    <label htmlFor="rate-3" className='fas fa-star'></label>

                    <input type="radio" name="rate" id="rate-2" />
                    <label htmlFor="rate-2" className='fas fa-star'></label>

                    <input type="radio" name="rate" id="rate-1" />
                    <label htmlFor="rate-1" className='fas fa-star'></label>
                    <header></header>
                  </div>
                </div>

                <div className="my-3">
                  <p className="container" style={{ marginBottom: "6px" }}>Please share your feedback</p>
                  <TextField type="text" placeholder='Share you experience or suggestions' multiline rows={5} onChange={onChange} value={details.feedback} id="feedback" name="feedback" color="secondary" variant="outlined" required

                    InputProps={{
                      style: {
                        borderRadius: '20px',
                        color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`,
                      },

                    }} />

                </div>

                <Button type="submit" variant="contained" color="success" className="my-3 mb-4"style={{ textTransform: "none", borderRadius: "15px", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Submit</Button>
              </form>
            </div>
          </div>
  
    </>
  )
}

export default FeedbackForm
