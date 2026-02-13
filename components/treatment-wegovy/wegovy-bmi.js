"use client"

import { useState } from "react"
import Container from "../layout/Container"
import { useForm } from "react-hook-form";

const WegovyBmi = () => {
    const [heightUnit, setHeightUnit] = useState("heightInImperial");
    const [weightUnit, setWeightUnit] = useState("weightInImperial");

    const { handleSubmit, register, watch, setValue, formState: { isValid, errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            heightCm: null,
            heightFeet: null,
            heightInches: null,
            weightKg: null,
            weightStone: null,
            weightPounds: null,
        }
    });

    const values = watch();

    const handleHeightCmBlur = () => {
        if (!values.heightCm) return;
        const totlaInches = Number(values.heightCm) / 2.54;
        const feet = Math.floor(totlaInches / 12);
        const inches = Math.floor(totlaInches % 12);
        setValue("heightFeet", Number(feet), {
            shouldValidate: true
        });
        setValue("heightInches", Number(inches), {
            shouldValidate: true
        });
    }

    const handleHeightFtBlur = () => {
        if (!values.heightFeet) return;
        const totalInches = Number(values.heightFeet) * 12 + Number(values.heightInches || 0);
        const cm = totalInches * 2.54;
        setValue("heightCm", Math.round(cm), {
            shouldValidate: true
        });
    }

    const handleWeightKgBlur = () => {
        if (!values.weightKg) return;
        const totalLb = Number(values.weightKg) * 2.20462;
        setValue("weightStone", String(Math.round(totalLb / 14)), { shouldValidate: true });
        setValue("weightPounds", String(Math.round(totalLb % 14)), { shouldValidate: true });
    }

    const onSubmit = (data) => {
        if (!data) return;
        console.log(data);
    }


    return (
        <section className='mt-5 py-5 px-12.5 bg-white rounded '>
            <Container>
                <div className='flex flex-row items-center gap-6'>

                    <div className="bg-[#ecdfff] p-10 rounded-[20px] flex flex-col gap-5 flex-[1.2]">
                        <h2 className="text-2xl text-[#160647] font-bold">
                            How much weight could you lose with Wegovy in one year?
                        </h2>
                        <p className="text-[#160647] text-sm">
                            * Based on the results of a peer-reviewed clinical study of 2539 participants.
                        </p>
                        {/* Form */}
                        {/* height */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className="flex flex-col items-start gap-3">

                                    <label className="text-base text-[#160647]">
                                        What is your height?
                                    </label>

                                    {
                                        heightUnit === "heightInImperial" ? (
                                            <>
                                                <div className="flex items-center input-wrapper">
                                                    <input
                                                        onBlur={handleHeightCmBlur}
                                                        type="number"
                                                        placeholder="180"
                                                        {...register("heightCm", { required: "Required", min: 122, max: 300 })}
                                                        className="form-input"
                                                    />
                                                    <span className="text-sm text-[#666] mr-4">
                                                        cm
                                                    </span>

                                                </div>
                                                {errors.heightCm && (
                                                    <p className="text-red-500 text-xs">
                                                        Range: 122-300cm
                                                    </p>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex flex-row justify-between gap-5">
                                                    <div className="flex items-center input-wrapper">
                                                        <input
                                                            onBlur={handleHeightFtBlur}
                                                            type="number"
                                                            placeholder="5"
                                                            {...register("heightFeet", { required: "Required" })}
                                                            className="form-input"
                                                        />
                                                        <span className="text-sm text-[#666] mr-4">
                                                            feet
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center input-wrapper">
                                                        <input
                                                            onBlur={handleHeightFtBlur}
                                                            type="number"
                                                            placeholder="11"
                                                            {...register("heightInches", { required: "Required" })}
                                                            className="form-input"
                                                        />
                                                        <span className="text-sm text-[#666] mr-4">
                                                            inches
                                                        </span>
                                                    </div>
                                                </div>
                                                {errors.heightFeet || errors.heightInches && (
                                                    <p className="text-red-500 text-xs">
                                                        These fields are required
                                                    </p>
                                                )}
                                            </>
                                        )
                                    }

                                    <button
                                        onClick={() => {
                                            setHeightUnit(prev =>
                                                prev === "heightInImperial" ?
                                                    "heightInMetric" :
                                                    "heightInImperial"
                                            )
                                            handleHeightCmBlur();
                                            handleHeightFtBlur();
                                        }}
                                        className="text-[#6b5b95] border-none cursor-pointer text-sm underline hover:text-[#160647]">
                                        Switch to {heightUnit === "heightInImperial" ? "Imperial" : "Metric"}
                                    </button>
                                </div>
                            </div>

                            {/* weight */}
                            <div>
                                <div className="flex flex-col items-start gap-3">

                                    <label className="text-base text-[#160647]">
                                        What is your weight?
                                    </label>

                                    {
                                        weightUnit === "weightInImperial" ? (
                                            <div className="flex items-center input-wrapper">
                                                <input
                                                    type="number"
                                                    placeholder="99"
                                                    {...register("weightKg", { required: "Required", })}
                                                    className="form-input"
                                                />
                                                <span className="text-sm text-[#666] mr-4">
                                                    kg
                                                </span>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="flex flex-row justify-between gap-5">
                                                    <div className="flex items-center input-wrapper">
                                                        <input
                                                            type="number"
                                                            placeholder="15"
                                                            {...register("weightStone", { required: true })}
                                                            className="form-input"
                                                        />
                                                        <span className="text-sm text-[#666] mr-4">
                                                            stone
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center input-wrapper">
                                                        <input
                                                            type="number"
                                                            placeholder="9"
                                                            {...register("weightPounds", { required: true })}
                                                            className="form-input"
                                                        />
                                                        <span className="text-sm text-[#666] mr-4">
                                                            pounds
                                                        </span>
                                                    </div>
                                                </div>
                                                {errors.weightPounds || errors.weightPounds && (
                                                    <p className="text-red-500 text-xs">
                                                        These fields are required
                                                    </p>
                                                )}
                                            </>
                                        )
                                    }

                                    <button
                                        onClick={() => {
                                            setWeightUnit(prev =>
                                                prev === "weightInImperial" ?
                                                    "weightInMetric" :
                                                    "weightInImperial"
                                            )
                                            handleWeightKgBlur();
                                        }}
                                        className="text-[#6b5b95] border-none cursor-pointer text-sm underline hover:text-[#160647]">
                                        Switch to {weightUnit === "weightInImperial" ? "Imperial" : "Metric"}
                                    </button>
                                </div>
                            </div>
                            <button
                                className="bg-[#624894] py-3 rounded-full w-full cursor-pointer text-white mt-7">
                                Calculate my weight loss
                            </button>
                        </form>

                        <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">
                            <p className="text-sm text-[#666] font-normal">
                                Your BMI indicates that you currently are:
                            </p>
                            <h2 className="text-3xl font-semibold">
                                Overweight 27.7
                            </h2>
                            <p className="text-sm text-[#160647]">
                                The risk of weight-related health conditions increases for individuals with obesity. For a more in-depth analysis of your weight and pathways to better health, speak to one of our specialists today.
                            </p>
                            <div className=" w-full relative grid grid-cols-[repeat(5,1fr)]">
                                <div className="bg-[#7ec8e3] py-2 h-full w-full rounded-tl-3xl rounded-bl-3xl"></div>
                                <div className="bg-[#a8d5a5] h-full w-full"></div>
                                <div className="bg-[#f4c47c] h-full w-full"></div>
                                <div className="bg-[#f19e8e] h-full w-full"></div>
                                <div className="bg-[#ea6b6b] h-full w-full rounded-tr-3xl rounded-br-3xl"></div>
                                <div className="absolute h-7 w-7 -top-1.5 left-[92%] bg-white rounded-full border-3 border-[#8d69c9]">
                                </div>
                            </div>
                            <p className="italic text-[#666] text-sm">
                                BMI is a predictive indicator of weight range. For a more in-depth understanding of your weight and available medical solutions, start an online consultation with a Mayfair Weightloss Clinic today.
                            </p>
                            <div className="py-5 rounded-2xl bg-[#CCB8EB] flex flex-col items-center justify-center gap-5">
                                <p className="text-[#160647] text-lg">
                                    Your estimated weight loss in 1 year
                                </p>
                                <div className="flex flex-row gap-5">
                                    <p className="text-4xl font-semibold">
                                        <span className="text-lg text-[#6b5b95]">▼</span> 15<sup className="text-lg">kg</sup>
                                    </p>
                                    <p className="py-2 px-3 rounded-full ml-2 bg-[#d7c9eb]">
                                        ▼ 20 %
                                    </p>
                                </div>
                            </div>
                            <button className="py-3 w-full rounded-full bg-[#2d2d2d] text-white cursor-pointer">
                                Check your eligibility
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 flex-1">
                        <h3 className="text-3xl">
                            Who is eligible for Wegovy?
                        </h3>
                        <p className='text-[#212529] text-base'>
                            The clinical team may consider Wegovy injection following a structured medical assessment completed through an online consultation. It is generally appropriate for adults who meet one of the following criteria:
                        </p>
                        <p className='text-[#212529] text-base'>
                            A Body Mass Index
                            <span className="hover:underline cursor-pointer text-[#007bff]">
                                (BMI) of 30 or above
                            </span>
                        </p>
                        <h3 className='text-base'>
                            A BMI of 27 or above with a weight-related health condition, including:
                        </h3>
                        <ul className='pl-10'>
                            <li className='list-disc text-base text-[#212529]'>
                                Cardiovascular disease
                            </li>
                            <li className='list-disc text-base text-[#212529]'>
                                High blood pressure
                            </li>
                            <li className='list-disc text-base text-[#212529]'>
                                Prediabetes
                            </li>
                            <li className='list-disc text-base text-[#212529]'>
                                Obstructive sleep apnoea
                            </li>
                        </ul>
                        <p className='text-[#212529] text-base'>
                            A UK-licensed prescriber confirms final suitability after reviewing your medical information. Always read the patient information leaflet before starting treatment.
                        </p>

                    </div>

                </div>
            </Container>
        </section>
    )
}

export default WegovyBmi