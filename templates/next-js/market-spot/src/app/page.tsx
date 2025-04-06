"use client";
import FooterSection from "@/layouts/common/footer";
import Navbar from "@/layouts/common/navbar";
import HeroSection from "@/layouts/home/hero-section";
import { zoomInAnimation } from "@/utils/animations/motion";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={zoomInAnimation}
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      <Navbar />
      <motion.main
        initial="hidden"
        animate="show"
        variants={zoomInAnimation}
        className="pt-24"
      >
        <HeroSection />
      </motion.main>
      <motion.section
        initial="hidden"
        animate="show"
        variants={zoomInAnimation}
        className="pt-24"
      >
        <FooterSection />
      </motion.section>
    </motion.div>
  );
}
