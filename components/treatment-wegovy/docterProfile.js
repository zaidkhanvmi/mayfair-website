import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'

const DocterProfile = () => {
    return (
        <section className="mt-5 py-8 md:px-12.5 bg-white rounded">
            <Container>
                <div className="flex flex-row items-center gap-5">

                    <div className="w-full p-8 flex flex-col items-center text-center">

                        {/* Profile Image */}
                        <Image
                            width={100}
                            height={100}
                            src="/doctor-profile1.jpg"  
                            alt="Dr John Lekkas"
                            className="rounded-full object-cover mb-4"
                        />

                        {/* Reviewed By */}
                        <h3 className="text-lg font-semibold text-gray-800">
                            Reviewed By:{" "}
                            <span className="text-[#1d9bd1] font-bold">
                                Dr. John Lekkas
                            </span>
                        </h3>

                        {/* GMC */}
                        <p className="text-sm text-gray-700 mt-1">
                            GMC Registration:{" "}
                            <span className="text-[#1d9bd1] font-semibold">
                                7448560
                            </span>
                        </p>

                        {/* Description */}
                        <p className="text-sm text-gray-700 mt-4 max-w-2xl">
                            Dr John Lekkas is a GMC registered medical doctor with a specialist PhD,
                            and is a global leading expert in weight loss and aesthetic medicine.
                        </p>

                        {/* Last reviewed */}
                        <p className="text-xs font-semibold text-gray-800 mt-4">
                            Last reviewed on: 10/02/2026
                        </p>

                    </div>

                </div>
            </Container>
        </section>
    )
}

export default DocterProfile