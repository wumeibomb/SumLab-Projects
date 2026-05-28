import { useState } from 'react'
import './flopte.css'

function App() {
  
    const projectstest = [
        {
            id: 11,
            name: "FIRST,FLOP",
            img: "https://assets.bingbunny.com/sites/default/files/styles/l08_072000_1152x648/public/2023-05/DB0423B6-1117-4EEE-A1F3-4CC3EB04A0AA.jpeg.webp?itok=ickq93EW"

        },
        {
            id: 22,
            name: "TEAMO",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVWGmyarvgWKZPjyyT3rqoZgmlciDMZuFvg&s"
        
        },
        {
            id: 33,
            name: "myMelodY",
            img: "https://e1.pngegg.com/pngimages/977/544/png-clipart-my-melody-s-sanrio-character-thumbnail.png"
        }
    ]



    return (
        <div className = "Project">
        <h1 className="find">Personal Project Showcase App</h1>
        
         <form style = {{margin: "15px", display: "flex"}}>
            <p style={{marginBottom: "5px"}}>Title</p>
            <input 
            type = "text"
            name = 'title' //what is the name for??
            placeholder= 'infrunami'
            style = {{padding: "10px", marginBottom: ""}}
            />
            <p style={{marginBottom: "5px"}}>Description</p>
            <input 
            type = "text"
            name = 'Description'
            style = {{padding: "30px", display: "flex", marginBottom: "10px"}}
            ></input>
             <button style={{height: "30px",fontSize: "15px", alignContent: "center", display: "flex", flexWrap: "wrap"}}>ADD</button>

         </form>
        <p className='ProjectList'>Project 1:</p>
          <p className='ProjectList'>Project 1: </p>
            <p className='ProjectList'>Project 1: </p>

        <img src = "#"
        width = "500px" 
        style={{display:'flex', flex: "flex-wrap"}}/>
        <button style={{backgroundColor: "red", width: "50px", height: "35px"}}>Like</button>
        
        </div>
    )
}   

export default App
