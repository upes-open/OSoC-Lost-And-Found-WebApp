import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../images/Logofornavbar.png';
import './Navbar.css';
import Switch from 'react-switch';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import user from './images/user.png'
import email from './images/profile.png'
import logout from './images/logout.png'
import { useMsal } from "@azure/msal-react";

const Navbar = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProfile = () => {
    let subMenu = document.getElementById("sub-menu");
    subMenu.classList.toggle("open-menu");
  }

  const { accounts, instance } = useMsal();
  const userAccount = accounts[0];

  const handleSignOut = () => {
    instance.logout();
  };

  return (
    <div className={`header__middle ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="header__middle__logo">
            <NavLink exact to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <Switch
              checked={props.theme === 'dark'}
              onChange={() => props.toggleTheme(props.theme)}
              onColor="#2C3245"
              offColor="#E1E2E2"
              onHandleColor="#fff"
              handleDiameter={10}
              uncheckedIcon="🔆"
              checkedIcon="🌙"
              height={25}
              width={57}
              className="theme-toggle-switch"
            />
          </div>

          {/* Hamburger Menu (Mobile View) */}
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="close-icon" />
            ) : (
              <GiHamburgerMenu />
            )}
          </div>

          {/* Nav Items (Desktop and Mobile View) */}
          <div className={`header__middle__menus ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <nav className="main-nav">
              <ul className={`main-menu ${isMobileMenuOpen ? 'mobile-view' : ''}`}>
                <li className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                  <NavLink exact activeClassName="is-active" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                  <NavLink activeClassName="is-active" to="/about">
                    About
                  </NavLink>
                </li>
                <li
                  className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  <NavLink activeClassName="is-active" to="#">
                    Report <FiChevronDown />
                  </NavLink>
                  {isDropdownOpen && (
                    <div className="dropdown">
                      <ul className={`dropdown-menu ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
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
                <li className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                  <NavLink activeClassName="is-active" to="/items">
                    Items Gallery
                  </NavLink>
                </li>
                <li className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                  <NavLink activeClassName="is-active" to="/helpusfind">
                    Help Us Find
                  </NavLink>
                </li>
                <li className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                  <NavLink activeClassName="is-active" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                  <NavLink activeClassName="is-active" to="/feedback">
                    Feedback
                  </NavLink>
                </li>
                {accounts.length > 0 &&
                  (<li className={`menu-item ${props.theme === 'dark' ? 'dark-mode' : ''} ps-3`}>
                    <img src={user} onClick={handleProfile} alt="user_image" className='user-pic' />
                  </li>)}
              </ul>

              {accounts.length > 0 &&
                (<div className={`sub-menu-wrap ${props.theme === 'dark' ? 'dark-mode' : ''}`} id="sub-menu">
                  <div className={`sub-menu ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                    <div className={`user-info ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                      <img src={user} alt="user_image" />
                      <h5>{userAccount.name}</h5>
                    </div>
                    <hr />
                    <div className={`sub-menu-item ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                      <img src={email} alt="email" />
                      <p style={{ fontSize: "14px", paddingTop: "16px", fontWeight:"400" }}>{userAccount.username}</p>
                    </div>
                    <div className={`sub-menu-item logout ${props.theme === 'dark' ? 'dark-mode' : ''}`}>
                      <img src={logout} alt="logout" style={{cursor:"pointer"}}/>
                      <p onClick={handleSignOut} style={{ fontSize: "14px", paddingTop: "16px",  fontWeight:"400" , cursor:"pointer"}}>Logout</p>
                    </div>
                  </div>
                </div>)
              }
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
