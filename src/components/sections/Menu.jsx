import { menuData } from "./menu/menuData";
import MenuSection from "./menu/menuSection";

export default function Menu() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#2a140b] to-[#0f0704] py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-[#d6b24a]">
          Digital Menu
        </h1>

        <p className="mt-4 text-sm uppercase tracking-widest text-gray-300">
          Pure taste at your fingertips
        </p>

        <div className="mt-16 bg-[#7a1c14] rounded-2xl border border-[#d6b24a]/30 shadow-2xl px-8 md:px-12 lg:px-16 py-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {menuData.map((section, index) => (
              <MenuSection
                key={index}
                category={section.category}
                items={section.items}
              />
            ))}
          </div>

          <div className="mt-16 text-center text-[#f1dba6]">
            <p className="font-serif text-xl">Kaka Ki Rasoi</p>
            <p className="text-sm mt-2">Rajendra Nagar, Indore</p>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="https://www.zomato.com/indore/kaka-ki-rasoi-ranjeet-hanuman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full border border-[#d6b24a] text-[#d6b24a] hover:bg-[#d6b24a] hover:text-black transition font-semibold"
          >
            Order Full Meal on Zomato
          </a>
        </div>
      </div>
    </section>
  );
}
