import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './details.css'
import { Button } from '@mui/material';

const ItemDetails = () => {

    const [fetched, setFetched] = useState(false);
    const [Items, setItems] = useState([]);
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
                setFetched(true);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [url]);

    const { id } = useParams();
    const item = Items.find(item => item._id === id);

    return (
        <>
            {fetched &&
                (<div className='card-wrapper'>
                    <div className="cards">
                        <div className="image">
                            <img src={`${host}/foundItemImages/${item.itemImage}`} alt="item" />
                        </div>
                        <div class="content">
                            <h2 class="title">{item.subcategory}</h2>

                            <div class="detail">
                                <h2>Description: </h2>
                                <p>{item.description}</p>

                                <ul>
                                    <li style={{ paddingBottom: "1rem", paddingTop: "1rem" }}><i className="fa-solid fa-location-dot" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Place: <span>{item.place}</span></li>
                                    <li style={{ paddingBottom: "1rem" }}><i class="fa-solid fa-calendar-days" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Date: <span>{item.date}</span></li>
                                </ul>
                            </div>

                            <div class="info">
                                <Button className="bt" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", borderRadius: "10px" }} variant="contained" color="secondary" component={Link} to='/claim'> Claim Item </Button>
                            </div>
                        </div>

                    </div>
                </div >
            )}
        </>
    )
}

export default ItemDetails
