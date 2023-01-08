import {skillsIcons} from '../util/data/skillsIcons'

const Skills = () => {

  return (
    
    <div className='grid items-center min-h-screen pl-12 pr-12 mb-8' id='skills'>
        <h1 className='pt-10'>Skills</h1>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-5'>
            {skillsIcons.map((skill)=>{
                return (
                    <img
                     data-aos="fade-right"
                     data-aos-duration={`${skill.duration}`}
                     className='h-20 w-30 md:h-48 md:w-86 ' 
                     key={skill.alt} 
                     src={skill.src} 
                     alt={skill.alt}/>
                )
            })}
   
         </div>
    </div>
    
  )
}

export default Skills
