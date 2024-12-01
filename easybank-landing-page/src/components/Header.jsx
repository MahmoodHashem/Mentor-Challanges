import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import Hero from './Hero'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-50 bg-neutral-white">
      <div className="container mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="Easybank logo" className="h-5" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-neutral-grayishBlue hover:text-primary-darkBlue transition-colors">Home</a>
            <a href="#" className="text-neutral-grayishBlue hover:text-primary-darkBlue transition-colors">About</a>
            <a href="#" className="text-neutral-grayishBlue hover:text-primary-darkBlue transition-colors">Contact</a>
            <a href="#" className="text-neutral-grayishBlue hover:text-primary-darkBlue transition-colors">Blog</a>
            <a href="#" className="text-neutral-grayishBlue hover:text-primary-darkBlue transition-colors">Careers</a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-7 py-3 rounded-full hover:opacity-80 transition-opacity">
            Request Invite
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block h-0.5 w-6 bg-primary-darkBlue transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-primary-darkBlue my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-primary-darkBlue transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </nav>
       

        {/* Mobile Menu */}
        {isOpen && (
          <div className="font-publicSans absolute top-20 left-6 right-6 bg-neutral-white p-6 rounded-lg shadow-lg md:hidden z-50">
            <div className="flex flex-col items-center space-y-4">
              <a href="#" className="text-primary-darkBlue">Home</a>
              <a href="#" className="text-primary-darkBlue">About</a>
              <a href="#" className="text-primary-darkBlue">Contact</a>
              <a href="#" className="text-primary-darkBlue">Blog</a>
              <a href="#" className="text-primary-darkBlue">Careers</a>
            </div>
          </div>
        )}
      </div>
      <Hero/>
    </header>
  )
}

export default Header; 