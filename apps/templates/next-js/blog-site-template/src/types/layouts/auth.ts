import { JSX, ReactNode } from "react";
import { OAuthProviders } from "../libs/auth";

export type AuthProvider = {
  id: OAuthProviders;
  name: string;
  icon: JSX.Element;
  color: string;
  hoverColor: string;
};

export type AuthProvidersProps = {
  layout?: "flex" | "grid";
  onProviderClick?: (providerId: string) => void;
};

export type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  backTo?: {
    label: string;
    href: string;
  };
};

export type AuthFormProps = {
  children: ReactNode;
  showSeparator?: boolean;
  showProviders?: boolean;
  providersLayout?: "flex" | "grid";
  onProviderClick?: (providerId: string) => void;
};
