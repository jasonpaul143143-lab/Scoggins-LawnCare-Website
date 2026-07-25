"use client";


import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });


    if (error) {
      alert(error.message);
      return;
    }


    router.push("/admin/bookings");
  }


  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-400 mb-6">
          Admin Login 🌱
        </h1>


        <input
          className="w-full p-3 mb-4 rounded text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <input
          className="w-full p-3 mb-4 rounded text-black"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <button
          onClick={login}
          className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-xl font-bold"
        >
          Login
        </button>
      </div>
    </main>
  );
}

