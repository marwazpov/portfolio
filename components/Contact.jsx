import { useRef } from 'react';
import Render from './Render'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_788kucq', 'template_jjwdsic', form.current, 'l6TBcrNapjj3PIQWq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div  id="contact" className='grid content-center min-h-screen'>
     <h1 className='text-white ml-12 mt-5 text-3xl'>Get in touch</h1>
    
     <div className= 'grid md:grid-cols-2 md:grid-rows-1 pt-5 pb-5 text-xs'> 
      <form className='flex flex-col w-72 ml-12' ref={form} onSubmit={sendEmail}>
      <p  className='text-white mb-5'>
      If you have want to collebrate, have questions, or would love to chat,
       please get in touch using this form
      </p>
        <label className='text-white mb-2'>Name</label>
        <input type="text" name="from_name" />
        <label className='text-white pt-5 mb-2'>Email</label>
        <input  type="email" name="reply_to" />
        <label className='text-white pt-5 mb-2'>Message</label>
        <textarea className='' name="message" />
        <input 
          className='border-solid border-2 mt-7 border-white text-white hover:text-black hover:bg-white hover:opacity-75 hover:rounded-lg'
          type="submit" value="Send" />
      </form>
     
      <Render />
    </div>

    </div>
  )
}

export default Contact

