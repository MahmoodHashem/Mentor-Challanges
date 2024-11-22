
import logo from '../assets/images/shared/logo.svg'
import crossIcon from '../assets/images/shared/icon-close.svg'
import menuIcon from '../assets/images/shared/icon-hamburger.svg'
import { useEffect, useRef, useState } from 'react'

import { Link,  useLocation} from 'react-router-dom';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [activeLink, setActiveLink] = useState('/home');

  const navRef = useRef(null)
  const buttonRef = useRef(null)

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  function handleTouch(event){


    if(  navRef.current &&
      !navRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target) ){
      setShowMenu(false)
    }
  }



  function handleMenu() {
    setShowMenu(!showMenu)
  }

  useEffect(()=>{
      window.addEventListener('click', handleTouch)
      return () => {
        window.removeEventListener('click', handleTouch); // Clean up listener
    };

  }, [])


  const location = useLocation(); 

  useEffect(() => {
     setShowMenu(false)
    
  }, [location]);

  return (
        <header className=' relative'>

     
    <nav  className='flex items-center justify-between gap-10 absolute right-0 left-0   z-50 px-7 md:px-0 md:pl-10 pt-5 md:pt-0 lg:pt-14 bg-transparent '>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <button ref={buttonRef} onClick={handleMenu} className='menuIcon md:hidden'>
        <img src={menuIcon} alt="menu icon" />
      </button>
      <ul ref={navRef} className={`flex flex-col gap-5 md:flex-row md:justify-end md:gap-10 font-Barlow-Condensed text-3 text-white uppercase transition-all duration-300 tracking-widest absolute  md:static -top-0 backdrop-blur-2xl md:backdrop-blur-3xl shadow-lg   lg:bg-transparent  h-screen md:h-20 font-extralight w-3/4 md:w-full lg:w-auto lg:pl-10 pl-5 py-5  md:p-0 md:pr-5 md:pt-7 ${showMenu ? 'right-0' : '-right-full'}`} >
        <li className='ml-auto mb-20 pr-5 pt-5 md:hidden  '>
          <img onClick={handleMenu} src={crossIcon} alt="close icon" />
        </li>
        <li className={`${activeLink === '/home' ? "border-r-4 md:border-r-0 md:border-b-4" : ""}`} >
          <Link
            to="/"
            className='space-x-2 md:space-x-8  flex'
            onClick={() => handleLinkClick('/home')}>
            <span className='font-bold md:hidden lg:inline' >00</span>
            <span className='font-extralight' >Home</span>
          </Link>
        </li>
        <li
          className={`${activeLink === '/destination' ? "border-r-4 md:border-r-0 md:border-b-4" : ""}`}  >
          <Link
            onClick={() => handleLinkClick('/destination')}
            to="destination"
            className='space-x-2 md:space-x-8 flex'>
            <span className='font-bold' >01</span> <span >Destination</span>
          </Link>
        </li>
        <li
          className={`${activeLink === '/crew' ? "border-r-4 md:border-r-0 md:border-b-4" : ""}`} >
          <Link
            onClick={() => handleLinkClick('/crew')}
            to="crew"
            className='space-x-2 md:space-x-8 flex'>
            <span className='font-bold' >02</span>
            <span  >Crew</span>
          </Link>
        </li>
        <li className={`${activeLink === '/technology' ? "border-r-4 md:border-r-0 md:border-b-4" : ""}`} >
          <Link
            onClick={() => handleLinkClick('/technology')}
            to="technology"
            className='space-x-2 md:space-x-8 flex'>
            <span className='font-bold' >03</span>
            <span  >Technology</span>
          </Link>
        </li>
      </ul>
    </nav>

    </header>
  )
}

export default Navbar
