import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import "./helpUs.css"
import no_image from "./no-image.png";

const HelpUs = () => {

  const [fetched, setFetched] = useState(false);
  const [lostItems, setItems] = useState([]);
  const host = "http://localhost:5000";

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
    }
    fetchData();
  }, [url]);


  useEffect(() => {
    document.body.style.background = "linear-gradient(to right top, rgb(101 173 191), rgb(237 242 243))";
    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (

    <>
      {fetched &&
        (<div className='container1 mt-4'>

          <Typography variant="h4" className="gradient-text" style={{ textTransform: "none", }} align="center" >
            <span style={{ fontWeight: '600' }}>Help Us</span> Find
          </Typography>


          <div className="cards-container">
            {lostItems.map((item) => (
              <Card key={item.id} className="card" style={{ backgroundColor: "whitesmoke" }} >
                <CardMedia
                  component="img"
                  height="150"
                  image={item.itemImage ? `${host}/lostItemImages/${item.itemImage}` : no_image}
                  alt={item.name}
                />

                <CardContent >
                  <Typography variant="h6" >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button size="small" style={{ fontFamily: "'Poppins', sans-serif", marginTop: "10px", borderRadius: "20px" }} variant="contained" color="secondary" href={`/report/${item.id}`}> REPORT AS FOUND </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div >
        )}
    </>
  );
};

export default HelpUs;
