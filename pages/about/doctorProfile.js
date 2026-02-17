import Container from '@/components/layout/Container'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DoctorProfile = () => {
    return (
        <>
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Card */}
                        <div className="bg-white shadow-lg rounded-2xl p-8">
                            <div className="flex items-start gap-5">
                                <Image
                                    width={150}
                                    height={150}
                                    src="/doctor-profile1.jpg"
                                    alt="Dr John Lekkas"
                                    className="rounded-xl object-cover"
                                />
                            </div>

                            <div className="mt-6 space-y-4 text-black">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        Dr. John Lekkas
                                    </h3>
                                    <p className="text-[#2db783] font-medium">
                                        GMC Registration: 7448560
                                    </p>
                                </div>
                                <p>
                                    Dr. Ioannis Lekkas is a GMC-registered doctor in the UK with a valid licence to practise.
                                </p>
                                <p>
                                    He has been on the Specialist Register since 2015 and has been practising in the UK since 2013.
                                </p>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                UK-Licensed Clinical Oversight
                            </h2>

                            <div className="space-y-5 text-gray-600">
                                <p>
                                    All medical assessments at Mayfair Weight Loss Clinic are checked by UK-licensed clinicians and follow the required regulations and professional standards.
                                </p>
                                <p>
                                    Prescribing decisions are made by a qualified clinical team after reviewing the information provided during your consultation. Treatment is offered only if it is clinically appropriate and is not guaranteed.
                                </p>
                                <p>
                                    If medication is prescribed, it is supplied after approval and dispensed by a GPhC-regulated pharmacy.
                                </p>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            <section className="py-20 bg-[#e6f0fc]">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">

                        {/* Left content */}
                        <div className="flex flex-col gap-6 flex-1">
                            <h2 className="text-2xl md:text-4xl text-center md:text-left font-extrabold text-black leading-tight">
                                Have confidence in your care
                            </h2>

                            <ul className="flex flex-col gap-5">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Verified online clinic and pharmacy operations
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Commitment to compliance and patient safety
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        LegitScript certified platform
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Prescriptions dispensed under UK pharmacy regulations
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Secure handling with a verified supply chain
                                    </p>
                                </li>

                            </ul>
                        </div>

                        {/* Right images */}
                        <div className='flex flex-col md:flex-row gap-5'>
                            <div className='flex flex-col gap-5 bg-white rounded-2xl hover:translate-y-1 p-5 items-start'>
                                <Image
                                    src={"/footer6.png"}
                                    width={80}
                                    height={80}
                                    alt='logo'
                                />
                                <h3 className='text-lg font-semibold'>
                                    LegitScript certification
                                </h3>
                                <p className='para1'>
                                    LegitScript verifies online clinics and pharmacies for licensing and regulatory compliance.
                                </p>
                                <button className='bg-[#5b45a7] hover:bg-[#213570] py-2.5 px-6 rounded-full cursor-pointer text-white mt-5'>
                                    Verify now
                                </button>
                            </div>
                            <div className='flex flex-col gap-5 bg-white rounded-2xl hover:translate-y-1 cursor-pointer p-5 items-start'>
                                <Image
                                    src={"/register-pharmacy.svg"}
                                    width={80}
                                    height={80}
                                    alt='logo'
                                />
                                <h3 className='text-lg font-semibold'>
                                    Registered Pharmacy
                                </h3>
                                <p className='para1'>
                                    Our partner pharmacy is registered with the General Pharmaceutical Council (GPhC-No: 1039469)
                                </p>
                                <button className='bg-[#5b45a7] hover:bg-[#213570] py-2.5 px-6 rounded-full cursor-pointer text-white mt-5'>
                                    Verify now
                                </button>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <Image
                            src={"/about-img2.jpg"}
                            width={500}
                            height={500}
                            className='object-fill rounded-2xl'
                        />
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl md:text-5xl font-bold text-black'>
                                Our Clinical Approach
                            </h2>
                            <p className='para1'>
                                At Mayfair Weight Loss Clinic, weight management is treated as a medical condition influenced by lifestyle, health history, and individual circumstances. It requires careful evaluation and ongoing professional oversight.
                            </p>
                            <p className='para1'>
                                Before any treatment pathway is considered, our clinical team review each patient’s medical background, current health status, and personal goals. Where treatment is clinically appropriate, recommendations are designed to support healthy lifestyle changes alongside structured clinical guidance.
                            </p>
                            <p>
                                We do not offer standardised solutions. Instead, our approach is built around:
                            </p>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Clinical safety and eligibility
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Individual health needs
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Ongoing monitoring and support
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                    <p className="text-base leading-7">
                                        Clear, informed patient choice
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='py-20'>
                <Container>
                    <h2 className="text-[40px] font-bold text-center py-5">
                        What to Expect From Our Service
                    </h2>

                    <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 py-16">

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center gap-3 flex-1">
                            <Image
                                src="/about-icon1.svg"
                                width={60}
                                height={60}
                                alt="step-1"
                                className='pb-5'
                            />
                            <h3 className="text-xl font-bold text-[#160647]">
                                Online Medical Assessment
                            </h3>
                            <p className="text-sm leading-5">
                                Patients complete a detailed medical questionnaire covering health history, lifestyle factors, and eligibility considerations.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center gap-3 flex-1">
                            <Image
                                src="/about-icon2.svg"
                                width={60}
                                height={60}
                                alt="step-2"
                                className='pb-5'
                            />
                            <h3 className="text-xl font-bold text-[#160647]">
                                Clinical Review
                            </h3>
                            <p className="text-sm leading-5">
                                A UK-licensed clinical team carefully reviews the information provided to determine whether treatment options may be suitable.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center gap-3 flex-1">
                            <Image
                                src="/about-icon3.svg"
                                width={60}
                                height={60}
                                alt="step-2"
                                className='pb-5'
                            />
                            <h3 className="text-xl font-bold text-[#160647]">
                                Treatment Discussion
                            </h3>
                            <p className="text-sm leading-5">
                                If clinically appropriate, suitable options may be discussed; this does not guarantee that any treatment will be prescribed.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center gap-3 flex-1">
                            <Image
                                src="/about-icon4.svg"
                                width={60}
                                height={60}
                                alt="step-2"
                                className='pb-5'
                            />
                            <h3 className="text-xl font-bold text-[#160647]">
                                Ongoing Support
                            </h3>
                            <p className="text-sm leading-5">
                                Patients receive access to clinical guidance and support throughout their treatment, in line with prescriber recommendations.
                            </p>
                        </div>

                        {/* CONNECTOR 1 */}
                        <div className="hidden md:block absolute top-12 left-[14%] w-[21%] h-16">
                            <Image
                                src="/threeStepsbg.png"
                                fill
                                alt="connector-1"
                                className="object-contain"
                            />
                        </div>

                        {/* CONNECTOR 2 (flipped) */}
                        <div className="hidden md:block absolute top-24 left-[40%] w-[20%] h-16">
                            <Image
                                src="/threeStepsbg.png"
                                fill
                                alt="connector-2"
                                className="object-contain scale-y-[-1]"
                            />
                        </div>

                        {/* CONNECTOR 3 */}
                        <div className="hidden md:block absolute top-12 left-[65%] w-[22%] h-16">
                            <Image
                                src="/threeStepsbg.png"
                                fill
                                alt="connector-3"
                                className="object-contain"
                            />
                        </div>

                    </div>
                </Container>

            </section>
        </>
    )
}

export default DoctorProfile