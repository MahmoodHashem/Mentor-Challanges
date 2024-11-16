import AOS from 'aos';
import 'aos/dist/aos.css'; 

import {useEffect} from 'react'



const Skills = () => {

    useEffect(() => {
        AOS.init();
      }, [])
      

  return (
    <section className="text-white text-lg grid md:grid-cols-2 lg:grid-cols-3 items-center gap-7 py-8 text-center border-b border-white">
            <div data-aos="fade-right" className="">
                <h2 className="text-3xl md:text-5xl  font-bold " >HTML</h2>
                <p className=" " >1+ Year Experince</p>
            </div>
            <div data-aos="fade-left" className="">
                <h2 className="text-3xl md:text-5xl font-bold ">CSS</h2>
                <p>1+ Year Experince</p>
            </div>
            <div data-aos="fade-right" className="">
                <h2 className="text-3xl md:text-5xl font-bold ">JavaScript</h2>
                <p>1 Year Experince</p>
            </div>
            <div data-aos="fade-left" className="">
                <h2 className="text-3xl md:text-5xl font-bold ">Accessibility</h2>
                <p>1 Year Experince</p>
            </div>
            <div data-aos="fade-left" className="">
                <h2 className="text-3xl md:text-5xl font-bold ">React</h2>
                <p>2 Months Experince</p>
            </div>
            <div data-aos="fade-right" className="">
                <h2 className="text-3xl md:text-5xl font-bold ">Sass</h2>
                <p>2 Months Experince</p>
            </div>
    </section>
  )
}

export default Skills
