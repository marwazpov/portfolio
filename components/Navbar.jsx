import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({press}) => {
  const [nav, setNav] = useState(false);
  const [blur, setBlur] = useState(false)
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [logo,setLogo]=useState('/pacman.png')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#00000');
        setBlur('backdrop-blur-sm bg-white/30')
     
      } else {
        setColor('transparent');
        setTextColor('#FFFFFF');
        setBlur('backdrop-filter-none')
        
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);



  const handleHover=()=>{
    setLogo('/ghost.png')

  }
  const handleMouseLeave=()=>{
    setLogo('/pacman.png')

  }

  return (
    <div
      className={`${blur} fixed left-0 top-0 w-full z-10 ease-in duration-100`}
    >
      <div className=' m-auto flex justify-between items-center'>
        <Link href='/'>
          <img className='w-12 ml-2 pt-2 pb-2 md:w-18 md:ml-10' onMouseOver={handleHover} onMouseLeave={handleMouseLeave} src={logo} alt='logo'/>
        </Link>
        <ul style={{ color: `${textColor}` }} className={`${press.className}  text-${textColor} text-xs hidden sm:flex mr-6`}>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#about'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/#skills'>Skills</Link>
          </li>
          <li className='p-4'>
            <Link href='/#projects'>Projects</Link>
          </li>

          <li className='p-4'>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block mr-4 sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-100'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-00'
          }
        >
          <ul className={`${press.className} text-white`}>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#about'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
