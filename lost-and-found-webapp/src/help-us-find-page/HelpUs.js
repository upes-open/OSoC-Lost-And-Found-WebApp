import React, { useEffect} from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import image1 from "./sample/image1.jpg"
import image2 from "./sample/image2.jpg"
import "./helpUs.css"
import no_image from "./no-image.png";

const HelpUs = () => {

  // const [lostItems, setLostItems] = useState([]);

  // Fetch data from Lost Items DB
  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/lost-items');
  //       const data = await response.json();
  //       setLostItems(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const lostItems = [

    { id: 1, name: 'Item 1', description: 'Description 1', image: image1 },
    { id: 2, name: 'Item 2', description: 'Description 2', image: image2 },
    { id: 3, name: 'Item 3', description: 'Description 3', image: null },
    { id: 4, name: 'Item 4', description: 'Description 4', image: image1 },
    { id: 5, name: 'Item 5', description: 'Description 5', image: image2 },
    { id: 3, name: 'Item 3', description: 'Description 3', image: null },
    { id: 4, name: 'Item 4', description: 'Description 4', image: image1 },
    { id: 5, name: 'Item 5', description: 'Description 5', image: image2 },
    { id: 3, name: 'Item 3', description: 'Description 3', image: null },
    { id: 4, name: 'Item 4', description: 'Description 4', image: image1 },
    { id: 5, name: 'Item 5', description: 'Description 5', image: image2 },

  ];

  useEffect(() => {
    document.body.style.background = "linear-gradient(to right top, rgb(101 173 191), rgb(237 242 243))";
    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (
    <div className='container1 mt-4'>

      <Button size="small" style={{ fontFamily: "'Poppins', sans-serif", marginTop: "10px", padding:"5px 10px", borderRadius: "5px" }} variant="contained" color="primary" href="/report">


      <Typography variant="h5" style={{ textTransform:"none", fontWeight: "900"}} align="center" >
        Help Us Find
      </Typography>
      </Button>

      <div className="cards-container">
        {lostItems.map((item) => (
          <Card key={item.id} className="card" style={{ backgroundColor: "whitesmoke" }} >
            <CardMedia
              component="img"
              height="150"
              image={item.image ? item.image : no_image}
              alt={item.name}
            />

            <CardContent >
              <Typography variant="h6" >
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Button size="small" style={{ fontFamily: "'Poppins', sans-serif", marginTop: "10px", borderRadius: "20px" }} variant="contained" color="secondary" href="/report"> REPORT AS FOUND </Button>
            </CardContent>
          </Card>
        ))}
      </div>

    </div >
  );
};

export default HelpUs;
