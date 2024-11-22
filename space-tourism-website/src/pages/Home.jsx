
import { Link } from "react-router-dom"

const Home = () => {


  
  return (
    <div className="bg-[url(/home/background-home-mobile.jpg)] min-h-screen w-screen bg-no-repeat bg-cover md:bg-[url(/home/background-home-tablet.jpg)] lg:bg-[url(/home/background-home-desktop.jpg)] bg-fixed h-screen pt-48 overflow-x-hidden">

      <div className="text-light-blue-300 text-center font-Barlow-Condensed text-xl font-extralight p-5 tracking-wider  lg:flex justify-between items-end lg:ml-10 lg:mr-20  lg:h-2/3">
        <div className="lg:text-start lg:w-1/2 ">
          <p className="uppercase ">So, You want tot</p>
          <h1 className="font-Bellefair mt-5 mb-9 text-white text-7xl md:text-8xl uppercase" >Space</h1>
          <p className="md:text-md md:mx-28 lg:mx-0 ">Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>
        </div>

        <Link to="/destination" className="explore-shadow transition-all  font-Bellefair text-2xl  text-dark-blue-900 bg-white grid place-items-center h-48 md:h-60 aspect-square rounded-full uppercase mx-auto lg:mx-0 mt-10"
        
      
        
        >
          Explore
        </Link>
      </div>
    </div>
  )
}

export default Home
