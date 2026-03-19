import { useState } from "react";
import banquetImg from "../../assets/banquet.jpg";

export default function BanquetSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative h-[70vh] md:h-[60vh] w-full overflow-hidden"
        id="banquet"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banquetImg})` }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-[#d6b24a] text-4xl md:text-6xl font-semibold">
            YOUR EVENT, OUR GRANDEUR
          </h2>

          <p className="mt-6 max-w-3xl text-gray-200 text-lg md:text-xl italic leading-relaxed">
            Perfect for Birthday Parties, Kitty Parties, and Corporate
            Gatherings at Kaka Ki Rasoi.
          </p>
          <div className="mt-10">
            <button
              onClick={() => setOpen(true)}
              className="inline-block px-10 py-4 rounded-full bg-[#d6b24a] text-black text-sm font-semibold tracking-widest hover:bg-[#caa63f] transition"
            >
              CALL FOR BOOKINGS
            </button>
          </div>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center relative">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-serif text-[#2b1c12]">
              Call for Bookings
            </h3>

            <p className="mt-4 text-gray-600">
              Reserve your event at Kaka Ki Rasoi
            </p>

            <a
              href="tel:+919752515015"
              className="block mt-6 text-xl font-semibold text-[#d6b24a]"
            >
              +91 97525 15015, +91 87707 81848
            </a>
          </div>
        </div>
      )}
    </>
  );
}