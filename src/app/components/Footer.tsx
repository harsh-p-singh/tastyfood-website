import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f9e0ae] text-[#5c1a0a] py-14 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        <div>
          <Image
            src="/HeroFood.jpg"
            alt="Aaoji Logo"
            width={80}
            height={80}
            className="rounded-xl shadow-md mb-4"
          />
          <p className="text-[#5c1a0a] font-medium mb-4 leading-snug">
            Bold Flavors, Fun Vibes, <br /> Authentic Taste
          </p>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-[#c0392b] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#c0392b] transition"><SiX /></a>
            <a href="#" className="hover:text-[#c0392b] transition"><FaFacebookF /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[#7a4e2d]">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#menu" className="hover:underline">Menu</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
          <p className="text-[#7a4e2d] leading-relaxed">
            NH-24 Highway, Near Toll Plaza<br />
            TastyFood, Uttar Pradesh
          </p>
          <p className="mt-3 font-medium text-[#5c1a0a]">📞 +91 1246 123 456 7899</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
          <div className="text-[#7a4e2d]">
            <p>Monday – Sunday</p>
            <p className="font-medium text-[#5c1a0a]">12:00 PM – 12:00 AM</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-xs text-[#7a4e2d] border-t pt-6 border-[#e1c58f]">
        © {new Date().getFullYear()} TastyFood. All Rights Reserved. Designed & Developed by <span className="font-semibold">Harshpreet Singh</span>.
      </div>
    </footer>
  );
}
