import banquetImg from "../../assets/banquet.jpg";

export default function BanquetSection() {
  return (
    <section className="relative h-[70vh] md:h-[60vh] w-full overflow-hidden">
      {/* Background Image (replace later) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banquetImg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Heading */}
        <h2 className="font-serif text-[#d6b24a] text-4xl md:text-6xl font-semibold">
          YOUR EVENT, OUR GRANDEUR
        </h2>

        {/* Subtext */}
        <p className="mt-6 max-w-3xl text-gray-200 text-lg md:text-xl italic leading-relaxed">
          Perfect for Birthday Parties, Kitty Parties, and Corporate Gatherings
          on the 2nd Floor of Kalyan Mart.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-block px-10 py-4 rounded-full bg-[#d6b24a] text-black text-sm font-semibold tracking-widest hover:bg-[#caa63f] transition"
          >
            CALL FOR BOOKINGS
          </a>
        </div>
      </div>
    </section>
  );
}
