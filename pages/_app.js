import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Press_Start_2P} from '@next/font/google'
import Loader from '../components/Loader';

const press = Press_Start_2P({
  subsets: ['latin'],
  weight : ['400']
})

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
    })
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },7000)
   },[])
  
   
  return (
    loading? 
    <Loader loading={loading}/> :
    <>
      <Navbar press={press} />
      <Component press={press} {...pageProps} />
      <Footer press={press}/>
    </>

  )
 
}
