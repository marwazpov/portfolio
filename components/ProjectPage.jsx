import { IoLogoGithub, IoGlobeSharp } from "react-icons/io5"
import {Press_Start_2P} from '@next/font/google'

const press = Press_Start_2P({
  subsets: ['latin'],
  weight : ['400']
})

const ProjectPage = ({data,number}) => {
    
  return (
    <div className={`${press.className} text-white portfolio pt-16 grid items-center md:h-screen`}>
       {data.map((project)=>{
       
          return(
            <div  key={project.title} className="lg:grid lg:grid-cols-2 md:space-x-6 md:pl-10 md:pr-10 pl-4">
            <h1 className="col-span-2 pb-5">{project.title}</h1>

            <div>
              <p className="text-xs md:text-sm md:mr-0 mr-9">{project.text}</p>
              
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
            
            <img className="md:w-full  w-80" src={project.image} alt={project.title}/>

           
            </div>
          )
        
        })[number]}
      
    </div>
  )
}

export default ProjectPage
