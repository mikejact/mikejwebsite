import React from "react";
import NavBar from "./NavBar";
import Mikes from "./images/mikes.jpg";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div >
    
      <NavBar />
      
<div className="about-covers">
      <h1 className="meet">Nice to meet you</h1>
      <h1 className=" meet meets animate__animated animate__bounceInRight animate__delay-1s">
        .
      </h1>
      <h1 className=" meet meets animate__animated animate__bounceInRight animate__delay-2s">
        .
      </h1>
      <h1 className=" meet meets animate__animated animate__bounceInRight animate__delay-3s">
        .
      </h1>
      <img
          className="mike-about animate__animated animate__fadeInRight animate__delay-4s"
          src={Mikes}
          alt="profile"
        />

</div>
     
    

     <a className="scroll"  href="#middle-about">
          <FontAwesomeIcon
            className="scroll"
            icon={faAngleDoubleDown}
            bounce
            size="2x"
            color="white"
          />
        </a>
     
<div className = "about-middle" id = "middle-about">
      <div className="about-box1">
        <p className = "about-middle-text top-box">
          My name is Mike and I am a freelance frontend web developer based in
          Mexico City.
        </p>
        <p className = "about-middle-text">
          I am fluent in English and speak Spanish at an advanced 
          level.
        </p>
        <p className = "about-middle-text">
          I have 1+ years as a freelance web designer/developer and 5+ years as
          a Microsoft Educator.
        </p>
        <p className = "about-middle-text">
          I have a passion for UX/UI design which will make your website easy to use and stand out from the rest.
        </p>
        <p className = "about-middle-text">
          From initial designs to the final product I pay a great amount of attention to detail to make sure the final result is exactly what you need and want.
        </p>
        <p className = "about-middle-text">
          I specialize in React.js and am well versed in HTML, CSS, Javascript,
          jQuery and Python.
        </p>
        <p className = "about-middle-text">
          Whether it be starting from scratch or updating and beautifying your current website I can assist you at reasonable rates. 
        </p>
        <div className="language-icon">
          <FontAwesomeIcon
            className="language-icons"
            icon={faReact}
            size="3x"
            color="black"
          />
          <FontAwesomeIcon
            className="language-icons"
            icon={faHtml5}
            size="3x"
            color="black"
          />
          <FontAwesomeIcon
            className="language-icons"
            icon={faCss3}
            size="3x"
            color="black"
          />
          <FontAwesomeIcon
            className="language-icons"
            icon={faJs}
            size="3x"
            color="black"
          />
          <FontAwesomeIcon
            className="language-icons"
            icon={faPython}
            size="3x"
            color="black"
          />
        </div>

        
      </div>
      </div>
     
      
<div className = "about-bottom">
      <button className="started-button">
        <a href="./contact" title="Contact me">
          Let's get started!
        </a>
      </button>
      <div className="footers">
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default About;
