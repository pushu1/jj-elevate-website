"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, X, Zap, ArrowRight, HelpCircle } from "lucide-react";

const monthlyPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 2499,
    description: "Perfect for growing startups who need to build their digital foundation.",
    badge: null as string | null,
    features: [
      { label: "SEO audit & on-page optimization", included: true },
      { label: "Google Ads management (up to $5k spend)", included: true },
      { label: "4 blog posts/month", included: true },
      { label: "Monthly performance report", included: true },
      { label: "Social media (2 platforms)", included: true },
      { label: "Dedicated account manager", included: false },
      { label: "Landing page CRO", included: false },
      { label: "Link building campaigns", included: false },
      { label: "Custom dashboard access", included: false },
    ],
    cta: "Start Growing",
    highlight: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 5999,
    description: "Our most popular plan for scaling brands serious about market leadership.",
    badge: "Most Popular" as string | null,
    features: [
      { label: "Full technical SEO & link building", included: true },
      { label: "Google & LinkedIn Ads (up to $25k)", included: true },
      { label: "12 content pieces/month", included: true },
      { label: "Weekly performance reporting", included: true },
      { label: "Social media (4 platforms)", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "Landing page CRO (2/month)", included: true },
      { label: "Competitor monitoring", included: true },
      { label: "Custom dashboard access", included: false },
    ],
    cta: "Scale Up Now",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 12999,
    description: "Full-service growth partnership for ambitious brands targeting market domination.",
    badge: null as string | null,
    features: [
      { label: "Full SEO program + PR link outreach", included: true },
      { label: "Unlimited paid media management", included: true },
      { label: "24+ content pieces/month", included: true },
      { label: "Real-time dashboard & weekly calls", included: true },
      { label: "All social platforms + executive LinkedIn", included: true },
      { label: "Dedicated senior account team", included: true },
      { label: "Unlimited landing page CRO", included: true },
      { label: "Competitive intelligence suite", included: true },
      { label: "Custom dashboard access", included: true },
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

type Plan = (typeof monthlyPlans)[number];

const yearlyPlans: Plan[] = monthlyPlans.map((plan) => ({
  ...plan,
  price: Math.round(plan.price * 10),
}));

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. We operate on month-to-month agreements. No lock-in, no cancellation fees. We earn your business every month.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees. We invest our own time in onboarding because we know the results will speak for themselves.",
  },
  {
    q: "How long until I see results?",
    a: "PPC campaigns typically show impact in week 1-2. SEO results build over 3-6 months. We'll set clear milestones at kickoff.",
  },
  {
    q: "Do you work with any industry?",
    a: "We specialize in B2B tech, SaaS, and professional services. We only take clients we're confident we can get exceptional results for.",
  },
  {
    q: "What does 'Custom Dashboard' include?",
    a: "A live Looker Studio dashboard pulling from Google Analytics, Search Console, your CRM, and ad platforms — all in one place.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const currentPlans = billing === "monthly" ? monthlyPlans : yearlyPlans;

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
              Simple, Transparent Pricing
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate leading-[1.05] mb-6">
              Invest in Growth.{" "}
              <span className="text-slate">Not Guesswork.</span>
            </h1>
            <p className="text-slate/60 text-xl max-w-xl mx-auto leading-relaxed mb-10">
              No hidden fees. No lock-in. Just premium digital marketing that pays for itself — multiple times over.
            </p>

            {/* Billing Toggle */}
            <div
              className="inline-flex items-center gap-4 bg-white border border-charcoal/10 shadow-sm rounded-full p-1.5"
              role="group"
              aria-label="Billing period"
            >
              <button
                id="billing-monthly"
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  billing === "monthly"
                    ? "bg-magenta text-white shadow-md"
                    : "text-slate/60 hover:text-slate"
                }`}
              >
                Monthly
              </button>
              <button
                id="billing-yearly"
                onClick={() => setBilling("yearly")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  billing === "yearly"
                    ? "bg-magenta text-white shadow-md"
                    : "text-slate/60 hover:text-slate"
                }`}
              >
                Yearly
                <span className="px-2 py-0.5 rounded-full bg-golden/20 text-amber-700 text-xs font-black">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────── */}
      <section className="pb-24 bg-off-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {currentPlans.map((plan, i) => (
                <motion.div
                  key={`${billing}-${plan.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-3xl border transition-all duration-300 overflow-hidden ${
                    plan.highlight
                      ? "border-slate/10 bg-white shadow-[0_0_40px_rgba(242,11,87,0.1)] scale-100 md:scale-105 z-10"
                      : "border-charcoal/10 bg-white hover:border-slate/10 shadow-sm"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-magenta to-crimson" />
                  )}
                  {plan.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-off-white text-slate text-xs font-bold border border-slate/10">
                        <Zap className="w-3 h-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-7 md:p-8">
                    <h3 className="text-xl font-bold text-slate mb-2">{plan.name}</h3>
                    <p className="text-slate/60 text-sm mb-6 leading-relaxed">{plan.description}</p>

                    <div className="mb-8">
                      <div className="flex items-end gap-1">
                        <span className="text-sm text-slate/50 font-medium">$</span>
                        <motion.span
                          key={plan.price}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-5xl font-black text-slate leading-none"
                        >
                          {plan.price.toLocaleString()}
                        </motion.span>
                      </div>
                      <p className="text-slate/40 text-xs mt-1.5 font-medium">
                        {billing === "monthly" ? "per month" : "per year (2 months free)"}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 mb-8 ${
                        plan.highlight
                          ? "bg-gradient-to-r from-magenta to-crimson text-white glow-magenta hover:scale-105"
                          : "border border-charcoal/20 text-slate hover:border-slate/10 text-slate hover:bg-off-white"
                      }`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4" />
                    </Link>

                    <ul className="space-y-3">
                      {plan.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-sm">
                          {feat.included ? (
                            <CheckCircle2 className="w-4 h-4 text-slate flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-slate/20 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feat.included ? "text-slate/70" : "text-slate/40 line-through"}>
                            {feat.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Custom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-6 md:p-8 rounded-3xl bg-white border border-slate/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div>
              <h3 className="text-slate font-bold text-lg mb-1">Need a Custom Plan?</h3>
              <p className="text-slate/60 text-sm">
                We build bespoke programs for high-growth enterprises with unique requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate/10 text-slate font-bold hover:bg-magenta hover:text-white transition-all duration-300"
            >
              Talk to Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-golden/20 text-amber-700 text-xs font-bold mb-5 uppercase tracking-widest">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate">
              Common <span className="text-slate">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl bg-white border border-charcoal/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  id={`faq-${i}`}
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-slate font-semibold text-sm md:text-base">
                    {faq.q}
                  </span>
                  <HelpCircle
                    className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      openFaq === i ? "text-slate" : "text-slate/40"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-off-white/50"
                    >
                      <div className="px-6 pb-5 text-slate/60 text-sm leading-relaxed border-t border-charcoal/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
