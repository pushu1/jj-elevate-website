
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// const services = [
//   {
//     title: "Social Media Management",
//     image: "/services/SMM.png",
//     description:
//       "Turn your social presence into a booking engine. We create high-converting content, manage campaigns, and build a brand voice that converts followers into guests.",
//     button: "Get More Bookings",
//   },
//   {
//     title: "Local SEO",
//     image: "/services/LocalSEO.png",
//     description:
//       "Be the first choice when guests search nearby. We optimize your Google presence and local rankings to drive high-intent traffic and direct inquiries.",
//     button: "Boost My Local Visibility",
//   },
//   {
//     title: "Website SEO",
//     image: "/services/WebsiteSEO.png",
//     description:
//       "Rank higher and drive consistent organic bookings. Our SEO strategies ensure your hotel appears where it matters most.",
//     button: "Increase Organic Bookings",
//   },
//   {
//     title: "AI Search Optimization",
//     image: "/services/AISearchOptimization.png",
//     description:
//       "Get discovered on ChatGPT, Gemini, and AI-driven platforms. We position your brand for the future of search and travel discovery.",
//     button: "Optimize for AI Search",
//   },
//   {
//     title: "Preopening Marketing",
//     image: "/services/PreopeningMarketing.png",
//     description:
//       "Launch with impact and demand from day one. We create buzz, build positioning, and generate early bookings before your property opens.",
//     button: "Plan My Hotel Launch",
//   },
//   {
//     title: "OTA Management",
//     image: "/services/OTAManagement.png",
//     description:
//       "Maximize OTA performance while reducing dependency. We optimize listings, pricing, and visibility to drive higher revenue.",
//     button: "Optimize My OTA Listings",
//   },
//   {
//     title: "Website Development",
//     image: "/services/WebsiteDevelopment.png",
//     description:
//       "Build a high-performance website designed for direct bookings. Fast, mobile-first, and tailored for hospitality conversion.",
//     button: "Build My Hotel Website",
//   },
//   {
//     title: "Sales & Marketing Automation",
//     image: "/services/SalesMarketing.png",
//     description:
//       "Capture, nurture, and convert every lead automatically. We set up systems that turn inquiries into confirmed bookings.",
//     button: "Automate My Bookings",
//   },
//   {
//     title: "Content Creation",
//     image: "/services/ContentCreation.png",
//     description:
//       "Create content that sells the experience. From visuals to storytelling, we position your property as a must-visit destination.",
//     button: "Create High-Converting Content",
//   },
// ];

// export default function HospitalityServicesSlider() {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) =>
//         prev === services.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-white py-6">

//       <div className="max-w-[1280px] mx-auto px-8">

//         <div className="grid lg:grid-cols-[520px_560px] justify-between gap-10 items-start">

//           {/* LEFT */}

//           <div>

//             <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">

//               OUR SERVICES

//             </div>

//             <h2 className="max-w-[500px] text-[32px] lg:text-[36px] font-bold leading-[1.35] text-slate-900 mb-6">

//               Transforming Hospitality Brands

//               <br />

//               with Expert Hospitality Marketing

//               <br />

//               Services

//             </h2>

//             <div className="space-y-1">

//               {services.map((service, index) => (

//                 <button
//                   key={index}
//                   onClick={() => setActive(index)}
//                   className={`w-[320px] h-10 px-5 rounded-xl flex items-center text-[15px] transition-all duration-300

//                   ${
//                     active === index
//                       ? "bg-blue-50 border border-blue-300 text-blue-600 font-semibold"
//                       : "text-slate-600 hover:bg-gray-50"
//                   }`}
//                 >

//                   {service.title}

//                 </button>

//               ))}

//             </div>

//           </div>

//           {/* RIGHT */}

//           <div>

//             <Image
//               src={services[active].image}
//               alt={services[active].title}
//               width={560}
//               height={260}
//               className="w-[560px] h-[220px] object-cover rounded-[28px]"
//             />

//             <h3 className="text-[24px] font-semibold text-slate-900 mt-4 mb-3">

//               {services[active].title}

//             </h3>

//             <p className="text-[16px] text-slate-600 leading-[1.7] max-w-[540px] mb-5">

//               {services[active].description}

//             </p>

//             <button className="inline-flex items-center gap-3 bg-black text-white px-7 py-3 rounded-full font-semibold">

//               {services[active].button}

//               <ArrowUpRight className="w-5 h-5" />

//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    image: "/services/SMM.png",
    description:
      "Turn your social presence into a booking engine. We create high-converting content, manage campaigns, and build a brand voice that converts followers into guests.",
    button: "Get More Bookings",
  },

  {
    title: "Local SEO",
    image: "/services/LocalSEO.png",
    description:
      "Be the first choice when guests search nearby. We optimize your Google presence and local rankings to drive high-intent traffic and direct inquiries.",
    button: "Boost My Local Visibility",
  },

  {
    title: "Website SEO",
    image: "/services/WebsiteSEO.png",
    description:
      "Rank higher and drive consistent organic bookings. Our SEO strategies ensure your hotel appears where it matters most.",
    button: "Increase Organic Bookings",
  },

  {
    title: "AI Search Optimization",
    image: "/services/AISearchOptimization.png",
    description:
      "Get discovered on ChatGPT, Gemini, and AI-driven platforms. We position your brand for the future of search and travel discovery.",
    button: "Optimize for AI Search",
  },

  {
    title: "Preopening Marketing",
    image: "/services/PreopeningMarketing.png",
    description:
      "Launch with impact and demand from day one. We create buzz, build positioning, and generate early bookings before your property opens.",
    button: "Plan My Hotel Launch",
  },

  {
    title: "OTA Management",
    image: "/services/OTAManagement.png",
    description:
      "Maximize OTA performance while reducing dependency. We optimize listings, pricing, and visibility to drive higher revenue.",
    button: "Optimize My OTA Listings",
  },

  {
    title: "Website Development",
    image: "/services/WebsiteDevelopment.png",
    description:
      "Build a high-performance website designed for direct bookings. Fast, mobile-first, and tailored for hospitality conversion.",
    button: "Build My Hotel Website",
  },

  {
    title: "Sales & Marketing Automation",
    image: "/services/SalesMarketing.png",
    description:
      "Capture, nurture, and convert every lead automatically. We set up systems that turn inquiries into confirmed bookings.",
    button: "Automate My Bookings",
  },

  {
    title: "Content Creation",
    image: "/services/ContentCreation.png",
    description:
      "Create content that sells the experience. From visuals to storytelling, we position your property as a must-visit destination.",
    button: "Create High-Converting Content",
  },
];

export default function HospitalityServicesSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-4">

      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid lg:grid-cols-[620px_540px] justify-between gap-8 items-start">

          {/* LEFT */}

          <div>

            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">

              OUR SERVICES

            </div>

       <h2 className="max-w-[700px] text-[28px] lg:text-[34px] font-bold leading-[1.25] text-slate-900 mb-6">

  Transforming Hospitality Brands Hospitality Marketing 

</h2>

            <div className="space-y-1">

              {services.map((service, index) => (

                <button
                  key={index}
                  onClick={() => setActive(index)}

                  className={`w-[340px] h-9 px-5 rounded-xl flex items-center text-[15px] transition-all duration-300

                  ${
                    active === index
                      ? "bg-blue-50 border border-blue-300 text-blue-600 font-semibold"
                      : "text-slate-600 hover:bg-gray-50"
                  }`}
                >

                  {service.title}

                </button>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <Image
              src={services[active].image}
              alt={services[active].title}
              width={540}
              height={260}
              className="w-[540px] h-[220px] object-cover rounded-[28px]"
            />

            <h3 className="text-[26px] font-semibold text-slate-900 mt-4 mb-3">

              {services[active].title}

            </h3>

            <p className="text-[15px] text-slate-600 leading-[1.6] max-w-[540px] mb-5">

              {services[active].description}

            </p>

            <button className="inline-flex items-center gap-3 bg-black text-white px-7 py-3 rounded-full font-semibold hover:scale-105 transition-all">

              {services[active].button}

              <ArrowUpRight className="w-5 h-5" />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}