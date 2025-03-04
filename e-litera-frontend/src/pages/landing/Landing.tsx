import React, { useRef, useState } from 'react'
import Nav from './componentsLanding/Nav'
import { NAVLIST } from '../../constant/landing/LANDINGCONSTANT'
import { useSectionRefs } from '../../hook/useSectionRefs'

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
    </div>
  )
}

export default Landing
