import { Inter } from "next/font/google";
import Hero from "@/components/home/hero";
import WeightLoss from "@/components/home/weightLoss";
import ThreeSteps from "@/components/home/threeSteps";
import OptimizeWeight from "@/components/home/optimizeWeight";
import Accreditations from "@/components/home/accreditations";
import TakeMeToTop from "@/components/utils/TakeMeToTop";
import WeightLossClinic from "@/components/home/weightLossClinic";
import Testimonials from "@/components/home/testimonials";
import Faqs from "@/components/home/faqs";
import FreeConsultation from "@/components/shared/freeConsultation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <TakeMeToTop />
      <Hero />
      <WeightLoss />
      <ThreeSteps />
      <OptimizeWeight />
      <Accreditations />
      <WeightLossClinic />
      <Testimonials />
      <Faqs />
      <FreeConsultation />
    </>
  );
}
