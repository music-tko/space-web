// import logo from "../assets/shared/logo.svg"
import Link from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <div class="nav-links">
                <a href="#"><img src="./assets/shared/logo.svg" alt="" class="logo"/></a>
                <ul class="nav-list">
                    <li class="nav-a"><Link to="/"><strong>00</strong> Home</Link></li>
                    <li class="nav-a"><Link to="/destination"><strong>01</strong> Destination</Link></li>
                    <li class="nav-a"><Link to="/crew"><strong>02</strong> Crew</Link></li>
                    <li class="nav-a"><Link to="/technology"><strong>03</strong> Technology</Link></li>
                </ul>
            </div>
       </nav>
     );
}
 
export default NavBar;