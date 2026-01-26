import heroBg from '../../assets/hero-bg.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold">
          Kaka Ki Rasoi
        </h1>

        <p className="mt-4 text-gray-200 text-lg md:text-xl italic">
          From our kitchen to your hearts
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-md bg-[#d6b24a] text-black font-semibold hover:bg-[#caa63f] transition">
            View Menu
          </button>
          <button className="px-8 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition">
            Order on Zomato
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 z-20">
        <button className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition">
          ♫
        </button>
      </div>

    </section>
  )
}
