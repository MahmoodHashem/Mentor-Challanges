import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    <header className="font-vietnam relative mx-auto py-10 px-10 lg:px-28 bg-[url(/images/bg-tablet-pattern.svg)] md:bg-[url(/images/bg-tablet-pattern.svg)] bg-no-repeat  bg-[right_-4rem_top_-2rem] bg-[length:400px] sm:bg-[length:600px] lg:bg-[length:600px] lg:bg-[right_-10rem_top_-10rem]">
      <Navbar />
      <Hero />
    </header>
  )
}
 
export default Header
