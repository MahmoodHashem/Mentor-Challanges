import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Header />
      <main className='bg-[url(/images/bg-tablet-pattern.svg)] bg-no-repeat bg-[right_-10rem_top_4rem] bg-[length:400px] sm:bg-[length:600px] lg:bg-[length:600px] md:bg-[right_145%_top_8rem] '>
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
