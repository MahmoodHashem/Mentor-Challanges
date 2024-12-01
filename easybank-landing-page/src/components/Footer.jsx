import logo from '../assets/images/logo-white.svg'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconYoutube from '../assets/images/icon-youtube.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconPinterest from '../assets/images/icon-pinterest.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer className="font-publicSans bg-primary-darkBlue py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <img src={logo} alt="Easybank" className="h-5" />
            <div className="flex space-x-4">
              <a href="#" className="hover:brightness-200 transition-all">
                <img src={iconFacebook} alt="Facebook" />
              </a>
              <a href="#" className="hover:brightness-200 transition-all">
                <img src={iconYoutube} alt="YouTube" />
              </a>
              <a href="#" className="hover:brightness-200 transition-all">
                <img src={iconTwitter} alt="Twitter" />
              </a>
              <a href="#" className="hover:brightness-200 transition-all">
                <img src={iconPinterest} alt="Pinterest" />
              </a>
              <a href="#" className="hover:brightness-200 transition-all">
                <img src={iconInstagram} alt="Instagram" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-4 text-center md:text-left">
            <div className="space-y-3">
              <a href="#" className="block text-neutral-white hover:text-primary-limeGreen transition-colors">About Us</a>
              <a href="#" className="block text-neutral-white hover:text-primary-limeGreen transition-colors">Contact</a>
              <a href="#" className="block text-neutral-white hover:text-primary-limeGreen transition-colors">Blog</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-neutral-white hover:text-primary-limeGreen transition-colors">Careers</a>
              <a href="#" className="block text-neutral-white hover:text-primary-limeGreen transition-colors">Support</a>
              <a href="#" className="block text-neutral-white hover:text-primary-limeGreen transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* CTA and Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <button className="bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-7 py-3 rounded-full hover:opacity-80 transition-opacity">
              Request Invite
            </button>
            <p className="text-neutral-grayishBlue text-sm">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer