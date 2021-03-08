import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProjectEntry from "./ProjectEntry"


function Projects() {
 
    return (
    
        <div className="project-background">
        <NavBar/>
        <h1 className = "latest-project">Take a look at my latest projects.</h1>
        <ProjectEntry/>
        <div className = "footer-project">
        <Footer/>
        </div>
        </div>
    )
}

export default Projects;