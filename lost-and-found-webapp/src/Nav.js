import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Nav = () => (
    <header>
        <nav>
            <ul  className='list'>
                <li ><a className='link head' href="">Lost & Found</a></li>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><a className='link' href="">Lost Items</a></li>
                <li><a className='link' href="">Found Item</a></li>
                <li><Link to='/help-us-find' className='link'>Help Us Find</Link></li>
                <li><a className='link' href="">Report a Lost Item</a></li>
                <li><a className='link' href="">Report a Found Item</a></li>
                <li><a className='link' href="">FAQ</a></li>
                <li><a className='link' href="">Sign In</a></li>
                <li><a className='link' href="">Sign Up</a></li>
            </ul>
        </nav>
    </header>
)






export default Nav;