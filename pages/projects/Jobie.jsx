import {projectsData} from "../../util/data/projectsData"
import { GoMarkGithub } from "react-icons/go";

const Jobie = () => {
  return (
    <div className='portfolio grid items-center min-h-screen '>
       {projectsData.map((project)=>{
        if (project.title === 'Jobie'){
          return(
            <div  key={project.title} className="grid grid-cols-2">
            <h1 className="col-span-2">{project.title}</h1>
            <p>{project.text}</p>
            <img src={project.src} alt={project.title}/>
            <GoMarkGithub/>
         
            
           
            </div>
          )
          
        }
       
        })}
      
    </div>
  )
}

export default Jobie
