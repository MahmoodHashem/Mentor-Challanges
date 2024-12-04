import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Statistics from "./components/Statistics"
import URLShortener from "./components/URLShortener"
import Hero from './components/Hero'

function App() {

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <URLShortener />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
