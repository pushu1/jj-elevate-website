"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, BarChart3, Clock, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "CMS",
    description:
      "Easily manage hotel content, offers, and promotions. Update menus, rooms, and packages in seconds — no IT team needed.",
  },
  {
    icon: Users,
    title: "Booking Engine",
    description:
      "Seamless booking engine designed for hotels. Boost direct reservations by 30%+ and reduce OTA commissions instantly.",
  },
  {
    icon: Clock,
    title: "AI Reservation Desk",
    description:
      "AI-powered assistant that answers guest queries 24/7, reduces missed inquiries, and converts chats into confirmed bookings.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Gateway",
    description:
      "Secure, integrated payments for smooth guest checkout — supporting multi-currency & one-click payments.",
  },
  {
    icon: Award,
    title: "Email Marketing",
    description:
      "Automated and personalized campaigns that deliver 4× higher open rates than traditional hotel emails.",
  },
  {
    icon: CheckCircle2,
    title: "AI Front Desk",
    description:
      "Your virtual receptionist available 24/7 — answering queries, upselling rooms, and handling guest requests instantly.",
  },
  {
    icon: CheckCircle2,
    title: "WhatsApp Marketing",
    description:
      "Engage guests directly where they spend most time. From booking confirmations to offers — drive faster responses & repeat stays.",
  },
   {
    icon: CheckCircle2,
    title: "Local SEO",
    description:
      "Rank higher on Google Maps & ‘near me’ searches. Hotels we optimize see 2× more calls & direct inquiries within weeks.",
  },
  {
    icon: CheckCircle2,
    title: "AI Concierge Desk",
    description:
      "Smart concierge that recommends dining, spa, and activities — increasing ancillary revenue per guest by up to 25%.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 md:py-32 bg-off-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-off-white rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left: Image/Graphic ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden gradient-border">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 via-transparent to-golden/10 z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt="Team collaborating on strategy"
                className="w-full h-80 md:h-[500px] object-cover"
              />
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 md:-right-12 glass-strong rounded-2xl p-5 border border-charcoal/10 shadow-xl"
            >
              <p className="text-3xl font-black text-slate">$200M+</p>
              <p className="text-sm text-slate/70 mt-1">Revenue generated<br />for our clients</p>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-slate">★</span>
                ))}
              </div>
            </motion.div>

            {/* Badge top-left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-4 md:-left-8 glass border border-charcoal/10 rounded-2xl p-4 flex items-center gap-3 shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-golden/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-slate font-bold text-sm">50+ Awards</p>
                <p className="text-slate/50 text-xs">Industry recognized</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Benefits ──────────────────── */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-golden/20 text-amber-700 text-xs font-bold mb-5 uppercase tracking-widest"
            >
              OUR PRODUCTS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate leading-[1.15] mb-6"
            >
              AI Tools That Grow Bookings &{" "}
              <span className="text-slate">
                Enhance Guest Experience
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate/60 text-lg mb-10 leading-relaxed"
            >
              Our AI-powered hotel tools are built to increase direct bookings,
              cut OTA costs, and enhance guest experiences — helping you
              grow revenue while streamlining operations.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group p-5 rounded-2xl bg-white border border-charcoal/10 hover:border-slate/10 transition-all duration-300 card-lift shadow-sm hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-off-white flex items-center justify-center mb-4 group-hover:bg-off-white transition-colors">
                      <Icon className="w-5 h-5 text-slate" />
                    </div>
                    <h3 className="text-slate font-bold text-sm mb-2">{benefit.title}</h3>
                    <p className="text-slate/60 text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
