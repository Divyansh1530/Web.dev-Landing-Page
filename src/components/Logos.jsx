import React from 'react'
import Logo from '../assets/LOGO.png'
import Logo1 from '../assets/LOGO1.png'
import Logo2 from '../assets/LOGO2.png'
import Logo3 from '../assets/LOGO3.png'
import Logo4 from '../assets/LOGO4.png'

function Logos() {
  return (
    <section className="bg-white mt-20 pb-10">
      <div className="
        max-w-7xl mx-auto
        px-6
        flex flex-wrap
        justify-center
        items-center
        gap-8
        sm:gap-12
        lg:gap-30
      ">
        <img src={Logo} alt="Logo" className="h-8 sm:h-7 object-contain" />
        <img src={Logo1} alt="Logo1" className="h-8 sm:h-7 object-contain" />
        <img src={Logo2} alt="Logo2" className="h-12 sm:h-10 object-contain" />
        <img src={Logo3} alt="Logo3" className="h-8 sm:h-5 object-contain" />
        <img src={Logo4} alt="Logo4" className="h-8 sm:h-8 object-contain" />
      </div>
    </section>
  )
}

export default Logos
