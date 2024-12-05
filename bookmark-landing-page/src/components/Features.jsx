import  { useState } from 'react'
import tab1Image from '../assets/images/illustration-features-tab-1.svg'
import tab2Image from '../assets/images/illustration-features-tab-2.svg'
import tab3Image from '../assets/images/illustration-features-tab-3.svg'

const Features = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: 'Simple Bookmarking',
      heading: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      image: tab1Image
    },
    {
      title: 'Speedy Searching',
      heading: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      image: tab2Image
    },
    {
      title: 'Easy Sharing',
      heading: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      image: tab3Image
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-neutral-veryDarkBlue mb-6">Features</h2>
          <p className="max-w-md mx-auto text-neutral-grayishBlue">
            Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-col md:flex-row justify-center mb-10 border-t">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-4 text-neutral-grayishBlue border-b-2 hover:text-primary-softRed md:w-64 relative
                ${activeTab === index ? 'text-neutral-veryDarkBlue border-primary-softRed' : 'border-neutral-grayishBlue/20'}
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 relative">
              <img 
                src={tabs[activeTab].image} 
                alt={tabs[activeTab].title}
                className="relative z-10 w-full"
              />
              <div className="absolute -left-20 top-20 w-full h-80 bg-primary-softBlue rounded-r-full -z-10"></div>
            </div>

            <div className="md:w-1/2 md:pl-20 mt-20 md:mt-0 text-center md:text-left">
              <h3 className="text-3xl font-medium text-neutral-veryDarkBlue mb-6">
                {tabs[activeTab].heading}
              </h3>
              <p className="text-neutral-grayishBlue mb-8">
                {tabs[activeTab].description}
              </p>
              <button className="bg-primary-softBlue text-white px-6 py-3 rounded-md shadow-md hover:bg-white hover:text-primary-softBlue border-2 border-primary-softBlue transition duration-200">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
