import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './details.css'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import dark from './dark.jpg';

const ItemDetails = (props) => {

    const [fetched, setFetched] = useState(false);
    const [Items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState('');
    const [details, setDetails] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sapId, setSapId] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [contactNumber, setContactNumber] = useState('');

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


    //handle claim
    const handleClaimItem = (itemId) => {
        setSelectedItemId(itemId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItemId('');
        setDetails('');
        setName('');
        setEmail('');
        setSapId('');
        setBranch('');
        setYear('');
        setContactNumber('');
    };

    const handleSubmit = async () => {
        try {
            // Validate mandatory fields
            if (!details || !name || !email || !sapId || !contactNumber) {
                console.error('Mandatory fields are missing');
                return;
            }

            console.log('Claiming item:', selectedItemId);

            const response = await fetch(`${host}/claimItem/${selectedItemId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    details,
                    name,
                    email,
                    sapId,
                    branch,
                    year,
                    contactNumber,
                }),
            });

            if (response.ok) {
                console.log('Item claimed successfully');
                // Show success alert or update UI
            } else {
                console.error('Failed to claim item');
            }

            handleClose();
        } catch (error) {
            console.log(error.message);
        }
    };

    const { id } = useParams();
    const item = Items.find(item => item._id === id);

    return (
        <>
            {fetched &&
                (<div className='card-wrapper' style={{ marginBottom: '150px' }}>
                    <div className="cards" >
                        <div className="image">
                            <img src={`${host}/foundItemImages/${item.itemImage}`} alt="item" />
                        </div>
                        <div class="content">
                            <h2 className={`title ${props.theme === 'dark' ? 'dark-mode' : ''}`} style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : ''}` }}>{item.subcategory}</h2>

                            <div class="detail" style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : ''}` }}>
                                <h2 style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : ''}` }}>Description: </h2>
                                <p >{item.description}</p>

                                <ul>
                                    <li style={{ paddingBottom: "1rem", paddingTop: "1rem" }}><i className="fa-solid fa-location-dot" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Place: <span style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : 'black'}` }}>{item.place}</span></li>
                                    <li style={{ paddingBottom: "1rem" }}><i class="fa-solid fa-calendar-days" style={{ color: "red", fontSize: "30px", paddingRight: "1rem" }}></i> Date: <span style={{ color: `${props.theme === 'dark' ? '#f5f5f5' : 'black'}` }}>{item.date}</span></li>
                                </ul>
                            </div>

                            <div class="info">
                                <Button className="bt" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", borderRadius: "10px" }} variant="contained" color="secondary" onClick={() => handleClaimItem(item._id)}> Claim Item </Button>
                            </div>
                        </div>

                    </div>
                </div >
                )}
                <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Enter Your Details</DialogTitle>
            <DialogContent>
              <TextField
                label="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                multiline
                rows={4}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="SAP ID"
                value={sapId}
                onChange={(e) => setSapId(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Claim
              </Button>
            </DialogActions>
          </Dialog>

        </>
    )
}

export default ItemDetails
