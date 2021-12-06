import React, { useState, useEffect } from 'react';
import NavBar from '../navbar/NavBar';
import img0 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img1 from "../assets/technology/image-spaceport-portrait.jpg";
import img2 from "../assets/technology/image-space-capsule-portrait.jpg";
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Technology = ({data}) => {

 const [tech, setTech] = useState(null);
  
 useEffect(() => {
    setData();
    console.log(data)
  }, []);

 const setData = async () =>
 data.then((res) => setTech(res.technology)); 

 const imgIndex = (index) => {
    switch (index) {
      case 0:
        return img0;
      case 1:
        return img1;
      case 2:
        return img2;
      default:
        console.log("error loading images");
        break;
    }
  };

  return (
    
    <div className="tech-bg">
      <NavBar />
      {tech ? (

        <div className="tech-sect">
                       <h1 className="tech-pick">
                         <span className="heading-number"> 0 3	&nbsp;	&nbsp;	&nbsp; </span> S P A C E &nbsp; L A U N C H	&nbsp;  1 0 1</h1>
            <ul className="all-techie">
        
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                    >                   
        <Slider>
                        
              {tech.map((item, index) => (
                         
                <Slide index={index} key={index}>
                    
                <li className="machines" key={index}>
                  <div className="content-tech">
                       <div className="tech-content">
                       <img src={imgIndex(index)} alt={item.name} className="tech-pic"/>
                    
                          
                           <div className="words words-tech"> 
                           <h2 className="term">T H E &nbsp;&nbsp; T E R M I N O L O G Y</h2>
                          <h1 className="tech-heading">{item.name.toUpperCase()}</h1>
                          <p class="description description-tech">{item.description}</p>
                          </div>
                            <div className="tech-buttons">
                                <Dot className="tech-btn" slide={0} children="1"/>
                        
                                <Dot className="tech-btn" slide={1} children="2"/>
                                
                                <Dot className="tech-btn" slide={2} children="3"/>
                                                            
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

export default Technology;
