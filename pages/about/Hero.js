import Container from '@/components/layout/Container'
import { Stethoscope, Truck, Lock } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section
                className="w-full min-h-[300px] md:min-h-[260px] lg:min-h-[337px] 2xl:min-h-[550px] bg-cover bg-center flex items-center -mt-7"
                style={{
                    backgroundImage: "url('/about-hero.jpg')",
                }}
            >
                <div className="max-w-[1140px] mx-auto w-full p-6 ">
                    <h1 className='text-[#47317C] text-3xl md:text-5xl text-center font-bold'>
                        About the Clinic
                    </h1>
                </div>

            </section>
            <div className="hidden md:block bg-[#e9f6ff]">
                <Container>
                    <div className="py-5 flex flex-row justify-between">

                        <p className="text-base font-bold text-black flex flex-row items-center gap-2">
                            <span>
                                <Lock size={18} color="#14ac7b" />
                            </span>
                            UK based clinical team
                        </p>

                        <p className="text-base font-bold text-black flex flex-row items-center gap-2">
                            <span>
                                <Stethoscope size={18} color="#14ac7b" />
                            </span>
                            Dispensed from UK based pharmacy
                        </p>

                        <p className="text-base font-bold text-black flex flex-row gap-2 items-center">
                            <span>
                                <Truck size={18} color="#14ac7b" />
                            </span>
                            Secure and Tracked Delivery
                        </p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero