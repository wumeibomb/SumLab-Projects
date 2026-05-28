import React from "react";
import 
//prjects display 
function ProjectsDisplay() {
    return (
 {projectstest.map((projects) => {
             <ProjectCard key= {projects.id} recipe = {projects} />
})}
    )
}