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
    <div className='flex flex-col lg:flex-row lg:space-x-20 justify-around items-center min-h-screen lg:pl-10 p-4 lg:p-8' id="about">

        <div 
         data-aos="fade-right"
        className='lg:basis-2/4'>
          <h1 className='text-lg pb-4 flex flex-row text-white'>
              Hi, I'm Marwa!
             <motion.span animate={{}} whileHover={{rotateZ:45, color:"yellow"}}>
             <span><HiHand className='h-8 w-10 ' /></span> 
              </motion.span>
          </h1>
            
            <p className='text-xs leading-loose text-white' >
              a biology graduate turned front-end developer.<br></br>
              I partipated in <span className='underline'> <a href='https://www.credential.net/d1fa80d5-d6c9-4c2c-9578-0dd30a00c312' className='visited:text-purple-400' target='_blank'>Re:Coded's</a></span> front-end development bootcamp where I learned mutliple tech and soft skills.<br></br>
              I am contantly exploring new frameworks & libraries as well as looking for oppurnites to grow as a developer.<br></br>
              I consider art and tech as positive and creative outlets that allow me to combine art with problem-solving.<br></br>
              As I love giving back to my community, I am currently working as a project coordinator at a local NGO where I have the privilege of working on many cool projects with social impact.<br></br>
              In my free time, I enjoy reading as well as creating art through <span className='underline'><a href='https://www.instagram.com/floatingsol/' className='visited:text-purple-400' target='_blank'>drawing</a></span> and <span className='underline'><a href="https://www.instagram.com/randomiz.ed/" className='visited:text-purple-400' target='_blank'>photography</a></span>. <br></br>
              <a className='text-yellow-300 hover:text-purple-400 flex flex-row' href='#contact'> 
              <HiSparkles className='w-9 h-7'/> let's work on something special</a> 
              
              
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
