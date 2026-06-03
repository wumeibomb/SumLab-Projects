import React from "react";
//prjects display 
function ProjectCard({project}) {
    return (
         <div className='container'>
        <p className='ProjectList' style = {{maxWidth: "80px", marginRight: "5px", paddingLeft: "15px"}}>{project.name}</p>
            {project.test.map((project, index) => (
                <p key = {index}>{project.id}</p>
            )
            )}

            <img src =
                {project.img} 
                style= {{width:200,height:200,
                border: "solid #564029", margin: "10px",}}>
                    </img>        
        </div>
    )
}

export default ProjectCard