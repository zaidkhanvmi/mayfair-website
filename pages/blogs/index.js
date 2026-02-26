import Container from '@/components/layout/Container'
import { blogs, medication_blogs, weight_blogs } from '@/utils/blog'
import { Clock, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogs = () => {
    return (
        <>
            <section className='bg-[#dacfff] md:-mt-7 min-h-[200px] md:min-h-[370px]'>
                <Container>
                    <div className='w-full h-full pt-10 md:pt-[100px] pb-10 border-b-[1px] border-[#343A404D]'>
                        <h1 className='text-3xl text-center md:text-left md:text-[40px] text-[#160647] font-bold'>
                            Blogs
                        </h1>
                        <div className='text-xl md:text-3xl text-[#160647] font-bold flex flex-col gap-3 mt-5 md:mt-10'>
                            <h2 className='text-xl md:text-2xl text-center md:text-left'>
                                Browse by Category
                            </h2>
                            <div className='flex flex-col gap-5 md:flex-row items-center justify-between'>
                                <div className='flex flex-row items-center gap-2'>
                                    <button className='bg-white rounded-full text-[#160647] text-base hover:text-blue-500 cursor-pointer hover:underline px-4 py-2 font-normal'>
                                        Featured
                                    </button>
                                    <button className='bg-white rounded-full text-[#160647] text-base hover:text-blue-500 cursor-pointer hover:underline px-4 py-2 font-normal'>
                                        Medication
                                    </button>
                                    <button className='bg-white rounded-full text-[#160647] text-base hover:text-blue-500 cursor-pointer hover:underline px-4 py-2 font-normal'>
                                        Weight
                                    </button>
                                </div>
                                <div className="relative max-w-xl bg-white rounded-full outline-none border-none flex-[0.5] w-full md:w-auto">
                                    <Search
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                        size={18}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search for an article"
                                        className="w-full text-base pl-12 pr-4 py-3 text-gray-500 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='pb-14 pt-5 bg-[#dacfff] h-auto'>
                <Container>
                    <div className='w-full h-full'>
                        <h1 className='text-xl md:text-[28px] text-[#160647] font-bold'>
                            Featured Articles
                        </h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-0 mt-5 items-stretch'>
                            {blogs.map((item, index) => (
                                <Link key={index} href={`/blogs/${item.slug}`} className='group w-full h-full'>
                                    <Image
                                        src={item.image}
                                        width={350}
                                        height={280}
                                        alt='blog-igm'
                                        className='rounded-tl-2xl rounded-tr-2xl object-cover w-full'
                                    />
                                    <div className='bg-[#f2f3f5] rounded-bl-2xl rounded-br-2xl p-5'>
                                        <h3 className='text-[#212529] cursor-pointer text-xl group-hover:underline font-bold'>
                                            {item.title}
                                        </h3>
                                        <p className='para mt-6 flex flex-row items-center gap-2'>
                                            <span>
                                                <Clock size={15} color='#8d69c9' />
                                            </span>
                                            9 min read
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className='pb-14 mt-5'>
                <Container>
                    <div className='w-full h-full'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src={"https://www.mayfairweightlossclinic.co.uk/wp-content/uploads/2025/07/weight.svg"} width={50} height={50} alt='imae' />
                                <h1 className='text-xl md:text-[28px] text-[#160647] font-bold'>
                                    Weight
                                </h1>
                            </div>
                            <button className='bg-white border-[1px] border-[#8d69c9] rounded-full hover:bg-[#8d69c9] transition-all delay-75 px-5 py-2.5 cursor-pointer text-[#8d69c9] hover:text-white'>
                                Explore Weight
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-0 mt-5 items-stretch'>
                            {weight_blogs.map((item, index) => (
                                <Link href={`/blogs/${item.slug}`} key={index} className='group'>
                                    <Image
                                        src={item.image}
                                        width={350}
                                        height={280}
                                        alt='blog-igm'
                                        className='rounded-tl-2xl rounded-tr-2xl object-fit w-full'
                                    />
                                    <div className='bg-[#f2f3f5] rounded-bl-2xl rounded-br-2xl p-5'>
                                        <h3 className='text-[#212529] cursor-pointer text-xl group-hover:underline font-bold'>
                                            {item.title}
                                        </h3>
                                        <p className='para mt-6 flex flex-row items-center gap-2'>
                                            <span>
                                                <Clock size={15} color='#8d69c9' />
                                            </span>
                                            9 min read
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className='pb-14 mt-5'>
                <Container>
                    <div className='w-full h-full'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image src={"https://www.mayfairweightlossclinic.co.uk/wp-content/uploads/2025/07/medication.svg"} width={50} height={50} alt='imae' />
                                <h1 className='text-xl md:text-[28px] text-[#160647] font-bold'>
                                    Medication
                                </h1>
                            </div>
                            <button className='bg-white border-[1px] border-[#8d69c9] rounded-full hover:bg-[#8d69c9] transition-all delay-75 px-5 py-2.5 cursor-pointer text-[#8d69c9] hover:text-white'>
                                Explore Medication
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-0 mt-5 items-stretch'>
                            {medication_blogs.map((item, index) => (
                                <Link href={`/blogs/${item.slug}`} key={index} className='group'>
                                    <Image
                                        src={item.image}
                                        width={350}
                                        height={280}
                                        alt='blog-igm'
                                        className='rounded-tl-2xl rounded-tr-2xl object-fit w-full'
                                    />
                                    <div className='bg-[#f2f3f5] rounded-bl-2xl rounded-br-2xl p-5'>
                                        <h3 className='text-[#212529] cursor-pointer text-xl group-hover:underline font-bold'>
                                            {item.title}
                                        </h3>
                                        <p className='para mt-6 flex flex-row items-center gap-2'>
                                            <span>
                                                <Clock size={15} color='#8d69c9' />
                                            </span>
                                            9 min read
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Blogs