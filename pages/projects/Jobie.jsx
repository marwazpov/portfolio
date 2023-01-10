import {projectsData} from "../../util/data/projectsData"
import { GoMarkGithub } from "react-icons/go";
import {Press_Start_2P} from '@next/font/google'

const press = Press_Start_2P({
  subsets: ['latin'],
  weight : ['400']
})

const Jobie = () => {
  return (
    <div className={`${press.className} portfolio mt-9 grid items-center min-h-screen`}>
       {projectsData.map((project)=>{
        if (project.title === 'Jobie'){
          return(
            <div  key={project.title} className="grid grid-cols-2 space-x-6 pl-12">
            <h1 className="col-span-2 pb-5">{project.title}</h1>
            <p className="text-sm">{project.text} <span><GoMarkGithub className="w-10 h-10"/></span></p>
            <img  className="w-3/4" src={project.src} alt={project.title}/>
            <ul>
              <li>
              <a href={project.link} className="hover:text-purple-400  visited:text-yellow-400" target='_blank'>
              Check code at
              <GoMarkGithub className="w-10 h-8"/>
            </a>
              </li>
              <li>
              <a href={project.link} className="hover:text-purple-400  visited:text-yellow-400" target='_blank'>
              Check code at
              <GoMarkGithub className="w-10 h-8"/>
            </a>
              </li>

            </ul>
           
            
           
            </div>
          )
          
        }
       
        })}
      
    </div>
  )
}

export default Jobie
