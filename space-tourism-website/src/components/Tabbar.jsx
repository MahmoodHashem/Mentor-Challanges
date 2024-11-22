import { useState } from 'react';
import { motion } from "motion/react"

import moon from '../assets/images/destination/image-moon.webp'
import mars from '../assets/images/destination/image-mars.png'
import europa from '../assets/images/destination/image-europa.png'
import titan from '../assets/images/destination/image-titan.png'

const Tabbar = () => {
    const [activeTab, setActiveTab] = useState(0);

 
    const planets = [
        {
            title: "moone",
            description: " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            avgDis: "384,400 km",
            travelTime: "3 days",
            img: moon,
        },
        {
            title: "Mars",
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,  the tallest planetary mountain in our solar system. It’s two and a half times  the size of Everest!",
            avgDis: "225 mil. km",
            travelTime: "9 months",
            img: mars,
        },
        {
            title: "Europa",
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a  winter lover’s dream. With an icy surface, it’s perfect for a bit of  ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            avgDis: "628 mil. km",
            travelTime: "3 years",
            img: europa,
        },
        {
            title: "Titan",
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            avgDis: "1.6 bil. km",
            travelTime: "7 years",
            img: titan,
        },
    ]

 

    return (
        <div className="mx-10 lg:mx-16 font-Barlow-Condensed flex flex-col items-center gap-16 pt-40 " >
            <h2 className="lg:self-start text-xl font-light uppercase tracking-widest "> <span className="ml-5 font-bold">01</span> Pick your Destination</h2>

            <div className="flex items-center  flex-col lg:flex-row gap-6 lg:mx-24 lg:mb-24">
                <motion.div
                    className='w-52 md:w-auto lg:flex-1'
                >
                    <img src={
                        planets[activeTab].img
                    } alt={`${activeTab} image`} />
                </motion.div>
                <div className='flex-1 flex flex-col items-center lg:items-start'>
                    <div className="flex gap-5 relative transition-all">
                        {planets.map((planet, index) => (
                            <button
                                key={index}
                                className={`py-2  font-Barlow-Condensed uppercase tracking-widest text-lg   transition-all ${activeTab === index
                                    ? 'border-b-4 border-white text-white'
                                    : 'text-light-blue-300 hover:text-white hover:border-b-4 border-light-blue-100'
                                    }`}
                                onClick={() => setActiveTab(index)}
                            >
                                {planet.title}
                            </button>
                        ))}
                        <motion.div
                            className="absolute left-0 bottom-0 h-1 z-0 bg-white"
                            layoutId="tab-indicator"
                            initial={false}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 35,
                            }}
                            style={{
                                width: `20%`,
                            }}
                            animate={{
                                x: `${(planets.findIndex((tab, index) => index === activeTab) * 130)}%`,
                            }}
                        />
                    </div>
                    <div className="py-4">
                        <motion.div
                             key={activeTab}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ duration: 0.2 }}
                        
                        className='text-center lg:text-start'>
                            <h2 className='text-6xl uppercase font-Bellefair' >{planets[activeTab].title}</h2>
                            <p className='font-Barlow-Condensed font-extralight tracking-widest mt-5 text-light-blue-300 '>
                                {planets[activeTab].description}
                            </p>
                            <hr className="my-7 border-light-blue-300" />
                            <div className='flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-8'>
                                <div className=''>
                                    <h3 className='text-lg font-Barlow-Condensed uppercase font-light tracking-wider text-light-blue-300'>Avg. distance</h3>
                                    <p className='text-3xl  font-Bellefair uppercase' >{planets[activeTab].avgDis}</p>
                                </div>
                                <div className=' items-center justify-start'>
                                    <h3 className='text-lg font-Barlow-Condensed uppercase font-light tracking-wider text-light-blue-300'>Est. travel time</h3>
                                    <p className='text-3xl  font-Bellefair uppercase'>{planets[activeTab].travelTime}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabbar
