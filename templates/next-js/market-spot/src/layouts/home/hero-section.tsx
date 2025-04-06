"use client";

import { Button } from "@/components/ui/button";
import {
    staggerUpAnimation,
    zoomInAnimation,
    zoomUpAnimation,
} from "@/utils/animations/motion";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={zoomInAnimation}
      className="pt-32 pb-16"
    >
      <div className="container flex flex-col items-center text-center">
        <motion.div
          variants={staggerUpAnimation}
          className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm"
        >
          <span className="mr-2 rounded-full bg-primary  animate-ping">
            <span className="block h-2 w-2 rounded-full" />
          </span>
          Explore More
        </motion.div>

        <motion.h1
          variants={staggerUpAnimation}
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Email for modern software companies
        </motion.h1>

        <motion.p
          variants={staggerUpAnimation}
          className="mb-2 max-w-2xl text-lg"
        >
          Send your product, marketing, and transactional email with Loops.
        </motion.p>
        <motion.p
          variants={staggerUpAnimation}
          className="mb-8 max-w-2xl text-lg "
        >
          One simple interface, for all your email.
        </motion.p>

        <motion.div
          variants={zoomInAnimation}
          className="mb-12 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <motion.div variants={staggerUpAnimation}>
            <Button>Get started</Button>
          </motion.div>
          <motion.div variants={staggerUpAnimation}>
            <Button variant={"outline"}>
              Read docs <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={zoomUpAnimation}
          className="relative w-full max-w-5xl"
        >
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Loops dashboard"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg w-4/5 mx-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
