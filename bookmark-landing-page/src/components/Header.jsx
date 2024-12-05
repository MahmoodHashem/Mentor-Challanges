import  { useState } from 'react'
import logo from '../assets/images/logo-bookmark.svg'
import logoLight from '../assets/images/logo-bookmark-light.svg'
import iconHamburger from '../assets/images/icon-hamburger.svg'
import iconClose from '../assets/images/icon-close.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative overflow-hidden container mx-auto p-6">
      <nav className="flex items-center justify-between font-rubik">
        <img src={logo} alt="Bookmark logo" className={`${isMenuOpen ? 'hidden' : 'block'}`} />
        <img src={logoLight} alt="Bookmark logo" className={`${isMenuOpen ? 'block' : 'hidden'}`} />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-neutral-grayishBlue uppercase text-sm tracking-wide">
          <a href="#features" className="hover:text-primary-softRed">Features</a>
          <a href="#pricing" className="hover:text-primary-softRed">Pricing</a>
          <a href="#contact" className="hover:text-primary-softRed">Contact</a>
          <button className="bg-primary-softRed text-white px-8 py-2 rounded-md shadow-md hover:bg-white hover:text-primary-softRed border-2 border-primary-softRed transition duration-200">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img 
            src={isMenuOpen ? iconClose : iconHamburger} 
            alt="Menu" 
            className="w-6"
          />
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-neutral-veryDarkBlue/95 z-40
          flex flex-col items-center
          text-white text-xl text-center
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <div className="w-full px-8 pt-24 space-y-8">
            <a href="#features" className="block py-4 border-t border-neutral-grayishBlue/25 uppercase tracking-widest">
              Features
            </a>
            <a href="#pricing" className="block py-4 border-t border-neutral-grayishBlue/25 uppercase tracking-widest">
              Pricing
            </a>
            <a href="#contact" className="block py-4 border-t border-neutral-grayishBlue/25 uppercase tracking-widest">
              Contact
            </a>
            <a href="#login" className="block py-4 border-t border-neutral-grayishBlue/25 uppercase tracking-widest">
              <button className="w-full border-2 rounded-md py-2 tracking-widest">
                Login
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
