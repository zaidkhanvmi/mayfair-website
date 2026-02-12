"use client"

import React, { useState } from 'react'
import Container from '../layout/Container'
import { ChevronUp } from 'lucide-react'

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaqs = (index) =>
        setOpenIndex(openIndex === index ? null : index);

    const faqs = [
        {
            que: "Do I need to register before placing an order?",
            ans: "To place an order with us you will need to create an account. As an online healthcare provider, we have to follow strict guidelines, part of which require us to maintain accurate and concise customer profile records that are managed and secured within our website. The data you provide is only viewed by the relevant healthcare professionals and team members when necessary to dispatch your order and is stored in accordance with GDPR. You cannot order a prescription only medication on our website without registering and completing an online consultation form."
        },
        {
            que: "Where does my weight loss medication come from?",
            ans: "All medication is purchased directly from the manufacturers authorised UK distributor and stored at our UK based GPhC registered pharmacy. It is then dispensed to you directly from the pharmacy once your consultation is approved by a member of the Prescribing team."
        },
        {
            que: "What happens if my prescription is not approved after making payment?",
            ans: "After you complete your online consultation, select products and make the payment, our prescriber will go through your consultation in detail and may phone you to ask further questions in order to determine whether the medication is suitable. Simultaneously, I.D and age verification checks will also be carried out in the background. If the prescriber does not approve your prescription for any reason, or if the age verification checks are not successful, you will be issued with a full refund immediately."
        },
        {
            que: "What is your refund policy?",
            ans: "If you change your mind after placing your order then please email us immediately on contact@mayfairweightlossclinic.co.uk quoting your order number. We are happy to offer you a full refund with no questions asked as long as the products have not been dispensed. Once dispensed, the product becomes labelled specifically for you and packed and we are unable to re-use it. Therefore, you will not be able to cancel your order after this stage. Medicinal products cannot be returned due to legislation governing the sale and supply of medicines in the UK. Orders are usually processed and dispensed on the same day of placing the order, therefore if you would like to make changes or cancel your order, please ensure you contact us immediately after placing the order. Refunds will be issued to your original payment card. Please note that Mayfair Weight Loss Clinic does not manufacture any medicines and only dispenses medication and products licensed in the UK. You are not entitled to a refund if the efficacy does not meet your expectation or if you have been unable to lose a desired amount weight. Prescription only medication cannot be returned or refunded due to the legislation governing the sale and supply of medicines."
        },
        {
            que: "Why do we need your phone number?",
            ans: "This is for 2 reasons. Firstly, it may be necessary to contact you if the prescriber has some further questions about your health, having already reviewed your consultation. If we contact you by phone, it minimises any delay to your order, and is one of the quickest ways to overcome any issue. Secondly, you will receive delivery notifications by sms/text message. Therefore by providing your mobile number you will be able to utilise this service."
        },
        {
            que: "How do we verify your ID and age?",
            ans: "When you are making your first purchase we always confirm that you are at least 18 years of age. Checks are carried out against information you provide including but not limited to your name, address and date of birth on national identity registers at the time of registration and may be carried out on future occasions should there be any discrepancies in your details as time go on. To make the process as easy as possible, all checks are carried out behind the scenes, requiring no action on your part. If we are unable to verify your age based on the details you have provided, then a member of our customer service team will contact you to request a form of official ID."
        },
        {
            que: "I have received a faulty product",
            ans: "If you have received a faulty device/pen or if it becomes faulty (for example, the pen fails to release any liquid) then contact us as soon as you realise it. You will be asked to return the pen to the pharmacy using recorded/tracked delivery with a description of the fault. A case will be opened with the manufacturer for investigation and the faulty device will be sent them for investigation. If confirmed faulty, the device will be replaced free of charge. Please note that process can take between 3-6 weeks for completion. Any faulty pens have to be reported within 30 days of receiving your order. After this time we will be unable to replace any faulty pens. If any pens are found to be in working order then they will either be disposed of or returned back to you. Please note that given due to the products being a medicine and a medical device, we will not be able to issue a refund or replacement until the products have been confirmed faulty by the manufacturers and a replacement issued by them."
        },
        {
            que: "How is my order delivered to me?",
            ans: "All weight loss injections and medication are dispensed directly from our UK-based pharmacy in accordance with cold-chain transportation. It is packed by a dispenser in discreet packaging using the correct insulated materials and ice gel backs to ensure it reaches you at the correct temperature range. It is shipped to your given address using a tracked service for next-day delivery, or for NI and Channel Isles tracked two-day delivery. Please ensure someone is at the address to receive the medication. Please see our ‘shipping terms & conditions’ for more information."
        },
        {
            que: "Can I place orders without a prescription or completing the consultation form?",
            ans: "No, you cannot buy any prescription-only medication without a prescription. To order your weight loss medication from our clinic, you will need to fill in an online / remote consultation form for all orders. Once your form has been checked by one of our Prescribers, they may contact you to verify your details and possibly ask you some more detailed questions. Once they determine you are eligible for treatment, a prescription will be generated for you and dispensed from our pharmacy."
        },
        {
            que: "I have not received my order",
            ans: "Due to cold-chain requirements, orders, once approved, are dispatched between Monday to Thursday by next-day delivery. For example, if you have placed an order on Tuesday morning you may receive it the following day. If however you have placed an order on Thursday afternoon then we may not dispatch it until the Monday for delivery on Tuesday. If you have not received your order on the expected day then please email us immediately on contact@mayfairweightlossclinic.co.uk quoting your order number. We will look into this immediately for you."
        }
    ]

    return (
        <section className='my-[100px]'>
            <Container>
                <h3 className='text-2xl md:text-[40px] text-black font-bold text-center'>
                    Frequently asked questions
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-8'>
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className='flex flex-col gap-4'
                            >
                                <div
                                    onClick={() => toggleFaqs(index)}
                                    className='bg-[#dfdede36] rounded py-5 px-7.5 flex items-center justify-between cursor-pointer gap-5'
                                >
                                    <h3 className='text-lg font-semibold'>
                                        {item?.que}
                                    </h3>
                                    <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                        <ChevronUp size={20} color='#17a2b8' />
                                    </span>
                                </div>
                                {isOpen && (
                                    <p className='text-base p-3'>
                                        {item?.ans}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default Faqs