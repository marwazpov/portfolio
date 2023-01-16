import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



import {Press_Start_2P} from '@next/font/google'

const press = Press_Start_2P({
  subsets: ['latin'],
  weight : ['400']
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
    }
    )},[])
  
   
  return (
    
   
    <>
      <Navbar press={press} />
      <Component press={press} {...pageProps} />
      <Footer press={press}/>
    </>

  )
 
}
