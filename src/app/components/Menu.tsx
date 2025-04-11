'use client';

import Image from 'next/image';

const menuImages = [
  '/menu1.jpg',
  '/menu1.jpg',
  '/menu1.jpg',
];

const Menu = () => {
  return (
    <section id='menu' className="bg-[#fff4e6] py-12 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#d62828] mb-4 tracking-wide">
        Explore Our Menu
      </h2>
      <p className="text-lg text-gray-700 mb-10 italic">
        Discover the magic of our savory creations 🍽️
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {menuImages.map((src, idx) => (
          <div key={idx} className="shadow-lg rounded-lg overflow-hidden border border-orange-300 hover:scale-105 transition-transform duration-300">
            <Image
              src={src}
              alt={`Menu page ${idx + 1}`}
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="/menu1.jpg"
          download
          className="bg-[#e63946] text-white px-6 py-3 rounded-full shadow hover:bg-[#d62828] transition-all"
        >
          📥 Download Menu
        </a>
        <a
          href="tel:+919999999999"
          className="bg-[#f77f00] text-white px-6 py-3 rounded-full shadow hover:bg-[#d66f00] transition-all"
        >
          📞 Call Us for Bookings
        </a>
      </div>
    </section>
  );
};

export default Menu;
