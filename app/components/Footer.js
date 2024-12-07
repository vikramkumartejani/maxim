import Link from "next/link"
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGamepad,
  FaChevronRight
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="text-black dark:text-white bg-white dark:bg-black border-t dark:border-[#fff]/50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-14 pb-6 pt-10 md:py-12">
        <div className="flex items-start justify-between flex-wrap gap-8 md:gap-5">
          {/* Company Info */}
          <div className="w-[350px]">
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-[#EDB02F]">
              MAXIMZOCKTSLOTS
            </h3>
            <p className="mt-4 text-[#000] dark:text-white text-sm md:text-base leading-relaxed">
              Your ultimate destination for premium gaming solutions and 24/7 support. Experience the thrill of gaming like never before!
            </p>
            <div className="mt-6 flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <Link key={index} href="#" className="bg-[#EDB02F] p-2 md:p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-white hover:text-[#000]/90" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base md:text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="group text-sm md:text-base flex items-center text-[#000] dark:text-white transition-colors duration-300"
                  >
                    <FaChevronRight className="w-3 h-3 mr-2 text-[#EDB02F]  transition-colors duration-300" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gaming Services */}
          <div className="space-y-4">
            <h3 className="text-base md:text-xl font-semibold">Gaming Services</h3>
            <ul className="space-y-4">
              {['Game Support', 'Live Gaming', 'Premium Games', 'Game Store'].map((item) => (
                <li key={item} className="flex items-center space-x-3 group">
                  <FaGamepad className="w-5 h-5 text-[#EDB02F] transition-colors duration-300" />
                  <span className="text-[#000] text-sm md:text-base dark:text-white transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm md:text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: FaPhoneAlt, text: "0800 100 101" },
                { icon: FaEnvelope, text: "support@maximzocktslots.com" },
                { icon: FaMapMarkerAlt, text: "123 Gaming Street, Game City, GC 12345" }
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <item.icon className="w-5 h-5 text-[#EDB02F] transition-colors duration-300 mt-1" />
                  <span className="text-[#000] text-sm md:text-base dark:text-white transition-colors duration-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-[#000] dark:text-white">
              © {new Date().getFullYear()} MAXIMZOCKTSLOTS. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link 
                  key={item}
                  href="#" 
                  className="text-sm text-[#000] dark:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

