import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav>
      <ul className='list'>
        <li>
          <Link to='/' className='link head'>Lost & Found</Link>
        </li>
        <li>
          <Link to='/' className='link'>Home</Link>
        </li>
        <li>
          <Link to='/lost-items' className='link'>Lost Items</Link>
        </li>
        <li>
          <Link to='/found-item' className='link'>Found Item</Link>
        </li>
        <li>
          <Link to='/help-us-find' className='link'>Help Us Find</Link>
        </li>
        <li>
          <Link to='/report-lost-item' className='link'>Report a Lost Item</Link>
        </li>
        <li>
          <Link to='/report-found-item' className='link'>Report a Found Item</Link>
        </li>
        <li>
          <Link to='/faq' className='link'>FAQ</Link>
        </li>
        <li>
          <Link to='/signin' className='link'>Sign In</Link>
        </li>
        <li>
          <Link to='/signup' className='link'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
