"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Megaphone,
  Search,
  Building2,
  UtensilsCrossed,
  ChefHat,
  MonitorSmartphone,
  BadgePercent,
  Rocket,

  Share2,
  CheckCircle2,
  ArrowRight,

  TrendingUp,
  DollarSign,
  FileText,
  Code2,
  Palette,
  Users,
} from "lucide-react";

const services = [
  {
    id: "HOTELSOCIALMEDIA",
    icon: MonitorSmartphone,
    sideIcon: TrendingUp,
    label: "HOTEL SOCIAL MEDIA",
    title: "HOTEL SOCIAL MEDIA MARKETING",
    tagline: "Make online presence With more impactful creatives.",
    description:
      "Enhance Your Online Presence with Compelling Restaurant Social Media Posts or Campaigns. Our Expert Social Media Management Team Delivers Engaging Creatives for Effective Audience Engagement.",
    features: [
      "Showcase Your Hotel",
      "Drive Bookings",
      "Reputation Management",
      "Visual Appeal",
      "Reach a Wider Audience",
      "Calendar Ideation",
      "Scheduling & publishing Content",
      "Linktree Account Setup",
      "Social Media Audit",
    ],
    results: ["+340% organic traffic in 6 months", "50+ #1 keyword rankings", "4.2x revenue from organic channel"],
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
    gradient: "from-magenta/15 to-crimson/5",
    cta: "Start Ranking",
  },
  {
    id: "HotelADS",
    icon: Megaphone,
    sideIcon: DollarSign,
    label: "Hotel ADS",
    title: "HOTEL GOOGLE ADS",
    tagline: "Excel at Google Ads with India’s Leading Hotel Marketing Agency.",
    description:
      "Drive Revenue with Hotel Google Ads. With the Expertise of Fielmente- One of the best Hotel Marketing Companies in India to Maximize Your Online Visibility and Generate High-Conversion Bookings.",
    features: [
      "Accelerate Your Hotel’s Growth with Paid Ads",
      "Increased Visibility",
      "Targeted Advertising",
      "Cost-Effective Results",
      "Drive Direct Bookings",
      "Compete Effectively",
      "Real-Time Optimization",
    ],
    results: ["8.2x average ROAS", "62% reduction in CPL", "$80M+ total ad spend managed"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    gradient: "from-golden/20 to-amber-500/5",
    cta: "Boost Your ROAS",
  },
  {
    id: "HOTELSEO",
    icon: Search,
    sideIcon: FileText,
    label: "Hotel SEO",
    title: "HOTEL SEO",
    tagline: "Skyrocket Your Hotel’s Success with Fielmente’s SEO Strategies!",
    description:
      "Enhance the Potential of Your Hotel with our Targeted SEO Services and a Winning Strategy.",
    features: [
      "Boost Visibility",
      "Drive Bookings",
      "Stay Competitive",
      "Targeted Traffic",
      "Enhanced User Experience",
      "Cost Effective Marketing",
    ],
    results: ["3.8x more organic leads", "Domain authority grew from 22 to 68", "$12M pipeline attributed to content"],
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    gradient: "from-crimson/15 to-magenta/5",
    cta: "Build Your Authority",
  },
  {
    id: "HotelOTA",
    icon: Building2,
    sideIcon: Code2,
    label: "Hotel OTA",
    title: "Hotel OTA",
    tagline: "Let’s Supercharge Your Hotel Revenue",
    description:
      "Fielmente Hospitality brings decades of experience and groundbreaking technology to help hoteliers worldwide Go Beyond. We are the only Revenue Management Company with a team of Industry Experts with more product solutions than any of our competitors, Fielmente ensures you have the tools you need to succeed.",
    features: [
      "Proven Expertise",
      "Data-Driven",
      "Tailored Strategy",
    ],
    results: ["Avg. 100/100 Lighthouse score", "3.4x conversion rate improvements", "Sub-1s First Contentful Paint"],
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    gradient: "from-magenta/15 to-golden/5",
    cta: "Build Your Site",
  },
  {
    id: "RESTAURANTSOCIALMEDIA",
    icon: UtensilsCrossed,
    sideIcon: Palette,
    label: "RESTAURANT SOCIAL MEDIA",
    title: "RESTAURANT SOCIAL MEDIA MARKETING",
    tagline: "Make online presence With more impactful creatives.",
    description:
      "Enhance Your Online Presence with Compelling Restaurant Social Media Posts or Campaigns. Our Expert Social Media Management Team Delivers Engaging Creatives for Effective Audience Engagement.",
    features: [
      "Reach a Wider Audience",
      "Engage with Customers",
      "Promote Special Offers",
      "Build Brand Personality",
      "User Generated Content",
      "Stay Top of Mind",
      "Calendar Ideation",
      "Scheduling & publishing Content",
      "Linktree Account Setup",
      "Social Media Platform Audit & Remedial Action",
    ],
    results: ["4.8% → 1.2% user drop-off rates", "Avg. 230% conversion lift post-redesign", "NPS score improvements of +40 points"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    gradient: "from-golden/15 to-magenta/5",
    cta: "Design Your UX",
  },
  {
    id: "RestaurantGOOGLE",
    icon: BadgePercent,
    sideIcon: DollarSign,
    label: "Restaurant ADS",
    title: "Restaurant GOOGLE ADS",
    tagline: "Excel at Google Ads with India’s Leading Restaurant Marketing Agency.",
    description:
      "Drive Revenue with Restaurant Google Ads. With the Expertise of Fielmente- One of the best Restaurant Marketing Companies in India to Maximize Your Online Visibility and Generate High-Conversion Reservations.",
    features: [
      "Accelerate Your Restaurant’s Growth with Paid Ads",
      "Increased Visibility",
      "Targeted Advertising",
      "Cost-Effective Results",
      "Drive Direct Reservations",
      "Compete Effectively",
      "Real-Time Optimization",
    ],
    results: ["420% LinkedIn engagement increase", "280 qualified leads/month from social", "8 B2B executives hit 50K+ followers"],
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
    gradient: "from-crimson/15 to-golden/5",
    cta: "Grow Your Audience",
  },
  {
    id: "CLOUDKITCHEN",
    icon: ChefHat,
    sideIcon: Users,
    label: "CLOUD KITCHEN SOCIAL MEDIA",
    title: "CLOUD KITCHEN SOCIAL MEDIA MARKETING",
    tagline: "Make online presence With more impactful creatives.",
    description:
      "Enhance Your Online Presence with Compelling Restaurant Social Media Posts or Campaigns. Our Expert Social Media Management Team Delivers Engaging Creatives for Effective Audience Engagement.",
    features: [
      "Reach a Wider Audience",
      "Engage with Customers",
      "Promote Special Offers",
      "Build Brand Personality",
      "Visual Appeal",
      "Customer Feedback and Reviews",
      "Collaborate with Influencers",
      "Scheduling & publishing Content",
      "Linktree Account Setup",
      "Social Media Platform Audit & Remedial Action",
    ],
    results: ["420% LinkedIn engagement increase", "280 qualified leads/month from social", "8 B2B executives hit 50K+ followers"],
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
    gradient: "from-crimson/15 to-golden/5",
    cta: "Grow Your Audience",
  },
  {
    id: "CLOUDKITCHENADS",
    icon: Rocket,
    sideIcon: TrendingUp,
    label: "CLOUD KITCHEN ADS",
    title: "CLOUD KITCHEN GOOGLE ADS",
    tagline: "Excel at Google Ads with India’s Leading Cloud Kitchen Marketing Agency.",
    description:
      "Drive Revenue with Cloud Kitchen Google Ads. With the Expertise of Fielmente- One of the best Cloud Kitchen Marketing Companies in India to Maximize Your Online Visibility and Generate High-Conversion Reservations.",
    features: [
      "Accelerate Your Cloud Kitchen’s Growth with Paid Ads.",
      "Increased Visibility",
      "Targeted Advertising",
      "Cost-Effective Results",
      "Drive Direct Reservations",
      "Compete Effectively",
      "Real-Time Optimization",
    ],
    results: ["420% LinkedIn engagement increase", "280 qualified leads/month from social", "8 B2B executives hit 50K+ followers"],
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
    gradient: "from-crimson/15 to-golden/5",
    cta: "Grow Your Audience",
  },
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeId)!;

  return (
    <>
      {/* ── Page Hero ─────────────────────────── */}
      <section className="relative pt-36 pb-16 overflow-hidden mesh-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-off-white text-slate text-xs font-bold mb-6 uppercase tracking-widest">
              What We Do
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate leading-[1.05] mb-6">
              Six Channels.{" "}
              <span className="text-slate">One Goal.</span>
            </h1>
            <p className="text-slate/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Every service we offer is engineered to generate measurable revenue
              — not just impressions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Explorer ──────────────────── */}
      <section className="py-16 bg-off-white sticky-sidebar-layout relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Nav */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28 space-y-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isActive = service.id === activeId;
                  return (
                    <button
                      key={service.id}
                      id={service.id}
                      onClick={() => setActiveId(service.id)}
                      className={`group w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-semibold text-left transition-all duration-300 ${isActive
                        ? "bg-off-white text-slate border border-slate/10 shadow-sm"
                        : "text-slate/60 hover:text-slate hover:bg-charcoal/5 border border-transparent"
                        }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive
                          ? "bg-off-white text-slate"
                          : "bg-white border border-charcoal/10 group-hover:bg-charcoal/5"
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      {service.label}
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-magenta" />
                      )}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Content Panel */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Header */}
                  <div
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${activeService.gradient} bg-white border border-charcoal/10 shadow-sm p-8 md:p-12`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-off-white text-slate text-xs font-bold mb-4 uppercase tracking-widest border border-slate/10">
                          {activeService.label}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate mb-3">
                          {activeService.title}
                        </h2>
                        <p className="text-slate font-bold text-lg mb-4">
                          {activeService.tagline}
                        </p>
                        <p className="text-slate/70 leading-relaxed">
                          {activeService.description}
                        </p>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden h-52 md:h-64 shadow-md">
                        <img
                          src={activeService.img}
                          alt={activeService.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Features + Results */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* What's included */}
                    <div className="p-7 rounded-3xl bg-white border border-charcoal/10 shadow-sm">
                      <h3 className="text-slate font-bold text-lg mb-5">What&apos;s Included</h3>
                      <ul className="space-y-3">
                        {activeService.features.map((feat, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 text-slate/80 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-slate flex-shrink-0 mt-0.5" />
                            {feat}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="space-y-4">
                      <div className="p-7 rounded-3xl bg-white border border-charcoal/10 shadow-sm">
                        <h3 className="text-slate font-bold text-lg mb-5">Real Results</h3>
                        <ul className="space-y-4">
                          {activeService.results.map((res, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-golden flex-shrink-0" />
                              <span className="text-slate/80 text-sm font-medium">{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-2xl bg-magenta text-white font-bold glow-magenta hover:bg-crimson hover:scale-[1.02] active:scale-100 transition-all duration-300"
                      >
                        {activeService.cta} <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
