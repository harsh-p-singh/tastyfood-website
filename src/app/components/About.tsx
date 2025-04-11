import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id='about' className="bg-[#fff7e6] px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center justify-between gap-16">

      <div className="grid grid-cols-2 gap-4 max-w-lg">
        <div className="rounded-[30px] overflow-hidden row-span-2 shadow-lg">
          <Image src="/pizza.jpg" alt="Pizza" width={400} height={400} className="w-full h-full object-cover" />
        </div>
        <div className="rounded-[30px] overflow-hidden shadow-lg">
          <Image src="/noodles.jpeg" alt="Noodles" width={200} height={200} className="w-full h-full object-cover" />
        </div>
        <div className="rounded-[30px] overflow-hidden shadow-lg">
          <Image src="/PaneerTikka.jpg" alt="Paneer Tikka" width={200} height={200} className="w-full h-full object-cover" />
        </div>
        <div className="rounded-[30px_30px_0_30px] overflow-hidden col-span-2 shadow-lg">
          <Image src="/GreenDrink.avif" alt="Green Drink" width={400} height={300} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-xl text-center lg:text-left">
        <p className="text-[#d35400] font-semibold tracking-wide mb-2 border-b-2 border-[#d35400] inline-block pb-1">
          The Story
        </p>
        <h2 className="text-4xl font-bold text-[#e74c3c] mb-6 leading-snug">
          What TastyFood is all about!
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Founded in 2020, TastyFood was born from a passion for bold, authentic flavors and unforgettable food experiences. Whether it's a quick bite or a soulful meal, every dish reflects a blend of tradition, freshness, and fun.
        </p>

        <div className="mt-10 text-[#e74c3c] text-2xl">❦</div>
      </div>
    </section>
  )
}
