import Navbar from '../navbar/NavBar'
import useFetch from '../useFetch'

const Home = () => {

    return ( 
         <main class="header-img">
         <Navbar />
             <div class="space-main">
    <div class="space-section">
    <h3 class="space-subheading"> So, you want to travel to</h3>

    <h1 class="space-header">Space</h1>

          <p class="space-paragraph">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div class="space-button">
          <button class="explore-btn"><p>Explore</p></button>
        </div>
    </div>
         </main>
     );
}
 
export default Home;
 