import {projectsData} from "../../util/data/projectsData"
import { IoLogoGithub, IoGlobeSharp } from "react-icons/io5"
import {Press_Start_2P} from '@next/font/google'

const press = Press_Start_2P({
  subsets: ['latin'],
  weight : ['400']
})

const TheMovieProject = () => {
  return (
    <div className={`${press.className} portfolio mt-9 grid items-center min-h-screen`}>
       {projectsData.map((project)=>{
        if (project.path === 'TheMovieProject'){
          return(
            <div  key={project.title} className="grid grid-cols-2 space-x-6 pl-10 pr-10">
            <h1 className="col-span-2 pb-5">{project.title}</h1>

            <div>
              <p className="text-sm">{project.text}</p>
              
              <div className="flex col-span-2 mt-4"> 
                  <p> check code </p>
                 <a href={project.link} className="hover:text-purple-400  visited:text-yellow-400" target='_blank'>
                  <IoLogoGithub className="w-10 h-8"/> 
                 </a>
               </div>
              
               <div className="flex col-span-2 mt-4"> 
              <p> check site </p>
              <a href={project.link} className="hover:text-purple-400  visited:text-yellow-400" target='_blank'>
                <IoGlobeSharp className="w-10 h-8"/>
               </a>
            </div>
           
          </div>
            
            <img src={project.image} alt={project.title}/>

           
            </div>
          )
          
        }
       
        })}
      
    </div>
  )
}

export default TheMovieProject
