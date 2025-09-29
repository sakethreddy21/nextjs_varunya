import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"
import logo from '@/Vaarunya_cropped_bg.png';
import logo2 from '@/logo2.png';
import Image from "next/image"
export default function Footer() {
  return (
    <footer className=" text-black">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center ">
               <div className="flex-shrink-0 ml-[-10px]">
              <Image
                    width={84}
                    height={84}
                    src={logo2}
                    alt="Vaarunya Logo"
                    className="h-12 w-auto object-contain"
                  />
            </div>
              <div>
                <h3 className="text-primary text-[22px] font-extrabold">Vaarunya Global Exim Pvt Ltd</h3>
              </div>
            </div>

            <p className="text-secondary leading-relaxed text-[18px] font-semibold">
              Building enduring partnerships through transparent global trade solutions. We connect verified suppliers with serious buyers worldwide, making international trade accessible, secure, and rewarding.
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:ml-28">
            <h3 className="text-primary text-[20px] font-semibold mb-6  mt-2">Quick Links</h3>
            <nav className="space-y-4">
              <Link href="#" className="block text-[18px] text-secondary font-semibold hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-[18px] text-secondary font-semibold hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/categories" className="block text-[18px]  text-secondary font-semibold hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block text-[18px] text-secondary font-semibold hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-primary text-xl font-semibold mb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="text-[18px]  text-secondary font-semibold">
                <p>51-6-9, Vijayawada Muncipal Corporation</p>
                <p>Revenue Ward 2A, Machavaram,</p>
                <p>Vijayawada - 520004, Andhra Pradesh, India</p>
              </div>

              <div>
                <p className="text-primary text-xl font-semibold ">Phone:</p>
                <p className="text-[18px]  text-secondary font-semibold">+91 9100477554</p>
              </div>

              <div>
                <p className="text-primary text-xl font-semibold mb-2">Email:</p>
                <p className="text-[18px]  text-secondary font-semibold">info@vaarunyaglobalexim.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">©️ 2025 Vaarunya Global Exim Pvt Ltd. All rights reserved.</p>

          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-secondary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-secondary-400  transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-secondary-400  transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}