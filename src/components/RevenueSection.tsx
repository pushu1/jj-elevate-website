"use client";

import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "120+",
    label: "Hotels & Resorts Served",
  },
  {
    value: "5+ Years",
    label: "Years of Hospitality Expertise",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
  {
    value: "30-40%",
    label: "Increase in Direct Bookings",
  },
];

const features = [
  "95% client retention rate from satisfied partners",
  "Average 40% increase in direct bookings within 3 months",
  "120+ hotels & resorts served across India, UAE, UK & beyond",
];

export default function RevenueSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#fafafa] rounded-3xl p-8 lg:p-16 shadow-sm">

          {/* Top */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">

                Revenue Driven Hotel Marketing Agency, We help you to achieve revenue by

                <span className="text-orange-500"> 2-5X</span>

              </h2>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">

                We help hotels, resorts, and vacation rentals reduce OTA commissions and boost occupancy with AI-driven hospitality marketing strategies.

              </p>

              {/* Features */}

              <div className="mt-8 space-y-4">

                {features.map((feature, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

                    <p className="text-slate-700">
                      {feature}
                    </p>

                  </div>

                ))}

              </div>

              {/* Button */}

              <button className="mt-10 inline-flex items-center gap-3 bg-slate-950 text-white px-7 py-4 rounded-full font-semibold hover:scale-105 transition">

                Book My Free Consultation Call

                <ArrowUpRight className="w-5 h-5" />

              </button>

            </div>

            {/* Right Images */}

            <div className="relative flex justify-center items-center min-h-[420px]">

              <div className="absolute top-0 right-12">

                <Image
                  src="/hotel2.png"
                  alt=""
                  width={260}
                  height={320}
                  className="rounded-3xl object-cover shadow-lg"
                />

              </div>

              <div className="absolute bottom-0 left-0">

                <Image
                  src="/hotel1.png"
                  alt=""
                  width={340}
                  height={420}
                  className="rounded-3xl object-cover shadow-lg"
                />

              </div>

            </div>

          </div>

          {/* Bottom Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl py-8 px-6 text-center border border-gray-100"
              >

                <h3 className="text-4xl font-bold text-slate-900">

                  {item.value}

                </h3>

                <p className="mt-3 text-slate-500">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}