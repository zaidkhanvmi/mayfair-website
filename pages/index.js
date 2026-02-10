import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Hero from "@/components/sections/hero";
import WeightLoss from "@/components/sections/weightLoss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <Hero />
      <WeightLoss />
    </>
  );
}
