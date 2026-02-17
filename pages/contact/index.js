import Container from '@/components/layout/Container'
import FreeConsultation from '@/components/shared/freeConsultation'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='bg-[#dacfff] -mt-7 min-h-[300px]'>
                <Container>
                    <div className='text-center pt-[100px]'>
                        <h1 className='text-2xl text-[40px] text-[#160647] font-bold'>
                            Contact
                        </h1>
                        <p className='para1'>
                            We are here to respond to your queries
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Us page */}
            <section className="py-20 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">

                        {/* LEFT SIDE */}
                        <div className='p-10'>
                            <h2 className="text-2xl font-semibold border-b-2 border-green-500 inline-block pb-1 mb-8">
                                Contact Information
                            </h2>

                            <div className="space-y-6 text-[#212529]">

                                <div className="flex items-start gap-4 pb-6">
                                    <span className="text-purple-600 text-xl">
                                        <MapPin size={25} />
                                    </span>
                                    <p>
                                        41 Curzon Street, Mayfair, London, W1J 7UB, United Kingdom
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pb-6">
                                    <span className="text-purple-600 text-xl">
                                        <Phone scale={25} />
                                    </span>
                                    <p>+44 (0)20 7550 6515</p>
                                </div>

                                <div className="flex items-center gap-4 pb-6">
                                    <span className="text-purple-600 text-xl">
                                        <Mail size={25} />
                                    </span>
                                    <p>contact@mayfairweightlossclinic.co.uk</p>
                                </div>

                            </div>

                            <div className="mt-10">
                                <h3 className="text-lg font-semibold mb-4">Get updates on:</h3>
                                <div className="flex gap-5 text-[#562f7b] text-2xl font-bold">
                                    <span className="cursor-pointer">f</span>
                                    <span className="cursor-pointer">◎</span>
                                    <span className="cursor-pointer">𝕏</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-[#f9f9fb] p-8 rounded-md shadow-sm">
                            <h2 className="text-2xl font-semibold border-b-2 border-green-500 inline-block pb-1 mb-8">
                                Send us a Message
                            </h2>

                            <form className="space-y-5">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />

                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />

                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[#5b4bb7] text-white py-4 rounded-full font-semibold tracking-wide hover:bg-[#4a3ca0] transition"
                                >
                                    SEND
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <FreeConsultation />
        </>
    )
}

export default Contact