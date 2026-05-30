import React from "react";
import ProjectCard from "./ projectcard";
// project list

function ProjectsList({projects}) {
    return (
        <div>
            {projects.map((flop)=> (
                <ProjectCard key = {flop.id} project = {flop}/>
            ))}
            </div>
            )
}
export default ProjectsList



