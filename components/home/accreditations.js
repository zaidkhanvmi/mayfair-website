import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'

const Accreditations = () => {
    return (
        <>
            <div className='bg-[#213570] min-h-[412px] flex items-center'>
                <div className='max-w-[1140px] w-full mx-auto'>

                    <div className="flex flex-col gap-5">
                        <h3 className='text-5xl text-white'>Accreditations</h3>
                        <p className='text-base text-white font-medium leading-8'>
                            A passion for putting patients first. That’s always <br />
                            something you look for in a healthcare center.
                        </p>
                    </div>

                </div>
            </div>

            <Container>
                <div className='max-w-[1140px] w-full mx-0 -mt-18'>
                    <div className="grid grid-cols-[repeat(3,270px)] gap-5">
                        <div className='bg-white shadow rounded flex flex-col gap-3 py-5 px-7.5'>
                            <Image src="/accred-img1.webp" width={50} height={50} alt='image' />
                            <h3 className='text-black text-base font-bold'>ICO registered website</h3>
                            <p className='text-[15px] leading-6'>
                                The UK's independent authority set up to uphold information rights in the public interest.
                            </p>
                        </div>
                        <div className='bg-white shadow rounded flex flex-col gap-3 py-5 px-7.5'>
                            <Image src="/accred-img2.webp" width={50} height={50} alt='image' />
                            <h3 className='text-black text-base font-bold'>GPhC regulated pharmacy</h3>
                            <p className='text-[15px] leading-6'>
                                The GPhC regulates pharmacists, pharmacy technicians and pharmacies in Great Britain.
                            </p>
                        </div>
                        <div className='bg-white shadow rounded flex flex-col gap-3 py-5 px-7.5'>
                            <Image src="/accred-img3.webp" width={50} height={50} alt='image' />
                            <h3 className='text-black text-base font-bold'>UK Registered Pharmacy</h3>
                            <p className='text-[15px] leading-6'>
                                The MHRA regulates medicines and medical devices in the UK.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Accreditations