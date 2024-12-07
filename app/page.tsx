"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content/>
      <Footer />
    </div>
  );
}
