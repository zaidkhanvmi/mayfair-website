"use client";

import { useState } from "react";
import Container from "../layout/Container";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How should I store a Wegovy Pen?",
        answer:
            "Keep Wegovy refrigerated before first use, stored between 2°C and 8°C, and avoid placing it near the freezer compartment. After opening the pen, you may continue storing it in the fridge or keep it at room temperature below 30°C. If the pen remains unused for 6 weeks, discard it safely. Always replace the pen cap after use to protect the medication from light.",
    },
    {
        question: "Do I need to be on contraception?",
        answer:
            "Wegovy is not recommended during pregnancy. Effective contraception should be used while on treatment and for at least 2 months after stopping.",
    },
    {
        question: "Does Wegovy affect the oral contraceptive pill?",
        answer:
            "Wegovy may delay gastric emptying, which could potentially affect absorption of oral medications. Speak with your clinician for personalised advice.",
    },
    {
        question: "How much weight can I lose with Wegovy?",
        answer:
            "Clinical studies show participants achieved an average weight loss of up to 15% of their body weight when combined with lifestyle changes.",
    },
    {
        question: "Who can take Wegovy?",
        answer:
            "Wegovy is generally prescribed to adults with a BMI of 30+, or 27+ with weight-related health conditions following medical assessment.",
    },
    {
        question: "What doses are available?",
        answer:
            "Wegovy is available in escalating weekly doses starting from 0.25mg up to 2.4mg as directed by your prescriber.",
    },
    {
        question: "What side effects should I expect?",
        answer:
            "Common side effects include nausea, vomiting, diarrhoea, constipation, and abdominal discomfort. Most are mild and temporary.",
    },
    {
        question: "What are alternative weight loss treatments?",
        answer:
            "Alternative treatments may include Mounjaro or Saxenda. Your clinician will advise based on your medical profile.",
    },
    {
        question: "Can I take Wegovy a day early?",
        answer: "Yes, you may take your dose one day earlier if at least three days have passed since your last injection. Always confirm schedule changes with our prescriber to ensure ongoing safety and clinical benefit."
    },
    {
        question: "Can I get Wegovy without a prescription?",
        answer: "No. Wegovy is only available with a prescription in the UK following assessment by a licensed clinician."
    },
    {
        question: "Is there a generic version of Wegovy?",
        answer: "No generic version of Wegovy is currently available in the UK. Patent protection remains in place, with a potential generic expected after 2031. At present, Wegovy is prescribed only as a branded medication."
    },
    {
        question: "Why am I still hungry on Wegovy?",
        answer: "Hunger can occur if you are early in treatment, have not reached your maintenance dose, or are not meeting nutritional needs. Following a balanced eating plan is essential. If appetite remains high, our prescriber may review your dose or discuss alternative treatment options."
    },
    {
        question: "Is Wegovy the same as Rybelsus?",
        answer: "No. Both contain semaglutide, but Wegovy is licensed for weight loss, while Rybelsus is prescribed for type 2 diabetes. They differ in purpose, dosing, and formulation."
    },
    {
        question: "Is Wegovy safe?",
        answer: "When prescribed appropriately, Wegovy is considered safe for many people. However, it may not suit individuals with certain medical conditions. A full medical assessment ensures suitability of Wegovy in the UK, and any ongoing or new symptoms should be discussed with our prescriber."
    }
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-10 py-12 bg-white rounded">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => {
                            const realIndex = index;
                            const isOpen = openIndex === realIndex;

                            return (
                                <div key={realIndex} className="bg-gray-100 rounded-md overflow-hidden">
                                    <button
                                        onClick={() => toggle(realIndex)}
                                        className="cursor-pointer w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800"
                                    >
                                        {faq.question}
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-600" : "text-gray-600"
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`px-5 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                            const realIndex = index + Math.ceil(faqs.length / 2);
                            const isOpen = openIndex === realIndex;

                            return (
                                <div key={realIndex} className="bg-gray-100 rounded-md overflow-hidden">
                                    <button
                                        onClick={() => toggle(realIndex)}
                                        className="cursor-pointer w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800"
                                    >
                                        {faq.question}
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-600" : "text-gray-600"
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`px-5 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default Faqs;