import Container from '@/components/layout/Container'
import FreeConsultation from '@/components/shared/freeConsultation'
import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='bg-[#dacfff] -mt-7 min-h-[300px]'>
                <Container>
                    <div className='text-center pt-[100px]'>
                        <h1 className='text-2xl text-[40px] text-[#160647] font-bold'>
                            Contact
                        </h1>
                        <p className='para1'>
                            We are here to respond to your queries
                        </p>
                    </div>
                </Container>
            </section>

            <FreeConsultation />
        </>
    )
}

export default Contact