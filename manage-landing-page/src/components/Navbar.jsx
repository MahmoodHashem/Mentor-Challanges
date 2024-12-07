import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        <div className="logo">
          <img src="/images/logo.svg" alt="Manage Logo" />
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-neutral-grayishBlue">Pricing</a>
          <a href="#" className="hover:text-neutral-grayishBlue">Product</a>
          <a href="#" className="hover:text-neutral-grayishBlue">About Us</a>
          <a href="#" className="hover:text-neutral-grayishBlue">Careers</a>
          <a href="#" className="hover:text-neutral-grayishBlue">Community</a>
        </div>

        <button className="hidden md:block bg-primary-red text-white px-6 py-2 rounded-full hover:opacity-80">
          Get Started
        </button>

        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`absolute w-full h-0.5 bg-primary-blue transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-3' : 'rotate-0 top-0'}`}></span>
          <span className={`absolute w-full h-0.5  bg-primary-blue transition-all duration-300 ease-in-out top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute w-full h-0.5 bg-primary-blue transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-3' : 'rotate-0 top-6'}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        absolute z-10 top-20 left-0 right-0 p-6
        bg-white rounded-lg shadow-lg
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        md:hidden
      `}>
        <div className="flex flex-col items-center space-y-6 font-bold text-primary-blue">
          <a href="#" className="hover:text-neutral-grayishBlue">Pricing</a>
          <a href="#" className="hover:text-neutral-grayishBlue">Product</a>
          <a href="#" className="hover:text-neutral-grayishBlue">About Us</a>
          <a href="#" className="hover:text-neutral-grayishBlue">Careers</a>
          <a href="#" className="hover:text-neutral-grayishBlue">Community</a>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`
          fixed inset-0 bg-gradient-to-b from-black/0 to-black/40
          transform transition-all duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          md:hidden
        `}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  )
}

export default Navbar
