"use client"

import { useState } from "react"

// Simple non-persistent password gate. Edit PASSWORD below.
const PASSWORD = "favouritedusman"

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  const [show, setShow] = useState(false)

  const check = (e) => {
    e?.preventDefault?.()
    if (input === PASSWORD) {
      setUnlocked(true)
    } else {
      setError("Incorrect password")
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md">
      <div className="max-w-md w-full mx-4 p-8 bg-gradient-to-b from-[#061025] to-[#08122a] border border-white/5 rounded-2xl shadow-2xl text-center transform transition-all duration-300">
        <div className="mb-2 text-5xl animate-pulse">✨</div>
        <h2 className="text-2xl font-semibold text-white mb-1">Welcome</h2>
        <p className="text-sm text-gray-300 mb-6">Enter the secret word to open the story.</p>

        <form onSubmit={check} className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              autoFocus
              value={input}
              onChange={(e) => { setInput(e.target.value); setError("") }}
              type={show ? "text" : "password"}
              placeholder="Secret word"
              className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <button
              type="button"
              onClick={() => setShow(s => !s)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-300 hover:text-white"
            >
              {show ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 01.675-3.875M6.6 6.6A9.956 9.956 0 0112 5c5.523 0 10 4.477 10 10 0 1.02-.16 2.01-.463 2.94M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-medium shadow-lg">Open</button>
        </form>

        {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}

        {/* <div className="mt-6 text-xs text-gray-400">A simple entry check — no accounts, no saving.</div> */}
      </div>
    </div>
  )
}
