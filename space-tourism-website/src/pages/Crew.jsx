'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

import anousheh from '../assets/images/crew/image-anousheh-ansari.png'
import douglas from '../assets/images/crew/image-douglas-hurley.png'
import mark from '../assets/images/crew/image-mark-shuttleworth.png'
import victor from '../assets/images/crew/image-victor-glover.png'
import Navbar from '../components/Navbar'



export default function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const crew = [

    {
      title: "Commander", 
      name: "Douglas Hurley", 
      bio: " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", 
      img:  douglas
    }, 
    {
      title: "Mission Specialist", 
      name: "Mark Shuttleworth", 
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", 
      img:mark 
    }, 
    {
      title: "Pilot", 
      name: "Victor Glover", 
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ", 
      img: victor
    }, 
    {
      title: "Flight Engineer", 
      name: "Anousheh Ansari", 
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.", 
      img: anousheh
    }
    
 ]


  return (
    <div className="bg-[url(/crew/background-crew-mobile.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)] lg:bg-[url(/crew/background-crew-desktop.jpg)]   min-h-screen bg-no-repeat bg-cover bg-fixed text-white  pt-40 ">

    

      <p className=' text-center md:text-start text-base md:text-xl uppercase tracking-wider md:ml-16  '> <span className='ml-5 font-bold'>02</span> Meet Your Crew </p>

      <div className='flex flex-col lg:flex-row items-center mt-16 text-center lg:text-start mx-10 md:px-16 lg:px-20 relative'>

        <div className='flex-1 '>
          <motion.div
           key={currentIndex}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
           transition={{ duration: 0.2 }}
          className=''>
            <h2 className='font-Bellefair text-xl lg:text-2xl font-light uppercase text-light-blue-300 mt-10'>
              {crew[currentIndex].title} <br />
              <span className='text-3xl lg:text-5xl text-white'>{crew[currentIndex].name}</span>
            </h2>

            <p className='font-Barlow-Condensed text-light-blue-300 text-lg md:text-xl lg:text-2xl font-light mt-10'>{crew[currentIndex].bio}</p>
          </motion.div>
          <div className="flex justify-center gap-4 lg:gap-8 lg:absolute bottom-0 mt-20 mb-8">
            {crew.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 md:w-5 aspect-square  hover:bg-white/70 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 w-60 md:w-96 rounded-lg">
          <img
            key={currentIndex}
            src={crew[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
            className=""
          
          />

        </div>
      </div>
    </div>
  )
}