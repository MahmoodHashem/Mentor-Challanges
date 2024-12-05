import chromeIcon from '../assets/images/logo-chrome.svg'
import firefoxIcon from '../assets/images/logo-firefox.svg'
import operaIcon from '../assets/images/logo-opera.svg'
import dotsPattern from '../assets/images/bg-dots.svg'

const Card = ({ browser, version, icon, offset }) => (
  <div className={`bg-white rounded-lg shadow-lg text-center px-8 pb-8 ${offset}`}>
    <div className="flex flex-col items-center">
      <img src={icon} alt={browser} className="mt-12 mb-8" />
      <h3 className="text-neutral-veryDarkBlue text-xl font-medium mb-2">Add to {browser}</h3>
      <p className="text-neutral-grayishBlue mb-8">Minimum version {version}</p>
      <img src={dotsPattern} alt="" className="w-full mb-6" />
      <button className="bg-primary-softBlue text-white w-full py-3 rounded-md hover:bg-white hover:text-primary-softBlue border-2 border-primary-softBlue transition duration-200">
        Add & Install Extension
      </button>
    </div>
  </div>
)

const Download = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-neutral-veryDarkBlue mb-6">
            Download the extension
          </h2>
          <p className="max-w-md mx-auto text-neutral-grayishBlue">
            We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <Card 
            browser="Chrome" 
            version="62" 
            icon={chromeIcon} 
            offset="md:mt-0"
          />
          <Card 
            browser="Firefox" 
            version="55" 
            icon={firefoxIcon} 
            offset="md:mt-8"
          />
          <Card 
            browser="Opera" 
            version="46" 
            icon={operaIcon} 
            offset="md:mt-16"
          />
        </div>
      </div>
    </section>
  )
}

export default Download
