import FreeConsultation from '@/components/shared/freeConsultation'
import TreatmenFaqs from '@/components/treatments/faqs'
import TreatmentHero from '@/components/treatments/hero-section'
import Products from '@/components/treatments/products'
import TakeMeToTop from '@/components/utils/TakeMeToTop'
import React from 'react'

const AvailableTreatments = () => {
    return (
        <>
            <TakeMeToTop />
            <TreatmentHero />
            <Products />
            <TreatmenFaqs />
            <FreeConsultation />
        </>
    )
}

export default AvailableTreatments