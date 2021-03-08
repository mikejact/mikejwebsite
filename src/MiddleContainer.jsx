import React, { useEffect } from "react";
import { FontAwesomeIcon, fabSketch } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
// import { faSketch} from '@fortawesome/free-solid-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";

function MiddleContainer() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <div id="middle-container" class="middle-container">
        <h1 className="adverts">Web Design & Development</h1>

        <div className="advert">
          <div className="adver" data-aos="zoom-in-down" data-aos-duration="2000">
            <FontAwesomeIcon
              className="social-icon"
              icon={faLaptopCode}
              size="6x"
              color="black"
            />
            <h4 className="fast">Web Design</h4>
            <p className="fasts">
              Whether you already have a vision or want to create one, I'll
              design a modern, content driven, mobile first website with
              excellent end-user experience top of mind.
            </p>
          </div>

          <div className="adver" data-aos="zoom-in-down" data-aos-duration="2000">
            <FontAwesomeIcon
              className="social-icon"
              icon={faPencilRuler}
              size="6x"
              color="black"
            />
            <h4 className="fast">UX / UI Design</h4>
            <p className="fasts">
              Your brand is more than just your logo. From logo design to custom
              icons, from color palletes to gorgeous photos, I'll help you
              create and develop your brand.
            </p>
          </div>

          <div className="adver" data-aos="zoom-in-down" data-aos-duration="2000">
            <FontAwesomeIcon
              className="social-icon"
              icon={faFileCode}
              size="6x"
              color="black"
            />
            <h4 className="fast">Web Development</h4>
            <p className="fasts">
              Brand: defined. Website: designed. It's time to get coding. I'll
              produce clean, lighweight code that makes your website look and
              function beautifully on any device.
            </p>
          </div>
        </div>

        <button className="started-button">
          <a href="./contact" title="Contact me">
            Let's get started!
          </a>
        </button>
      </div>
    </div>
  );
}

export default MiddleContainer;
