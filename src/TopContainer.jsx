import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function TopContainer() {
  return (
    <div className="top-background-image">
      

      
        <div className="mikes">
          <h1 className="mike animate__animated animate__fadeInLeftBig ">
            Hi, I'm Mike.
          </h1>
        
        <span>
          <h2 className="programmer animate__animated animate__fadeInRightBig animate__delay-1s">
            a front-end web developer.
          </h2>
        </span>
        <img
          className="profile-pic animate__animated animate__fadeInUpBig animate__delay-2s"
          src="https://i.ibb.co/TtmMwLf/39022805-10160692711470285-653931508372865024-o.jpg"
          alt="profile"
        />
        <a className="scroll"  href="#middle-container">
          <FontAwesomeIcon
            className="scroll"
            icon={faAngleDoubleDown}
            bounce
            size="2x"
            color="white"
          />
        </a>
      </div>
    </div>
  );
}

export default TopContainer;

// https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
