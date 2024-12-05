import CTA from './components/CTA'
import Download from './components/Download'
import FAQ from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <main className="font-rubik">
      <Header />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
