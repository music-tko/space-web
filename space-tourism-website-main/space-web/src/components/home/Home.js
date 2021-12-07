import Navbar from '../navbar/NavBar';
import {Link} from "react-router-dom";

const Home = () => {

    return ( 
         <main class="header-img">
         <Navbar />
             <div class="space-main">
    <div class="space-section">
    <h3 class="space-subheading"> SO, YOU WANT TO TRAVEL TO</h3>

    <h1 class="space-header">SPACE</h1>

          <p class="space-paragraph">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div class="space-button">
          <Link to="/destination"><button class="explore-btn"><p>Explore</p></button></Link>
        </div>
    </div>
         </main>
     );
}
 
export default Home;
 