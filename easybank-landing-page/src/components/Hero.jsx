import mockups from '../assets/images/image-mockups.png'
import bgDesktop from '../assets/images/bg-intro-desktop.svg'
import bgMobile from '../assets/images/bg-intro-mobile.svg'

export const Hero = () => {
  return (
    <section className="font-publicSans relative min-h-screen overflow-x-hidden bg-neutral-veryLightGray">
      {/* Background Images Container */}
      <div className="absolute overflow-hidden  w-full h-full">
        <picture className="absolute w-full md:w-2/3 -right-16  -top-16 md:-right-48 md:-top-20">
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" className="w-full" />
        </picture>
        <img 
          src={mockups} 
          alt="Mobile banking mockups" 
          className="absolute  transform -translate-y-1/3 md:translate-y-0 md:-right-24 md:-top-32 md:w-1/2"
        />
      </div>

      {/* Content Container */}
      <div className="container relative top-60 md:-top-10 mx-auto px-6 pb-20 pt-32 md:pb-0 md:pt-48">
        <div className="text-center md:text-left md:w-1/2 relative z-20">
          <h1 className="text-4xl md:text-5xl text-primary-darkBlue font-normal mb-5">
            Next generation digital banking
          </h1>
          <p className="text-neutral-grayishBlue text-body mb-8 max-w-md mx-auto md:mx-0">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <button className="bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan text-neutral-white px-7 py-3 rounded-full hover:opacity-80 transition-opacity">
            Request Invite
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero; 