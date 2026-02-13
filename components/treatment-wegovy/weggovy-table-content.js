import React from 'react'
import Container from '../layout/Container'
import Link from 'next/link'

const WegovyTableContent = () => {
    return (
        <section className='mt-2 py-15 px-12.5 bg-white rounded '>
            <Container>
                <div className='flex flex-col md:flex-row gap-6'>

                    <div className='flex flex-col gap-2 sticky top-10 flex-1'>
                        <div className='flex flex-col gap-3 w-full border-[1px] border-gray-300 rounded-tl-lg rounded-tr-lg'>
                            <div className='bg-[#8d69c9] rounded-tl-lg rounded-tr-lg py-5 text-center w-full'>
                                <h3 className='text-white text-2xl'>
                                    Table of Contents
                                </h3>
                            </div>
                            <ul className='marker:text-[#8d69c9] marker:text-lg list-outside pl-10 pr-5'>
                                <Link href={"#shouldMiss"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        What should I do if I miss a dose of Wegovy?
                                    </li>
                                </Link>
                                <Link href={"#interaction"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        Interactions
                                    </li>
                                </Link>
                                <Link href={"#shouldTakewagovy"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        Who should not take Wegovy?
                                    </li>
                                </Link>
                                <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                    Side effects of Wegovy
                                </li>
                                <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                    How to reduce and manage Wegovy side effects?
                                </li>
                                <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                    Wegovy warnings
                                </li>
                                <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                    Does Wegovy have heart health benefits?
                                </li>
                                <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                    Comparing wegovy with alternative weight loss treatments
                                </li>
                                <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                    What to expect after stopping Wegovy?
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 items-start flex-[1.7]'>
                        <div className='flex flex-col gap-5 border-b-[1px] border-gray-400 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                What should I do if I miss a dose of Wegovy?
                            </h3>
                            <p className='para'>
                                If you miss a dose, timing determines the next step. When fewer than five days have passed since your scheduled injection, take the missed dose as soon as possible and continue on your usual day. If more than five days have passed, skip the missed dose and wait for your next scheduled injection.
                            </p>
                            <p className='para'>
                                Do not take double doses, as this increases side-effect risk without improving results. If you miss two or more doses, speak with our clinical team. They may advise restarting the weight loss shot Wegovy at a lower dose, particularly if digestive side effects occurred previously.
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default WegovyTableContent