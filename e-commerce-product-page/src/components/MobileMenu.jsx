const MobileMenu = ({ isOpen, onClose }) => {
    return (
      <>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-75 z-40 lg:hidden transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={onClose}
        />
  
        {/* Slide-out menu */}
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 lg:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <button onClick={onClose} className="mb-8">
              <img src="/images/icon-close.svg" alt="close menu" />
            </button>
            <nav className="flex flex-col gap-6">
              <a href="#" className="text-veryDarkBlue font-bold text-lg">Collections</a>
              <a href="#" className="text-veryDarkBlue font-bold text-lg">Men</a>
              <a href="#" className="text-veryDarkBlue font-bold text-lg">Women</a>
              <a href="#" className="text-veryDarkBlue font-bold text-lg">About</a>
              <a href="#" className="text-veryDarkBlue font-bold text-lg">Contact</a>
            </nav>
          </div>
        </div>
      </>
    )
  }
  
  export default MobileMenu
  