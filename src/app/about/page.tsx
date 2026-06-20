import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind JJ Elevate — the premium digital marketing agency engineered for explosive brand growth.",
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
