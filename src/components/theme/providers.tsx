"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Clean type-safe props
interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  enableColorScheme?: boolean
  storageKey?: string
  forcedTheme?: string | null
  disableTransitionOnChange?: boolean
  themes?: string[]
  value?: Record<string, string>
  nonce?: string
  scriptProps?: Record<string, unknown> // fixed `any` -> `unknown`
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
