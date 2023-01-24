const LandingPage = () => {
    
  return (
    <div className='relative'>
      <video 
      className='h-screen object-cover md:w-full' 
      src="https://media.giphy.com/media/3Z1fKb6plPLM3hMbLs/giphy.mp4" autoPlay loop muted/>
      <div className=' flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h2 
        data-aos="fade-up"
        data-aos-duration="1000" 
        className='pb-3 text-sm md:text-lg intro'>
             Hi, I am Marwa!
        </h2>

        <p 
        data-aos="fade-up"
        data-aos-duration="1200"
        className='pb-3 text-xs text-center intro leading-relaxed'
        >
           a front-end developer who is trying to combine her love for art and tech
        </p>
        
        <button 
        data-aos="fade-up"
        data-aos-duration="1300"
        className=' w-60 md:w-96 bg-white hover:bg-gray-300 hover:text-yellow-500 text-orange-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow'> 
      <a className='text-xs md:text-lg' href="#about">GET TO KNOW ME!</a>
      </button>
      </div>
      

    </div>
  )
}

export default LandingPage
