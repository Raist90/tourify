"use client";
import { signIn } from "next-auth/react";

const handleGithubLogin = () => {
  signIn("github", { callbackUrl: "http://localhost:3000/homepage" });
}

export default function LoginPage() {
  return (
    <section className="login">
      <div>
        <h2>
          Login
        </h2>
        <h3>Sign in to your account</h3>
        <button onClick={handleGithubLogin}>
          Sign in with Github
        </button>
      </div>
    </section>
  );
}
