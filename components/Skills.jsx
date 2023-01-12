import {skillsIcons} from '../util/data/skillsIcons'

const Skills = () => {

  return (
    
    <div className='grid content-center lg:min-h-screen pl-8 pr-8 md:pl-10 md:pr-12' id='skills'>
        <h1 className='pt-8 pb-8'>Skills</h1>
        <div className='grid grid-cols-2 place-items-center lg:grid-cols-5 gap-5 '>
            {skillsIcons.map((skill)=>{
                return (
                    <img
                     data-aos="fade-right"
                     data-aos-duration={`${skill.duration}`}
                     className='h-20 w-30 md:h-48 md:w-86' 
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
