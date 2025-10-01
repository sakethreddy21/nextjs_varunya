import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"
import logo from '@/Vaarunya_cropped_bg.png';
import Icon from '@/components/AppIcon';
import logo2 from '@/logo2.png';
import Image from "next/image"
export default function Footer() {
    const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/company/vaarunya-global-exim-pvt-ltd/about/?viewAsMember=true", color: "text-blue-600" },
    { name: "Twitter", icon: "Twitter", url: "#", color: "text-blue-400" },
    { name: "Youtube", icon: "Youtube", url: "https://youtube.com/@vaarunyaglobaleximpvtltd?si=IXuogE82pzbX57j5", color: "text-red-500" },
    { name: "Threads", icon: "AtSign", url: "https://www.threads.com/@vaarunyaglobalexim?igshid=NTc4MTIwNjQ2YQ==", color: "text-black-500" },
    { name: "Facebook", icon: "Facebook", url: "https://www.facebook.com/vaarunyaglobalexim", color: "text-blue-700" },
    { name: "Instagram", icon: "Instagram", url: "https://www.instagram.com/vaarunyaglobalexim?igsh=bjdwb2xhMzQ4Y21w&utm_source=qr", color: "text-pink-600" }
  ];
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
               {socialLinks.map((social, index) => (
                                  <a key={index} href={social.url} className={`w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 ${social.color}`} aria-label={social.name}>
                                    <Icon name={social.icon} size={20} />
                                  </a>
                                ))}
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