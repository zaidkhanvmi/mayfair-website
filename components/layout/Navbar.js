"use client"

import React, { useState } from "react"
import { LogIn, MailOpen, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  console.log(router.pathname);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Weight Loss Treatments", path: "/available-treatments" },
    { name: "About the Clinic", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Blog", path: "/blogs" },
    { name: "Help & Support", path: "/contact" },
  ];

  return (
    <>
      <div className="flex flex-row items-center justify-between pt-4 gap-5">

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
              onClick={() => router.push("https://dynamic-treacle-887309.netlify.app/start-consultation/")}
              className="text-base text-[#343a40] font-medium md:shadow-md flex items-center gap-2 rounded px-2 md:px-4 py-2 cursor-pointer transition-all hover:shadow-xl">
              <span>
                <LogIn size={15} color={"#f7a400"} />
              </span>
              Login
            </button>

            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden z-50">
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
          <div className="w-full bg-white shadow-lg z-50 md:hidden">

            {navItems.map((item, index) => {
              const isActive = router.pathname === item.path
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

      {/* Desktop Menu */}
      <div className="hidden w-full md:flex flex-row items-center justify-between rounded-full overflow-hidden bg-[#160647] mt-4">
        <div className="flex flex-row items-center">
          {
            navItems.map((item, index) => {
              const isActive = router.pathname === item.path
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`py-3 lg:py-5 px-5 lg:px-7.5 text-white text-base font-medium
                    ${isActive ? "bg-[#491492]" : ""} transition-all hover:bg-[#491492]`}
                >
                  {item.name}
                </Link>
              )
            })
          }
        </div>

        <Link
          target="_blank"
          href="https://dynamic-treacle-887309.netlify.app/start-consultation/"
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