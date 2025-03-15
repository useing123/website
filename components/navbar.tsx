"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Fixed "vibecoded website" text */}
      <div className="fixed bottom-8 right-8 z-40 rotate-[-5deg] rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 font-bold text-white shadow-lg">
        <span className="text-lg tracking-tight">Vibecoded by Ossein</span>
      </div>

      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent",
        )}
      >
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white transition-all duration-300 group-hover:shadow-lg">
              <span className="font-bold">VC</span>
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              Vibecoded by Ossein
            </span>
          </Link>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-medium text-sm transition-colors hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="fixed inset-0 top-20 z-50 bg-background/95 backdrop-blur-md md:hidden">
              <nav className="container flex flex-col items-center justify-center gap-8 p-8 h-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <ThemeToggle />
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

