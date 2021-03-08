import React from "react";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
// import ThirdContainer from "./ThirdContainer";
import Footer from "./Footer";
import BootstrapCarousel from "./BootstrapCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Social from "./Social";


function Home() {
    return(

        <div className = "App">
        <NavBar/>
        <TopContainer />
        <MiddleContainer/>
        {/* <ThirdContainer /> */}
        <BootstrapCarousel/> 
        <Social/>
        <Footer/>
        </div>
    );
}

export default Home;