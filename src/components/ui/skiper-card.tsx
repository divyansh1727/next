"use client"

import * as React from "react"
import { Card } from "@/components/ui/card" // or import from your existing card

export function SkiperCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={`p-6 rounded-2xl shadow-lg ${className || ""}`}>
      {children}
    </Card>
  )
}
