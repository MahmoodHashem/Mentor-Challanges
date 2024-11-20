'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

import launchVehiclePortrait from '../assets/images/technology/image-launch-vehicle-portrait.jpg'
import launchVehicleLandscapte from '../assets/images/technology/image-launch-vehicle-landscape.jpg'
import capsulePortrait from '../assets/images/technology/image-space-capsule-portrait.jpg'
import capsuleLandscape from '../assets/images/technology/image-space-capsule-landscape.jpg'
import spaceportPortrait from '../assets/images/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../assets/images/technology/image-spaceport-landscape.jpg'

import Navbar from '../components/Navbar'



export default function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const crew = [

    {

      name: "Launch vehicle",
      description: " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: screenWidth > 1024 ? launchVehiclePortrait : launchVehicleLandscapte
    },
    {

      name: "Spaceport",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      img: screenWidth > 1024 ? spaceportPortrait : spaceportLandscape
    },
    {

      name: "Space capsule",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: screenWidth > 1024 ?  capsulePortrait : capsuleLandscape 
    }

  ]


  return (
    <div className="bg-[url(/technology/background-technology-mobile.jpg)] md:bg-[url(/technology/background-technology-tablet.jpg)] lg:bg-[url(/technology/background-technology-desktop.jpg)]   min-h-screen bg-no-repeat bg-cover bg-fixed text-white overflow-x-hidden ">

   

      <p className=' text-center md:text-start text-base md:text-xl uppercase tracking-wider md:ml-16  pt-52 '> <span className='ml-5 font-bold'>03</span> Space Launch 101 </p>

      <div className='grid lg:grid-cols-[100px,_1fr,_1fr] gap-5 lg:row-start-1 items-center mt-16 text-center lg:text-start lg:p-10 '>

        <div className="lg:col-start-3 lg:row-start-1  rounded-lg">
          <img
            key={currentIndex}
            src={crew[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
            className="h-full w-full"

          />
        </div>

        <div className="flex lg:col-start-1 lg:row-start-1 lg:flex-col items-center justify-center gap-4 lg:gap-8  mt-20 mb-8 lg:m-0 ">
            {crew.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`font-Bellefair text-2xl aspect-square px-5 border border-white/30 hover:border-white rounded-full transition-colors ${index === currentIndex ? 'bg-white text-dark-blue-900' : 'bg-transparent '
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index+1}
              </button>
            ))}
          </div>

        <div className=' '>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className=''>
            <h2 className='font-Bellefair text-2xl tracking-wider font-extralight uppercase text-light-blue-300 my-5'>
            The terminology... <br />
            <br />
              <span className='text-3xl lg:text-5xl text-white'>{crew[currentIndex].name}</span>
            </h2>

            <p className='font-Barlow-Condensed text-light-blue-300 text-lg md:text-xl lg:text-2xl font-light m-10 lg:m-0'>{crew[currentIndex].description}</p>
          </motion.div>
          
        </div>

      </div>
    </div>
  )
}