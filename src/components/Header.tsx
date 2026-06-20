"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "header-scrolled"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative w-[180px] h-[60px]">

              <Image
                src="/JJELEVATE.png"
                alt="JJ Elevate"
                fill
                priority
                className="object-contain object-left"
              />

            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link-hover relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${isScrolled
                      ? isActive
                        ? "text-slate"
                        : "text-slate/70 hover:text-slate hover:bg-off-white"
                      : isActive
                        ? "text-slate"
                        : "text-slate hover:bg-charcoal/5"
                      } ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute left-4 right-4 bottom-0 h-0.5 bg-golden rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${isScrolled
                  ? "bg-magenta text-white hover:shadow-[0_0_20px_rgba(242,11,87,0.5)]"
                  : "bg-magenta text-white hover:bg-crimson hover:shadow-[0_0_20px_rgba(242,11,87,0.4)]"
                  }`}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                id="mobile-menu-toggle"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled
                  ? "text-slate hover:bg-off-white"
                  : "text-slate hover:bg-charcoal/10"
                  }`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b-2 border-slate/10 shadow-xl py-6 px-4 flex flex-col gap-2"
          >
            {navLinks.map((link, i) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive
                      ? "text-slate bg-off-white border-l-4 border-slate/10"
                      : "text-slate hover:bg-off-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="pt-2"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-magenta text-white text-sm font-bold hover:bg-crimson transition-colors"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
