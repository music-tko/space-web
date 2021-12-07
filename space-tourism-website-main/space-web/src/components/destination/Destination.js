import React, { useState, useEffect } from 'react';
import NavBar from '../navbar/NavBar';
import img0 from "../assets/destination/image-moon.png";
import img1 from "../assets/destination/image-mars.png";
import img2 from "../assets/destination/image-europa.png";
import img3 from "../assets/destination/image-titan.png";
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Destination = ({data}) => {

   const [destination, setDestination] = useState(null);
  
  useEffect(() => { 
    setData();
    console.log(data)
  }, []);

    const setData = async () => 
    data
      .then((res) => setDestination(res.destinations));
     

  const imgIndex = (index) => {
    switch (index) {
      case 0:
        return img0;
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      default:
        console.log("error loading images");
        break;
    }
  };

  return (
    
    <div className="destination-bg">
    <NavBar />
      {destination ? (
  

        <div className="destination-sect">
                       <h1 className="desti-pick">
                         <span className="heading-number"> 0 1	&nbsp;	&nbsp;	&nbsp; </span> P I C K	&nbsp; Y O U R	&nbsp;  D E S T I N A T I O N
                       </h1>
            <ul className="all-destination">
        
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                    >
        
                   
        <Slider>
                        
              {destination.map((item, index) => (
                         
                <Slide index={index}>
                    
                <li className="objects" key={index}>
                  <div className="content-destination">
                       <div className="desti-content">
                       <img src={imgIndex(index)} alt={item.name} className="planet-pic"/>
                    
                 
                   
                        <div className="content-slide">
                        <div 
                        className="desti-buttons">
                        <Dot className="desti-btn" slide={0} children="M O O N" />
                
                         <Dot className="desti-btn" slide={1} children="M A R S"/>
                        
                          <Dot className="desti-btn" slide={2} children="E U R O P A"/>
                          	
                           <Dot className="desti-btn" slide={3} children="T I T A N"/>
                           </div>
                           <div className="all">
                          <h1 className="planet-heading">{item.name.toUpperCase()}</h1>
                          <p class="description">{item.description}</p>
                          <hr />
                         
                         <div className="info-sect">
                            <div className="info-box">
                              <p>AVG. DISTANCE</p>
                              <h2> {item.distance.toUpperCase()} </h2>
                            </div>
                            <div className="info-box2">
                              <p>EST. TRAVEL TIME</p>
                              <h2>{item.travel.toUpperCase()}</h2>
                            </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>                 
                </li>
                      </Slide>
               
              ))}
             </Slider>

        </CarouselProvider>
            </ul>
         
        </div>

      ) : (
        <span className="loading">
       <p>loading...</p>
      </span>
      )}
    </div>
  );
}

export default Destination;
