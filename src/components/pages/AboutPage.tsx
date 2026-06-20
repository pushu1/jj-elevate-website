"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Link2,
  AtSign,
  Globe,
} from "lucide-react";

const team = [
  {
    name: "Yuvraj Singh Shekhawat",
    role: "Founder and Marketing Director",
    bio: "15 years in growth marketing. Former VP at Salesforce and HubSpot. Built JJ Elevate to prove that premium results don't require enterprise budgets.",
    img: "/Team/YUVRAJSINGH.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Chandra Vardhan Singh Jodha",
    role: "Head of SEO Strategy",
    bio: "Ex-Google Search Quality. Has taken 50+ brands from page 5 to position 1. Speaks fluent algorithm.",
    img: "/Team/CVSINGH.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Pushpendra Sharma",
    role: "Project Manager",
    bio: "Managed $80M+ in paid media spend. Specializes in full-funnel PPC that fills pipelines, not spreadsheets.",
    img: "/Team/PUSHPENDRA.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Arshad Ali",
    role: "Sr. Video Editor",
    bio: "Award-winning designer with roots in brand strategy. She turns complex ideas into visuals that convert.",
    img: "/Team/ARSHAD.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Yash Pareek",
    role: "Graphic Designer",
    bio: "Full-stack architect who builds sites that score 100/100 on Lighthouse — because speed is a growth lever.",
    img: "/Team/YASH.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Altaf Mohammed",
    role: "Business Development Manager",
    bio: "Former editor at TechCrunch. Builds content architectures that dominate entire topic clusters.",
    img: "/Team/ALTAF.png",
    social: { linkedin: "#", twitter: "#" },
  },
];

const values = [
  {
    icon: Target,
    title: "Relentless Focus on ROI",
    description:
      "Every campaign, every piece of content, every dollar of ad spend is tied to a measurable business outcome.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No smoke and mirrors. You see every metric, every test, every win and loss in real-time.",
  },
  {
    icon: Heart,
    title: "Partnership, Not Vendor",
    description:
      "We celebrate your wins like they're our own — because your growth is our reputation.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "The Founding Spark",
    desc: "Jordan James left a VP role to start JJ Elevate with one belief: premium marketing should be accessible to ambitious brands, not just Fortune 500s.",
  },
  {
    year: "2018",
    title: "First $10M Milestone",
    desc: "We crossed $10M in revenue generated for clients and expanded the team to 12 specialists.",
  },
  {
    year: "2020",
    title: "Weathering the Storm",
    desc: "During the global downturn, our clients grew 28% on average. Our data-driven approach proved recession-resistant.",
  },
  {
    year: "2022",
    title: "Agency of the Year",
    desc: "Named Digital Agency of the Year by Marketing Week. Expanded into web development and AI-driven content.",
  },
  {
    year: "2024",
    title: "The Billion Dollar Chapter",
    desc: "Our client portfolio collectively crossed $1B in attributable revenue. The mission continues.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ──────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden mesh-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-off-white text-slate text-xs font-bold mb-6 uppercase tracking-widest">
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate leading-[1.05] mb-8">
              We&apos;re Not an Agency.{" "}
              <span className="text-slate">We&apos;re a Growth Engine.</span>
            </h1>
            <p className="text-xl text-slate/60 leading-relaxed max-w-2xl">
              Built by marketers frustrated with mediocrity, JJ Elevate exists to
              prove that data, creativity, and relentless execution can transform
              any brand into a market leader.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ───────────── */}
      <section className="py-24 bg-off-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden gradient-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="JJ Elevate team in action"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate mb-4">
                  Our Mission
                </h2>
                <p className="text-slate/60 leading-relaxed">
                  To help ambitious brands achieve market dominance through
                  precision-engineered digital marketing — combining deep data
                  intelligence with bold creative execution that moves the needle.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate mb-4">
                  Our Vision
                </h2>
                <p className="text-slate/60 leading-relaxed">
                  A world where every great product or service gets the audience it
                  deserves — where marketing is never a bottleneck but the greatest
                  multiplier of business value.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-7 rounded-3xl bg-white border border-charcoal/10 hover:border-slate/10 transition-all duration-300 card-lift shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-off-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-slate" />
                  </div>
                  <h3 className="text-lg font-bold text-slate mb-3">{val.title}</h3>
                  <p className="text-slate/60 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-golden/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-golden/20 text-amber-700 text-xs font-bold mb-5 uppercase tracking-widest">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate">
              How We Got <span className="text-slate">Here</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-magenta/50 via-golden/30 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 md:text-right md:pr-16" style={i % 2 !== 0 ? { textAlign: "left", paddingLeft: "4rem", paddingRight: 0 } : {}}>
                    <span className="text-slate font-black text-sm uppercase tracking-widest mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate mb-3">{item.title}</h3>
                    <p className="text-slate/60 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-magenta border-4 border-white top-1 z-10 shadow-sm" />

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────── */}
      <section className="py-24 bg-off-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-off-white text-slate text-xs font-bold mb-5 uppercase tracking-widest">
              The People Behind the Growth
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate">
              Meet the <span className="text-slate">Dream Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-3xl border border-charcoal/10 overflow-hidden hover:border-slate/10 transition-all duration-400 card-lift shadow-sm hover:shadow-md"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Social icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate transition-colors shadow-sm"
                    >
                      <Link2 className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} X / Twitter`}
                      className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate transition-colors shadow-sm"
                    >
                      <AtSign className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate">{member.name}</h3>
                  <p className="text-slate text-xs font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate/60 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-golden/20 via-transparent to-crimson/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-slate mb-6"
          >
            Ready to Grow{" "}
            <span className="text-magenta">Together?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate/80 text-lg mb-10"
          >
            Let&apos;s start a conversation about your growth goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-magenta text-white font-bold hover:bg-crimson shadow-xl hover:scale-105 transition-all duration-300"
            >
              Work With Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate/30 text-slate font-semibold hover:border-slate/50 hover:bg-slate/5 transition-all duration-300"
            >
              See Our Work <Globe className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
