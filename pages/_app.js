import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader'
import {Press_Start_2P} from '@next/font/google'

const press = Press_Start_2P({
  subsets: ['latin'],
  weight : ['400']
})

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AOS.init({
    })

    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[])
  
   
  return (
    loading?
    <Loader/>:
   
    <>
      <Navbar press={press} />
      <Component press={press} {...pageProps} />
      <Footer press={press}/>
    </>

  )
 
}
