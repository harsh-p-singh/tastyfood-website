'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#fef6e4] text-center">
      <h2 className="text-4xl font-bold text-[#de3c4b] mb-4">Book a Private Party</h2>
      <p className="text-gray-700 mb-10 max-w-xl mx-auto">
        Fill in your details and we’ll get back to you shortly!
      </p>

      <form
        action="https://formspree.io/f/myzebavg" // Use your Formspree accound url
        method="POST" 
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8 space-y-6 text-left"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 Mobile number"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email ID *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us something about your enquiry..."
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-[#de3c4b] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#c22d2d] transition"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}
