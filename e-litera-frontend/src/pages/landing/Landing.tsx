import React, { useRef, useState } from 'react'
import Nav from './componentsLanding/Nav'
import { NAVLIST } from '../../constant/landing/LANDINGCONSTANT'
import { useSectionRefs } from '../../hook/useSectionRefs'
import Hero from './componentsLanding/Hero'
import About from './componentsLanding/About'
import Features from './componentsLanding/Features'
import Upcoming from './componentsLanding/Upcoming'
import Contact from './componentsLanding/Contact'

const Landing = () => {
  
 const sectionRefs = useSectionRefs(NAVLIST)

  const scrollToSection = (sectionkey : string) => {
    const sectionRef = sectionRefs[sectionkey]

    if(sectionkey && sectionRef.current){
      sectionRef.current.scrollIntoView(({
        behavior:'smooth',
        block:'start'
      }))

    }
  }
  return (
    <div>
        <Nav onNavClick={scrollToSection} navlist={NAVLIST}/>
        <div ref={sectionRefs['home']} id='home'>
            <Hero />
        </div>
        <div ref={sectionRefs['about']} id='about'>
            <About />
        </div>
        <div ref={sectionRefs['features']} id='features'>
            <Features />
        </div>

        <div ref={sectionRefs['upcoming']} id='upcoming'>
            <Upcoming />
        </div>
        <div ref={sectionRefs['contact']} id='contact'>
            <Contact />
        </div>
    </div>
  )
}

export default Landing
