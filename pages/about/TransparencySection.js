"use client"

import React, { useState } from 'react'
import Container from "@/components/layout/Container"
import { ArrowUpRight, Check, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const TransparencySection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const optimize_content = [
        {
            title: "Commitment to Patient Safety",
            para1: "Patient safety is central to every aspect of our service. We operate in line with recognised medical guidance and regulatory standards to ensure responsible clinical care.",
            para2: "Our processes are designed to ensure that:",
            firstObjArr: [
                {
                    icon1: "/about-icon5.svg",
                    para1: "Treatment is considered only following a medical assessment"
                },
                {
                    icon1: "/about-icon6.svg",
                    para1: "Contraindications and potential interactions are reviewed carefully"
                },
                {
                    icon1: "/about-icon7.svg",
                    para1: "Patients receive appropriate safety and usage information"
                },
                {
                    icon1: "/about-icon8.svg",
                    para1: "Follow-up and review are encouraged when clinically appropriate"
                }

            ],
            parafirst1: "Patients are encouraged to provide accurate and complete information during consultations to support safe and effective decision-making.",
            image: "/about-img3.png"
        },
        {
            title: "Evidence-Based Weight Management",
            para1: "Our approach to weight management is informed by current clinical evidence and recognised medical guidance.",
            para2: "Outcomes vary between individuals and depend on several factors, including lifestyle, adherence, and underlying health conditions. No treatment is presented as a guaranteed solution. Patients are supported in setting realistic expectations focused on long-term, sustainable progress.",
            image: "/about-img4.png"
        },
        {
            title: "Transparency & Professional Standards",
            para1: "Mayfair is committed to clarity and transparency in how our services operate.",
            para2: "",
            bullet1: "All treatments begin with a medical assessment carried out by a UK-licensed clinical team. This website does not promote or recommend specific prescription medicines.",
            bullet2: "Prices shown are indicative and depend on clinical approval. Payment does not affect prescribing decisions, which are based only on medical suitability and individual health needs.",
            bullet3: "Final prescribing decisions are always made by the clinician.",
            bullet4: "When medication is prescribed, it is supplied by a regulated pharmacy.",
            para3: "We aim to support informed decision-making by providing clear and accurate information at every stage. Information on this website is for general guidance only and does not replace individual medical advice.",
            image: "/about-img5.png"
        }
    ];

    return (
        <>
            <section className='py-20'>
                <Container>
                    <div className='mt-12 bg-none md:bg-white shadow-md'>

                        <div className='grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-3'>
                            {optimize_content.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`group md:border-[1px] border-[#b9b9b9] px-2 py-5 flex items-center justify-center md:justify-self-auto gap-2 cursor-pointer hover:bg-[#160647] transition-all delay-75 ${selectedIndex === index ? 'bg-[#8d69c9] md:bg-[#160647] text-white' : 'bg-[#f5f4f4] md:hover:bg-[#160647] hover:text-white'} rounded-full md:rounded-none`}
                                >
                                    <h3
                                        className={`text-lg font-bold transition delay-75 ${selectedIndex === index ? "text-white" : "text-black group-hover:text-white"}`}>
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-5 gap-y-5 md:gap-y-0 gap-x-0 md:gap-x-12 p-5 md:p-8'>
                            <div className='flex flex-col  gap-7 order-2 md:order-1'>
                                <h3 className='text-2xl md:text-3xl text-[#14ac7b] font-bold text-center md:text-start'>
                                    {optimize_content[selectedIndex].title}
                                </h3>
                                <p className='text-base font-normal text-left'>
                                    {optimize_content[selectedIndex].para1}
                                </p>
                                <p className='text-base font-normal text-left'>
                                    {optimize_content[selectedIndex].para2}
                                </p>
                                {optimize_content[selectedIndex].firstObjArr && (
                                    <>
                                        {optimize_content[selectedIndex].firstObjArr.map((item, index) => (
                                            <p key={index} className='text-base font-normal text-left flex flex-row gap-5'>
                                                <span>
                                                    <Image src={item.icon1} width={30} height={30} alt='icon' />
                                                </span>
                                                {item.para1}
                                            </p>
                                        ))}
                                        <p className='text-base'>
                                            {optimize_content[selectedIndex].parafirst1}
                                        </p>
                                    </>
                                )}
                                {optimize_content[selectedIndex].bullet1 && (
                                    <>
                                        <p className='text-base font-normal text-left flex flex-row gap-5'>
                                            <span>
                                                <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                            </span>
                                            {optimize_content[selectedIndex].bullet1}
                                        </p>
                                        <p className='text-base font-normal text-left flex flex-row gap-5'>
                                            <span>
                                                <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                            </span>
                                            {optimize_content[selectedIndex].bullet2}
                                        </p>
                                        <p className='text-base font-normal text-left flex flex-row gap-5'>
                                            <span>
                                                <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                            </span>
                                            {optimize_content[selectedIndex].bullet3}
                                        </p>
                                        <p className='text-base font-normal text-left flex flex-row gap-5'>
                                            <span>
                                                <CheckCircle className="text-[#1e61e3] mt-1" size={18} />
                                            </span>
                                            {optimize_content[selectedIndex].bullet4}
                                        </p>
                                        <p className='text-base font-normal text-left'>
                                            {optimize_content[selectedIndex].para3}
                                        </p>
                                    </>
                                )}
                            </div>
                            <div className='justify-self-end order-1 md:order-2'>
                                <Image
                                    src={`${optimize_content[selectedIndex].image}`}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                    </div>
                </Container >
            </section>

            <section className="pt-14 bg-[#e6f0fc] flex justify-end">

                <div className='max-w-[1140px] mx-auto'>

                    <div className="flex flex-col gap-20 md:flex-row items-center justify-between">
                        {/* Left content */}
                        <div className="flex flex-col gap-6 flex-1 max-w-xl p-5">
                            <h2 className="text-2xl md:text-4xl text-center md:text-left font-extrabold text-black leading-tight">
                                Supporting Long-Term Weight Management
                            </h2>

                            <p className='para1'>
                                Weight management is an ongoing process, not a one-time intervention. Our service supports patients beyond initial treatment decisions. We encourage healthy habits, appropriate clinical follow-up, and responsible use of prescribed therapies where suitable.
                            </p>
                            <p className='para1'>
                                Patients are advised to maintain open communication with clinical team and to request reassessment if their health circumstances change.
                            </p>
                        </div>

                        {/* Right images */}
                        <Image
                            src={"/about-img6.png"}
                            width={500}
                            height={500}
                            alt='logo'
                            className=''
                        />

                    </div>

                </div>

            </section>

            <section className="py-20">
                <div className="max-w-[1000px] mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        To understand how our services work in more detail, you may wish to explore:
                    </h2>

                    <div className="flex flex-col gap-6">

                        {/* Item */}
                        <div className="flex items-center justify-between cursor-pointer bg-[#e9e9e9] px-6 py-5 rounded-md hover:bg-[#e2e2e2] transition">
                            <p className="text-base md:text-lg font-medium">
                                Visit our Treatments page for an overview of available clinical services.
                            </p>
                            <span className="text-xl text-teal-600">
                                <ArrowUpRight size={25} />
                            </span>
                        </div>

                        <div className="flex items-center justify-between cursor-pointer bg-[#e9e9e9] px-6 py-5 rounded-md hover:bg-[#e2e2e2] transition">
                            <p className="text-base md:text-lg font-medium">
                                Explore our FAQs for common questions about assessments and eligibility.
                            </p>
                            <span className="text-xl text-teal-600">
                                <ArrowUpRight size={25} />
                            </span>
                        </div>

                        <div className="flex items-center justify-between cursor-pointer bg-[#e9e9e9] px-6 py-5 rounded-md hover:bg-[#e2e2e2] transition">
                            <p className="text-base md:text-lg font-medium">
                                Learn more on our Off-Label Prescribing page.
                            </p>
                            <span className="text-xl text-teal-600">
                                <ArrowUpRight size={25} />
                            </span>
                        </div>

                        <div className="flex items-center justify-between cursor-pointer bg-[#e9e9e9] px-6 py-5 rounded-md hover:bg-[#e2e2e2] transition">
                            <p className="text-base md:text-lg font-medium">
                                Read our Privacy Policy and Complaints Procedure for information on patient rights and governance.
                            </p>
                            <span className="text-xl text-teal-600">
                                <ArrowUpRight size={25} />
                            </span>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default TransparencySection