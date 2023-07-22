import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './details.css'
import { Button } from '@mui/material';
import dark from './dark.jpg';

const ItemDetails = (props) => {

    const [fetched, setFetched] = useState(false);
    const [Items, setItems] = useState([]);
    const host = "https://shiny-seal-loafers.cyclic.app";

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

    useEffect(() => {
        if (props.theme === 'dark') {
            document.body.style.background = `url(${dark}) `;
            document.body.style.backgroundSize = 'cover';
        }

        return () => {
          document.body.style.background = null;
        };
      }, [props.theme]);
    

    const { id } = useParams();
    const item = Items.find(item => item._id === id);

    return (
        <>
            {fetched &&
                (<div className='card-wrapper' style={{ marginBottom: '150px'}}>
                    <div className="cards" >
                        <div className="image">
                            <img src={`${host}/foundItemImages/${item.itemImage}`} alt="item" />
                        </div>
                        <div class="content">
                            <h2 className={`title ${props.theme === 'dark' ? 'dark-mode' : ''}`} style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}}>{item.subcategory}</h2>

                            <div class="detail" style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}}>
                                <h2 style={{color: `${props.theme === 'dark' ? '#f5f5f5' : ''}`}}>Description: </h2>
                                <p >{item.description}</p>

                                <ul>
                                    <li style={{ paddingBottom: "1rem", paddingTop: "1rem" }}><i className="fa-solid fa-location-dot" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Place: <span style={{color: `${props.theme === 'dark' ? '#f5f5f5' : 'black'}`}}>{item.place}</span></li>
                                    <li style={{ paddingBottom: "1rem" }}><i class="fa-solid fa-calendar-days" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Date: <span style={{color: `${props.theme === 'dark' ? '#f5f5f5' : 'black'}`}}>{item.date}</span></li>
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
