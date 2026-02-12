import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'

const ThreeSteps = () => {
    return (
        <div className='pt-18'>
            <Container>
                <div className='max-w-[940px] mx-auto'>
                    <h2 className='text-[40px] font-bold text-center py-5'>How it works</h2>

                    <div className='flex flex-col md:flex-row items-start justify-center gap-12 py-5 relative'>
                        <div className='flex flex-col items-center justify-center gap-3 text-center py-5'>
                            <Image src={"/one.png"} width={80} height={80} className='z-100 pb-10' />
                            <h3 className='text-[22px] font-bold text-[#160647]'>
                                Complete the <br /> consultation form
                            </h3>
                            <p className='text-sm leading-5 font-normal'>
                                Answer a few questions around your health so that your treatment can be prescribed by our healthcare professionals
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3 text-center py-5'>
                            <Image src={"/two.png"} width={80} height={80} className='z-100 pb-10' />
                            <h3 className='text-[22px] font-bold text-[#160647]'>
                                Select Treatment
                            </h3>
                            <p className='text-sm leading-5 font-normal'>
                                Answer a few questions around your health so that your treatment can be prescribed by our healthcare professionals
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3 text-center py-5'>
                            <Image src={"/three.png"} width={80} height={80} className='z-100 pb-10' />
                            <h3 className='text-[22px] font-bold text-[#160647]'>
                                Confirm your order and make payment
                            </h3>
                            <p className='text-sm leading-5 font-normal'>
                                Answer a few questions around your health so that your treatment can be prescribed by our healthcare professionals
                            </p>
                        </div>

                        {/* Image 1 */}
                        <div className="hidden md:block absolute top-2 right-45 w-[27%] h-1/5">
                            <Image
                                src="/threeStepsbg.png"
                                fill
                                alt="steps-bg-1"
                                className="object-contain"
                            />
                        </div>

                        {/* Image 2 (flipped vertically) */}
                        <div className="hidden md:block absolute top-20 left-45 w-[27%] h-1/5">
                            <Image
                                src="/threeStepsbg.png"
                                fill
                                alt="steps-bg-2"
                                className="object-contain scale-y-[-1]"
                            />
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ThreeSteps