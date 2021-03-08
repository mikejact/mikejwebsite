import React, {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';


function Social() {
   
  
    return (
  
        <Fragment className = "social">
        <h1 className = "starting">Interested in starting a project together?</h1>
        <p className = "startings">Click on the icons below to either contact me by email or LinkedIn.</p>
        <a href="./contact" title="Contact me"><FontAwesomeIcon className="social-icons" icon={faEnvelope} size = '6x' color = "black"/></a>
        <a href='https://www.linkedin.com/in/michael-acton/' target="_blank" title="Contact me"><FontAwesomeIcon className="social-icons" icon={faLinkedinIn} size = '6x' color = "black"/></a> 
        </Fragment>
    );
  }

  export default Social; 