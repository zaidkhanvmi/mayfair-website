import Container from '@/components/layout/Container'
import { blogs, medication_blogs, weight_blogs } from '@/utils/blog'
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';

const BlogsCarousal = () => {

    const allBlogs = [...blogs, ...weight_blogs, ...medication_blogs];

    return (
        <section>
            <Container>
                <div>
                    <div className='py-5 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-5 mt-5 items-stretch'>
                        {allBlogs.map((item, index) => (
                            <div key={index} className=''>
                                <Image
                                    src={item.image}
                                    width={350}
                                    height={280}
                                    alt='blog-igm'
                                    className='rounded-tl-2xl rounded-tr-2xl object-fit w-full'
                                />
                                <div className='bg-[#f2f3f5] rounded-bl-2xl rounded-br-2xl p-5'>
                                    <Link href={`/blogs/${item.slug}`} className='text-[#212529] cursor-pointer text-xl hover:underline font-bold'>
                                        {item.title}
                                    </Link>
                                    <p className='para mt-6 flex flex-row items-center gap-2'>
                                        <span>
                                            <Clock size={15} color='#8d69c9' />
                                        </span>
                                        9 min read
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BlogsCarousal