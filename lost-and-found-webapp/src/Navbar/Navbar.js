import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../images/Logofornavbar.png';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Router>
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="header__middle__logo">
              <NavLink exact to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>

            {/* Nav Items */}
            <div className="header__middle__menus">
              <nav className="main-nav">
                <ul className="main-menu">
                  <li className="menu-item">
                    <NavLink exact activeClassName="is-active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeClassName="is-active" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li
                    className="menu-item"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                  >
                    <NavLink activeClassName="is-active" to="#">
                      Report <FiChevronDown />
                    </NavLink>
                    {isDropdownOpen && (
                      <div className="dropdown">
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink activeClassName="is-active" to="/found">
                              Report Found Item
                            </NavLink>
                          </li>
                          <li>
                            <NavLink activeClassName="is-active" to="/lost">
                              Report Lost Item
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="menu-item">
                    <NavLink activeClassName="is-active" to="/about">
                      Items Gallery
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeClassName="is-active" to="/helpusfind">
                      Help Us Find
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeClassName="is-active" to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeClassName="is-active" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
};

export default Navbar;
