import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Hero from "@/components/sections/hero";
import WeightLoss from "@/components/sections/weightLoss";
import ThreeSteps from "@/components/sections/threeSteps";
import OptimizeWeight from "@/components/sections/optimizeWeight";
import Accreditations from "@/components/sections/accreditations";
import TakeMeToTop from "@/components/utils/TakeMeToTop";
import WeightLossClinic from "@/components/sections/weightLossClinic";
import Testimonials from "@/components/sections/testimonials";
import Faqs from "@/components/sections/faqs";

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
    </>
  );
}
