"use client"


import menuIcon from '../assets/icon-menu.png'
import closeIcon from '../assets/icon-close.png'

import { useState } from "react"
import data from '../assets/data'


export default function PlanetPage() {
  const [activeTab, setActiveTab] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [selectedPlanet, setSelectedPlanet] = useState(data[0]) // Default to Mercury
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuToggle = () => {
    setShowMenu(!showMenu)
  }

  const handlePlanetClick = (planetName, index) => {
    const planet = data.find(p => p.name === planetName)
    setSelectedPlanet(planet)
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

  console.log(activeTab)



  return (
    <div className="min-h-screen  bg-space-black text-white bg-[url('/images/background-stars.svg')] bg-fixed bg-cover bg-center max-w-[1500px] m-auto">
      <header className="flex justify-between sm:flex-col md:flex-row items-center p-5 sm:border-b border-slate-gray/50    px-6 relative">
        <h1 className="text-4xl uppercase font-antonio font-bold">The Planets</h1>
        <img onClick={handleMenuToggle} src={showMenu ? closeIcon : menuIcon} alt="menu icon" className="w-7 cursor-pointer sm:hidden" />
        <nav className={`transitoin-all ${showMenu ? "top-24" : "-top-[800px]" } absolute  right-0 left-0  sm:static flex gap-x-3 sm:items-center sm:justify-center  flex-col sm:flex-row p-5 sm:p-0 bg-space-black sm:bg-transparent w-full sm:w-auto   sm:flex-wrap `}>
          {data.map((planet, index) => (

            <div key={index}
              className="flex items-center gap-5 py-4 border-b border-slate-gray/50 sm:border-none"
            >
              <div className={`sm:hidden w-5 aspect-square rounded-full ${planet.name === "Mercury" ? "bg-ocean-blue" :
                planet.name === "Venus" ? "bg-golden-sand" :
                  planet.name === "Earth" ? "bg-cosmic-purple" :
                    planet.name === "Mars" ? "bg-mars-red" :
                      planet.name === "Jupiter" ? "bg-jupiter-orange" :
                        planet.name === "Saturn" ? "bg-saturn-rust" :
                          planet.name === "Uranus" ? "bg-uranus-teal" :
                            "bg-neptune-blue"
                }`} ></div>
              <button

                key={planet.name} 
                onClick={() => handlePlanetClick(planet.name, index+1)}
                  className={` font-spartan text-lg sm:text-base font-semibold tracking-widest uppercase  sm:border-t-4  ${activePage === index+1 ? "" : "sm:hover:border-white/50"} ${activePage === index + 1 ? 
                    selectedPlanet.name === "Mercury" ? " sm:border-ocean-blue" :
                    selectedPlanet.name === "Venus" ? " sm:border-golden-sand" :
                    selectedPlanet.name === "Earth" ? " sm:border-cosmic-purple" :
                      selectedPlanet.name === "Mars" ? "sm:border-mars-red" :
                      selectedPlanet.name === "Jupiter" ? " sm:border-jupiter-orange" :
                      selectedPlanet.name === "Saturn" ? " sm:border-saturn-rust" :
                      selectedPlanet.name === "Uranus" ? " sm:border-uranus-teal" :
                        " sm:border-neptune-blue" : "border-transparent"
                   }
        
                   
                 sm:pt-5 `}>
                {planet.name}
              </button></div>
          ))}
        </nav>
      </header>

      <main className="flex md:mx-20 lg:mx-32  flex-col lg:flex-row items-center justify-between  mt-16 p-4 sm:p-0 space-y-8 md:space-y-0 md:space-x-8  ">
        <div className="flex-1  px-20 self-center">
          <img
            src={getActiveImage()}
            alt={`Planet ${selectedPlanet.name}`}
            className=" w-full"
          />
        </div>
        <div className=" flex-1 flex flex-col sm:flex-row md:flex-col w-full gap-5 px-5  md:p-0">
          <div className="flex-1">

            <h2 className="text-5xl font-antonio mb-4">{selectedPlanet.name}</h2>
            <p className="mb-4 font-spartan">{getActiveContent().content}</p>
            <p className="text-sm text-gray-400">
              Source: <a href={getActiveContent().source} className="underline">Wikipedia</a>
            </p>
          </div>
          <div className="mt-6 flex-1 hidden sm:grid">
            {["Overview", "Internal Structure", "Surface Geology"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index + 1)}
                className={`block w-full font-antonio tracking-widest text-base md:text-lg text-left p-2 md:p-4 mb-2 border uppercase ${activeTab === index + 1 ? 
                  selectedPlanet.name === "Mercury" ? "bg-ocean-blue border-ocean-blue" :
                  selectedPlanet.name === "Venus" ? "bg-golden-sand border-golden-sand" :
                  selectedPlanet.name === "Earth" ? "bg-cosmic-purple border-cosmic-purple" :
                    selectedPlanet.name === "Mars" ? "bg-mars-red border-mars-red" :
                    selectedPlanet.name === "Jupiter" ? "bg-jupiter-orange border-jupiter-orange" :
                    selectedPlanet.name === "Saturn" ? "bg-saturn-rust border-saturn-rust" :
                    selectedPlanet.name === "Uranus" ? "bg-uranus-teal border-uranus-teal" :
                            "bg-neptune-blue border-neptune-blue" : "border-gray-700"
                  }`}
              >
                <span className="ml-1 mr-3">{`0${index + 1}`}</span> {tab}
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex  flex-col sm:flex-row md:mx-20 lg:mx-32 justify-beween gap-2 py-4 px-5 md:px-0 text-white ">
        {[
          { label: "Rotation Time", value: selectedPlanet.rotation },
          { label: "Revolution Time", value: selectedPlanet.revolution },
          { label: "Radius", value: selectedPlanet.radius },
          { label: "Average Temp.", value: selectedPlanet.temperature },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center sm:items-start justify-between sm:justify-start sm:flex-col w-full text-start border py-2 md:py-y px-2 md:px-5 font-antonio ">
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

