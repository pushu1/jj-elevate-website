"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Global Fintech Scale-up",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    metric: "+340% Organic Traffic",
  },
  {
    title: "Enterprise SaaS Platform",
    category: "PPC",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    metric: "4x Pipeline Velocity",
  },
  {
    title: "B2B Tech Startup",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    metric: "65% Higher Conversion",
  },
  {
    title: "Healthcare Tech Solutions",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    metric: "2.5x Marketing ROI",
  },
];

const categories = ["All", "SEO", "PPC", "Web Dev", "Marketing"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="case-studies" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate mb-6"
            >
              Work That <span className="text-slate">Transforms</span> Businesses
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate/60"
            >
              Explore how we've helped leading B2B technology companies scale their revenue through precision-engineered marketing campaigns.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate/10 text-slate font-bold hover:bg-magenta hover:text-white transition-colors"
            >
              View All Works
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === category
                  ? "bg-magenta text-white shadow-lg shadow-magenta/30"
                  : "bg-off-white text-slate/60 hover:text-slate hover:bg-charcoal/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-md"
              >
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                
                {/* Overlay - Dark for contrast against white text inside the image card */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-4 py-1 rounded-full bg-magenta text-white text-sm font-bold mb-4 backdrop-blur-md shadow-md">
                      {project.metric}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 font-medium tracking-wide uppercase text-sm">{project.category}</p>
                  </div>
                  
                  {/* Floating Action Button on hover */}
                  <div className="absolute right-8 bottom-8 w-12 h-12 rounded-full bg-golden flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ArrowUpRight className="w-6 h-6 text-slate" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
