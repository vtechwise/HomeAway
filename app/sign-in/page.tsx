"use client";

import { SignIn, SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="grid place-items-center h-[calc(100vh-10rem)]">
      <SignUp path="/sign-in" routing="path" />
    </div>
  );
}
