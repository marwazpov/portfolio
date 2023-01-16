import Head from 'next/head'
import { useEffect, useState } from 'react';
import LandingPage from '../components/LandingPage'
import {Press_Start_2P} from '@next/font/google'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects.jsx'
import Loader from '../components/Loader'


const press = Press_Start_2P({
    subsets: ['latin'],
    weight : ['400']
})


export default function Home() {
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },7000)
  },[])

  return (
    <div className={`${press.className} flex-col text-white portfolio`}>
      <Head>
       <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <title>Marwa Salameh</title>
      </Head>
       {/* { loading ? 
          <Loader loading={loading}/> : */}
          <>
            <LandingPage />
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
          </>
     

     
      
      

    </div>
    
  )
}
