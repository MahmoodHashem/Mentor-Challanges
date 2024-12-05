import heroImage from '../assets/images/illustration-hero.svg'

const Hero = () => {
  return (
    <section className="container overflow-hidden mx-auto px-6 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 md:pr-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-medium text-neutral-veryDarkBlue mb-6">
            A Simple Bookmark Manager
          </h1>
          <p className="text-neutral-grayishBlue mb-8 max-w-md mx-auto md:mx-0">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="bg-primary-softBlue text-white px-6 py-3 rounded-md shadow-md hover:bg-white hover:text-primary-softBlue border-2 border-primary-softBlue transition duration-200">
              Get it on Chrome
            </button>
            <button className="bg-gray-100 text-neutral-veryDarkBlue px-6 py-3 rounded-md shadow-md hover:bg-white hover:text-neutral-veryDarkBlue border-2 border-gray-100 transition duration-200">
              Get it on Firefox
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 mb-12 md:mb-0 relative">
          <img src={heroImage} alt="Hero illustration" className="w-full" />
          <div className="absolute -right-20 top-20 w-full h-80 bg-primary-softBlue rounded-l-full -z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
