import React, { useEffect, useState } from 'react'
import './items.css'
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const ItemGallery = () => {

    const [Items, setItems] = useState([]);
    const { category } = useParams();
    const host = "http://localhost:5000";

    // API call
    const url = `${host}/getAllItems`;

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
                console.log(json);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [url]);


    const filteredItems = category ? Items.filter(item => item.subcategory === category) : Items;

    return (
        <>
            <h1 className='text-center'>Items Gallery - {category}</h1>
            <div className="d-flex flex-wrap justify-content-center my-3" >

                {filteredItems.length === 0 ? (
                    <p className="my-5">No items to display ....</p>
                ) : (
                    filteredItems.map((item) => (
                        <div className="card-container" key={item._id}>
                            <div className="cards-item">
                                <img src={`${host}/foundItemImages/${item.itemImage}`} alt="items" />
                                <div className="intro">
                                    <h2>{item.date}</h2>
                                    <Button className="button" size="small" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", marginLeft: "15px", borderRadius: "10px" }} variant="contained" color="secondary" component={Link} to={`/details/${item._id}`}> See Details </Button>
                                    <Button className="button" size="small" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", marginLeft: "40px", borderRadius: "10px", }} variant="contained" color="secondary" href="/claim"> Claim Item </Button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </>
    )
}

export default ItemGallery
