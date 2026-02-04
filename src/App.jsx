import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Specialization from './components/Specialization'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer&CTA'


import '@fontsource/inter'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

import './index.css'

function App() {
  return (
    <>
    <div className='bg-neutral-100'>
      <Navbar />

      <Hero />
      </div>

      <main className="bg-white">
        <Logos />
        <Specialization />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}

export default App

