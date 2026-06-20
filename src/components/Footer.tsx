"use client";

import Link from "next/link";
import { Send, Briefcase, Camera, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate/10 relative z-10">
      
      {/* Pre-footer CTA */}
      <div className="relative border-b border-slate/10 bg-off-white py-20 overflow-hidden">
        {/* Accent blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-golden/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson/30 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate mb-6">
            Ready to Scale Your <span className="text-magenta">Revenue?</span>
          </h2>
          <p className="text-slate/80 text-lg mb-8 max-w-2xl mx-auto">
            Stop leaving money on the table. Partner with the agency that engineers explosive growth for ambitious B2B tech brands.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-magenta text-white font-bold hover:bg-crimson transition-all duration-300 shadow-xl hover:scale-105"
          >
            Get Your Custom Strategy <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">

  <Image
    src="/JJELEVATE.png"
    alt="JJ Elevate"
    width={220}
    height={120}
    priority
    className="h-16 w-auto"
  />

</Link>
            <p className="text-slate/70 mb-6 text-sm leading-relaxed">
              The premier digital marketing agency engineering explosive growth for B2B tech scale-ups and enterprises.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate/60 hover:bg-magenta hover:text-white transition-all shadow-sm">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate/60 hover:bg-magenta hover:text-white transition-all shadow-sm">
                <Briefcase className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate/60 hover:bg-magenta hover:text-white transition-all shadow-sm">
                <Camera className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-slate font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate/70">
              <li><Link href="/services#seo" className="text-slate transition-colors">Search Engine Optimization</Link></li>
              <li><Link href="/services#ppc" className="text-slate transition-colors">Performance PPC</Link></li>
              <li><Link href="/services#content" className="text-slate transition-colors">Content Architecture</Link></li>
              <li><Link href="/services#web-dev" className="text-slate transition-colors">Web Development</Link></li>
              <li><Link href="/services#design" className="text-slate transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-slate font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate/70">
              <li><Link href="/about" className="text-slate transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-slate transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-slate transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-slate transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-slate transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-slate font-bold mb-6">Subscribe to Insights</h4>
            <p className="text-sm text-slate/70 mb-4">
              Get advanced B2B marketing strategies delivered straight to your inbox monthly. No fluff.
            </p>
            <form 
              className="flex flex-col gap-3"
              onSubmit={async (e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector("input");
                if (input && input.value) {
                  try {
                    const { createLead } = await import("@/app/actions");
                    await createLead({
                      name: "Subscriber",
                      email: input.value,
                      company: "N/A",
                      service: "Newsletter",
                      budget: "N/A",
                      message: "Subscribed to newsletter.",
                      type: "Newsletter",
                    });
                    input.value = "";
                    alert("Subscribed successfully!");
                  } catch (err) {
                    console.error("Failed to save lead", err);
                  }
                }
              }}
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate/40" />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-white border border-charcoal/10 rounded-lg py-3 pl-10 pr-4 text-slate focus:outline-none focus:border-slate/10 focus:ring-1 focus:ring-magenta transition-all"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-magenta text-white font-bold py-3 rounded-lg hover:bg-crimson transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate/50">
          <p>© {new Date().getFullYear()} JJ Elevate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
