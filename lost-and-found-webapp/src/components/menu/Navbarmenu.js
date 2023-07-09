import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../img/logo.png';


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={logo} alt="logo" /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Report <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/LostItem`}> Report Lost Item </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/FoundItem`}> Report Found Item </NavLink> </li>
                            
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ItemsGallery`}> Items Gallery </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/HelpUsFind`}> Help Us Find </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/FAQ`}> FAQ </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Feedback`}> Feedback </NavLink> </li>
                    

                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu
