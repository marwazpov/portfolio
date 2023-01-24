import { useRef, useState, useEffect } from 'react';
import Render from './Render'
import emailjs from '@emailjs/browser';
import Aos from 'aos'
import "aos/dist/aos.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

  useEffect(()=>{
    Aos.init({});
  }, []);

  const [userName, setUserName]=useState("")
  const [userEmail, setUserEmail]=useState("")
  const [userText, setUserText]=useState("")

  const handleNameChange=(e)=>{
    setUserName(e.target.value)
  }

  const handleEmailChange=(e)=>{
    setUserEmail(e.target.value)
  }

  const handleTextChange = (e) =>{
    setUserText(e.target.value)
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_788kucq', 'template_jjwdsic', form.current, 'l6TBcrNapjj3PIQWq')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
      notify()

  };

  const notify = () => toast("Your message is on its way to my email!");
  return (
    <div  id="contact" className='grid content-center md:h-screen'>
      <ToastContainer theme='dark'/>
     <h1 className='text-white md:pt-8 pt-4 md:ml-12 ml-10 md:text-xl text-lg'>Get in touch</h1>
    
     <div  className= 'grid md:grid-cols-2 md:grid-rows-1 pt-5 pb-5 text-xs'> 
      <form data-aos='fade-right' className='flex flex-col w-72 md:ml-12 ml-10' ref={form} onSubmit={sendEmail}  >
      <p  className='text-white mb-5 text-xs leading-loose'>
      If you want to collaborate, have questions, or would love to chat,
       please get in touch using this form or through my social links below
      </p>
        <label className='text-white mb-2' required>Name</label>
        <input onChange={(e)=>handleNameChange(e)} type="text" name="from_name" required/>
       <span className='text-red-700'>{userName !== "" ? <></>:'What can I call you?'}</span>

        <label className='text-white pt-5 mb-2' htmlFor='email' required>Email</label>
        <input onChange={(e)=>handleEmailChange(e)} type="email" name="reply_to" required />
        <span className='text-red-700'>{userEmail !== "" ? <></>:'Add your email so I can get back to you :)'}</span>



        <label className='text-white pt-5 mb-2' required>Message</label>
        <textarea onChange={(e)=>handleTextChange(e)}  name="message"required />
        <input 
          className='border-solid border-2 mt-7 border-white text-white hover:text-black hover:bg-white hover:opacity-75 hover:rounded-lg'
          type="submit" value="Send" />
          
      </form>
      
     <section data-aos='fade-left'><Render /> </section>
      
    </div>

    </div>
  )
}

export default Contact

