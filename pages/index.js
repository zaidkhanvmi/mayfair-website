import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
