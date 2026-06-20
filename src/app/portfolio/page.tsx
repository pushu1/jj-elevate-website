import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioPage from "@/components/pages/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore JJ Elevate's portfolio of award-winning digital marketing campaigns, web development projects, and brand transformations.",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PortfolioPage />
      </main>
      <Footer />
    </div>
  );
}
