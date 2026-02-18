"use client"

import { ChevronLeft, ChevronRight, Lock, Stethoscope, Truck } from "lucide-react";
import Container from "../layout/Container";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const router = useRouter();

    const slides = [
        "UK based clinical team",
        "Dispensed from UK based pharmacy",
        "Secure and Tracked Delivery",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        )
    }

    return (
        <>
            {/* Mobile Slides */}
            <div className="w-full md:hidden flex items-center justify-between bg-[#160647] mt-4 p-1.5 z-[100] relative">

                <button onClick={prevSlide} className="text-white">
                    <ChevronLeft size={20} />
                </button>

                <h2 className="text-white text-sm text-center flex-1">
                    {slides[current]}
                </h2>

                <button onClick={nextSlide} className="text-white">
                    <ChevronRight size={20} />
                </button>

            </div>

            <section
                className="w-full min-h-[330px] md:min-h-[260px] lg:min-h-[337px] 2xl:min-h-[550px] bg-cover bg-center flex items-center -mt-7"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')", // put image in /public
                }}
            >
                <div className="max-w-[1140px] mx-auto w-full p-6 ">
                    <div className="max-w-xl text-left mx-0 w-full">
                        <h1 className="text-center md:text-left text-2xl md:text-[40px] 2xl:text-5xl font-semibold leading-tight text-[#12003a]">
                            Your weight loss experts <br />
                            in the heart of London
                        </h1>

                        <p className="text-center md:text-left mt-4 text-lg md:text-xl text-[#2f2f2f]">
                            UK based clinical team and pharmacy all in one place
                        </p>

                        <button
                            type="button"
                            onClick={() => router.push("/available-treatments")}
                            className="mt-6 rounded-full bg-[#7b50c0] px-8 py-3 text-white font-medium hover:bg-[#7b50c0e5] transition cursor-pointer w-full md:w-auto">
                            View Treatments
                        </button>
                    </div>
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
    );
};

export default Hero;
