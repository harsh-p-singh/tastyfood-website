'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const testimonials = [
  {
    name: 'Suresh Naithani',
    quote:
      "Aaoji is my new favorite stop on the highway! The flavors here are very refreshing. Will definitely be stopping here on every trip. It's fast, fresh, and perfect for a nice pit stop!",
  },
  {
    name: 'Rekha Dixit',
    quote:
      'I\'ve tried a lot of places while traveling to Delhi, but Aaoji really stands out! The flavors are amazing, and they’ve got a fun, hygienic setup that anyone can enjoy! Keep up the great work!',
  },
  {
    name: 'Sarthak Singh',
    quote:
      'Stopped by Aaoji, and felt wow! The food was served hot, tasty, and full of flavor. I never expected such good food – this is going to be my go-to on every trip now!',
  },
]

export default function Testimonials() {
  return (
    <section id='testimonials' className="bg-[#fef6e4] py-16 px-4 text-center">
      <h3 className="text-xl text-[#de3c4b] font-serif mb-2 underline decoration-[#de3c4b]">TESTIMONIALS</h3>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#de3c4b] mb-10">RAVING REVIEWS/: HEAR FROM OUR HAPPY FOODIES/!</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg border border-[#de3c4b] p-6 mx-2 min-h-[250px]">
              <div className="text-4xl text-[#f4a261] mb-4">“</div>
              <p className="text-gray-700">{testimonial.quote}</p>
              <p className="mt-4 font-bold text-gray-900">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
