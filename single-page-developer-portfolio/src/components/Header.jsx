import Navbar from "./Navbar"
const Header = () => {
  return (
    <header className="text-white text-center md:text-start flex flex-col items-center   md:flex-row-reverse md:items-end gap-10 mx-5 px-5  lg:mx-32 pb-20 border-b border-white relative md:h-screen">
      <Navbar />
      <div className="space-y-10 h-full content-end flex-1">
        <h1 className="p text-4xl md:text-[3rem]  lg:text-start lg:leading-normal font-bold">Nice to meet you! <br /> I&apos;m <span className="underline decoration-eucalyptus" >Mahmood Hashemi.</span> </h1>
        <p className="lg:text-lg" >Based in the Afghanistan, I&apos;m a front-end developer passionate about building accessible web apps that users love.</p>
        <a href="#footer"
          className="uppercase border-b-4 border-eucalyptus p-1 link"
        >Contact Me</a>
      </div>

    </header>
  )
}

export default Header 
