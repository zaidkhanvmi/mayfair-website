"use client";

import { useRef } from "react";
import Container from "../layout/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import { Navigation } from "swiper/modules"; // Import Navigation module

const testimonials = [
    {
        name: "MICHELLE",
        text: "Very easy and quick consultation process. Weight loss pens arrived the next day.",
    },
    {
        name: "MARY",
        text: "Friendly customer service team, responded promptly and professionally to my questions.",
    },
    {
        name: "AMY",
        text: "Ordered on Tuesday and it arrived on Wednesday morning. Very well packed. Excellent service.",
    },
    {
        name: "JAMES",
        text: "Great experience overall! The product worked perfectly and arrived on time.",
    },
];


const Testimonials = () => {
    const swiperRef = useRef(null); // Swiper reference

    return (
        <section className="mt-5 py-12 bg-white rounded">
            <Container>
                <div className="p-8 md:p-12 relative">

                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">
                            What our customers say
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">
                            We pride ourselves on great customer service. Here are some comments left by our customers.
                        </p>
                    </div>

                    {/* Swiper Wrapper */}
                    <div className="relative flex items-center justify-center">
                        {/* Swiper Component */}
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            navigation={false} // Disable default navigation
                            modules={[Navigation]} // Use Navigation module
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            onSwiper={(swiper) => swiperRef.current = swiper} // Capture the Swiper instance
                            className="w-full"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                        <h4 className="font-semibold text-sm tracking-wide mb-3">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <button
                            onClick={() => swiperRef.current?.slidePrev()} // Ensure swiperRef is not null before calling slidePrev()
                            className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-500 z-[100] hover:bg-purple-600 text-white p-2 rounded-full shadow-md transition cursor-pointer"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()} // Ensure swiperRef is not null before calling slideNext()
                            className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-500 z-[100] hover:bg-purple-600 text-white p-2 rounded-full shadow-md transition cursor-pointer"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
