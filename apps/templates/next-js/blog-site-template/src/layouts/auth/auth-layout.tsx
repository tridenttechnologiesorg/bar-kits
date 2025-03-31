"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { AuthLayoutProps } from "@/types/layouts/auth";

export default function AuthLayout({
  children,
  title,
  description,
  backTo,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-md overflow-hidden rounded-2xl border bg-white/80 shadow-xl backdrop-blur-sm"
      >
        <div className="flex flex-col space-y-2 p-6 pt-8">
          <motion.h1
            className="text-center text-2xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {children}
        </motion.div>

        {backTo && (
          <div className="border-t p-6">
            <Link
              href={backTo.href}
              className={cn(
                "flex items-center justify-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
              )}
            >
              {backTo.label}
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
