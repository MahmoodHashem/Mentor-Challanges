import Footer from "./Footer"
import Header from "./Header"
import Projects from "./Projects"
import Skills from "./Skills"

const Body = () => {
  return (
    <body className="bg-chineseBlack font-SpaceGrotesk overflow-x-hidden max-w-[1500px] lg:m-auto" >
        <Header/>
        <main className="px-5 md:px-28 lg:px-32">
          <Skills/>
          <Projects/>
        </main>
        <Footer/>
    </body>
  )
}

export default Body
