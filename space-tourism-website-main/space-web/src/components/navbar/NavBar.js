import logo from "../assets/shared/logo.svg"
import {Link} from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <div class="nav-links">
                <Link to="/"><img src={logo} alt="logo" class="logo"/></Link>
               <hr className="nav-liner"/>
                <ul class="nav-list">
                    <li class="nav-a"><Link to="/" style={{ textDecoration: 'none'}}><strong>00</strong> Home</Link></li>
                    <li class="nav-a"><Link to="/destination" style={{ textDecoration: 'none'}}><strong>01</strong> Destination</Link></li>
                    <li class="nav-a"><Link to="/crew" style={{ textDecoration: 'none'}}><strong>02</strong> Crew</Link></li>
                    <li class="nav-a"><Link to="/technology" style={{ textDecoration: 'none'}}><strong>03</strong> Technology</Link></li>
                </ul>
            </div>
       </nav>
     );
}
 
export default NavBar;