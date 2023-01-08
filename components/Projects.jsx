
import {projectsData} from "../util/data/projectsData"
import { motion } from "framer-motion"
import { useRouter } from "next/router";
// import Link from "next/link";

function Projects() {

  const router = useRouter();
  const handleClick=(e,path)=>{
  e.preventDefault()
  console.log(path) 
  router.push(`projects/${path}`)
 }
  
  return (
  <div  id="projects" className='grid items-end min-h-screen '>
    
    <h1 className="ml-12 mt-8">Projects</h1>
    
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
    className="relative flex overflow-x-scroll  overflow-y-hidden pb-8 snap-x snap-mandatory">
      {projectsData.map((project)=>{
        return(
          
          <div key={project.title}
           className="flex flex-col text-white flex-shrink-0 snap-center pt-2  w-screen space-y-5 items-center justify-center">
            
          <motion.img 
          initial={{
            y:-300,
            opacity:0
          }}
          transition={{duration: 1.2}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
           src={project.src}/>

          <h1>{project.title}</h1>
         <div className="flex flex-row w-3/4 "> 
             <p className='text-white line-clamp-3 ml-12'>{project.text}</p>
         
            <button  
              onClick={(e) => handleClick(e, `${project.title}`)}
              className='mr-12 bg-white hover:bg-gray-300 hover:text-yellow-500 text-orange-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> 
              Read more
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