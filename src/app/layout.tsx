import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "QuestLearn",
  description: "Gamified learning platform 🚀",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* ✅ Always visible */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
