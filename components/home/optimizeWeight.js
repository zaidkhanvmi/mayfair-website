"use client"

import React, { useState } from 'react'
import Container from '../layout/Container'
import { Check } from 'lucide-react'
import Image from 'next/image'

const OptimizeWeight = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const optimize_content = [
        {
            title: "Weight Loss Medication",
            para1: "Obesity is complex and there are a number of physiological factors which are responsible for weight gain. The oversimplistic idea of ‘eat less move more’ simply does not result in weight loss for everyone. A diet and exercise plan alone is not always the answer and an appropriate weight loss medication is needed at that point.",
            para2: "Our clinical team have the expertise and experience in prescribing the appropriate weight loss medication based on your individual needs to help you reach your weight loss goals.",
            image: "/optimize-img1.webp"
        },
        {
            title: "Balanced Diet",
            para1: "A balanced and sensible diet is key to losing and maintaining a healthy weight. It is essentially about how much you eat as well as what you eat. In fact, it is becoming well established that although exercise is vital in maintaining a healthy and active lifestyle, diet is more effective in losing weight than exercise alone.",
            para2: "Reducing your portion size and maintaining this long term is not easy and not always even possible for some of us and a helping hand is required. The importance of GLP-1 for weight loss is well established and is very effective and clinically proven to help control appetite and make one fuller quicker, thereby eating less overall.",
            image: "/optimize-img2.webp"
        },
        {
            title: "Appropriate Exercise",
            para1: "Combining exercise with a healthy diet is a more effective way to lose weight than depending on calorie restriction alone. Physical activity has many health benefits like reduced risk of diabetes, cancer and heart disease, as well as improving mental health and overall mood.",
            para2: "Exercise is helpful for weight loss and maintaining weight loss. Exercise can increase metabolism, or how many calories you burn in a day. It can also help you maintain and increase lean body mass, which also helps increase number of calories you burn each day.",
            image: "/optimize-img3.webp"
        }
    ];

    return (
        <div className='my-10'>
            <Container>
                <div className='flex flex-col gap-5 shadow-lg md:shadow-none rounded-2xl p-3'>
                    <h3 className='text-2xl md:text-[40px] font-bold text-[#7b50c0] md:text-black text-center'>
                        Optimising Weight Loss
                    </h3>
                    <p className='text-center md:text-left text-base font-normal leading-8 text-[#595959] '>
                        The Mayfair weight loss clinic team has spent years studying and treating obesity, so we understand how to provide effective and practical weight loss solutions to our patients to help them succeed on their weight loss journey. We have combined the latest clinical evidence and years of knowledge in weight management to design a bespoke online consultation process. The online consultation along with the expertise of our clinical team enables us to recommend and support you with appropriate and effective management treatments.
                    </p>
                    <p className='text-base text-center md:text-left font-normal text-[#595959] '>
                        Below are 3 essential aspects in what brings effective weight loss.
                    </p>
                </div>

                <div className='mt-12 bg-none md:bg-white shadow-md'>

                    <div className='grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-3'>
                        {optimize_content.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`md:border-[1px] border-[#b9b9b9] px-7.5 py-5 flex items-center justify-start md:justify-center gap-2 cursor-pointer hover:bg-[#160647] transition-all delay-75 ${selectedIndex === index ? 'bg-[#8d69c9] md:bg-[#160647] text-white' : 'bg-[#f5f4f4] md:hover:bg-[#160647] hover:text-white'} rounded-full md:rounded-none`}
                            >
                                <div
                                    className={`p-0.5 rounded font-bold ${selectedIndex === index ? 'text-[#160647] bg-white' : 'bg-[#a3a3a3] text-white'}`}>
                                    <Check size={18} />
                                </div>
                                <h3
                                    className={`text-lg font-bold ${selectedIndex === index ? "text-white" : "text-black"}`}>
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 items-start mt-5 gap-y-5 md:gap-y-0 p-5 md:p-12'>
                        <div className='flex flex-col gap-7 order-2 md:order-1'>
                            <h3 className='text-2xl md:text-3xl text-[#14ac7b] font-bold text-center md:text-start'>
                                {optimize_content[selectedIndex].title}
                            </h3>
                            <p className='text-base font-normal leading-8 text-left'>
                                {optimize_content[selectedIndex].para1}
                            </p>
                            <p className='text-base font-normal leading-8 text-left'>
                                {optimize_content[selectedIndex].para2}
                            </p>
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
        </div >
    )
}

export default OptimizeWeight