
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close-menu.svg'
import { useState } from 'react'

export default function Nav() {

    const [open, setOpen] = useState(false); 

    function handleMenu(){
        setOpen(prev => !prev)
    }

    return (
        <nav className='flex items-center relative justify-between '>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <img src={open ? close : menu} onClick={handleMenu} className='sm:hidden cursor-pointer' alt="menu" />
            <ul className={`links ${open ? 'flex': 'hidden'} sm:flex sm:flex-row flex-col sm:w-auto w-full sm:rounded-none rounded-lg  sm:text-white
             text-base gap-1 sm:gap-5 sm:static  absolute top-16 z-20 bg-white sm:bg-transparent text-black `}>
                <li className='border-b p-3 sm:border-none sm:p-0' ><a href="#">About</a></li>
                <li className='border-b p-3 sm:border-none sm:p-0' ><a href="#">Discover </a></li>
                <li className=' p-3 sm:p-0' ><a href="#">Get Started</a></li>
            </ul>
        </nav>
    )
}