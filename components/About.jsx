import Aos from 'aos'
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { HiSparkles,HiHand } from "react-icons/hi";
import { useEffect } from 'react'


const About = () => {

    useEffect(()=>{
        Aos.init({});
    }, []);

  return (
    <div className='flex flex-col lg:flex-row lg:space-x-20 justify-around items-center min-h-screen m-8 lg:ml-12' id="about">

        <div 
         data-aos="fade-right"
        className='lg:basis-2/4'>
          <h1 className='text-lg pb-4 flex flex-row text-white'>
              Hi, I'm Marwa
             <motion.span animate={{}} whileHover={{rotateZ:45, color:"yellow"}}>
             <span><HiHand className='h-8 w-10 ' /></span> 
              </motion.span>
          </h1>
            
            <p className='text-xs leading-loose text-white' >
              I am biology-major turned front-end developer.<br></br>
              I partipated in Re:Coded front-end development bootcamp where I learned mutliple tech and soft skills.<br></br>
               I am contantly exploring new frameworks/libraries and looking for oppurnites to grow as a developer.<br></br>
              I consider art and tech as positive outlets that allow me to combine artistic and problem-solving skills.<br></br>
              Hence, when I am not coding, I am either drawing or reading.<br></br>
              Currently, I am working as a project and partnership coordinator at a local NGO, but I would love to explore new oppurnites as a front-end developer<br></br>
              <a className='text-yellow-300 hover:text-purple-400 flex flex-row' href='#contact'> 
              let's work on something special <HiSparkles/></a> 
              
              
              </p>
              
        </div>
        
        <video 
         data-aos="fade-left" 
         className='lg:basis-1/2 lg:mr-12'
         src="https://media.giphy.com/media/LMcB8XospGZO8UQq87/giphy.mp4" autoPlay loop muted/>

       
    </div>
  )
}

export default About
