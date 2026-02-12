import React from "react"
import Container from "../layout/Container"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const WeightLossClinic = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left content */}
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        <h2 className="text-2xl md:text-4xl text-center md:text-left font-extrabold text-black leading-tight">
                            Why Mayfair Weight Loss <br /> Clinic?
                        </h2>

                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[#1e61e3] mt-1" size={32} />
                                <p className="text-base leading-7">
                                    We are a dedicated weight loss clinic with the most up to date
                                    knowledge and access to the latest medical treatments
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[#1e61e3] mt-1" size={32} />
                                <p className="text-base leading-7">
                                    Run and supported by Healthcare Professionals with years of
                                    experience treating weight loss in the heart of London
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-[#1e61e3] mt-1" size={32} />
                                <p className="text-base leading-7">
                                    UK based prescribers, pharmacy and customer support team,
                                    enabling us to provide you with optimal support on your weight
                                    loss journey
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Right images */}
                    <Image
                        src="/weightLossClinic.png"
                        width={500}
                        height={500}
                        className="object-cover order-1 md:order-2"
                        alt="Weight loss"
                    />

                </div>
            </Container>
        </section>
    )
}

export default WeightLossClinic
