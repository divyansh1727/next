"use client"

import { useState } from "react"
import { ExpandedTabs } from "@/components/ui/expanded-tabs"
import { SkiperCard } from "@/components/ui/skiper-card"
import { Progress } from "@/components/ui/progress"
import { User, Award, BarChart } from "lucide-react"

export default function Dashboard() {
  // ✅ only allow numbers, not null
  const [activeTab, setActiveTab] = useState<number>(0)

  const tabs = [
    { title: "Profile", icon: User },
    { type: "separator" as const },
    { title: "Badges", icon: Award },
    { type: "separator" as const },
    { title: "Stats", icon: BarChart },
  ]

  return (
    <main className="p-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎮 Your Dashboard</h1>

      {/* Tabs */}
      <ExpandedTabs
        tabs={tabs}
        activeColor="text-primary"
        // ✅ Guard against null
        onChange={(index) => {
          if (index !== null) setActiveTab(index)
        }}
      />

      {/* 👉 Tab Content */}
      <div className="mt-6">
        {activeTab === 0 && (
          <SkiperCard className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">👤 Profile</h2>
            <p className="text-gray-600">
              Username: <span className="font-medium">Divyansh</span>
            </p>
            <p className="text-gray-600">
              Level: <span className="font-medium">Explorer (Lv. 3)</span>
            </p>
          </SkiperCard>
        )}

        {activeTab === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <SkiperCard className="p-6 text-center">🏆 Beginner Badge</SkiperCard>
            <SkiperCard className="p-6 text-center">🔥 Streak Master</SkiperCard>
          </div>
        )}

        {activeTab === 4 && (
          <SkiperCard className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">📊 Stats</h2>
            <p className="mb-4 text-gray-600">XP Progress: 120 / 200</p>
            <Progress value={60} className="h-4 rounded-full" />
          </SkiperCard>
        )}
      </div>
    </main>
  )
}
