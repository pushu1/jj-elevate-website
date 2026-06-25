"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Link2,
  AtSign,
  Camera,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@jjelevate.com",
    href: "mailto:info@jjelevate.com",
    description: "We respond within 2 business hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 78500 27373",
    href: "tel:+917850027373",
    description: "Mon–Fri, 9AM–6PM",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "226, Pal Rd, near 56 Bhog Sweets, opposite Samrat Ashok Udhyan, Keshavnagar, Jodhpur, Rajasthan 342001",
    href: "#",
    description: "By appointment only",
  },
];

const services = [
  "Search Engine Optimization (SEO)",
  "Performance PPC & Paid Media",
  "Content Strategy & Creation",
  "Web Development",
  "UI/UX Design",
  "Social Media Marketing",
  "Full-Service Partnership",
  "Other / Not Sure Yet",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Save to real SQLite database
    try {
      const { createLead } = await import("@/app/actions");
      const result = await createLead({
        ...form,
        type: "Full Brief",
      });
      if (!result.success) throw new Error("Server error");
    } catch (e) {
      console.error("Failed to save lead to database", e);
    }

    setStatus("success");
  };

  return (
    <>
      {/* ── Page Hero ─────────────────────────── */}
      <section className="relative pt-36 pb-16 overflow-hidden mesh-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-off-white text-slate text-xs font-bold mb-6 uppercase tracking-widest">
              Let&apos;s Talk Growth
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate leading-[1.05] mb-6 max-w-4xl">
              Your Growth Starts{" "}
              <span className="text-slate">With a Conversation.</span>
            </h1>
            <p className="text-slate/60 text-xl max-w-xl leading-relaxed">
              Tell us about your goals. We&apos;ll come back with a clear plan, honest
              timelines, and zero agency jargon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content: Split Layout ────────── */}
      <section className="py-16 bg-off-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-off-white rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* ── Left: Contact Info ────────── */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate mb-3">
                  Get In Touch
                </h2>
                <p className="text-slate/60 leading-relaxed">
                  Ready to stop leaving revenue on the table? Reach out through
                  any channel and a senior strategist will follow up personally.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={i}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-charcoal/10 hover:border-slate/10 transition-all duration-300 card-lift shadow-sm hover:shadow-md"
                    >
                      <div className="w-12 h-12 rounded-xl bg-off-white flex items-center justify-center flex-shrink-0 group-hover:bg-off-white transition-colors">
                        <Icon className="w-5 h-5 text-slate" />
                      </div>
                      <div>
                        <p className="text-xs text-slate/50 font-semibold uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        <p className="text-slate font-bold text-lg text-slate transition-colors">
                          {info.value}
                        </p>
                        <p className="text-xs text-slate/50 mt-1">{info.description}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs text-slate/50 uppercase tracking-widest font-semibold mb-4">
                  Find Us On
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Link2, label: "LinkedIn", href: "#" },
                    { icon: AtSign, label: "Twitter / X", href: "#" },
                    { icon: Camera, label: "Instagram", href: "#" },
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 rounded-xl bg-white border border-charcoal/10 flex items-center justify-center text-slate/50 text-slate hover:border-slate/10 hover:bg-off-white transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map placeholder */}

              <div className="rounded-2xl overflow-hidden border border-charcoal/10 h-52 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.5690363340937!2d72.9805652!3d26.2521926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743a4545a6802a9%3A0x6869c086efd31a97!2sJJ%20Elevate%20%7C%20Digital%20Marketing%20Agency%7C%20Branding%20%7C%20Advertising%20%7C%20Jodhpur!5e1!3m2!1sen!2sin!4v1782110017662!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

            </div>

            {/* ── Right: Contact Form ─────────── */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-3xl border border-charcoal/10 p-8 md:p-10 relative overflow-hidden shadow-xl"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-magenta via-crimson to-golden" />

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-off-white flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-slate" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate mb-3">
                      Message Received!
                    </h3>
                    <p className="text-slate/60 max-w-md leading-relaxed">
                      Thank you for reaching out. A senior strategist will review your
                      brief and follow up within 2 business hours.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" }); }}
                      className="mt-8 px-6 py-3 rounded-full border border-slate/10 text-slate font-semibold hover:bg-off-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold text-slate mb-2">
                      Send Us a Brief
                    </h2>
                    <p className="text-slate/50 text-sm mb-8">
                      The more detail you share, the better we can tailor our response.
                    </p>

                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2">
                            Full Name *
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Alex Johnson"
                            className="w-full bg-white border border-charcoal/20 rounded-xl py-3.5 px-4 text-slate placeholder-charcoal/30 focus:outline-none focus:border-slate/10 focus:ring-1 focus:ring-magenta transition-all duration-200"
                          />
                        </div>
                        {/* Email */}
                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2">
                            Work Email *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="alex@company.com"
                            className="w-full bg-white border border-charcoal/20 rounded-xl py-3.5 px-4 text-slate placeholder-charcoal/30 focus:outline-none focus:border-slate/10 focus:ring-1 focus:ring-magenta transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2">
                          Company Name
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Corp."
                          className="w-full bg-white border border-charcoal/20 rounded-xl py-3.5 px-4 text-slate placeholder-charcoal/30 focus:outline-none focus:border-slate/10 focus:ring-1 focus:ring-magenta transition-all duration-200"
                        />
                      </div>

                      {/* Service dropdown */}
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          className="w-full bg-white border border-charcoal/20 rounded-xl py-3.5 px-4 text-slate focus:outline-none focus:border-slate/10 focus:ring-1 focus:ring-magenta transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-slate/50">
                            Select a service...
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2">
                          Monthly Budget
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full bg-white border border-charcoal/20 rounded-xl py-3.5 px-4 text-slate focus:outline-none focus:border-slate/10 focus:ring-1 focus:ring-magenta transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="">Prefer not to say</option>
                          <option value="under-2k">Under $2,000</option>
                          <option value="2k-5k">$2,000 – $5,000</option>
                          <option value="5k-10k">$5,000 – $10,000</option>
                          <option value="10k-plus">$10,000+</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate/50 uppercase tracking-wider mb-2">
                          Tell Us About Your Goals *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="What are your main marketing challenges? What does success look like in 6 months?"
                          className="w-full bg-white border border-charcoal/20 rounded-xl py-3.5 px-4 text-slate placeholder-charcoal/30 focus:outline-none focus:border-slate/10 focus:ring-1 focus:ring-magenta transition-all duration-200 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-magenta text-white font-bold text-sm glow-magenta hover:bg-crimson hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending Your Brief...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
