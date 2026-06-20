"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, TrendingUp, Users, Target } from "lucide-react";

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Organic Traffic",
    value: "+340%",
    color: "text-slate",
    bg: "bg-off-white",
    delay: 0,
    position: "top-8 right-4 md:top-16 md:-right-6",
  },
  {
    icon: Users,
    label: "New Leads/Mo",
    value: "2,400+",
    color: "text-slate",
    bg: "bg-golden/15",
    delay: 0.15,
    position: "bottom-32 -left-4 md:bottom-28 md:-left-10",
  },
  {
    icon: Target,
    label: "ROAS",
    value: "8.2x",
    color: "text-green-600",
    bg: "bg-green-50",
    delay: 0.3,
    position: "bottom-6 right-8 md:bottom-8 md:right-0",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-off-white rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-golden/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #F20B57 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:pr-8"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-off-white border border-slate/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magenta opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-magenta" />
              </span>
              <span className="text-xs font-bold text-slate uppercase tracking-widest">
                Trusted by 150+ Brands Worldwide
              </span>
            </motion.div>

            {/* Headline */}
            {/* <div>
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-slate">
                Digital Marketing{" "}
                <motion.span
                  className="text-slate inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Agency For
                </motion.span>
                <br />
                Travel and
                <br />
                <span className="relative">
                  Hospitality Brands
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-magenta via-crimson to-golden rounded-full origin-left"
                  />
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate/60 leading-relaxed max-w-lg">
              As a Travel and Hospitality marketing agency, we scale high-growth brands.
              Our marketing agency frameworks combine paid media, SEO, and retention to turn buyers into lifetime customers.
            </p> */}

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate max-w-xl">
                Digital Marketing Agency
                <br />
                For Travel &
                <br />
                Hospitality Brands

                <span className="relative block mt-2 w-fit">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-magenta via-crimson to-golden rounded-full origin-left"
                  />
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate/60 leading-relaxed max-w-lg mt-6">
              As a Travel and Hospitality marketing agency, we scale high-growth brands.
              Our marketing agency frameworks combine paid media, SEO, and retention to
              turn buyers into lifetime customers.
            </p>


            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                id="hero-cta-services"
                href="/services"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-magenta text-white font-bold text-sm uppercase tracking-wider glow-magenta hover:bg-crimson transition-all duration-300 hover:scale-105"
              >
                Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                id="hero-cta-contact"
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-magenta text-white font-bold text-sm uppercase tracking-wider glow-magenta hover:bg-crimson transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=80&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=80&auto=format&fit=crop",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Happy client ${i + 1}`}
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-slate text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs text-slate/50">
                  <strong className="text-slate">4.9/5</strong> from 200+ reviews
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Visual ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[480px] md:h-[580px] flex items-center justify-center"
          >
            {/* Main card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-charcoal/10 shadow-2xl shadow-charcoal/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-magenta/10 z-10" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                alt="Analytics dashboard showing growth metrics"
                className="object-cover w-full h-[420px] md:h-[500px]"
              />

              {/* Inner bottom panel */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md p-5 border-t border-charcoal/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate/50 font-medium">Monthly Revenue</p>
                    <p className="text-2xl font-black text-slate">$248,500</p>
                    <p className="text-xs text-green-600 font-semibold">▲ 34% vs last month</p>
                  </div>
                  <div className="flex gap-1 items-end h-10">
                    {[40, 65, 45, 80, 60, 95, 75].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                        className="w-2 rounded-full origin-bottom"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 5
                              ? "linear-gradient(180deg,#F20B57,#C90442)"
                              : "rgba(30,30,36,0.12)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating stat cards */}
            {floatingCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4 + card.delay * 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                  className={`absolute ${card.position} bg-white border border-charcoal/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-charcoal/10 min-w-max z-30`}
                >
                  <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate/50 font-medium">{card.label}</p>
                    <p className={`text-base font-black ${card.color}`}>{card.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative rings */}
            <div className="absolute inset-[-15%] rounded-full border border-[#EE115B] animate-spin-slow pointer-events-none opacity-20" />
            <div
              className="absolute inset-[-8%] rounded-full border border-[#EE115B] pointer-events-none opacity-20"
              style={{ animation: "spin-slow 20s linear infinite reverse" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#EE115B]"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
