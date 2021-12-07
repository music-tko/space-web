import logo from "../assets/shared/logo.svg"
import {Link, NavLink} from "react-router-dom";
import React, { useState } from "react"
import burgerOpen from "../assets/shared/icon-hamburger.svg"
import burgerClose from "../assets/shared/icon-close.svg"


const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

const handleToggle = () => {
  setNavbarOpen(!navbarOpen)
}

const closeMenu = () => {
  setNavbarOpen(false)
}

    return ( 
        <nav className="navvie">
            <div class="nav-links">
                <Link to="/" className="logo"><img src={logo} alt="logo" class="logo"/></Link>
               <hr className="nav-liner"/>
                <ul class="nav-list">
                    <li class="nav-a"><Link className="nav-p" to="/" style={{ textDecoration: 'none'}}><strong>00</strong> Home</Link></li>
                    <li class="nav-a"><Link className="nav-p" to="/destination" style={{ textDecoration: 'none'}}><strong>01</strong> Destination</Link></li>
                    <li class="nav-a"><Link className="nav-p" to="/crew" style={{ textDecoration: 'none'}}><strong>02</strong> Crew</Link></li>
                    <li class="nav-a"><Link className="nav-p" to="/technology" style={{ textDecoration: 'none'}}><strong>03</strong> Technology</Link></li>
                </ul>

                <div className="burger-menu">
                   <button onClick={handleToggle}>{navbarOpen ? <img className="burg-img" src={burgerClose} alt="burger-menu is closed"/> : <img className="burg-img" src={burgerOpen} alt="burger menu is open"/>}</button>
                   <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li class="nav-a">
                    <NavLink  
                    activeClassName="active-link" 
                    onClick={() => closeMenu()} 
                    className="nav-p" to="/" style={{ textDecoration: 'none'}}
                    exact>
                    <strong>00</strong> Home</NavLink></li>
                  
                   <li class="nav-a">
                   <NavLink 
                   activeClassName="active-link"
                   onClick={() => closeMenu()} 
                   className="nav-p" to="/destination" style={{ textDecoration: 'none'}}
                   exact>
                   <strong>01</strong> Destination</NavLink></li>
                   
                    <li class="nav-a">
                    <NavLink  
                    activeClassName="active-link"
                    onClick={() => closeMenu()} 
                    className="nav-p" to="/crew" style={{ textDecoration: 'none'}}
                    exact>
                    <strong>02</strong> Crew</NavLink></li>
                   
                    <li class="nav-a">
                    <NavLink  activeClassName="active-link"
                     onClick={() => closeMenu()} 
                     className="nav-p" to="/technology" style={{ textDecoration: 'none'}}
                     exact>
                     <strong>03</strong> Technology</NavLink></li>
                </ul>
                </div>
            </div>
       </nav>
     );
}
 
export default NavBar;