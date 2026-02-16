"use client";

import { useState } from "react";
import Container from "../layout/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        name: "AMY",
        text: "Ordered on Tuesday and it arrived on Wednesday morning. Very well packed. Excellent service.",
    },

];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

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

                    {/* Slider Wrapper */}
                    <div className="relative flex items-center justify-center">

                        {/* Left Button */}
                        <button
                            onClick={prev}
                            className="cursor-pointer absolute -left-4 md:-left-6 bg-purple-500 z-[100] hover:bg-purple-600 text-white p-2 rounded-full shadow-md transition"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Testimonial Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {testimonials.slice(current, current + 3).map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 ${index === current
                                        ? "opacity-100 scale-100"
                                        : "hidden md:block opacity-70 scale-95"
                                        }`}
                                >
                                    <h4 className="font-semibold text-sm tracking-wide mb-3">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Right Button */}
                        <button
                            onClick={next}
                            className="cursor-pointer absolute -right-4 md:-right-6 bg-purple-500 z-[100] hover:bg-purple-600 text-white p-2 rounded-full shadow-md transition"
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