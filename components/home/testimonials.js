import React from 'react'
import Container from '../layout/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {testimonials_data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='bg-white rounded p-5 md:py-7.5 md:px-15'>
                                <p className='text-base text-[#3e4555] leading-5 font-normal'>
                                    {item.para}
                                </p>
                                <h3 className='text-[#3e4555] font-medium mt-2'>
                                    {item.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Container>
        </section>
    )
}

export default Testimonials