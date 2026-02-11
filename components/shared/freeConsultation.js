import React from 'react'
import Container from '../layout/Container'

const FreeConsultation = () => {
    return (
        <section className='bg-[#dacfff] py-10'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-[40px] text-black font-bold'>
                            Start free Consultation
                        </h3>
                        <p className='text-base'>
                            Speak with our clinical team and get personalised advice.
                        </p>
                    </div>
                    <button className='uppercase rounded-full bg-[#5b45a7] px-7 py-3 text-white cursor-pointer'>
                        view treatments
                    </button>
                </div>
            </Container>
        </section>
    )
}

export default FreeConsultation