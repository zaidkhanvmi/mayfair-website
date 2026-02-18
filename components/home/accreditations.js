import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'

const Accreditations = () => {

    const accred_items = [
        {
            image: "/accred-img1.webp",
            title: "ICO registered website",
            desc: "The UK's independent authority set up to uphold information rights in the public interest."
        },
        {
            image: "/accred-img2.webp",
            title: "GPhC regulated pharmacy",
            desc: "The GPhC regulates pharmacists, pharmacy technicians and pharmacies in Great Britain."
        },
        {
            image: "/accred-img3.webp",
            title: "UK Registered Pharmacy",
            desc: "The MHRA regulates medicines and medical devices in the UK."
        }
    ]

    return (
        <>
            <div className='bg-[#8763c3] custom:bg-[#213570] min-h-[300px] md:min-h-[412px] flex items-center'>
                <div className='max-w-[1140px] w-full mx-auto px-5 custom:mx-auto'>

                    <div className="flex flex-col gap-5">
                        <h3 className='text-3xl font-bold text-center custom:text-start custom:text-5xl text-white'>Accreditations</h3>
                        <p className='text-base text-white font-normal custom:font-medium text-center custom:text-start leading-5 custom:leading-8'>
                            A passion for putting patients first. That’s always <br className='hidden custom:block' />
                            something you look for in a healthcare center.
                        </p>
                    </div>

                </div>
            </div>

            <Container>
                <div className='max-w-[1140px] w-full mx-0 -mt-18 custom:-mt-18'>
                    <div className="grid grid-cols-1 custom:grid-cols-[repeat(3,270px)] gap-8 justify-center custom:justify-start">
                        {accred_items.map((item, index) => (
                            <div key={index} className='group bg-white shadow rounded flex flex-col gap-3 py-5 px-7.5 relative'>
                                <div className="bottom-0 absolute inset-0 bg-[#B1ACC0] rounded h-0 group-hover:h-full transition-all duration-300 ease-in-out"></div>
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