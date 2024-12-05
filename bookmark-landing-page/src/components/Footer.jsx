import logoLight from '../assets/images/logo-bookmark-footer.svg'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'

const Footer = () => {
  return (
    <footer className="bg-neutral-veryDarkBlue py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
            <img src={logoLight} alt="Bookmark" className="mb-6 md:mb-0" />
            
            <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-white uppercase text-sm tracking-wide">
              <a href="#features" className="hover:text-primary-softRed">Features</a>
              <a href="#pricing" className="hover:text-primary-softRed">Pricing</a>
              <a href="#contact" className="hover:text-primary-softRed">Contact</a>
            </nav>
          </div>

          <div className="flex space-x-8 mt-8 md:mt-0">
            <a href="#" className="hover:brightness-0 hover:invert">
              <img src={iconFacebook} alt="Facebook" />
            </a>
            <a href="#" className="hover:brightness-0 hover:invert">
              <img src={iconTwitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
