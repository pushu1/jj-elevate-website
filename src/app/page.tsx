import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import RevenueSection from "@/components/RevenueSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JJ Elevate | Premium Digital Marketing Agency",
  description:
    "JJ Elevate is a premium digital marketing agency driving explosive growth for ambitious brands through SEO, PPC, web development, and content creation.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <RevenueSection />
        <ServicesGrid />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
