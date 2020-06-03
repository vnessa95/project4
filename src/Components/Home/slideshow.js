//react slideshow component - slide 
import React from 'react';
import { Slide } from 'react-slideshow-image';


const slideImages = [
  '/img/IMG_20200502_184122_642.jpg',
  '/img/+6fPYJdxTLiUaKav6kl7gg_thumb_46.jpg',
  '/img/IMG_20200502_184122_644.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (


    <div className="slide-container">
      <h2 class="quote"> <span class="bigquote">"</span><br /><span class="bigcap">Meditation</span><br />because some questions can't be answered on google.<br /><br />
        <div class="three-dots">
          <span></span>
          <span></span>
          <span></span>
        </div><br /><br /></h2>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow