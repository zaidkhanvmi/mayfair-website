import { Lock, Stethoscope, Truck } from "lucide-react";
import Container from "./layout/Container";

const Hero = () => {
    return (
        <>
            <section
                className="w-full min-h-[330px] md:min-h-[260px] lg:min-h-[337px] 2xl:min-h-[560px] bg-cover bg-center flex items-center justify-start -mt-7"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')", // put image in /public
                }}
            >
                <Container>
                    <div className="max-w-xl text-left">
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#12003a]">
                            Your weight loss experts <br />
                            in the heart of London
                        </h1>

                        <p className="mt-4 text-lg text-[#2f2f2f]">
                            UK based clinical team and pharmacy all in one place
                        </p>

                        <button className="mt-6 rounded-full bg-[#7b50c0] px-8 py-3 text-white font-medium hover:bg-[#7b50c0e5] transition cursor-pointer">
                            View Treatments
                        </button>
                    </div>
                </Container>
            </section>


            <div className="bg-[#e9f6ff]">
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
