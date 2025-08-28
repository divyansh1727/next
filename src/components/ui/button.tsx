"use client"

import * as React from "react"
import { cn } from "@/lib/utils" // utility for combining tailwind classes

export function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
