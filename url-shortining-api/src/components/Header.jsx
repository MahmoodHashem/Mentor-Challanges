import { useState } from 'react'
import Logo from '../assets/images/logo.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="font-poppins  overflow-hidden container mx-auto px-6 py-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <img src={Logo} alt="Shortly" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet font-poppins">Features</a>
            <a href="#pricing" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet font-poppins">Pricing</a>
            <a href="#resources" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet font-poppins">Resources</a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet font-poppins">Login</button>
          <button className="bg-primary-cyan hover:opacity-70 text-white font-poppins px-6 py-2 rounded-full">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`absolute w-full h-0.5 bg-neutral-grayish-violet transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-0'}`}></span>
          <span className={`absolute w-full h-0.5 bg-neutral-grayish-violet transition-all duration-300 ease-in-out top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute w-full h-0.5 bg-neutral-grayish-violet transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-6'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {(
        <div className={`${isMenuOpen ? "fade-in" : "fade-out"} absolute z-[1000] top-20 left-6 right-6 bg-primary-dark-violet rounded-lg p-6 md:hidden`}>
          <div className="flex flex-col items-center gap-6 text-white">
            <a href="#features" className="font-poppins">Features</a>
            <a href="#pricing" className="font-poppins">Pricing</a>
            <a href="#resources" className="font-poppins">Resources</a>
            <div className="w-full h-px bg-neutral-grayish-violet/30"></div>
            <button className="font-poppins">Login</button>
            <button className="w-full bg-primary-cyan hover:opacity-70 font-poppins py-3 rounded-full">Sign Up</button>
          </div>
        </div>
      )}

    </header>
  )
}
