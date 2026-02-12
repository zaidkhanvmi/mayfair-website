"use client"

import React, { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, LogIn, MailOpen, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [current, setCurrent] = useState(0);

  const pathanme = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Weight Loss Treatments", path: "/available-treatments" },
    { name: "About the Clinic", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Blog", path: "/blogs" },
    { name: "Help & Support", path: "/help" },
  ];

  const slides = [
    "UK based clinical team",
    "Dispensed from UK based pharmacy",
    "Secure and Tracked Delivery",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }


  return (
    <>
      <div className="flex flex-row items-center justify-between pt-4">

        <Link href="/">
          <Image src="/logo.svg" width={190} height={100} alt="Mayfair-logo" />
        </Link>

        <div className="flex flex-col gap-2 z-50">
          <div className="flex flex-row items-center gap-3">

            <button className="hidden custom:block text-base text-[#343a40] font-medium shadow-md flex items-center gap-2 rounded px-4 py-2 cursor-pointer transition-all hover:shadow-xl">
              <span className="inline-block mr-2">
                <MailOpen size={15} color={"#f7a400"} />
              </span>
              Contact Us
            </button>

            <button
              type="button"
              onClick={() => alert("working fine!")}
              className="text-base text-[#343a40] font-medium shadow-md flex items-center gap-2 rounded px-4 py-2 cursor-pointer transition-all hover:shadow-xl">
              <span>
                <LogIn size={15} color={"#f7a400"} />
              </span>
              Login
            </button>

            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden z-50 bg-red-500">
              <Menu size={25} />
            </button>

          </div>

          <p className="hidden custom:block text-gray-700 text-base font-medium">
            <span className="text-[#343a40] font-semibold text-base mr-2">Opening hours:</span>
            Mon-Fri 9:00am to 4:00pm
          </p>

        </div>

      </div >

      {/* Mobile Dropdown Menu */}
      {
        showMenu && (
          <div className="absolute top-[90px] left-0 w-full bg-white shadow-lg z-50 md:hidden">

            {navItems.map((item, index) => {
              const isActive = pathanme === item.path
              return (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setShowMenu(false)}
                  className={`block px-6 py-4 border-b border-gray-200 text-[#2d1b4e] font-medium ${isActive ? "bg-gradient-to-r from-purple-400 to-purple-500 text-white" : ""
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}

          </div>
        )
      }

      {/* Mobile Menu */}
      <div className="w-full md:hidden flex items-center justify-between rounded-full bg-[#160647] mt-4 p-1.5">

        <button onClick={prevSlide} className="text-white">
          <ChevronLeft size={20} />
        </button>

        <h2 className="text-white text-base text-center flex-1">
          {slides[current]}
        </h2>

        <button onClick={nextSlide} className="text-white">
          <ChevronRight size={20} />
        </button>

      </div>

      {/* Desktop Menu */}
      <div className="hidden w-full md:flex flex-row items-center justify-between rounded-full overflow-hidden bg-[#160647] mt-4">
        <div className="flex flex-row items-center">
          {
            navItems.map((item, index) => {
              const isActive = item.name === "Home";
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`py-3 lg:py-5 px-5 lg:px-7.5 text-white text-base font-medium ${isActive ? "bg-[#491492] rounded-l-full" : ""} transition-all hover:bg-[#491492]`}
                >
                  {item.name}
                </Link>
              )
            })
          }
        </div>

        <Link
          href="/login"
          className={`py-3 lg:py-5 px-5 lg:px-7.5 text-white text-base font-medium bg-[#7b50c0] rounded-r-full transition-all flex flex-row items-center gap-2`}
        >
          <span>
            <LogIn size={16} color={"white"} />
          </span>
          Login
        </Link>
      </div>
    </>
  )
}

export default Navbar