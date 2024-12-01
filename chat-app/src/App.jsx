import Chat from './components/Chat'
import Description from './components/Description'

function App() {
  return (
    <main className="min-h-screen bg-light-grayish-violet font-rubik relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute top-0 -left-32 md:-left-0 w-[500px] h-[800px] rounded-b-full bg-gradient-primary -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute hidden md:block bottom-0 right-0 w-[500px] h-[700px] rounded-t-full bg-very-light-magenta/10 translate-x-1/4 translate-y-1/4"></div>

    <div className=" container mx-auto p  py-16 flex flex-col md:flex-row items-center justify-center gap-20 px-4 z-50" >
      <Chat/>
      <Description/>
    </div>

      
    </main>
  )
}

export default App
