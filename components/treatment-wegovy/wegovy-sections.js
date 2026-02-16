import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'


const WegovySection = () => {

    const weekly_doses = [
        {
            mg: "0.25",
            cost: "139",
            desc: "During the first four weeks, treatment usually starts with a 0.25 mg once-weekly injection to help your body adjust gradually and reduce the likelihood of side effects, while beginning appetite regulation. Cost: £139.00 for four weekly doses.",
            image: "/weeklydose1.png",
        },
        {
            mg: "0.5",
            cost: "179",
            desc: "Over the following four weeks, the dose may be increased to 0.5 mg once weekly to enhance appetite suppression and support better portion control as tolerance improves. Cost: £179.00 for four weekly doses.",
            image: "/weeklydose2.png"
        },
        {
            mg: "1.0 ",
            cost: "187",
            desc: "By weeks 9 to 12, treatment may progress to a 1.0 mg weekly dose, providing stronger appetite regulation and continued support for weight-management goals. Cost: £187.00 for four weekly doses.",
            image: "/weeklydose3.png"
        },
        {
            mg: "1.7",
            cost: "237",
            desc: "During weeks 13 to 16, the dose may be increased further to 1.7 mg once weekly, helping to strengthen metabolic balance and appetite control under clinical guidance. Cost: £237.00 for four weekly doses.",
            image: "/weeklydose4.png"
        },
        {
            mg: "2.4",
            cost: "287",
            desc: "From week 17 onwards, and once suitability is confirmed, treatment may continue with the 2.4 mg once-weekly maintenance dose, which supports long-term weight management and sustained appetite control. Cost: £287.00 for four weekly doses.",
            image: "/weeklydose5.png"
        }
    ];

    const injection_images = [
        {
            image: "/injection-img1.png",
            desc: "Choose an area: abdomen or thighs."
        },
        {
            image: "/injection-img2.png",
            desc: "Select a site for administering the shot."
        },
        {
            image: "/injection-img3.png",
            desc: "Make four divisions on the site. Inject into one division per week."
        },
        {
            image: "/injection-img4.jpg",
            desc: "When injecting into the abdomen ensure a 5 cm distance from the navel."
        }
    ];

    return (
        <>
            <section className='mt-5 py-8 md:px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-col md:flex-row items-center gap-5 '>
                        <div className='flex flex-col gap-3 flex-1 order-2 md:order-1'>
                            <h2 className='text-3xl font-bold'>
                                How does Wegovy work for weight loss?
                            </h2>
                            <p className='par'>
                                Wegovy for weight loss contains semaglutide, a man made version which mirrors the effects of GLP-1 released naturally after eating. This hormone communicates with the brain to signal fullness and helps regulate blood sugar levels.
                            </p>
                            <h3 className='text-base font-bold text-black'>
                                Through this mechanism, Wegovy:

                            </h3>
                            <ul className='pl-10'>
                                <li className='list-disc text-base text-[#212529]'>
                                    Encourages fullness sooner during meals
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Reduces persistent hunger between meals
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Slows digestion to extend satiety
                                </li>
                            </ul>
                            <p className='para'>
                                For optimal results, clinical team recommend using Wegovy alongside a calorie-controlled diet and regular physical activity. Clinical evidence shows that many individuals achieved meaningful weight reduction of around 5% when following this combined approach.
                            </p>
                        </div>
                        <div className='flex-1 order-1 md:order-2'>
                            <Image src="/weg-sec-img1.png" width={500} height={450} alt='products' />
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-5 py-8 md:px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <div className='flex-1'>
                            <Image src="/weg-sec-img2.png" width={500} height={450} alt='products' />
                        </div>

                        <div className='flex flex-col gap-5 flex-1'>
                            <h2 className='text-3xl font-bold'>
                                How effective is Wegovy for weight loss?
                            </h2>
                            <p className='par'>
                                Clinical studies show that consistent use of the Wegovy weight loss pen can support significant weight reduction when taken as prescribed. In long-term 68-week trials, participants using the 2.4mg maintenance dose achieved notably greater weight loss than those receiving placebo.
                            </p>
                            <h3 className='text-base font-bold'>
                                Clinical trial results showed:
                            </h3>
                            <ul className='pl-10'>
                                <li className='list-disc text-base text-[#212529]'>
                                    86% of participants lost at least 5% of body weight
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    69% achieved a 10% reduction
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    50% lost 15% or more
                                </li>
                            </ul>
                            <p className='para'>
                                Researchers also observed reductions in waist measurement and improvements in blood pressure. Individual results vary.
                            </p>
                            <p className='para'>
                                Disclaimer: These outcomes reflect clinical trial data and do not guarantee the same results for every individual.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-5 py-8 md:px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-col items-center gap-5'>

                        <div className='max-w-4xl flex flex-col items-center text-center gap-5 flex-1'>
                            <h2 className='text-3xl font-bold'>
                                Expected weight changes across Wegovy dose levels
                            </h2>
                            <p className='par'>
                                Weight loss outcomes depend on dose progression, consistency, and lifestyle habits. Higher doses typically provide stronger appetite regulation, although individual responses differ and require clinical review.
                            </p>
                        </div>

                        <div className='flex-1'>
                            <Image src="/weg-sec-img3.jpg" width={1000} height={500} alt='products' />
                        </div>

                        <p className='para'>
                            Note: These figures are based on a 72-week clinical study comparing treatment outcomes with placebo.
                        </p>
                    </div>
                </Container>
            </section>

            <section className='mt-5 py-8 md:px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-col items-center gap-5'>
                        <div className='flex flex-col items-center text-center gap-5 flex-1'>
                            <h2 className='text-3xl font-bold'>
                                Wegovy weekly dose
                            </h2>
                            <p className='par'>
                                Wegovy weight loss injections follows a step-by-step dosing schedule designed to help the body adjust comfortably. Treatment begins at a low dose and increases gradually until the maintenance dose is reached, helping reduce side effects while supporting steady progress.
                            </p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            {weekly_doses.map((item, index) => (
                                <div key={index} className='flex flex-col gap-1'>
                                    <div className='flex flex-col md:flex-row gap-5 justify-between items-center'>
                                        <div className='rounded-2xl bg-[#8d69c9] py-4 px-5 flex-1 md:flex-[0.9] w-full md:w-auto order-2 md:order-1'>
                                            <p className='text-white text-lg font-semibold'>
                                                {item.mg} mg Cost:£{Number(item.cost).toFixed(2)}
                                            </p>
                                        </div>
                                        <Image src={item.image} width={400} height={70} alt='image' className='order-1 md:order-2' />
                                    </div>
                                    <p className='bg-[#ecdfff] px-2 py-1'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-5 py-8 md:px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        <div className='flex flex-col gap-4 flex-[1.2] order-2 md:order-1'>
                            <h2 className='text-3xl font-bold'>
                                How to use Wegovy pens?
                            </h2>
                            <p className='par'>
                                Wegovy for weight loss contains semaglutide, a man made version which Wegovy is administered once a week as an injection beneath the skin and does not depend on meal timing. Selecting a fixed day each week helps build consistency and supports regular use. Each weight loss pen is designed to provide four weekly doses, covering a full month of treatment. After the final dose is used, a new pen is required for the next treatment period.

                                the effects of GLP-1 released naturally after eating. This hormone communicates with the brain to signal fullness and helps regulate blood sugar levels.
                            </p>

                            <h3 className='para'>
                                Before giving your injection, take a few moments to prepare properly to ensure safe and accurate use.
                            </h3>
                            <ul className='pl-5 flex flex-col gap-y-5'>
                                <li className='list-disc text-base text-[#212529]'>
                                    Verify your medication: Check the pen label carefully to confirm it matches your prescribed Wegovy strength and dosage.
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Inspect the solution: Remove the pen cap and view the liquid inside the pen window. The solution should appear clear and colourless. Do not use the pen if you notice cloudiness or visible particles.
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Attach a new needle: Use a new needle for every injection. Twist it securely onto the pen to ensure correct delivery.
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Perform a flow check (first use only): When using a new pen for the first time, remove both needle caps and complete the flow check as instructed in the patient information leaflet to confirm the pen is working correctly.
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Set your dose: Turn the dose selector until your prescribed dose is clearly shown in the display window.
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Select an injection site: Inject into the abdomen (avoiding the area within 5cm of the belly button), thigh, or upper arm. Rotate injection sites each week to help reduce skin irritation and support consistent absorption.
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Give the injection: Insert the needle straight into the skin and keep the dose window visible while the medication is delivered.
                                </li>
                                <li className='list-disc text-base text-[#212529]'>
                                    Dispose of used items safely: After the injection, place the outer needle cap back on, remove the needle carefully, and dispose of the needle and cap in a sharps container.

                                </li>
                            </ul>
                        </div>
                        <div className='flex-1 order-1 md:order-2'>
                            <Image src="/weg-sec-img4.png" width={300} height={350} alt='products' />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Video Section */}
            <section className='mt-5 py-8 md:px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-col items-center gap-5'>

                        <div className='max-w-4xl flex flex-col items-center text-center gap-5 flex-1'>
                            <h2 className='text-3xl font-bold'>
                                How to use the Wegovy: Step-by-step video guide
                            </h2>
                            <p className='par'>
                                A video guide is available to demonstrate correct preparation and injection technique. It shows each step clearly, helping you feel confident using the pen at home while following safe injection practices.
                            </p>
                        </div>

                        <div className='flex-1'>
                            <video controls width={1000} height={500} alt='products'>
                                <source src='https://www.mayfairweightlossclinic.co.uk/wp-content/uploads/2024/03/wegovy_mayfair.mp4' />
                            </video>
                        </div>
                        <p className='para'>
                            Still have questions? <span className='text-blue-500 hover:underline cursor-pointer'>Contact us</span> or call <span className='text-blue-500 cursor-pointer hover:underline'>(020) 7550 6515</span>
                        </p>

                    </div>
                </Container>
            </section>

            {/* Injection_Image_Section */}

            <section className='mt-5 py-8 md:px-12.5 bg-white rounded '>
                <Container>
                    <div className='flex flex-col items-center justify-between gap-7'>
                        <div className='flex flex-col items-center text-center gap-4 flex-[1.2]'>
                            <h2 className='text-3xl font-bold'>
                                Where should Wegovy be injected?
                            </h2>
                            <p className='par'>
                                Wegovy for weight loss is injected just under the skin into areas with adequate fatty tissue. Suitable sites include the abdomen, thighs, or upper arms. Rotating injection areas each week helps protect the skin and improves comfort.
                                Using different sites regularly also supports consistent absorption. Avoid injecting into the same exact spot repeatedly, even within the same area.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            {injection_images.map((item, index) => (
                                <div key={index} className='flex flex-col items-center gap-2'>
                                    <Image
                                        src={item.image}
                                        width={500}
                                        height={350}
                                        alt='products'
                                        className='rounded-2xl'
                                    />
                                    <p className='para'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section >

        </>
    )
}

export default WegovySection