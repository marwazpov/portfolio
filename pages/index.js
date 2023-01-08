import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import {Press_Start_2P} from '@next/font/google'
import Contact from '../components/Contact'
import Skills from '../components/Skills'

const press = Press_Start_2P({
    subsets: ['latin'],
    weight : ['400']
})


export default function Home() {
  return (
    <div className={`${press.className} portfolio`}>
      <Head>
       <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <title>Marwa Salameh</title>
      </Head>
  
      <LandingPage/>
      <Skills/>
      <Contact/>

    </div>
    
  )
}
