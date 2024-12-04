import IconBrandRecognition from '../assets/images/icon-brand-recognition.svg'
import IconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import IconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'



import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


export default function Statistics() {

    useEffect(() => {
        AOS.init();
    }, [])


  return (
    <section  className="bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-neutral-very-dark-violet mb-4">
            Advanced Statistics
          </h2>
          <p className="text-neutral-grayish-violet text-body max-w-lg mx-auto">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-6"
        >
          {/* Connecting Line */}
          <div  className="absolute top-0 left-1/2 -translate-x-1/2 md:top-1/2 w-2 md:w-full z-0 h-full md:h-2 bg-primary-cyan "
        
          />

          {/* Card 1 */}
          <div data-aos="fade-right" className="bg-white rounded-lg p-8 relative md:mt-0">
            <div className="bg-primary-dark-violet rounded-full p-5 inline-flex -mt-16 mb-6">
              <img src={IconBrandRecognition} alt="Brand Recognition" />
            </div>
            <h3 className="font-bold font-poppins text-xl text-neutral-very-dark-violet mb-4">
              Brand Recognition
            </h3>
            <p className="text-neutral-grayish-violet">
              Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-right"  className="bg-white rounded-lg p-8 relative md:mt-8">
            <div className="bg-primary-dark-violet rounded-full p-5 inline-flex -mt-16 mb-6">
              <img src={IconDetailedRecords} alt="Detailed Records" />
            </div>
            <h3 className="font-bold font-poppins text-xl text-neutral-very-dark-violet mb-4">
              Detailed Records
            </h3>
            <p className="text-neutral-grayish-violet">
              Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
            </p>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-right"  className="bg-white rounded-lg p-8 relative md:mt-16">
            <div className="bg-primary-dark-violet rounded-full p-5 inline-flex -mt-16 mb-6">
              <img src={IconFullyCustomizable} alt="Fully Customizable" />
            </div>
            <h3 className="font-bold font-poppins text-xl text-neutral-very-dark-violet mb-4">
              Fully Customizable
            </h3>
            <p className="text-neutral-grayish-violet">
              Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
