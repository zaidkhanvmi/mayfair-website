import React from 'react'
import Container from '../layout/Container';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Link from 'next/link';

const Products = () => {

    const products_Data = [
        {
            title: "Wegovy Injection",
            sub_title: "(Semaglutide Injections)",
            img: "/product1.jpg",
            list_items: [
                "Once-weekly weight loss injection (semaglutide)",
                "1 pen = 4 weeks",
                "Avg weight loss of ~15%"
            ],
            price: "139",
            path: "/treatment/wegovy"
        },
        {
            title: "Mounjaro",
            sub_title: "(Tirzepatide Injections)",
            img: "/product2.jpg",
            list_items: [
                "Mounjaro is a once weekly injection containing Tirzepatide",
                "1 pen = 4 weeks",
                "Avg weight loss of ~20%"
            ],
            price: "189",
            path: "/treatment/mounjaro"
        },
        {
            title: "Saxenda Injection",
            sub_title: "(Liraglutide)",
            img: "/product3.png",
            list_items: [
                "Saxenda (Liraglutide) is pre-filled a once-daily injection",
                "Prescription medication licensed to treat weight loss",
            ],
            price: "74.99",
            path: "/treatment/sexanda"
        }
    ];

    return (
        <section className='my-14'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch'>
                    {products_Data.map((item, index) => (
                        <div key={index} className='shadow-xl rounded-2xl border-[1px] border-gray-200 p-5 md:p-7.5 flex flex-col justify-between gap-4'>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-2xl text-[#3c3c3c] font-bold text-center'>
                                    {item?.title}
                                </h2>
                                <p className='text-xl text-[#3c3c3c] font-bold text-center'>
                                    {item.sub_title}
                                </p>
                            </div>
                            <div className="w-full h-[280px] flex items-center justify-center">
                                <Image
                                    src={item.img}
                                    width={280}
                                    height={280}
                                    alt={item.title}
                                    className="object-contain h-full w-auto"
                                />
                            </div>
                            {item.list_items.map((item, index) => (
                                <div key={index} className='flex flex-col gap-5'>
                                    <p className='text-[#3c3c3c] text-base font-normal flex flex-row items-center'>
                                        <span className='mr-3'>
                                            <Check size={20} color='#5b45a7' />
                                        </span>
                                        {item}
                                    </p>
                                </div>
                            ))}
                            <Link
                                href={item.path}
                                className='text-base bg-[#5b45a7] text-white font-normal w-full rounded-full py-3 cursor-pointer text-center'>
                                View Treatment
                            </Link>
                            <p className='text-center font-semibold text-base'>
                                From £{Number(item.price).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Products