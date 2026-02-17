import React from 'react'
import Hero from './Hero'
import SecondSection from './second'
import Accreditations from './Accreditations'
import DoctorProfile from './doctorProfile'
import TransparencySection from './TransparencySection'
import FreeConsultation from '@/components/shared/freeConsultation'

const About = () => {
  return (
    <>
      <Hero />
      <SecondSection />
      <Accreditations />
      <DoctorProfile />
      <TransparencySection />
      <FreeConsultation />
    </>
  )
}

export default About