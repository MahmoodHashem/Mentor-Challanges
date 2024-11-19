
import logo from '../assets/images/shared/logo.svg'
import crossIcon from '../assets/images/shared/icon-close.svg'
import menuIcon from '../assets/images/shared/icon-hamburger.svg'
import { useState } from 'react'

const Navbar = () => {

const [showMenu, setShowMenu] = useState(false)


function handleMenu(){
  setShowMenu(!showMenu)
}

  return (
    <nav className='flex items-center justify-between gap-10  relative px-7 md:px-0 md:pl-10 pt-5 md:pt-0 lg:pt-14 bg-transparent'>
      <div>
          <img src={logo} alt="logo" />
      </div>
      <button onClick={handleMenu} className='md:hidden'>
        <img src={menuIcon} alt="" />
      </button>
      <ul className={`flex flex-col gap-5 md:flex-row md:justify-end md:gap-10 font-Barlow-Condensed text-3 text-white uppercase transition-all duration-300 tracking-widest absolute md:static -top-5 backdrop-blur-2xl md:backdrop-blur-2xl md:bg-[rgb(24,26,37)] lg:bg-transparent  h-screen md:h-20 font-extralight w-3/4 md:w-full lg:w-1/2 pl-5 py-5  md:p-0 md:pr-5 md:pt-7 ${showMenu ? ' -right-0' : '-right-full'}`} >
        <li className='ml-auto mb-20 pr-5 pt-5 md:hidden '> 
        <img onClick={handleMenu} src={crossIcon} alt="close icon" />
        </li>
        <li className='border-r-4 md:border-r-0 md:border-b-4 ' ><a href="#" className='space-x-2 md:space-x-8  flex'> <span className='font-bold md:hidden lg:inline' >00</span> <span className='font-extralight' >Home</span></a></li>
        <li><a href="#"  className='space-x-2 md:space-x-8 flex'><span className='font-bold' >01</span> <span >Destination</span></a></li>
        <li><a href="#"  className='space-x-2 md:space-x-8 flex'><span className='font-bold' >02</span> <span  >Crew</span></a></li>
        <li><a href="#"  className='space-x-2 md:space-x-8 flex'><span className='font-bold' >03</span> <span  >Technology</span></a></li>
      </ul>
    </nav>
  )
}

export default Navbar
