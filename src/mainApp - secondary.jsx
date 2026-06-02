import {useState} from 'react'
import './style!.css'
import ProjectsDisplay from './components/projectsdisplay'
const projects = [
        {
            id: 11,
            name: "aespa Armageddon - The first full album!",
            img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Aespa_-_Armageddon.jpg",
            test: [1] //why did it only work when I added an array?, why didn't it take projects as the array.

        },
        {
            id: 22,
            name: "aespa Lemonade - The second full album!",
            img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5RNZJr6jgr8TxJUbkyh696D3qwciTXwn0A&s",
            test: [4]

        
        },
        {
            id: 33,
            name: "Karina, miss triple red",
            img: "https://i.pinimg.com/736x/67/1d/e6/671de6a8f5a0604495b65da9a1460df3.jpg",
            test: [7]

        }
    ]

   
function App() {

     const [formData, setFormData] = useState({
        title: "",
        description: "",
        img: ""
    })
    const [ projects , setNewProject] = useState([]) //array of new projects
   


   const handleInputChange = (event) => {
        //object destructuring, {} -> destrucuture an object. [] -> destrucutre an array
       const {name, value} = event.target //target of the event contains name and value of the form
//update the data : synchronous way:
       const newFormData = {
           ...formData,   //spread operator
           [name] : value  // will look for this name key and change it to the new value
        }
          setFormData(newFormData)
    }

  const handleNewProject = (event)=> {
    event.preventDefault() 
    const newProject = {
        id: Date.now(),
        ...formData
  }
    setNewProject([...projects, newProject])

}
 //  const handleSearch = (event) => {
  //  const value = event.target.value
 //   setCurrentProject(value)
  // }
   
 //  const handleSubmit = (event) => {
  //  event.preventDefault()
 //   setToggleSubmit(!toggleSubmit)
 //  }

   const projectAdditions = projects.map((project) => <AddProject project = {project} />) //calling component
        
    return (
        <div className='Webpage' style={{backgroundSize: "1500px" }}>

        <h1 className="find" >Personal Project Showcase App</h1>

        <div className='form' style={{display: "flex",justifyContent: "center"}}>
         <form onSubmit={handleNewProject} style = {{margin: "15px", border: "solid #8e1a1cb6", borderRadius: "7px", display: "flex", flexDirection: "column", width: "500px"}}>

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
            <textarea  //this didn't work initially as it was input instead of textarea
            value= {formData.description}
            onChange={handleInputChange}
            name = 'description'
            placeholder='?'
            style = {{height: "80px",padding: "8px", margin: "5px"}}
            />

            <input 
            type='file'
            style={{margin: "8px"}}
            name = 'IMG'
            value={formData.img}
            ></input>
            
             <button type= "submit" //i also wanted to add an image submission button...
             style={{height: "30px",fontSize: "15px", textAlign: "center", margin: "4px"}}
            > ADD
                </button>
                
         </form>

        
</div>

         <h2>Projects:</h2>

        <h2 className= "newProject">
            {projectAdditions}
         </h2>

         </div>
    )
}   

function AddProject({project}){  //i have to go through tbis ass my button is not submitting a new addition of a project
    return (
        <li>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src = {project.img}></img> 
        </li>
    )
}

export default App
