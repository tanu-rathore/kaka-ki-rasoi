import SignatureDish from "../../assets/signature-dish.jpg";
import InstagramCard from "./instagramCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#f7efe2] py-24" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2b1c12] leading-tight">
              Indore’s Hidden <br /> Sanctuary
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl">
              Located at Jawahar Tekri, Dhar Road, we offer an exquisite
              blend of North Indian and Chinese cuisine. Every corner of
              Kaka ki Rasoi is designed for peace and flavor.
            </p>

            <div className="mt-10 bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 max-w-xl">
              <div className="w-20 h-20 rounded-xl bg-gray-200 overflow-hidden shrink-0">
                <img
                  src={SignatureDish}
                  alt="Chef Special"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-yellow-600 font-semibold">
                  Highly Recommended
                </p>
                <h4 className="font-serif text-lg text-[#2b1c12] mt-1">
                  Chef’s Signature Platter
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Hand-crafted spices & fresh ingredients.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <InstagramCard />
        </motion.div>

      </div>
    </section>
  );
}