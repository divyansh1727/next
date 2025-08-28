"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/theme/mode-toggle" // ✅ theme switcher

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/rewards", label: "Rewards" },
    { href: "/profile", label: "Profile" },
    { href: "/lesson/1", label: "Lesson" }, // ✅ dynamic lesson route
  ]

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href)

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow relative">
      {/* Brand */}
      <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        QuestLearn
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${
              isActive(link.href)
                ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                : "hover:text-indigo-600 dark:hover:text-indigo-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
        {/* 🚀 Call-to-Action */}
        <Button size="sm" className="bg-indigo-600 text-white rounded-xl shadow-md">
          Start Quest 🚀
        </Button>
        {/* 🌙 Theme Toggle */}
        <ModeToggle />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-white dark:bg-gray-900 shadow-md w-56 flex flex-col p-4 gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                isActive(link.href)
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="bg-indigo-600 text-white rounded-xl shadow-md">
            Start Quest 🚀
          </Button>
          {/* 🌙 Theme Toggle inside mobile menu */}
          <ModeToggle />
        </div>
      )}
    </nav>
  )
}
