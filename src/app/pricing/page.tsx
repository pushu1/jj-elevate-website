import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingPage from "@/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing plans for digital marketing services. Monthly and yearly options available. No hidden fees, no lock-in contracts.",
};

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PricingPage />
      </main>
      <Footer />
    </div>
  );
}
