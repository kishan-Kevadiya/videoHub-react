import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import  img1  from '../assets/3.jpg'
import  img2  from '../assets/4.jpg'

const services = () => {
  return (
   <div className="services">
 <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={2000}>

<div>
    <img src={img1} alt="img" />
    <p className="legend">FULL STACK WEB-DEVELOPEMENT</p>
</div>
<div>
    <img src={img2} alt="img2" />
    <p className="legend">Peer-peer Supportive system🤠</p>
</div>


 </Carousel>
   
   
   
   </div>
  )
}

export default services