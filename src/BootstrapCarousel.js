import React from 'react'
import {Carousel} from 'react-bootstrap'


function BootstrapCarousel() {

    return (
        <div className = "colored-section">
  
        <Carousel className = "windows">
  <Carousel.Item>
    <h2 className = "testimonial">"Mike jumped into our web-development needs and quickly boosted the quality and professionalism of our website. He was responsive and delivered on all the points we brainstormed. If asked the right questions, he can articulate the underlying need, and is able to work independently to achieve the desired scope. Thanks Mike for all the hard work."</h2> 
    
    <Carousel.Caption>
      <h3 className = "name">Tom Skrinskas</h3>
      <p className = "names" >Vancouver, Canada</p>
      <p className = "names" >Ascencion Sciences</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <h2 className = " testimonial">"I had the pleasure of working with Mike on a website development project on WordPress for Ascension Sciences Inc. From day one, Mike was professional, personable, and became an invaluable part of the team. Well-versed in HTML and CSS, he improved our site's responsiveness across devices and optimized formatting on all pages. Not only did he tackle our list of requests in record time, Mike also came to the table with creative ideas. I would recommend Mike to anyone looking for support in all-things web development!"</h2>  
    
    <Carousel.Caption>
      <h3 className = "name">Melody Lin</h3>
      <p className = "names" >Vancouver, Canada</p>
      <p className = "names" >Ascencion Sciences</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <h2 className = "testimonial">"Working with Mike was incredible. He was very attentive to my needs for my small business."</h2>
    
    
    <Carousel.Caption>
      <h3 className = "name">Karina Reid</h3>
      <p className = "names">Vancouver, Canada</p>
      <p className = "names" >Business Owner</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
         </div>
    )
}


export default BootstrapCarousel; 