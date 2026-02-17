import React from 'react'
import Container from '@/components/layout/Container'
import Image from 'next/image'

const Accreditations = () => {

    const accred_items = [
        {
            image: "/accred-img1.webp",
            title: "UK registered pharmacy",
            desc: "The MHRA regulates medicines and medical devices in the UK."
        },
        {
            image: "/accred-img2.webp",
            title: "GPhC regulated pharmacy",
            desc: "The GPhC regulates pharmacists, pharmacy technicians and pharmacies in Great Britain."
        },
        {
            image: "/accred-img3.webp",
            title: "ICO registered website ",
            desc: "The UK's independent authority set up to uphold information rights in the public interest."
        }
    ]

    return (
        <>
            <div className='bg-[#8763c3] custom:bg-[#213570] min-h-[70vh] flex items-start py-10 md:py-0 md:pt-10'>
                <div className='max-w-[1140px] w-full mx-auto px-5 custom:mx-auto'>

                    <div className="flex flex-col gap-3">
                        <h3 className='text-3xl font-bold text-center custom:text-start custom:text-5xl text-white'>
                            Run by experienced health <br className='hidden md:block' /> care professionals
                        </h3>
                        <p className='text-base text-white font-normal text-center custom:text-start'>
                            Our service is led by a qualified clinical team and operates in line with UK regulatory standards. We follow guidance set by the MHRA for medicines and are overseen by a GPhC-regulated pharmacy, ensuring safe handling, review, and supply of prescription treatments. Every request is assessed through a structured medical review to confirm suitability, safety, and responsible prescribing where appropriate.
                        </p>
                        <p className='text-base text-white font-normal text-center custom:text-start'>
                            We are committed to clear, secure, and supportive access to healthcare. Patient information is managed in accordance with ICO data protection requirements, and we prioritise accuracy, discretion, and patient wellbeing at every stage. Clear guidance and professional oversight help ensure medicines are provided with confidence, convenience, and privacy.
                        </p>
                    </div>

                </div>
            </div>

            <Container>
                <div className='max-w-[1140px] w-full mx-0 mt-5 md:-mt-24 custom:-mt-18'>
                    <div className="grid grid-cols-[repeat(1,250px)] custom:grid-cols-[repeat(3,270px)] gap-8 justify-center custom:justify-start">
                        {accred_items.map((item, index) => (
                            <div key={index} className='cursor-pointer group bg-white shadow rounded flex flex-col gap-3 py-5 px-7.5 relative'>
                                <div className="bottom-0 absolute inset-0 bg-[#5B45A7] rounded h-0 group-hover:h-full transition-all duration-300 ease-in-out"></div>
                                <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    alt='image'
                                    className='group-hover:opacity-50 transition-opacity duration-300 ease-in-out'
                                />
                                <h3 className='text-black z-[100] text-base font-bold group-hover:text-white transition-colors duration-300 ease-in-out'>
                                    {item.title}
                                </h3>
                                <p className='text-[15px] z-[100] leading-6 group-hover:text-white transition-colors duration-300 ease-in-out'>
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Accreditations