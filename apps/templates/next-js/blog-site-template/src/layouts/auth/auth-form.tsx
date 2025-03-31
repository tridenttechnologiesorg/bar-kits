"use client"

import { Separator } from "@/components/ui/separator"
import { AuthFormProps } from "@/types/layouts/auth"
import { motion } from "motion/react"
import AuthProviders from "./auth-providers"

export default function AuthForm({
  children,
  showSeparator = true,
  showProviders = true,
  providersLayout = "flex",
  onProviderClick,
}: AuthFormProps) {
  return (
    <div className="space-y-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        {children}
      </motion.div>

      {showSeparator && showProviders && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative my-6"
        >
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-xs text-gray-500">Or continue with</span>
          </div>
        </motion.div>
      )}

      {showProviders && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <AuthProviders layout={providersLayout} onProviderClick={onProviderClick} />
        </motion.div>
      )}
    </div>
  )
}

