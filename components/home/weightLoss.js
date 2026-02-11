import Container from "../layout/Container"

const WeightLoss = () => {
  return (
    <div className="pt-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          <div className="flex flex-col gap-2 justify-center text-center md:text-left">
            <h2 className="text-[40px] text-black font-extrabold">
              Weight Loss Treatments
            </h2>
            <p className="text-sm leading-6">
              All weight loss medication prescribed is licensed in the UK, prescribed by a UK registered prescriber and shipped directly from a UK based, GPhC registered pharmacy. This helps ensure that our patients are receiving the highest quality medication, with all the necessary information on dosage and dosage instructions.
            </p>
          </div>

          <div className="bg-cover bg-center w-[340px] h-[340px] rounded-2xl flex items-end justify-center pb-3 justify-self-center md:justify-self-end"
            style={{
              backgroundImage: "url('/weightLossImg.png')",
            }}
          >
            <button className="bg-[#5b45a7] rounded-full px-5 py-3 text-white font-medium">
              View Available Treatments
            </button>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default WeightLoss