import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
    }
    )},[])
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
 
}
