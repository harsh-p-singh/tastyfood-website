import Image from 'next/image'

const galleryImages = [
  '/food1.jpg',
  '/food2.jpg',
  '/food3.jpg',
  '/food4.jpg',
  '/food5.jpg',
  '/food6.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#fff8ec] text-center px-4">
      <h2 className="text-4xl font-bold text-[#de3c4b] mb-4">Gallery</h2>
      <p className="text-gray-700 mb-10 text-lg">Taste the Story: A Visual Journey Through Our Dishes!</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <Image
              src={src}
              alt={`Dish ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
