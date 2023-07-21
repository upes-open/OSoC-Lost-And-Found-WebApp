import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import "./helpUs.css"
import no_image from "./no-image.png";
import loading from "./loading.gif";
import { Link } from "react-router-dom";
import dark from "./dark.jpg";



const HelpUs = (props) => {

  const [fetched, setFetched] = useState(false);
  const [lostItems, setItems] = useState([]);
  const host = "https://shiny-seal-loafers.cyclic.app";
  const [spinner, setSpinner] = React.useState(true);

  // API call
  const url = `${host}/getLostItems`;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const json = await response.json();
        setItems(json);
        console.log(json)
        setFetched(true);

      } catch (error) {
        console.log(error.message);
      }
      finally {
        setSpinner(false); // Hide the spinner after data is fetched
      }
    }
    fetchData();
  }, [url]);


  useEffect(() => {
    if (props.theme === 'dark') {
      document.body.style.backgroundImage = `url(${dark})`;
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundImage = 'linear-gradient(to right top, rgb(101 173 191), rgb(237 242 243))';
    }
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, [props.theme]);

  return (

    <>
        <div style={{ height: "100vh"}}>
          <Typography variant="h4" className={`gradient-text ${props.theme === 'dark' ? 'dark-mode' : ''}`} style={{ textTransform: "none" }} align="center" >
            <span style={{ fontWeight: '600'}}>Help Us</span> Find
          </Typography>

          {spinner ? (
            <div className='text-center my-5 pt-5' >
              <img src={loading} alt="loading" width="40px" />
            </div>
          ) :
            (fetched ?
              (
                <div className="cards-container">
                  {lostItems.map((item) => (
                    <Card key={item.id} className="card" style={{ backgroundColor: `${props.theme === 'dark' ? '#333' : 'whitesmoke'}` ,color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}` }} >
                      <CardMedia
                        component="img"
                        height="150"
                        image={item.itemImage ? `${host}/lostItemImages/${item.itemImage}` : no_image}
                        alt={item.name}
                      />

                      <CardContent >
                        <Typography variant="h6" >
                          {item.subcategory}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`}}>
                          {item.description}
                        </Typography>
                        <Button size="small" style={{ fontFamily: "'Poppins', sans-serif", marginTop: "10px", borderRadius: "20px" }} variant="contained" color="secondary" component={Link} to="/found"> REPORT AS FOUND </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center my-5 pt-5">
                  <h4>No items to display ...</h4>
                </div>
              ))}
        </div>

    </>
  );
};

export default HelpUs;
