import Container from '@/components/layout/Container'
import { blogs, medication_blogs, weight_blogs } from '@/utils/blog'
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { useRef } from 'react';

const BlogsCarousal = () => {

    const allBlogs = [...blogs, ...weight_blogs, ...medication_blogs];

    // Create a reference for the carousel container
    const carouselRef = useRef(null);

    // Function to scroll the carousel to the left
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -350,
                behavior: 'smooth'
            });
        }
    };

    // Function to scroll the carousel to the right
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 350,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section>
            <Container>
                <div className="relative">
                    {/* Left Scroll Button */}
                    <button
                        onClick={scrollLeft}
                        className="cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#5b45a7] text-white p-2 rounded-full shadow-lg z-10">
                        <ChevronLeft size={30} />
                    </button>

                    {/* Right Scroll Button */}
                    <button
                        onClick={scrollRight}
                        className="cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#5b45a7] text-white p-2 rounded-full shadow-lg z-10">
                        <ChevronRight size={30} />
                    </button>

                    {/* Carousel Container */}
                    <div className="max-w-[1000px] mx-auto scroll-none py-5 mt-5 overflow-x-auto" ref={carouselRef}>
                        <div className="flex gap-5">
                            {allBlogs.map((item, index) => (
                                <div key={index} className="w-[350px] flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        width={350}
                                        height={280}
                                        alt="blog-img"
                                        className="rounded-tl-2xl rounded-tr-2xl object-cover w-full"
                                    />
                                    <div className="bg-[#f2f3f5] rounded-bl-2xl rounded-br-2xl p-5">
                                        <Link href={`/blogs/${item.slug}`} className="text-[#212529] cursor-pointer text-xl hover:underline font-bold">
                                            {item.title}
                                        </Link>
                                        <p className="para mt-6 flex flex-row items-center gap-2">
                                            <span>
                                                <Clock size={15} color="#8d69c9" />
                                            </span>
                                            9 min read
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default BlogsCarousal;
