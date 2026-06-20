import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "JJ Elevate | Premium Digital Marketing Agency",
    template: "%s | JJ Elevate",
  },
  description:
    "JJ Elevate is a premium digital marketing agency driving explosive growth for ambitious brands through SEO, PPC, web development, and content creation.",
  keywords: [
    "digital marketing agency",
    "SEO",
    "PPC",
    "web development",
    "content marketing",
    "social media marketing",
  ],
  openGraph: {
    type: "website",
    siteName: "JJ Elevate",
    title: "JJ Elevate | Premium Digital Marketing Agency",
    description:
      "Explosive growth for ambitious brands. Data-driven digital marketing, SEO, and performance advertising.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-deep-navy text-foreground">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
