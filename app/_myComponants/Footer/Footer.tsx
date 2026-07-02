// components/layout/Footer.tsx

import { Phone, Mail, MapPin } from "lucide-react"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import FeaturesFooter from "../FeatureCardFooter/FeatureCardFooter";

export default function Footer() {
  return (
   <>
    <FeaturesFooter></FeaturesFooter>
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        
        {/* Logo + Description */}
        <div className="lg:col-span-2">
          <div className="bg-white text-black inline-flex items-center gap-2 px-4 py-2 rounded-md font-bold text-lg">
            🛒 FreshCart
          </div>

          <p className="mt-6 text-gray-400 leading-relaxed">
            FreshCart is your one-stop destination for quality products.
            From fashion to electronics, we bring you the best brands
            at competitive prices with a seamless shopping experience.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="text-green-500 w-5 h-5" />
              <span>+1 (800) 123-4567</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-green-500 w-5 h-5" />
              <span>support@freshcart.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-green-500 w-5 h-5" />
              <span>123 Commerce Street, New York, NY 10001</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <div className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Shop */}
        <FooterColumn
          title="Shop"
          links={[
            "All Products",
            "Categories",
            "Brands",
            "Electronics",
            "Men's Fashion",
            "Women's Fashion",
          ]}
        />

        {/* Account */}
        <FooterColumn
          title="Account"
          links={[
            "My Account",
            "Order History",
            "Wishlist",
            "Shopping Cart",
            "Sign In",
            "Create Account",
          ]}
        />

        {/* Support */}
        <FooterColumn
          title="Support"
          links={[
            "Contact Us",
            "Help Center",
            "Shipping Info",
            "Returns & Refunds",
            "Track Order",
          ]}
        />

        {/* Legal */}
        <FooterColumn
          title="Legal"
          links={[
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
          ]}
        />
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 mt-12 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2026 FreshCart. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer></>
  )
}

// Reusable Column
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-white cursor-pointer transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}