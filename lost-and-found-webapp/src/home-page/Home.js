import React, { useEffect } from 'react';
import './home.css';
import image from './home1.png';
import { Button } from '@mui/material';

const HomePage = () => {

  const [text, setText] = React.useState('Discover the Lost');
  const taglineArr = ['Discover the Lost', 'Connect the Found'];
  let i = 0;

  useEffect(() => {
    document.body.style.background = "linear-gradient(to right top, rgb(101 173 191), rgb(237 242 243))";
    const intervalId = setInterval(() => {
      setText(taglineArr[i]);
      i = (i + 1) % taglineArr.length;
    }, 1400);

    return () => {
      document.body.style.background = null;
      clearInterval(intervalId);
    };

  }, []);

  return (
    <>
      <div style={{height:"100vh"}}>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-5 ps-5">
              <h1 className="display-3 pt-5 mt-5 ps-5"><span style={{ color: "#9C27B0" }}>hi, </span>Welcome!</h1>
              <p className="ps-5 respo changing-text" style={{ fontSize: "1.7rem", fontWeight: "bold", marginLeft: "80px" }}>{text} </p>
              <p className="ps-5 mt-3" style={{ fontSize: "1rem" }}>We help you find lost items and reunite them with their owners. Whether you've lost something valuable or found an item that belongs to someone else, we've got you covered. For more info you can checkout </p>
              <div className="d-flex justify-content-center">
                <Button href="/about" variant="contained" color="secondary" style={{ textTransform: "none", borderRadius: "20px", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>About Us</Button>            </div>
            </div>
            <div className="col-md-7 pt-5 d-flex flex-column align-items-center">
              <img className="img-fluid" style={{ width: "75%" }} src={image} alt="image" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomePage;
