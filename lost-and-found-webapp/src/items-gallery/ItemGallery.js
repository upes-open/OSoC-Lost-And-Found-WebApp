import React from 'react'
import image1 from "./sample/image1.jpg"
import image2 from "./sample/image2.jpg"
import image3 from "./sample/image3.jpg"
import './items.css'
import { Button } from '@mui/material';
import { Link, useParams} from 'react-router-dom';

const ItemGallery = () => {

    const {category} = useParams();
    const Items = [

        { id: 1, name: 'Item 1', description: 'Description 1', image: image1, category: "Book" },
        { id: 2, name: 'Item 2', description: 'Description 2', image: image2, category: "Cards" },
        { id: 3, name: 'Item 3', description: 'Description 3', image: image3, category: "Electronic Devices" },
        { id: 3, name: 'Item 3', description: 'Description 3', image: image3,  category: "Others" },
        { id: 3, name: 'Item 3', description: 'Description 3', image: image3,  category: "Books" },
        { id: 3, name: 'Item 3', description: 'Description 3', image: image3,  category: "Cards" },

    ];

    const filteredItems = category !== "All" ? Items.filter(item => item.category === category) : Items;

    return (
        <>
        <h1 className='text-center'>Items Gallery - {category}</h1>
            <div className="d-flex flex-wrap justify-content-center my-3" >
                {filteredItems.map((item) => (
                    <div className="card-container">
                        <div className="cards-item">
                            <img src={item.image} alt="items" />
                            <div className="intro">
                                <h2>{item.name}</h2>
                                <Button className="button" size="small" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", marginLeft: "15px", borderRadius: "10px" }} variant="contained" color="secondary" component ={Link} to={`/details/${item.id}`}> See Details </Button>
                                <Button className="button" size="small" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", marginLeft: "40px", borderRadius: "10px", }} variant="contained" color="secondary" href="/claim"> Claim Item </Button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ItemGallery
