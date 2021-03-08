import React from "react"
import Logo from "./images/logo.png"


function NavBar() {
    return(
        <nav className=" navvy bg-yellow navbar navbar-dark navbar-expand-sm navbar_custom fixed-top" >

  <a className="animate__animated animate__fadeInRightBig navbar-brand navvers " href="/"><img src ={Logo} alt="logo"></img></a>
{/* <img src ="./images/favicon-32x32.png" alt="logo"></img> */}


<button className="navbar-toggler navbar-button" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>

  </button>
  <div className="collapse navbar-collapse"  id="collapsibleNavbar">
  <ul className= "navbar-nav ml-auto" id=" navbar_custom">
  
    <li className="nav-item" id=" navbar_custom">
      <a className=" animate__animated animate__fadeInRightBig nav-link" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="navvers animate__animated animate__fadeInRightBig nav-link" href="/About">About</a>
    </li>
    <li className="nav-item">
      <a className=" animate__animated animate__fadeInLeftBig nav-link" id=" navbar_custom" href="/Projects">Projects</a>
    </li>
    <li className="nav-item">
      <a className="animate__animated animate__fadeInLeftBig nav-link" href="/Contact">Contact</a>
    </li>
  </ul>
  </div>
</nav>
    )
}

export default NavBar;

