"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const categories = ["All", "SEO", "PPC", "Web Dev", "Branding", "Content"];

const projects = [
  {
    title: "Global Fintech Scale-up",
    category: "SEO",
    tags: ["SEO", "Content"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    metric: "+340% Organic Traffic",
    description: "Took a Series B fintech from page 8 to page 1 for 200+ high-intent keywords in 5 months.",
    client: "FinanceForge Ltd.",
    duration: "6 months",
    size: "tall",
  },
  {
    title: "Enterprise SaaS Platform",
    category: "PPC",
    tags: ["PPC", "CRO"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    metric: "4x Pipeline Velocity",
    description: "Restructured entire Google & LinkedIn ad account, cutting CPL by 62% while 4x-ing qualified pipeline.",
    client: "DataSphere Inc.",
    duration: "4 months",
    size: "normal",
  },
  {
    title: "B2B Tech Startup Relaunch",
    category: "Web Dev",
    tags: ["Web Dev", "UX"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    metric: "65% Higher Conversion",
    description: "Full Next.js rebuild with conversion-rate-optimized architecture. 100/100 Lighthouse. 2.1s load time.",
    client: "NexusTech",
    duration: "8 weeks",
    size: "normal",
  },
  {
    title: "Healthcare Tech Rebrand",
    category: "Branding",
    tags: ["Branding", "SEO"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    metric: "2.5x Marketing ROI",
    description: "Complete brand identity refresh + integrated digital marketing system for Series A healthcare startup.",
    client: "MediLink Health",
    duration: "12 weeks",
    size: "tall",
  },
  {
    title: "E-commerce Growth Sprint",
    category: "PPC",
    tags: ["PPC", "SEO"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    metric: "8.2x ROAS",
    description: "90-day PPC blitz across Google Shopping, Meta, and TikTok. Took ROAS from 1.8x to 8.2x.",
    client: "StyleVault",
    duration: "3 months",
    size: "normal",
  },
  {
    title: "Content Authority Program",
    category: "Content",
    tags: ["Content", "SEO"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    metric: "12x Organic Leads",
    description: "Built a 300-article content ecosystem that owns an entire B2B software topic cluster.",
    client: "CloudScale Solutions",
    duration: "12 months",
    size: "normal",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <>
      {/* ── Page Hero ─────────────────────────── */}
      <section className="relative pt-36 pb-16 overflow-hidden mesh-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-golden/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-golden/20 text-amber-700 text-xs font-bold mb-6 uppercase tracking-widest">
              Our Recent Work
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate leading-[1.05] mb-6">
              Work That{" "}
              <span className="text-slate">Transforms</span>
            </h1>
            <p className="text-slate/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Six industries. Six different challenges. One common outcome: explosive,
              measurable growth for every client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio Grid ────────────────────── */}
      <section className="py-16 bg-off-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(" ", "-")}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-magenta text-white shadow-lg shadow-magenta/30"
                    : "bg-white text-slate/60 hover:text-slate border border-charcoal/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <motion.div layout className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="break-inside-avoid mb-6"
                >
                  <div className="group relative rounded-3xl overflow-hidden bg-white border border-charcoal/10 hover:border-slate/10 transition-all duration-500 card-lift shadow-sm">
                    {/* Image */}
                    <div
                      className={`relative overflow-hidden ${
                        project.size === "tall" ? "h-72 md:h-96" : "h-56 md:h-64"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Category tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate border border-slate/10 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Hover overlay with "View Case Study" */}
                      <div className="absolute inset-0 bg-off-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate font-bold text-sm shadow-xl">
                            <ExternalLink className="w-4 h-4" />
                            View Case Study
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-off-white text-slate text-xs font-bold mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
                        {project.metric}
                      </div>
                      <h3 className="text-xl font-bold text-slate mb-2 text-slate transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate/60 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                        <div>
                          <p className="text-xs text-slate/50">Client</p>
                          <p className="text-slate text-xs font-semibold">{project.client}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate/50">Duration</p>
                          <p className="text-slate text-xs font-semibold">{project.duration}</p>
                        </div>
                        <button
                          className="w-9 h-9 rounded-full bg-charcoal/5 flex items-center justify-center text-slate/50 group-hover:bg-golden group-hover:text-slate transition-all duration-300"
                          aria-label={`View case study for ${project.title}`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-slate/50">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
