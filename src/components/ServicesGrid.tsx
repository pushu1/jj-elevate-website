"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Megaphone,
  Search,
  Building2,
  UtensilsCrossed,
  BadgePercent,
  ChefHat,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: MonitorSmartphone,
    title: "HOTEL SOCIAL MEDIA MARKETING",
    description: "Enhance Your Online Presence with Compelling Restaurant Social Media Posts or Campaigns. Our Expert Social Media Management Team Delivers Engaging Creatives for Effective Audience Engagement.",
    href: "/services#HOTELSOCIALMEDIA",
    accent: "from-magenta/8 to-crimson/4",
    iconColor: "text-slate",
    iconBg: "bg-off-white",
    linkColor: "text-slate",
  },
  {
    icon: Megaphone,
    title: "HOTEL GOOGLE ADS",
    description: "Drive Revenue with Hotel Google Ads. With the Expertise of Fielmente- One of the best Hotel Marketing Companies in India to Maximize Your Online Visibility and Generate High-Conversion Bookings.",
    href: "/services#HotelADS",
    accent: "from-golden/15 to-golden/4",
    iconColor: "text-amber-600",
    iconBg: "bg-golden/20",
    linkColor: "group-hover:text-amber-600",
  },
  {
    icon: Search,
    title: "HOTEL SEO",
    description: "Enhance the Potential of Your Hotel with our Targeted SEO Services and a Winning Strategy.",
    href: "/services#HOTELSEO",
    accent: "from-purple-100 to-pink-50",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    linkColor: "group-hover:text-purple-600",
  },
  {
    icon: Building2,
    title: "Hotel OTA",
    description: "Fielmente Hospitality brings decades of experience and groundbreaking technology to help hoteliers worldwide Go Beyond. We are the only Revenue Management Company with a team of Industry Experts with more product solutions than any of our competitors, Fielmente ensures you have the tools you need to succeed.",
    href: "/services#HotelOTA",
    accent: "from-green-50 to-emerald-50",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    linkColor: "group-hover:text-emerald-600",
  },
  {
    icon: UtensilsCrossed,
    title: "RESTAURANT SOCIAL MEDIA MARKETING",
    description: "Enhance Your Online Presence with Compelling Restaurant Social Media Posts or Campaigns. Our Expert Social Media Management Team Delivers Engaging Creatives for Effective Audience Engagement.",
    href: "/services#RESTAURANTSOCIALMEDIA",
    accent: "from-pink-50 to-rose-50",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
    linkColor: "group-hover:text-rose-600",
  },
  {
    icon: BadgePercent,
    title: "Restaurant GOOGLE ADS",
    description: "Drive Revenue with Restaurant Google Ads. With the Expertise of Fielmente- One of the best Restaurant Marketing Companies in India to Maximize Your Online Visibility and Generate High-Conversion Reservations.",
    href: "/services#RestaurantGOOGLE",
    accent: "from-sky-50 to-cyan-50",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    linkColor: "group-hover:text-sky-600",
  },
  {
    icon: ChefHat,
    title: "CLOUD KITCHEN SOCIAL MEDIA MARKETING",
    description: "Enhance Your Online Presence with Compelling Restaurant Social Media Posts or Campaigns. Our Expert Social Media Management Team Delivers Engaging Creatives for Effective Audience Engagement.",
    href: "/services#CLOUDKITCHEN",
    accent: "from-sky-50 to-cyan-50",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    linkColor: "group-hover:text-sky-600",
  },
  {
    icon: Rocket,
    title: "CLOUD KITCHEN GOOGLE ADS",
    description: "Drive Revenue with Cloud Kitchen Google Ads. With the Expertise of Fielmente- One of the best Cloud Kitchen Marketing Companies in India to Maximize Your Online Visibility and Generate High-Conversion Reservations.",
    href: "/services#CLOUDKITCHENADS",
    accent: "from-sky-50 to-cyan-50",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    linkColor: "group-hover:text-sky-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="pt-8 pb-16 bg-white relative z-10 overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-off-white rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-off-white text-slate text-xs font-bold mb-5 uppercase tracking-widest"
          >
            Our Core Competencies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-slate mb-4 leading-tight"
          >
            Transforming Hospitality Brands
            <br />
            with Expert Marketing Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate/55 text-lg leading-relaxed"
          >
            From search to social, we cover every digital channel that matters —
            orchestrated as a unified growth engine.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-7 rounded-3xl bg-white border border-charcoal/8 hover:border-slate/10 transition-all duration-500 overflow-hidden card-lift cursor-pointer shadow-sm hover:shadow-magenta/10 hover:shadow-xl"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-7 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  <h3 className={`text-xl font-bold text-slate mb-4 transition-colors duration-300 ${service.linkColor}`}>
                    {service.title}
                  </h3>
                  <p className="text-slate/55 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className={`inline-flex items-center text-xs font-bold text-slate/40 uppercase tracking-wider transition-colors duration-300 ${service.linkColor}`}
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-magenta text-white font-bold glow-magenta hover:bg-crimson transition-all duration-300 hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
