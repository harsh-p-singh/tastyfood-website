import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] min-h-[90vh] px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

      {/* Left Text Side */}
      <div className="max-w-xl">
        {/* Logo */}
        <Image 
          src="/HeroFood.jpg" // Make sure this file is in public/
          alt="TastyFood Logo" 
          width={140} 
          height={140} 
          className="mb-6"
        />

        <h3 className="text-[#a96b2c] text-lg font-semibold mb-2">Welcome to TastyFood</h3>
        <h1 className="text-[#a96b2c] text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Taste That Delights, <br />
          Moments You Savor
        </h1>

        <p className="text-gray-700 mb-8">
        From timeless classics to bold new flavors, TastyFood serves the perfect fusion of taste and experience. Whether you&apos;re dining in or grabbing a quick bite, every plate promises joy.
        </p>

        <div className="flex gap-6 items-center">
          <a href="tel:+911234567890" className="bg-[#a96b2c] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#8b572a] transition">
            Call to Order
          </a>
          <Link href="#menu" className="text-[#a96b2c] underline hover:text-black">
            Explore Menu
          </Link>
        </div>
        <div className="mt-8 w-16 h-1 bg-[#a96b2c] mx-auto lg:mx-0 rounded-full"></div>
      </div>
      <div className="relative">
        <div className="rounded-full overflow-hidden border-[12px] border-[#a96b2c] lg:rounded-[200px_200px_0_0]">
          <Image
            src="/HeroFood.jpg" 
            alt="Food Plate"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
