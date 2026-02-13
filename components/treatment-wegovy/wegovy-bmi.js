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
        const totlaInches = Number(values.heightCm) / 2.5;
        setValue("heightFeet", String(Math.floor(totlaInches) / 12), {
            shouldValidate: true
        });
        setValue("heightInches", String(Math.round(totlaInches) % 12), {
            shouldValidate: true
        });
    }
    console.log(values);

    return (
        <section className='mt-5 py-5 px-12.5 bg-white rounded '>
            <Container>
                <div className='flex flex-row items-center gap-6'>

                    <div className="bg-[#ecdfff] p-10 rounded-[20px] flex flex-col gap-5 flex-1">
                        <h2 className="text-2xl text-[#160647] font-bold">
                            How much weight could you lose with Wegovy in one year?
                        </h2>
                        <p className="text-[#160647] text-sm">
                            * Based on the results of a peer-reviewed clinical study of 2539 participants.
                        </p>
                        {/* Form */}
                        {/* height */}
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
                                    onClick={() =>
                                        setWeightUnit(prev =>
                                            prev === "weightInImperial" ?
                                                "weightInMetric" :
                                                "weightInImperial"
                                        )}
                                    className="text-[#6b5b95] border-none cursor-pointer text-sm underline hover:text-[#160647]">
                                    Switch to {weightUnit === "weightInImperial" ? "Imperial" : "Metric"}
                                </button>
                            </div>
                        </div>
                        <button className="bg-[#624894] py-3 rounded-full w-full cursor-pointer text-white">
                            Calculate my weight loss
                        </button>
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