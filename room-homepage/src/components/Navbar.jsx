import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-10 w-full p-8 md:p-12">
      <div className="flex items-center justify-between md:justify-start lg:space-x-12">
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/images/icon-hamburger.svg" alt="menu" />
        </button>
        <img src="/images/logo.svg" alt="logo" className="mx-auto md:mx-0 md:mr-8" />
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-8 md:p-0 items-center justify-center space-x-4 md:space-x-8`}>
          {isMenuOpen && (
            <button 
              className="absolute left-8 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/images/icon-close.svg" alt="close" />
            </button>
          )}
          <a href="#" className="text-black md:text-white font-spartan hover:underline">home</a>
          <a href="#" className="text-black md:text-white font-spartan hover:underline">shop</a>
          <a href="#" className="text-black md:text-white font-spartan hover:underline">about</a>
          <a href="#" className="text-black md:text-white font-spartan hover:underline">contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
