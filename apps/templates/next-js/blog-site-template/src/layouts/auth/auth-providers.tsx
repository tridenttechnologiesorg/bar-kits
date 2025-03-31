"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { JSX } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AuthProvider, AuthProvidersProps } from "@/types/layouts/auth";
import { OAuthProviders } from "@/types/libs/auth";
import { signInOAuth } from "@/lib/auth-providers";

export default function AuthProviders({
  layout = "flex",
  onProviderClick,
}: AuthProvidersProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleProviderClick = async (providerId: OAuthProviders) => {
    setIsLoading(providerId);
    await signInOAuth(providerId, () => {
      if (onProviderClick) onProviderClick(providerId);
    });
  };

  const providers: AuthProvider[] = [
    {
      id: "google",
      name: "Google",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      ),
      color: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      id: "github",
      name: "Github",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.111.793-.261.793-.58v-2.064c-3.338.724-4.043-1.416-4.043-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.109-.775.419-1.306.762-1.606-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.987-.4 3.009-.405 1.02.005 2.049.138 3.01.405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.805 5.626-5.475 5.922.43.371.812 1.103.812 2.222v3.293c0 .321.19.694.8.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "bg-white text-black",
      hoverColor: "hover:bg-gray-100",
    },
  ];

  return (
    <div
      className={cn(
        "w-full",
        layout === "flex" ? "flex flex-col space-y-2" : "grid grid-cols-2 max-grid-cols-3 gap-2"
      )}
    >
      {providers.map((provider) => (
        <motion.div
          key={provider.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="outline"
            className={cn(
              "w-full border flex items-center justify-center",
              provider.color,
              provider.hoverColor,
              layout === "grid" ? "justify-center" : ""
            )}
            disabled={isLoading !== null}
            onClick={() => handleProviderClick(provider.id)}
          >
            {isLoading === provider.id ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
            ) : (
              provider.icon
            )}
            {layout === "flex" && <span className="ml-2">{provider.name}</span>}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
