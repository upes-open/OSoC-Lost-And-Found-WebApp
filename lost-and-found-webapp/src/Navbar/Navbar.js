import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../images/Logofornavbar.png';
import './Navbar.css';
import Switch from 'react-switch';

const Navbar = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
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
                offColor='#E1E2E2'
                onHandleColor="#fff"
                handleDiameter={10}
                uncheckedIcon="🔆"
                checkedIcon="🌙"
                height={25}
                width={57}
                className="theme-toggle-switch"
              />
            </div>
            {/* icons={{ checked: , unchecked: "🔆" }} */}

            {/* Nav Items */}
            <div className="header__middle__menus">
              <nav className="main-nav">
                <ul className="main-menu">
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
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
