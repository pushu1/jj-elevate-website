import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore JJ Elevate's full suite of digital marketing services: SEO, PPC, content strategy, web development, UI/UX design, and social media acceleration.",
};

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesPage />
      </main>
      <Footer />
    </div>
  );
}
