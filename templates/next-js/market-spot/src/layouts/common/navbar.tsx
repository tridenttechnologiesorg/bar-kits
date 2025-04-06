"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { staggerUpAnimation, zoomInAnimation } from "@/utils/animations/motion";
import { ModeToggle } from "@/components/custom/toogle/theme-toogle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full py-4 flex flex-row items-center justify-center  fixed top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/20 backdrop-blur-sm" : ""
      }`}
    >
      <div className="container flex items-center w-full md:w-2/3 justify-between">
        <motion.div
          variants={zoomInAnimation}
          initial="hidden"
          animate="show"
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <motion.span
              variants={staggerUpAnimation}
              className="text-2xl font-bold"
            >
              Market Spot .
            </motion.span>
          </Link>
        </motion.div>

        <motion.nav
          variants={zoomInAnimation}
          className="hidden md:flex items-center space-x-8"
        >
          {["Docs", "Pricing", "Guides"].map((item, index) => (
            <motion.div key={item} variants={staggerUpAnimation} custom={index}>
              <Link href={`/${item.toLowerCase()}`}>
                {item === "Guides" ? (
                  <span className="flex items-center">
                    Guides
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                ) : (
                  item
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          variants={zoomInAnimation}
          className="flex items-center space-x-4"
        >
          <motion.div variants={staggerUpAnimation}>
            <ModeToggle />
          </motion.div>
          <motion.div variants={staggerUpAnimation}>
            <Button variant={"outline"}>Login</Button>
          </motion.div>
          <motion.div variants={staggerUpAnimation}>
            <Button>Start</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
