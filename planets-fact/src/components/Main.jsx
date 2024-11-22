"use client"


import menuIcon from '../assets/icon-menu.png'
import closeIcon from '../assets/icon-close.png'
import sourceIcon from '../assets/icon-source.svg'

import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';


export default function PlanetPage() {
  const { t, i18n } = useTranslation();


  const planetDataObj = t('planets', { returnObjects: true });
  const planetDataArray = Object.entries(planetDataObj)

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [selectedPlanet, setSelectedPlanet] = useState(planetDataArray[0][1]) // Default to Mercury
  const [showMenu, setShowMenu] = useState(false)




  useEffect(() => {
    setActiveTab(1)
  
    setIsExpanded(false)
    setShowMenu(false)

  }, [selectedPlanet])

  useEffect(() => {
    setIsExpanded(false)
  }, [activeTab])

  useEffect(() => {
    const planetDataObj = t('planets', { returnObjects: true });
    const newPlanetDataArray = Object.entries(planetDataObj);
    setSelectedPlanet(newPlanetDataArray[0][1]);
    setActivePage(1)
  }, [i18n.language]);




  const handleMenuToggle = () => {
    setShowMenu(!showMenu)
  }


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };





  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fa' : 'en';
    i18n.changeLanguage(newLang);
    document.body.dir = newLang === 'fa' ? 'rtl' : 'ltr';
  };

  const handlePlanetClick = (planetName, index) => {
    const planet = planetDataArray.find(p => p[1].name === planetName)
    setSelectedPlanet(planet[1])
    setActivePage(index)
  }


  const getActiveContent = () => {
    switch (activeTab) {
      case 1:
        return selectedPlanet.overview
      case 2:
        return selectedPlanet.structure
      case 3:
        return selectedPlanet.geology
      default:
        return selectedPlanet.overview
    }
  }


  const getActiveImage = () => {
    switch (activeTab) {
      case 1:
        return selectedPlanet.images.planet
      case 2:
        return selectedPlanet.images.internal
      case 3:
        return selectedPlanet.images.geology
      default:
        return selectedPlanet.images.planet
    }
  }
  return (
    <div className="min-h-screen  bg-space-black text-white bg-[url('/images/background-stars.svg')] bg-fixed bg-cover bg-center max-w-[1500px] m-auto">


      <select
        onChange={ toggleLanguage}
        value={i18n.language}
        className={`
          
          ${selectedPlanet.name === "Mercury" || selectedPlanet.name === 'عطارد' ? "bg-ocean-blue border-ocean-blue" :
            selectedPlanet.name === "Venus" || selectedPlanet.name === 'زهره' ? "bg-golden-sand border-golden-sand" :
              selectedPlanet.name === "Earth" || selectedPlanet.name === 'زمین' ? "bg-cosmic-purple border-cosmic-purple" :
                selectedPlanet.name === "Mars" || selectedPlanet.name === 'مریخ' ? "bg-mars-red border-mars-red" :
                  selectedPlanet.name === "Jupiter" || selectedPlanet.name === 'مشتری' ? "bg-jupiter-orange border-jupiter-orange" :
                    selectedPlanet.name === "Saturn" || selectedPlanet.name === 'زحل' ? "bg-saturn-rust border-saturn-rust" :
                      selectedPlanet.name === "Uranus" || selectedPlanet.name === 'اورانوس' ? "bg-uranus-teal border-uranus-teal" :
                        "bg-neptune-blue border-neptune-blue"}
          
          px-2 py-1 text-sm rounded-md cursor-pointer absolute z-20 top-3 right-3`}
      >
        <option value="en" className="hover:bg-white hover:text-space-black">English</option>
        <option value="fa" className="hover:bg-white hover:text-space-black">فارسی</option>
      </select>
      <header className="flex justify-between sm:flex-col md:flex-row items-center p-12 sm:border-b border-slate-gray/50    px-6 lg:px-16 relative">
        <h1 className={`text-2xl md:text-4xl uppercase ${i18n.language === 'en' ? "font-antonio" : "font-tanha"} font-bold`}>{t('title')}</h1>
        <img onClick={handleMenuToggle} src={showMenu ? closeIcon : menuIcon} alt="menu icon" className="w-7 cursor-pointer sm:hidden" />
        <nav className={`transitoin-all ${showMenu ? "top-24" : "-top-[800px]"} absolute z-50  right-0 left-0  sm:static flex gap-x-5 sm:items-center sm:justify-center  flex-col sm:flex-row p-5 sm:p-0 bg-space-black sm:bg-transparent w-full sm:w-auto   sm:flex-wrap `}>

          {planetDataArray.map((planet, index) => (

            <div key={index}
              className="flex items-center gap-5 py-4 border-b border-slate-gray/50 sm:border-none"
            >

              {/*  For showing dots in mobile */}
              <div className={`sm:hidden w-5 aspect-square rounded-full ${planet.name === "mercury" ? "bg-ocean-blue" :
                planet[0] === "venus" ? "bg-golden-sand" :
                  planet[0] === "earth" ? "bg-cosmic-purple" :
                    planet[0] === "mars" ? "bg-mars-red" :
                      planet[0] === "jupiter" ? "bg-jupiter-orange" :
                        planet[0] === "saturn" ? "bg-saturn-rust" :
                          planet[0] === "uranus" ? "bg-uranus-teal" :
                            "bg-neptune-blue"
                }`} ></div>
              <button

                key={planet[1].name}
                onClick={() => handlePlanetClick(planet[1].name, index + 1)}
                className={`${i18n.language === 'en' ? "font-spartan" : "font-vazir"}  text-lg sm:text-base font-semibold tracking-widest uppercase  sm:border-t-4  ${activePage === index + 1 ? "" : "sm:hover:border-white/50"} ${activePage === index + 1 ?
                  planet[0] === "mercury" ? " sm:border-ocean-blue" :
                    planet[0] === "venus" ? " sm:border-golden-sand" :
                      planet[0] === "earth" ? " sm:border-cosmic-purple" :
                        planet[0] === "mars" ? "sm:border-mars-red" :
                          planet[0] === "jupiter" ? " sm:border-jupiter-orange" :
                            planet[0] === "saturn" ? " sm:border-saturn-rust" :
                              planet[0] === "uranus" ? " sm:border-uranus-teal" :
                                " sm:border-neptune-blue" : "border-transparent"
                  }
        
                   
                 sm:pt-5 `}>
                {planet[1].name}
              </button></div>
          ))}
        </nav>
      </header>

      <main id='info' className="flex md:mx-20 lg:mx-32  flex-col lg:flex-row items-center justify-between  mt-16  sm:p-0 space-y-8 md:space-y-0 md:space-x-8  ">
        <div className="flex-1  px-20 self-center">
          <img
            src={getActiveImage()}
            alt={`Planet ${selectedPlanet.name}`}
            className=" w-full"
          />
        </div>
        <div className={` ${i18n.language === 'en' ? "font-spartan" : "font-vazir"} flex-1 flex flex-col sm:flex-row md:flex-col w-full gap-5 px-5  md:px-0`}>
          <div className="flex-1">

            <h2 className={`text-2xl md:text-4xl ${i18n.language === 'en' ? "font-antonio" : 'font-tanha'}  mb-4`}>{selectedPlanet.name}</h2>
            <p
              className={`mb-4 ${isExpanded ? '' : ' line-clamp-5'} `}>{getActiveContent().content}</p>

            <button onClick={toggleExpand} className="text-white/50 underline">
              {!isExpanded ? i18n.language === 'en' ? 'Read more' : 'بیشتر بخوانید' : i18n.language === 'en' ? 'Read Less' : 'کمتر نشان دادن'}
            </button>

            <p className="flex items-center gap-2 mt-5 text-sm text-gray-400">
              {i18n.language === 'en' ? "Source:" : "منبع:"} <a href={getActiveContent().source} target='_blank' className="hover:*: gap-2 underline flex items-center">{i18n.language === 'en' ? "Wikipedia" : 'ویکی پدیا'} 

                <img src={sourceIcon} alt="source icon"  />

              </a>
            </p>

          </div>
          <div className="mt-6 flex-1 flex sm:flex-col absolute top-20 right-0 left-0 sm:static">
            {[t('overview'), t('structure'), t("geology")].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index + 1)}
                className={`max-h-20 block w-full ${i18n.language === 'en' ? 'font-antonio' : "font-tanha text-start"} tracking-widest text-sm md:text-lg text-left p-2 md:p-4 mb-2 border uppercase ${activeTab === index + 1 ?
                  selectedPlanet.name === "Mercury" || selectedPlanet.name === 'عطارد' ? "bg-ocean-blue border-ocean-blue" :
                    selectedPlanet.name === "Venus" || selectedPlanet.name === 'زهره' ? "bg-golden-sand border-golden-sand" :
                      selectedPlanet.name === "Earth" || selectedPlanet.name === 'زمین' ? "bg-cosmic-purple border-cosmic-purple" :
                        selectedPlanet.name === "Mars" || selectedPlanet.name === 'مریخ' ? "bg-mars-red border-mars-red" :
                          selectedPlanet.name === "Jupiter" || selectedPlanet.name === 'مشتری' ? "bg-jupiter-orange border-jupiter-orange" :
                            selectedPlanet.name === "Saturn" || selectedPlanet.name === 'زحل' ? "bg-saturn-rust border-saturn-rust" :
                              selectedPlanet.name === "Uranus" || selectedPlanet.name === 'اورانوس' ? "bg-uranus-teal border-uranus-teal" :
                                "bg-neptune-blue border-neptune-blue" : "border-gray-700"
                  }`}
              >
                <span className="hidden sm:inline ml-1 mr-3">{`0${index + 1}`}</span> {tab}
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex  flex-col sm:flex-row md:mx-20 lg:mx-32 justify-beween gap-2 py-4 px-5 md:px-0 text-white ">
        {[
          { label: t('stats.rotation'), value: selectedPlanet.rotation },
          { label: t("stats.revolution"), value: selectedPlanet.revolution },
          { label: t('stats.radius'), value: selectedPlanet.radius },
          { label: t("stats.temperature"), value: selectedPlanet.temperature },
        ].map((stat) => (
          <div key={stat.label} className={`flex items-center sm:items-start justify-between sm:justify-start sm:flex-col w-full text-start border py-2 md:py-y px-2 md:px-5 ${i18n.language === 'en' ? "font-antonio" : "font-yekan"} `}>
            <div>
              <div className="text-base font-semibold uppercase text-gray-400">{stat.label}</div>
            </div>
            <div>
              <p className="text-xl ">{stat.value}</p>
            </div>
          </div>
        ))}
      </footer>
    </div>
  )
}

