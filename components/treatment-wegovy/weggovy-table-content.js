import React from 'react'
import Container from '../layout/Container'
import Link from 'next/link'

const WegovyTableContent = () => {
    return (
        <section className='mt-2 py-15 md:px-12.5 bg-white rounded '>
            <Container>
                <div className='flex flex-col md:flex-row gap-6'>

                    <div className='flex flex-col gap-2 md:sticky self-start top-10 flex-1'>
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
                                <Link href={"#sideeffect"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        Side effects of Wegovy
                                    </li>
                                </Link>
                                <Link href={"#reduceEffect"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        How to reduce and manage Wegovy side effects?
                                    </li>
                                </Link>
                                <Link href={"#wegovyWarnings"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        Wegovy warnings
                                    </li>
                                </Link>
                                <Link href={"#hearHealth"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        Does Wegovy have heart health benefits?
                                    </li>
                                </Link>
                                <Link href={"#comparing"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        Comparing wegovy with alternative weight loss treatments
                                    </li>
                                </Link>
                                <Link href={"#stopping"}>
                                    <li className='text-base hover:underline list-disc list-[#8d69c9] cursor-pointer pb-2'>
                                        What to expect after stopping Wegovy?
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 items-start flex-[1.8]'>

                        <div id='shouldMiss' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                What should I do if I miss a dose of Wegovy?
                            </h3>
                            <p className='text-base text-[#212529]'>
                                If you miss a dose, timing determines the next step. When fewer than five days have passed since your scheduled injection, take the missed dose as soon as possible and continue on your usual day. If more than five days have passed, skip the missed dose and wait for your next scheduled injection.
                            </p>
                            <p className='text-base text-[#212529]'>
                                Do not take double doses, as this increases side-effect risk without improving results. If you miss two or more doses, speak with our clinical team. They may advise restarting the weight loss shot Wegovy at a lower dose, particularly if digestive side effects occurred previously.
                            </p>
                        </div>

                        <div id='interaction' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                Interactions
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Before starting Wegovy injection, share a complete list of all medicines you use, including supplements and over-the-counter products. This allows clinical team to identify interactions and plan treatment safely.
                            </p>
                            <p className='text-base text-[#212529]'>
                                Extra monitoring is required for people using insulin or sulfonylureas, as combining these with Wegovy for weight loss can increase the risk of low blood sugar. The weight loss medication should not be used alongside other GLP-1 receptor agonists, such as Mounjaro or liraglutide, due to increased side-effect risk.
                            </p>
                        </div>

                        <div id='shouldTakewagovy' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                Who should not take Wegovy?
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Do not start Wegovy weight loss injections if you are pregnant, planning to become pregnant, or breastfeeding. Current evidence does not confirm its safety during pregnancy or while nursing, so healthcare professionals advise against use during these periods. The weight loss pen is also not usually prescribed for people with a BMI below 27 unless a clinically recognised weight-related condition is present.
                            </p>
                            <p className='text-base text-[#212529]'>
                                Avoid weight loss injection if you have ever had a severe allergic reaction to semaglutide or any ingredient used in the injection. Certain medical conditions also require careful assessment before treatment. These include diabetic eye disease, a previous episode of pancreatitis, or advanced heart failure, where closer monitoring or alternative options may be more appropriate.
                            </p>
                            <p className='text-base text-[#212529]'>
                                The clinical team must review your medical history before treatment if you have:
                            </p>
                            <ul className='pl-10 list-disc'>
                                <li className='text-base text-[#212529]'>
                                    Kidney disease
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Diabetes
                                </li>
                                <li className='text-base text-[#212529]'>
                                    A history of pancreatitis
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Previous episodes of low blood sugar
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Diabetic retinopathy
                                </li>
                            </ul>
                            <p className='text-base text-[#212529]'>
                                Some medicines can interfere with how Wegovy works or increase the chance of side effects. This includes other GLP-1–based treatments such as Saxenda or Mounjaro, as well as diabetes medicines like insulin or sulfonylureas. In these cases, the clinical team may adjust doses, monitoring, or treatment plans to maintain safety.
                            </p>
                            <p className='text-base text-[#212529]'>
                                Always provide a full list of medicines and supplements you use, including non-prescription and herbal products. The healthcare professionals use this information to confirm whether Wegovy is appropriate for you. Treatment only begins after a full medical consultation confirms it is appropriate.
                            </p>
                        </div>

                        <div id='sideeffect' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                Side effects of Wegovy
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Not everyone experiences side effects while using Wegovy for weight loss. When symptoms occur, they often appear during treatment initiation or dose increases and usually improve as the body adjusts.
                            </p>
                            <h3 className='text-lg font-bold text-black'>
                                Very common side effects of Wegovy
                            </h3>
                            <p className='text-base text-[#212529]'>
                                These effects are reported most frequently, especially during the early stages of treatment:
                            </p>
                            <ul>
                                <li className='text-base text-[#212529]'>
                                    Nausea or vomiting
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Headache
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Diarrhoea
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Constipation
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Abdominal discomfort or pain
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Tiredness or general weakness
                                </li>
                            </ul>
                            <h3 className='text-lg font-bold text-black'>
                                Common side effects of Wegovy
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Some individuals may also notice:
                            </p>
                            <ul>
                                <li className='text-base text-[#212529]'>
                                    Indigestion or bloating
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Gas or reflux
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Hair thinning
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Injection site reactions
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Gallstones
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Gastritis
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Low blood sugar in people using diabetes medicines
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Changes in taste
                                </li>
                            </ul>
                            <h3 className='text-lg font-bold text-black'>
                                Uncommon side effects of Wegovy
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Less frequently reported effects include:
                            </p>
                            <ul>
                                <li className='text-base text-[#212529]'>
                                    Increased heart rate
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Raised pancreatic enzymes
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Slowed stomach emptying
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Low blood sugar without diabetes
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Raised bilirubin levels
                                </li>
                            </ul>
                            <h3 className='text-lg font-bold text-black'>
                                Rare side effects
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Although uncommon, some side effects require urgent medical attention. These include:
                            </p>
                            <ul>
                                <li className='text-base text-[#212529]'>
                                    Worsening of diabetic eye disease (diabetic retinopathy)
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Severe or persistent pain in the abdomen or back, which may indicate pancreatitis
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Kidney or bladder stones, sometimes causing sharp pain, urinary changes, or difficulty passing urine
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Allergic reactions such as swelling of the face or throat, breathing difficulties, dizziness, or hives
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Increased risk of bone fractures, particularly in people with reduced bone strength
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Bowel obstruction, which may present as severe constipation, bloating, and vomiting
                                </li>
                                <li className='text-base text-[#212529]'>
                                    Always read the <span className='text-blue-500 underline'>patient information leaflet</span> and seek medical advice if symptoms persist or worsen.
                                </li>

                            </ul>
                        </div>

                        <div id='reduceEffect' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                How to reduce and manage Wegovy side effects?
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Most people experience mild side effects when starting Wegovy, and these often improve as the body adjusts. You can reduce discomfort by staying well hydrated, choosing easily digested foods, and spreading meals into smaller portions throughout the day. These adjustments help ease nausea and digestive symptoms during treatment.
                            </p>
                            <p className='text-base text-[#212529]'>
                                If side effects continue, become more noticeable, or begin to interfere with daily life, you should contact a healthcare professional for guidance. Seek urgent medical attention if you develop severe abdominal pain, breathing problems, or swelling of the face, lips, or throat, as these may signal a serious reaction.
                            </p>
                            <p className='text-base text-[#212529]'>
                                Many people tolerate Wegovy without difficulty and continue treatment comfortably. The weight loss injection supports weight management over time, and side effects usually remain manageable with the right support.
                            </p>
                        </div>

                        <div id='wegovyWarnings' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                Wegovy warnings
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Do not use Wegovy if you have a known allergy to semaglutide or any ingredient in the injection. Before starting treatment, speak with a healthcare professional if you have kidney disease, diabetes, or a previous episode of pancreatitis.
                            </p>
                            <p className='text-base text-[#212529]'>
                                You should also seek medical advice if you have diabetic retinopathy or expect to undergo surgery requiring anaesthesia. Always inform our clinical team if you take other medicines, particularly insulin, sulfonylureas, or other weight-loss injections such as Saxenda or Mounjaro.
                            </p>
                            <h3 className='text-lg font-bold'>
                                Wegovy and pregnancy
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Do not use Wegovy during pregnancy or when planning to become pregnant. Stop treatment at least two months before trying to conceive. If you suspect pregnancy at any point, discontinue Wegovy and seek medical advice promptly.
                            </p>
                            <h3 className='text-lg font-bold'>
                                Wegovy and breastfeeding
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Do not use Wegovy while breastfeeding. Current evidence does not confirm whether semaglutide passes into breast milk or how it may affect a nursing infant.
                            </p>
                            <h3 className='text-lg font-bold'>
                                Contraception
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Use reliable contraception while taking Wegovy. Although the medication does not directly affect oral contraceptives, vomiting or diarrhoea may reduce absorption. In these cases, a clinician may recommend additional or alternative contraception methods.
                            </p>
                        </div>

                        <div id='hearHealth' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                Does Wegovy have heart health benefits?
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Wegovy is approved by the MHRA in the UK for obesity management and has additional relevance for cardiovascular health. Clinical evidence suggests that weight loss achieved with Wegovy may lower the risk of major cardiovascular events, including heart attack and stroke, in people with obesity and related risk factors.
                            </p>
                        </div>

                        <div id='comparing' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                Comparing Wegovy with alternative weight loss treatments
                            </h3>
                            {/* Here is below the table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300 text-left text-sm">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="border border-gray-300 p-4 font-semibold">Feature</th>
                                            <th className="border border-gray-300 p-4 font-semibold">Wegovy</th>
                                            <th className="border border-gray-300 p-4 font-semibold">Mounjaro</th>
                                            <th className="border border-gray-300 p-4 font-semibold">Saxenda</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-100">
                                        <tr>
                                            <td className="border border-gray-300 p-4 font-semibold">Main ingredient</td>
                                            <td className="border border-gray-300 p-4">Semaglutide</td>
                                            <td className="border border-gray-300 p-4">Tirzepatide</td>
                                            <td className="border border-gray-300 p-4">Liraglutide</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-4 font-semibold">
                                                How it supports weight loss
                                            </td>
                                            <td className="border border-gray-300 p-4">
                                                Helps control hunger signals, slows digestion, and you feeling full for longer
                                            </td>
                                            <td className="border border-gray-300 p-4">
                                                Target appetite control, delays digestion, increases fullness, and supports blood sugar regulation
                                            </td>
                                            <td className="border border-gray-300 p-4">
                                                Suppresses appetite, slow digestion, and enhances feelings of fullness
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-4 font-semibold">Dose progression</td>
                                            <td className="border border-gray-300 p-4">Dose increases in 4-week stages</td>
                                            <td className="border border-gray-300 p-4">Dose increases in 4-week stages</td>
                                            <td className="border border-gray-300 p-4">Dose increases weekly</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-4 font-semibold">Dosing frequency</td>
                                            <td className="border border-gray-300 p-4">Injected once per week</td>
                                            <td className="border border-gray-300 p-4">Injected once per week</td>
                                            <td className="border border-gray-300 p-4">Injected once per day</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-4 font-semibold">
                                                Weight loss results in studies
                                            </td>
                                            <td className="border border-gray-300 p-4">
                                                Participants achieved weight loss of up to 15%
                                            </td>
                                            <td className="border border-gray-300 p-4">
                                                Participants achieved weight loss of up to 20%
                                            </td>
                                            <td className="border border-gray-300 p-4">
                                                Participants achieved weight loss of around 5–10%
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 p-4 font-semibold">Prescription required</td>
                                            <td className="border border-gray-300 p-4">Yes</td>
                                            <td className="border border-gray-300 p-4">Yes</td>
                                            <td className="border border-gray-300 p-4">Yes</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div id='stopping' className='flex flex-col gap-5 border-b-[1px] border-gray-300 pb-5 px-1'>
                            <h3 className='text-2xl font-bold text-black'>
                                What to expect after stopping Wegovy?
                            </h3>
                            <p className='text-base text-[#212529]'>
                                Wegovy does not cause dependence, and treatment can stop once a healthy weight or BMI is achieved. After discontinuation, appetite regulation gradually decreases, and hunger levels may rise. Clinical research shows that weight regain commonly occurs without ongoing lifestyle support, with some individuals regaining a significant portion of lost weight within a year.
                            </p>
                            <p className='text-base text-[#212529]'>
                                Maintaining results after stopping Wegovy requires continued attention to diet and physical activity. While stopping treatment does not cause withdrawal symptoms, stepping away from healthy routines increases the risk of weight regain. Consistent habits remain essential for long-term weight management.
                            </p>
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    )
}

export default WegovyTableContent