import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cta from "./components/Cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Samuel Ogunduyile | Portfolio",
    template: "%s | Samuel Ogunduyile",
  },
  description:
    "Portfolio of Samuel Ogunduyile, a software engineer specializing in full-stack web development with React, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Portfolio",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "JavaScript",
    "MongoDB",
  ],
  authors: [{ name: "Samuel Ogunduyile" }],
  openGraph: {
    title: "Samuel Ogunduyile | Portfolio",
    description:
      "Explore projects, skills, and experiences of Samuel Ogunduyile, a full-stack web developer passionate about building modern web applications.",
    url: "https://your-portfolio-url.com",
    siteName: "Samuel Ogunduyile Portfolio",
    images: [
      {
        url: "/og-image.png", // replace with your portfolio banner image
        width: 1200,
        height: 630,
        alt: "Portfolio of Samuel Ogunduyile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}