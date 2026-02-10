"use client"

import React from "react"
import { LogIn, MailOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'

const Navbar = () => {

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Weight Loss Treatments", path: "/available-treatments" },
    { name: "About the Clinic", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Blog", path: "/blogs" },
    { name: "Help & Support", path: "/help" },
  ];

  return (
    <>
      <div className="flex flex-row items-center justify-between pt-4">

        <Link href="/">
          <Image src="/logo.svg" width={190} height={100} alt="Mayfair-logo" />
        </Link>

        <div className="flex flex-col gap-2 z-50">
          <div className="flex flex-row items-center gap-3">
            <button className="text-base text-[#343a40] font-medium shadow-md flex items-center gap-2 rounded px-4 py-2 cursor-pointer transition-all hover:shadow-xl">
              <span>
                <MailOpen size={15} color={"#f7a400"} />
              </span>
              Contact Us
            </button>
            <button className="text-base text-[#343a40] font-medium shadow-md flex items-center gap-2 rounded px-4 py-2 cursor-pointer transition-all hover:shadow-xl">
              <span>
                <LogIn size={15} color={"#f7a400"} />
              </span>
              Login
            </button>
          </div>
          <p className="text-gray-700 text-base font-medium">
            <span className="text-[#343a40] font-semibold text-base mr-2">Opening hours:</span>
            Mon-Fri 9:00am to 4:00pm
          </p>
        </div>

      </div>

      <div className="w-full flex flex-row items-center justify-between rounded-full bg-[#160647] mt-4">
        <div className="flex flex-row items-center">
          {
            navItems.map((item, index) => {
              const isActive = item.name === "Home";
              return (
                <Link
                  key={index}
                  href="/"
                  className={`py-5 px-7.5 text-white text-base font-medium ${isActive ? "bg-[#491492] rounded-l-full" : ""} transition-all hover:bg-[#491492]`}
                >
                  {item.name}
                </Link>
              )
            })
          }
        </div>

        <Link
          href="/login"
          className={`py-5 px-7.5 text-white text-base font-medium bg-[#7b50c0] rounded-r-full transition-all flex flex-row items-center gap-2`}
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