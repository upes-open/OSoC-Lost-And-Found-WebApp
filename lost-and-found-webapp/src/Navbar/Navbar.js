import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../images/Logofornavbar.png';
import './Navbar.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Switch from 'react-switch';

const lightTheme = {
  body: '#f5f5f5',
  text: '#333',
  navbarBackground: '#f5f5f5',
  navbarText: '#333',
};

const darkTheme = {
  body: '#333',
  text: '#f5f5f5',
  navbarBackground: '#333',
  navbarText: '#f5f5f5',
};

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body} !important;
        color: ${({ theme }) => theme.text};
    }

    .header__middle {
        background-color: ${({ theme }) => theme.navbarBackground};
        color: ${({ theme }) => theme.navbarText};
    }

    .menu-item a {
        color: ${({ theme }) => theme.navbarText};
    }

    .sub__menus {
        background-color: ${({ theme }) => theme.navbarBackground};
        color: ${({ theme }) => theme.navbarText};
    }

    .dropdown-menu {
        background-color: ${({ theme }) => theme.navbarBackground};
        color: ${({ theme }) => theme.navbarText};
    }
`;

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="header__middle__logo">
              <NavLink exact to="/">
                <img src={logo} alt="logo" />
              </NavLink>
              <Switch
                checked={theme === darkTheme}
                onChange={toggleTheme}
                onColor="#2C3245"
                offColor='#E1E2E2'
                onHandleColor="#fff"
                handleDiameter={10}
                uncheckedIcon="🔆"
                checkedIcon= "🌙"
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
                    <NavLink activeClassName="is-active" to="/items">
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
                    <NavLink activeClassName="is-active" to="/feedback">
                      Feedback
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
};

export default Navbar;
