'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const items = [
  {
    title: "Giani's Red Icecream",
    img: "/giani-red.webp",
  },
  {
    title: "Giani's Blue Icecream",
    img: "/giani-blue.jpeg",
  },
  {
    title: "Giani's Chocolate Burst",
    img: "/giani-choco.webp",
  },
]

export default function OutletsCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length)
  const next = () => setCurrent((prev) => (prev + 1) % items.length)

  const visibleItems = [items[current], items[(current + 1) % items.length]]

  return (
    <section className="bg-[#fdf1d3] px-6 py-16 text-center">
      <p className="text-[#9b2915] font-semibold border-b-2 inline-block border-[#9b2915] pb-1 mb-2 tracking-wider uppercase">
        Outlets
      </p>
      <h2 className="text-4xl font-bold text-[#de3c4b] mb-12">
        Relish Every <span className="italic font-serif">Sweet</span> Bite with Giani&apos;s
      </h2>

      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="flex gap-8 transition-all duration-500 ease-in-out overflow-hidden">
          {visibleItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[300px] shrink-0 rounded-xl overflow-hidden shadow-xl bg-white hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="object-cover w-full h-[200px]"
              />
              <div className="p-5 font-semibold text-gray-800 text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-[#de3c4b]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
