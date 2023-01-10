import {Press_Start_2P} from '@next/font/google'
import { IoIosHeart, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

const press = Press_Start_2P({
    subsets: ['latin'],
    weight : ['400']
})

const Footer = () => {
    return (
      
  <footer className="border-t-2 portfolio" >
  
      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className={`${press.className}  flex gap-3 text-sm text-gray-300 text-center`}>
              Made with love <IoIosHeart className='h-4 w-4 '/>
          </span>
          <div className=" mt-4  sm:justify-center md:mt-0">
            <ul className='flex space-x-6 '>
                <li>
                    <a href="https://www.instagram.com/floatingsol/" className='text-white visited:text-yellow-500' target="_blank"><IoLogoInstagram/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/marwazpov" className='text-white visited:text-yellow-500' target="_blank"><IoLogoGithub/></a>
                </li>

                <li>
                    <a href='https://www.linkedin.com/in/marwa-salameh/' className='text-white visited:text-yellow-500' target="_blank"><IoLogoLinkedin /></a> 
                </li>
                    
              
           

            
            </ul>
          </div>
      </div>
  </footer>
  
    )
  }
  
  export default Footer
  