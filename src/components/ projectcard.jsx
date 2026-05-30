import React from "react";
//prjects display 
function ProjectCard({project}) {
    return (
         <div className='container'>
        <p className='ProjectList'>{project.name}</p>
            {project.test.map((project, index) => (
                <p key = {index}>{project.id}</p>
            ))}
            <img src =
                {project.img} style= {{width:250,height:204,display: 'flex',flexWrap: "wrap",justifyContent: "center"}}></img>        
        </div>
    )
}

export default ProjectCard