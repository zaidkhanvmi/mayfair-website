    import Link from "next/link"
    import Container from "../layout/Container"

    const TreatmenFaqs = () => {
        return (
            <section className='border-t-[1px] border-gray-300 mt-28 py-14'>
                <Container>
                    <h2 className='text-[#212529] text-2xl md:text-[40px] lg:text-5xl font-bold '>
                        Frequently asked questions about weight loss
                    </h2>
                    <div className='border-b-3 pb-2 border-[#5b45a7] w-[90%] mx-auto' />

                    <div className="flex flex-col md:flex-row items-start gap-10 mt-12">

                        <div className="flex flex-2 flex-col gap-8">

                            <div className="flex flex-col gap-6">
                                <h3 id="obesity" className="text-[#3c3c3c] text-left font-medium text-2xl md:text-[26px]">
                                    What causes obesity?
                                </h3>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Weight gain occurs when you regularly eat more calories than you use through normal bodily functions and physical activity. But the lifestyle habits causing your weight gain aren't always obvious. Weight gain can be compounded by psychological factors, as well as certain medications, such as steroids and insulin, and medical conditions such as hypothyroidism. There is also emerging evidence to suggest that some people are more genetically susceptible to obesity.
                                </p>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Losing weight means eating fewer calories and burning more energy through physical activity. It sounds simple. But more than 60% of adults in England are overweight or obese. Our lifestyles see many of us eating more calories than we need and not doing enough physical activity.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 id="bmi" className="text-[#3c3c3c] text-left font-medium text-2xl md:text-[26px]">
                                    What is BMI?
                                </h3>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Body Mass Index (BMI) is essentially a measure of body size. It is a calculation based on your height and weight that is used to work out if your weight is healthy. Your BMI will be calculated as a number which represents your height to weight ratio i.e. 27 kg/m2.
                                </p>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    The following table shows BMI range categories for adults associated with weight status:
                                </p>
                                {/* BMi table */}
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 id="weight" className="text-[#3c3c3c] text-left font-medium text-2xl md:text-[26px]">
                                    Why you may be struggling to lose weight?
                                </h3>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Everyone is different and responds differently to what they eat and how effective exercise is. Losing weight is difficult and can take time. Just dieting and exercise may either not result in clinically significant weight loss, or you may not be able to sustain it, and that is where medication can help you lose weight.
                                </p>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Our weight loss experts are here to recommend and prescribe the most appropriate treatment option for you and help you lose weight.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 id="medication" className="text-[#3c3c3c] text-left font-medium text-2xl md:text-[26px]">
                                    Do I need to continue with diet and exercise whilst on medication?
                                </h3>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Absolutely. The weight loss medication we prescribe are to be taken in combination with a sensible diet and exercise and that is when you see the most effective weight loss.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 id="prescribing" className="text-[#3c3c3c] text-left font-medium text-2xl md:text-[26px]">
                                    What is off-label prescribing?
                                </h3>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Off-label prescribing is when you are prescribed a licenced medication to treat a condition not specifically stated or listed on its product license.
                                </p>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Towards the end of the drug development process, the pharmaceutical company applies for a license to treat a specific condition and submits the results of its trials to the Medicines and Healthcare Products Regulatory Agency (MHRA) or the European Medicines Agency (EMA). If the license is granted, it will specify certain information regarding the medication, such as who can use it, what dosage, storage and usage instructions, side effects and contraindications and what conditions it may be used to treat. This can all be found in the patient information leaflet provided with the medicine.
                                </p>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Prescribing outside of these guidelines included with the license of any medicine means that it is being used “off-label”. Our prescribers at the Mayfair Weight Loss Clinic will only prescribe off-label if they believe that the medication will be effective at treating the condition in question, and that the advantages outweigh any potential risks.
                                </p>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Off-label prescribing is fairly common and is a safe practice as long as the patient’s condition, medical history, allergies and current medicines are taken into consideration. Being prescribed a medicine off-label doesn’t mean that the drug is unlicensed – these two terms mean very different things and shouldn’t be confused with each other. An off-label medicine is simply a medicine that does have a UK or EU license, but not for the purpose that it’s being used for.
                                </p>
                                <p className="text-[#3c3c3c] text-sm md:text-[15px] text-left leading-[25px]">
                                    Please read our section on ‘ <span className="cursor-pointer text-[#8d69c9]">off-label prescribing</span> ’ for more information

                                </p>
                            </div>

                        </div>

                        <div className="flex flex-1 flex-col gap-2 p-6 rounded-2xl shadow sticky top-10 self-start">
                            <h3 className="text-[#160647] text-2xl font-medium mb-1">
                                Information on this page
                            </h3>
                            <Link href={"#obesity"} className="underline cursor-pointer text-[#47317c] hover:text-[#8d69c9] text-sm">
                                What causes obesity?
                            </Link>
                            <Link href={"#bmi"} className="underline cursor-pointer text-[#47317c] hover:text-[#8d69c9] text-sm">
                                What is BMI?
                            </Link>
                            <Link href={"#weight"} className="underline cursor-pointer text-[#47317c] hover:text-[#8d69c9] text-sm">
                                Why you may be struggling to lose weight?
                            </Link>
                            <Link href={"#medication"} className="underline cursor-pointer text-[#47317c] hover:text-[#8d69c9] text-sm">
                                Do I need to continue with diet and exercise whilst on medication?
                            </Link>
                            <Link href={"#prescribing"} className="underline cursor-pointer text-[#47317c] hover:text-[#8d69c9] text-sm">
                                What is off-label prescribing?
                            </Link>
                        </div>

                    </div>
                </Container>
            </section>
        )
    }

    export default TreatmenFaqs