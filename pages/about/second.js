import Container from '@/components/layout/Container'
import Image from 'next/image'
import React from 'react'

const SecondSection = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left content */}
                    <div className="flex flex-col gap-3 order-2 md:order-1">
                        <h2 className="text-2xl md:text-4xl text-center md:text-left font-extrabold text-black leading-tight">
                            About Mayfair Weight <br /> Loss Clinic
                        </h2>

                        <p className='para1'>
                            Mayfair Weight Loss Clinic prescribes and delivers clinically guided weight-management services focused on safety, suitability, and sustainable outcomes. All services are assessed by a UK-licensed clinical team and tailored to individual health needs through a structured, medical-led process.
                        </p>
                        <p className='para1'>
                            Our focus is not short-term weight change, but responsible, long-term weight management supported by clinical judgement and evidence-based care. Every patient's journey begins with a medical consultation to determine whether treatment options are appropriate, ensuring decisions are made based on health considerations rather than convenience.
                        </p>
                        <div className='border-[1px] border-[#ccc] py-5 px-3 gap-5 rounded flex flex-row items-center '>
                            <Image src={"/logo.svg"} width={150} height={150} alt='logo' />
                            <p className='para'>
                                Clinically guided weight management UK-licensed clinical team with evidence-based treatments.
                            </p>
                        </div>

                    </div>

                    {/* Right images */}
                    <Image
                        src="/about-img1.jpg"
                        width={500}
                        height={500}
                        className="object-cover order-1 md:order-2"
                        alt="Weight loss"
                    />

                </div>
            </Container>
        </section>
    )
}

export default SecondSection