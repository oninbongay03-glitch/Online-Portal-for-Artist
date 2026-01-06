'use client';

import { signIn } from "next-auth/react";
import { FaGooglePlusG } from "react-icons/fa";

export default function GoogleSignInButton() {
  return (
    <button 
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-50"
    >
      <FaGooglePlusG />
      Sign in with Google
    </button>
  );
}