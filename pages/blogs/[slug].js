import Container from '@/components/layout/Container';
import WegovyTableContent from '@/components/treatment-wegovy/weggovy-table-content';
import { blogs, weight_blogs, medication_blogs } from '@/utils/blog';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'

const Page = () => {
    const router = useRouter();
    const { slug } = router.query;

    const finBlog = (slug) => {
        let blog = blogs.find(item => item.slug === slug);
        if(!blog) blog = weight_blogs.find(item => item.slug === slug);
        if(!blog) blog = medication_blogs.find(item=> item.slug === slug);
        return blog
    }

    const blog = finBlog(slug);

    if(!blog){
        return(
            <p className='text-black text-center'>
                Blog Not Found!
            </p>
        )
    }

    return (
        <>
            <section>
                <Container>
                    <button
                        type='button'
                        onClick={() => router.push("/blogs")}
                        className='bg-none outline-none border-none text-gray-700 hover:underline cursor-pointer flex flex-row gap-1 items-center py-5'>
                        <span>
                            <ChevronLeft size={20} color='gray' />
                        </span>
                        Back to Blogs
                    </button>

                    {/* Hero Section */}

                    <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
                        {/* Left Content */}
                        <div className="flex-1 bg-[#1B0E4F] p-8 flex flex-col justify-around text-white">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                {blog.title}
                            </h2>
                            <p className="text-sm md:text-base mb-6">
                                {blog.desc}
                            </p>
                            <span className="text-xs opacity-70">Last updated Jan 23, 2026</span>
                        </div>

                        {/* Right Image */}
                        <div className="flex-[1.5]">
                            <Image
                                src={blog.image}
                                width={500}
                                height={500}
                                alt="Smiling woman"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>


                </Container>
            </section>

            <WegovyTableContent />
        </>
    )
}

export default Page