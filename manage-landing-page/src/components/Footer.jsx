
const Footer = () => {
  return (
    <footer className="bg-neutral-darkBlue  py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-12 justify-center md:justify-between">
          {/* Logo and Social Links */}
          <div className="flex  items-center flex-col-reverse md:flex-col gap-10 justify-between">
            <img src="/images/logo-white.svg" alt="Manage" className="h-8" />
            <div className="flex w-full justify-center space-x-4 mt-8 md:mt-0">
              <a href="#"><img src="/images/icon-facebook.svg" alt="Facebook" className="h-8 hover:fill-primary-red" /></a>
              <a href="#"><img src="/images/icon-youtube.svg" alt="YouTube" className="h-8" /></a>
              <a href="#"><img src="/images/icon-twitter.svg" alt="Twitter" className="h-8" /></a>
              <a href="#"><img src="/images/icon-pinterest.svg" alt="Pinterest" className="h-8" /></a>
              <a href="#"><img src="/images/icon-instagram.svg" alt="Instagram" className="h-8" /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10 justify-around ">
            <div className="text-white space-y-3">
              <a href="#" className="block hover:text-primary-red">Home</a>
              <a href="#" className="block hover:text-primary-red">Pricing</a>
              <a href="#" className="block hover:text-primary-red">Products</a>
              <a href="#" className="block hover:text-primary-red">About Us</a>
            </div>
            <div className="text-white space-y-3">
              <a href="#" className="block hover:text-primary-red">Careers</a>
              <a href="#" className="block hover:text-primary-red">Community</a>
              <a href="#" className="block hover:text-primary-red">Privacy Policy</a>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col space-y-4">
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Updates in your inbox..." 
                className="rounded-full px-4 py-2 flex-1 focus:outline-none"
              />
              <button className="bg-primary-red text-white px-6 py-2 rounded-full hover:opacity-80">
                Go
              </button>
            </form>
           
          </div>
        </div>
        <p className="text-neutral-grayishBlue text-sm text-center md:text-right mt-8">
              Copyright 2024. All Rights Reserved
            </p>
      </div>
    </footer>
  )
}

export default Footer
