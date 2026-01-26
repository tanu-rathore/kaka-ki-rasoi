export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-serif font-bold">
            KKR
          </div>
          <span className="font-serif text-xl tracking-wide">
            Kaka Ki Rasoi
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#menu" className="hover:text-gray-300">Menu</a>
          <a href="#banquet" className="hover:text-gray-300">Banquet</a>
          <a href="#location" className="hover:text-gray-300">Location</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
            ORDER ONLINE
          </button>
          <button className="px-5 py-2 text-sm rounded-full bg-[#d6b24a] text-black hover:bg-[#caa63f] transition">
            BOOK TABLE
          </button>
        </div>

      </div>
    </header>
  )
}
