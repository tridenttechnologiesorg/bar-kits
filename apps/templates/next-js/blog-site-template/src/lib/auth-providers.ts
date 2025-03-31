import { OAuthProviders } from "@/types/libs/auth";
import { signIn } from "./auth-client";

const signInOAuth = async (
  provider: OAuthProviders,
  onSuccess: () => void,
) => {
  console.log(provider);
  await signIn.social(
    {
      provider: provider,
      callbackURL: process.env.NEXT_PUBLIC_APP_URL + "/dashboard",
    },
    {
      onSuccess() {
        onSuccess();
      }
    }
  );
};

const signInEmailPassword = async (email: string, password: string, onSuccess: () => void) => {
  await signIn.email({
    email,
    password,
  }, {
    onSuccess: () => {
        onSuccess()
    }
  });
};

export { signInOAuth, signInEmailPassword };
