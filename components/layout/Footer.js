import Image from "next/image"
import Container from "./Container"
import { Mail, Facebook, Instagram, Twitter, Youtube, MailOpen } from "lucide-react"

const Footer = () => {
  return (
    <section className="w-full bg-[#f4f4f4] py-12 text-sm">
      <Container>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Information */}
          <div className="grid grid-cols-2 gap-x-5">
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#160647]">Information</h3>
              <ul className="space-y-3 text-gray-900">
                <li>Home</li>
                <li>All Treatments</li>
                <li>About</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#160647]">Legal</h3>
              <ul className="space-y-3 text-gray-900">
                <li>Shipping</li>
                <li>Terms & Conditions</li>
                <li>Cancellation and Refunds</li>
                <li>Complaints</li>
                <li>Off-label Prescribing</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-5">

            <div>

              <h3 className="font-bold text-lg mb-4 text-[#160647]">Contact</h3>

              <div className="flex items-center gap-2 mb-3 text-gray-700">
                <MailOpen size={16} />
                <span>Contact Us</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={16} color="#5b45a7" />
                <span>contact@mayfairweightlossclinic.co.uk</span>
              </div>

            </div>

            {/* Newsletter */}
            <div className="mt-5 border-t-[1px] border-[#d6d6d6] py-5">
              <h3 className="font-bold text-lg mb-4 text-[#160647]">
                Subscribe to our newsletter
              </h3>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button className="bg-purple-600 text-white px-5 rounded-r-md">
                  Subscribe
                </button>
              </div>

            </div>

            {/* Social */}
            <div className="md:col-span-2 mt-7">
              <div className="py-5 md:p-6 flex flex-row items-center justify-start border-t-[1px] border-b-[1px] border-black">
                <p className="font-bold text-lg text-[#160647] mr-2 md:mr-5">
                  Find us on
                </p>

                <div className="flex gap-2 md:gap-3">
                  <div className="bg-black p-3 cursor-pointer hover:bg-[#5b45a7] rounded">
                    <Facebook size={16} color="white" />
                  </div>
                  <div className="bg-black p-3 cursor-pointer hover:bg-[#5b45a7] rounded">
                    <Instagram size={16} color="white" />
                  </div>
                  <div className="bg-black p-3 cursor-pointer hover:bg-[#5b45a7] rounded">
                    <Twitter size={16} color="white" />
                  </div>
                  <div className="bg-black p-3 cursor-pointer hover:bg-[#5b45a7] rounded">
                    <Youtube size={16} color="white" />
                  </div>
                </div>

              </div>

              {/* Payment & Certifications */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 my-6">

                <Image src="/footer1.svg" alt="amex" width={50} height={50} />
                <Image src="/footer2.svg" alt="mastercard" width={50} height={50} />
                <Image src="/footer3.svg" alt="visa" width={50} height={50} />
                <Image src="/footer4.png" alt="dmca" width={50} height={50} />
                <Image src="/footer5.jpg" alt="pharmacy" width={50} height={50} />
                <Image src="/footer6.png" alt="legitscript" width={50} height={50} />

              </div>
            </div>

          </div>

        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-300 pt-6 text-center text-gray-600 text-xs space-y-3">
          <p>
            Consultation and prescribing is carried out by UK registered healthcare professionals.
            All medication is dispensed and shipped by a UK licensed, GPhC registered Pharmacy.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5">
            <span className="text-black/90 text-sm">
              Privacy and Cookies
            </span>
            <span className="text-black/90 text-sm">
              © 2026 Mayfair Weight loss Clinic. All Rights Reserved.
            </span>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Footer
