"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    name: "agoda",
    image: "/agoda.png",
  },
  {
    name: "airbnb",
    image: "/airbnb.png",
  },
  {
    name: "booking",
    image: "/booking.png",
  },
  {
    name: "cleartrip",
    image: "/cleartrip.png",
  },
  {
    name: "goibibo",
    image: "/goibibo.png",
  },
  {
    name: "makemytrip",
    image: "/makemytrip.png",
  },
  {
    name: "vyapar",
    image: "/vyapar.png",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-b border-gray-200 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-slate/40 uppercase tracking-widest">
          Our Business Partners
        </p>
      </div>

      <div className="relative w-full overflow-hidden">

        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Scrolling Logos */}
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex items-center whitespace-nowrap"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 shrink-0"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={180}
                height={80}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      </div>

    </section>
  );
}