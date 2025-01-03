"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Laptop, MoreHorizontal } from 'lucide-react'
import { motion } from "framer-motion"

export function Header() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Hamit Can FINDIK</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#education">
              Education
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#reviews">
              Reviews
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button
              className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="hidden lg:inline-flex">Change Theme</span>
              <span className="inline-flex lg:hidden">Theme</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>J
              </kbd>
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-64 rounded-md bg-popover text-popover-foreground shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => {
                      setTheme("light")
                      setIsOpen(false)
                    }}
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                  </button>
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => {
                      setTheme("dark")
                      setIsOpen(false)
                    }}
                  >
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                  </button>
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => {
                      setTheme("system")
                      setIsOpen(false)
                    }}
                  >
                    <Laptop className="mr-2 h-4 w-4" />
                    System
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

