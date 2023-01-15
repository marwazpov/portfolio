
import {projectsData} from "../util/data/projectsData"
import { motion } from "framer-motion"
import { useRouter } from "next/router";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

function Projects() {

  const router = useRouter();
  const handleClick=(e,path)=>{
  e.preventDefault()
  console.log(path) 
  router.push(`projects/${path}`)
 }
 useEffect(()=>{
  Aos.init({});
}, []);

  return (
  <div  id="projects" className='grid content-center md:min-h-screen'>
    
    <h1 className="ml-12 mt-8">Projects</h1>
    <p className='ml-12 text-xs text-yellow-400'>swipe left to see more projects</p>
    
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
    className="relative flex overflow-x-scroll overflow-y-hidden pb-8 snap-x snap-mandatory">
      {projectsData.map((project)=>{
        return(
          
          <div key={project.title}
           className="flex flex-col text-white flex-shrink-0 snap-center pt-2  w-screen space-y-5 items-center justify-center">
            
           <img data-aos="zoom-in" className="w-96" src={project.src}/>

          <h1>{project.title}</h1>
          <div className="flex flex-row w-3/4 "> 
          <p className='text-white text-sm line-clamp-4 ml-12'>{project.text}</p>
         
            <button  
              onClick={(e) => handleClick(e, `${project.path}`)}
              className='mr-12 bg-white hover:bg-gray-300 hover:text-yellow-500 text-orange-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> 
              Learn more
            </button>
         </div>
         
      </div>
  
        )
      })}
    </motion.div>
  </div>
  
  )
}

export default Projects
