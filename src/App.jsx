import { useState } from 'react'
import LogoReveal from './components/LogoReveal.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Services from './components/Services.jsx'
import Solutions from './components/Solutions.jsx'
import Process from './components/Process.jsx'
import Technology from './components/Technology.jsx'
import Products from './components/Products.jsx'
import WhyTervoq from './components/WhyTervoq.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <LogoReveal onComplete={() => setReady(true)} />
      <Navbar />
      <main className="overflow-hidden">
        <Hero ready={ready} />
        <Intro />
        <Services />
        <Solutions />
        <Process />
        <Technology />
        <Products />
        <WhyTervoq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
