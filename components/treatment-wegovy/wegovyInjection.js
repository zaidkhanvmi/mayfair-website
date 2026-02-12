"use client"

import React, { useState } from 'react'
import Container from '../layout/Container'
import { Check } from 'lucide-react'
import Image from 'next/image'

const WegovyInjection = () => {
    const [currentImg, setCurrentImg] = useState("/wegovy-prod1.png");
    const [currentDosage, setCurrentDosage] = useState(0);

    const dosage_data = [
        {
            price1: "0.25",
            price2: "139",
            desc: "The starting dose of Wegovy is 0.25mg. It costs £139.00 per month (4 weeks). This dose helps your body to adjust to the new weight loss medication."
        },
        {
            price1: "0.5",
            price2: "179",
            desc: "The first continuation dose of Wegovy is 0.5mg. It costs £179.00 per month (4 weeks). It is taken from week 5 to week 8 of starting the weight loss shot."
        },
        {
            price1: "0.25",
            price2: "187",
            desc: "The second continuation dose of Wegovy is 1mg. It costs £187.00 per month (4 weeks). It is preferably taken from week 9 to week 12 of your weight loss journey."
        },
        {
            price1: "0.25",
            price2: "237",
            desc: "The third continuation dose of Wegovy is 1.7mg. It costs £237.00 per month (4 weeks). It is prescribed from week 13 to week 16 of your weight loss journey when the body has adjusted to the weight loss shot."
        },
        {
            price1: "0.25",
            price2: "287",
            desc: "The maintenance dose of Wegovy is 2.4mg. It costs £287.00 per month (4 weeks). It is prescribed from week 17 onwards when your body has completely adjusted to the weight loss shot. You will continue this dose for the remaining duration of your treatment."
        }
    ]

    return (
        <>
            <section className='mt-2 py-15 px-12.5 bg-white rounded '>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>

                        <div className='flex flex-col gap-2'>
                            <Image
                                src={currentImg}
                                width={550}
                                height={302}
                                alt='wegovy product'
                            />
                            <div className='flex flex-row gap-3 items-center'>
                                <Image
                                    src="/wegovy-prod2.png"
                                    width={150}
                                    height={150}
                                    alt='wegovy product'
                                    className='cursor-pointer'
                                    onClick={() => setCurrentImg("/wegovy-prod2.png")}
                                />
                                <Image
                                    src="/wegovy-prod3.png"
                                    width={150}
                                    height={150}
                                    alt='wegovy product'
                                    className='cursor-pointer'
                                    onClick={() => setCurrentImg("/wegovy-prod3.png")}
                                />
                                <Image
                                    src="/wegovy-prod4.png"
                                    width={150}
                                    height={150}
                                    alt='wegovy product'
                                    className='cursor-pointer'
                                    onClick={() => setCurrentImg("/wegovy-prod4.png")}
                                />
                            </div>
                            {/* Doctor Profile */}
                            <div className='bg-[#f4f7fc] px-7.5 py-5 rounded mt-5'>
                                <div className='bg-[#7356a4] rounded-2xl flex flex-row items-center justify-between'>
                                    <Image src="/doctor-profile1.jpg" width={150} height={150} alt='doctor-profile'
                                        className='rounded-tl-2xl rounded-bl-2xl' />
                                    <div className='px-5 text-center'>
                                        <p className='text-base text-white'>Reviewed By: Dr. John Lekkas</p>
                                        <p className='text-base text-white'>GMC Registration: 7448560</p>
                                        <p className='text-sm text-white'>Last reviewed on: 10/02/2026</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 mt-5'>
                                    <h3 className='text-2xl md:text-3xl font-bold text-black'>
                                        Shipping Across the UK
                                    </h3>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Image src="/profile-icon1.png" width={25} height={25} alt='profile-icon' />
                                        <p className='text-base text-[#212529]'>Cold-Chain Transportation</p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Image src="/profile-icon2.png" width={25} height={25} alt='profile-icon' />
                                        <p className='text-base text-[#212529]'>Icon UK Mainland Weekday delivery</p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Image src="/profile-icon3.png" width={25} height={25} alt='profile-icon' />
                                        <p className='text-base text-[#212529]'>Icon Channel Islands (Two-day delivery service)</p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Image src="/profile-icon4.png" width={25} height={25} alt='profile-icon' />
                                        <p className='text-base text-[#212529]'>Icon Northern Ireland (one to two-day delivery service)</p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <Image src="/profile-icon5.png" width={25} height={25} alt='profile-icon' />
                                        <p className='text-base text-[#212529]'>Icon Shipped Monday - Friday</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 items-start'>
                            <span className='bg-[#28a745] px-3 py-2 text-xs text-white rounded-full'>
                                In-stock
                            </span>
                            <h1 className='text-2xl md:text-[40px] font-bold'>
                                Wegovy Injection
                            </h1>
                            <button className='text-white text-base px-5 py-3 bg-[#7b50c0] rounded-full'>
                                Medication Features
                            </button>
                            <ul>
                                <li className='flex flex-row gap-1 text-[15px] text-[#212529]'>
                                    <span>
                                        <Check color='#7b50c0' size={25} />
                                    </span>
                                    Once-weekly weight loss injection
                                </li>
                                <li className='flex flex-row gap-1 text-[15px] text-[#212529]'>
                                    <span>
                                        <Check color='#7b50c0' size={25} />
                                    </span>
                                    Clinically proven weight loss medication
                                </li>
                                <li className='flex flex-row gap-1 text-[15px] text-[#212529]'>
                                    <span>
                                        <Check color='#7b50c0' size={25} />
                                    </span>
                                    Approved for <span className='underline text-[#007bff] cursor-pointer'>weight loss</span>
                                </li>
                                <li className='flex flex-row gap-1 text-[15px] text-[#212529]'>
                                    <span>
                                        <Check color='#7b50c0' size={25} />
                                    </span>
                                    Manufactured by Novo Nordisk
                                </li>
                                <li className='flex flex-row gap-1 text-[15px] text-[#212529]'>
                                    <span>
                                        <Check color='#7b50c0' size={25} />
                                    </span>
                                    Active ingredient: Semaglutide
                                </li>
                            </ul>
                            <p className='text-base text'>
                                Wegovy is a <span className='font-bold'>once-weekly</span> weight loss injection and has an active ingredient called semaglutide that reduces weight by making you feel less hungry. It assists adults who require additional help alongside healthy eating and physical activity.
                            </p>
                            <p className='text-base text'>
                                You may order Wegovy Weight Loss Injection online from the Mayfair Weight Loss Clinic by filling out a free online consultation form. Our weight management clinical team will assess your medical condition and, if it is suitable for you, prescribe you the injection.
                            </p>
                            <p className='text-base text'>
                                Once the medication is approved by our UK registered prescribers, our team will quickly dispense and deliver your weight loss medication to your doorstep.
                            </p>
                            <div className='flex flex-row justify-between items-center w-full'>
                                <h2 className='text-black font-bold text-xl'>
                                    Dosage
                                </h2>
                                <p className='text-xs'>
                                    New to Wegovy? You’ll start on 0.25mg
                                </p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                {dosage_data.map((item, index) => (
                                    <div
                                        onClick={() => setCurrentDosage(index)}
                                        key={index}
                                        className={`border-2 border-[#7B50C0] px-2 py-3.5 rounded cursor-pointer ${currentDosage === index ? "bg-[#ecdfff]" : ""}`}>
                                        <p className='text-sm '>
                                            {item.price1} mg
                                        </p>
                                        <p className='text-sm font-semibold'>
                                            £{Number(item.price2).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <p className='bg-[#F4F7FC] text-sm p-5 text-[#374151'>
                                {dosage_data[currentDosage].desc}
                            </p>
                            <button className='bg-[#8f6ac9] w-full rounded-full text-lg text-white py-3 cursor-pointer'>
                                Start Free Consultation
                            </button>
                        </div>

                    </div>
                </Container>
            </section>

            <section className='mt-5 py-5 px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-row items-center gap-5'>
                        <div className='flex flex-col gap-3 flex-1'>
                            <h2 className='text-3xl font-bold'>
                                What is Wegovy weight loss pen?
                            </h2>
                            <p className='text-base text-[#212529]'>
                                Wegovy weight loss pen is a prescription weight loss injection containing semaglutide, approved by the MHRA and NICE for weight management. It is prescribed for individuals with a BMI of 30 or higher, or 27 or higher with weight-related health conditions like prediabetes or high blood pressure.
                            </p>
                            <p className='text-base text-[#212529]'>
                                Wegovy works by replicating GLP-1, a hormone that helps control appetite, regulate blood sugar, and make you feel fuller for longer. It is taken once a week, with a maximum dose of 2.4mg.
                            </p>
                            <h3 className='text-base font-bold text-black'>
                                This treatment helps by:
                            </h3>
                            <ul className='pl-10'>
                                <li className='list-disc text-base text-[#212529]'>Reducing excessive appetite signals</li>
                                <li className='list-disc text-base text-[#212529]'>Slowing the movement of food through the stomach</li>
                                <li className='list-disc text-base text-[#212529]'>Supporting earlier feelings of fullness</li>
                                <li className='list-disc text-base text-[#212529]'>Encouraging more consistent eating patterns</li>
                            </ul>
                        </div>
                        <div className='flex-1'>
                            <Image src="/wegvoy-prod2.png" width={500} height={450} alt='products' />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default WegovyInjection