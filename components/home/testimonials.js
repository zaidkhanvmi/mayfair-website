import React from 'react'
import Container from '../layout/Container'

const Testimonials = () => {

    const testimonials_data = [
        {
            para: "Friendly customer service team, responded promptly and professionally to my questions",
            name: "Mary"
        },
        {
            para: "Ordered on Tuesday and it arrived on Wednesday morning. Very well packed. Excellent service.",
            name: "AMY"
        },
        {
            para: "Very easy and quick consultation process. Weight loss pens arrived the next day.",
            name: "MICHELLE"
        },
    ];

    return (
        <section className='bg-[#e9f6ff] py-[100px]'>
            <Container>
                <h3 className='text-black font-bold text-2xl md:text-[40px] text-center'>
                    What our customers say
                </h3>
                <p className='text-base text-[#8d97ad] py-8 text-center'>
                    We pride ourselves on great customer service. Here are some comments left by our customers.
                </p>
                {/* Testimonials */}
                <div className='flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible'>
                    {testimonials_data.map((item, index) => (
                        <div className='bg-white rounded p-5 w-[200px] md:w-auto md:py-7.5 md:px-15 '>
                            <p className='text-base text-[#3e4555] leading-5 font-normal'>
                                {item.para}
                            </p>
                            <h3 className='text-[#3e4555] font-medium mt-2'>
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Testimonials