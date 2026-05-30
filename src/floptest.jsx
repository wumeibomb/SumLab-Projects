import React, {useState} from 'react'
import './flopte.css'
import ProjectsList from './components/neededme'

    const projects = [
        {
            id: 11,
            name: "FIRST,FLOP",
            img: "https://assets.bingbunny.com/sites/default/files/styles/l08_072000_1152x648/public/2023-05/DB0423B6-1117-4EEE-A1F3-4CC3EB04A0AA.jpeg.webp?itok=ickq93EW",
            test: [1,2,3] //why did it only work when I added an array?, why didn't it take projects as the array.

        },
        {
            id: 22,
            name: "TEAMO",
            img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVWGmyarvgWKZPjyyT3rqoZgmlciDMZuFvg&s",
            test: [4,5,6]

        
        },
        {
            id: 33,
            name: "myMelodY",
            img: "https://e1.pngegg.com/pngimages/977/544/png-clipart-my-melody-s-sanrio-character-thumbnail.png",
            test: [7,8,9]

        }
    ]
// JUST COPY THE VIDEOOOOOOOOOOOOOOOOOOOOO
    const [formData, setFormData] = "flop"
   const handleInputChange = (event) => {
    //    setFormData({...formData, [event.target.name]: event.target.value})
  //  }


        //object destructuring, {} -> destrucuture an object. [] -> destrucutre an array
       const {name, value} = event.target //target of the event contains name and value of the form
//update the data : synchronous way:
       const newFormData = {
           ...formData,   //spread operator
           [name] : value  // will look for this name key and change it to the new value
        }
          setFormData(newFormData)
    }

        const handleSubmit = (bruh) => {
    bruh.preventDefault();
  }
  const handleNewProject = (event)=> {
    event.preventDefault() 


  }

        
function App() {

    return (
        <>
        <h1 className="find" >Personal Project Showcase App</h1>

        // search bar here
         <form onSubmit={handleSubmit} style = {{margin: "15px", border: "solid #8e1a1cb6", borderRadius: "7px", display: "flex", flexDirection: "column", width: "350px"}}>

            <p style={{marginTop: "10px", marginLeft: "5px", marginBottom: "1px"}}>Title</p>
            <input 
            type = "text"
            value = {formData.title}
            onChange={handleInputChange}
            name  = 'title' //what is the name for??
            placeholder= 'infrunami'
            style = {{padding: "10px", margin: "5px"}}
            />

            <p style={{marginTop: "10px", marginLeft: "5px", marginBottom: "1px"}}>Description</p>
            <textarea  //this didn't work initially as it was input inseatd of textarea
            type = "text"
            value= {formData.description}
            onChange={handleInputChange}
            name = 'description'
            placeholder='Ohbabyiwasgettingbored'
            style = {{height: "80px",padding: "8px", display: "flex", margin: "5px"}}
            />
             <button style={{height: "30px",fontSize: "15px", textAlign: "center", margin: "4px"}}>ADD</button>

         </form>

         <h2>BRUH</h2>
         <ProjectsList projects = {projects} />

        <img src = {projects.img}/>       
         </>
    )
}   

export default App
