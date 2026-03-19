export default function FindUs() {
  return (
    <section className="bg-[#efe7db] py-20" id="location">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif text-[#3b2a1f] mb-8">
            Find Us
          </h2>

          <div className="mb-6">
            <p className="text-xs tracking-widest text-[#caa64a] font-semibold mb-2">
              LOCATION
            </p>

            <p className="text-gray-700 leading-relaxed">
             Dhar Rd, near Sai mandir, Jawahar Tekri, Sinhasa, Indore, Madhya Pradesh 452002
            </p>
          </div>

          <div className="mb-8">
            <p className="text-xs tracking-widest text-[#caa64a] font-semibold mb-2">
              RESERVATION
            </p>

            <p className="text-2xl font-semibold text-[#3b2a1f]">
              +91 97525 15015, +91 87707 81848
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/Kaka+ki+rasoi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#caa64a] hover:bg-[#b9963e] text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            GET DIRECTIONS
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Kaka%20ki%20rasoi%20Indore&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}