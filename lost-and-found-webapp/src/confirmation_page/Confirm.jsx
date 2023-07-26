import "./page.css";
import gif from "./check.gif";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Confirm(props) {

  let navigate = useNavigate();

  const handleClick = () =>{
    navigate("/home");
    props.func(false);
  }

  return (
    <>
      <Button className="mb-4 position-absolute" variant="text" color="secondary" startIcon={<ArrowBackIcon />} onClick={handleClick} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" , color:"white", left:"20px", top:"30px"}}>Home</Button>

      <div className="claim-page">

        <div className="claim-left" style={{marginLeft:"80px"}}>
          <h2 className="claim-heading">Successfully Registered</h2>
          <p className="claim-para">You may claim your item from <span class="claim-span">Lost And Found Department</span></p>
        </div>


        <div className="claim-right">
          <img class="claim-img" src={gif} alt="gif" />
        </div>
      </div>
    </>
  )
}
