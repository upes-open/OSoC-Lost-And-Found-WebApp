import React from 'react'
import { Link, useParams} from 'react-router-dom';
import './details.css'
import image1 from './image1.jpg'
import { Button } from '@mui/material';

const ItemDetails = () => {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const id = searchParams.get('id');
    
    const {id} = useParams();

    
    const Items = [

        { id: 1, name: 'Item 1', description: 'Description 1', image: image1 },
        { id: 2, name: 'Item 2', description: 'Description 2', image: image1 },
        { id: 3, name: 'Item 3', description: 'Description 3', image: image1 }
    ];

    // eslint-disable-next-line
    const item = Items.find(item => item.id == id);

    return (
        <div className='card-wrapper'>
            <div className="cards">
                <div className="image">
                    <img src={item.image} alt="item" />
                </div>


                <div class="content">
                    <h2 class="title">Item Name</h2>

                    <div class="detail">
                        <h2>Description: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>

                        <ul>
                            <li style={{ paddingBottom: "1rem", paddingTop: "1rem" }}><i className="fa-solid fa-location-dot" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Place: <span>Gandhi Chowk</span></li>
                            <li style={{ paddingBottom: "1rem" }}><i class="fa-solid fa-calendar-days" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Date: <span>23/01/2023</span></li>
                        </ul>
                    </div>

                    <div class="info">
                        <Button className="bt" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", borderRadius: "10px" }} variant="contained" color="secondary" component={Link} to='/claim'> Claim Item </Button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ItemDetails
