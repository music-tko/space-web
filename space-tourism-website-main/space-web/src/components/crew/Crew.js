import React, { useState, useEffect } from 'react';
import NavBar from '../navbar/NavBar';
import img0 from "../assets/crew/image-douglas-hurley.png";
import img1 from "../assets/crew/image-mark-shuttleworth.png";
import img2 from "../assets/crew/image-victor-glover.png";
import img3 from "../assets/crew/image-anousheh-ansari.png";
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Crew = ({data}) => {

 const [Crew, setCrew] = useState(null);
  
 useEffect(() => {
    setData();
    console.log(data)
  }, []);

 const setData = async () =>
 data.then((res) => setCrew(res.crew)); 

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
    
    <div className="crew-bg">
      <NavBar />
      {Crew ? (

        <div className="crew-sect">
                       <h1 className="crew-pick">
                         <span className="heading-number"> 0 2	&nbsp;	&nbsp;	&nbsp; </span> M E E T	&nbsp; Y O U R	&nbsp;  C R E W</h1>
            <ul className="all-crews">
        
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                    >                   
        <Slider>
                        
              {Crew.map((item, index) => (
                         
                <Slide index={index} key={index}>
                    
                <li className="people" key={index}>
                  <div className="content-crew">
                       <div className="crew-content">
                       <img src={imgIndex(index)} alt={item.name} className="crew-pic"/>
                    
                           <div className="all-crew">
                           <div className="words"> 
                           <h2 className="role">{item.role.toUpperCase()}</h2>
                          <h1 className="crew-heading">{item.name.toUpperCase()}</h1>
                          <p class="description crew-words">{item.bio}</p>
                          </div>
                            <div className="crew-buttons">
                                <Dot className="crew-btn" slide={0}/>
                        
                                <Dot className="crew-btn" slide={1}/>
                                
                                <Dot className="crew-btn" slide={2}/>
                                    
                                <Dot className="crew-btn" slide={3}/>                        
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

export default Crew;
