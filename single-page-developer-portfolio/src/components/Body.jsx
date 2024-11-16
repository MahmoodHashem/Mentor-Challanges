import Footer from "./Footer"
import Header from "./Header"
import Projects from "./Projects"
import Skills from "./Skills"

const Body = () => {
  return (
    <div className="body bg-chineseBlack font-SpaceGrotesk overflow-x-hidden max-w-[1500px] lg:m-auto" >
        <Header/>
        <main className="px-5 md:px-28 lg:px-32">
          <Skills/>
          <Projects/>
        </main>
        <Footer/>
    </div>
  )
}

export default Body
