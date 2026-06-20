"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const testimonials = [
  {
    quote: "JJ Elevate completely overhauled our demand generation engine. Within 6 months, our inbound pipeline grew by 300%. They are strategic, data-driven, and relentlessly focused on ROI.",
    name: "Sarah Jenkins",
    role: "CMO, CloudScale Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "The technical SEO and content architecture they implemented helped us outrank our biggest enterprise competitors. Our customer acquisition cost dropped by 45% in Q2 alone.",
    name: "Marcus Chen",
    role: "VP of Marketing, DataSphere",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "Finding an agency that truly understands complex B2B sales cycles is rare. JJ Elevate aligned our marketing efforts directly with our sales quotas, acting as an extension of our own team.",
    name: "Elena Rodriguez",
    role: "Director of Demand Gen, NexusTech",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "Their UI/UX team redesigned our core product landing pages. The conversion rate jumped from 1.2% to 4.8% in just three weeks. Absolutely phenomenal work.",
    name: "David Kim",
    role: "Founder, InnovateHQ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-golden/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-off-white rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-golden/20 text-amber-700 text-sm font-bold mb-4 uppercase tracking-widest"
            >
              Client Success
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate"
            >
              Don't Just Take Our <br/><span className="text-slate">Word For It</span>
            </motion.h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pt-8 pb-4"
              >
                <div className="bg-off-white p-8 rounded-3xl border border-charcoal/10 relative h-full flex flex-col hover:border-slate/10 transition-colors shadow-sm">
                  <div className="absolute -top-6 right-8 w-12 h-12 bg-magenta rounded-full flex items-center justify-center shadow-lg shadow-magenta/20">
                    <Quote className="w-6 h-6 text-white fill-white" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-golden text-slate" />
                    ))}
                  </div>
                  
                  <p className="text-slate/70 mb-8 leading-relaxed flex-grow text-lg">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-charcoal/10">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="text-slate font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-slate font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
