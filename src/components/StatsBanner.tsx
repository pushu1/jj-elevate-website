"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 15, suffix: "M+", label: "Revenue Generated" },
  { value: 50, suffix: "+", label: "Industry Awards" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(Math.floor(duration / end), 10);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [value, inView]);

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-black text-slate">
      {count}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 bg-off-white overflow-hidden">
      {/* Decorative golden accent blobs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-golden/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-crimson/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(17,24,39,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              <span className="text-sm md:text-base font-semibold text-slate/70 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Golden bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden to-transparent" />
    </section>
  );
}
