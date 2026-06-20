import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with JJ Elevate. Tell us about your goals and we'll build a custom growth strategy for your brand.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
