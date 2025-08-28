"use client"

import { useParams } from "next/navigation"
import { SkiperCard } from "@/components/ui/skiper-card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function LessonPage() {
  const { id } = useParams()

  return (
    <main className="p-10 flex justify-center bg-gray-50 min-h-screen">
      <SkiperCard className="max-w-lg w-full p-6 bg-white rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">📘 Lesson {id}</h1>
        <p className="text-gray-600 mb-6">
          Welcome to Lesson {id}! Here you’ll learn step by step about this
          topic. Stay consistent to unlock rewards & XP.
        </p>

        {/* Progress */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Progress</p>
          <Progress value={30} className="h-3 rounded-full" />
        </div>

        {/* Action */}
        <Button className="bg-indigo-600 text-white rounded-xl w-full">
          ✅ Complete Lesson
        </Button>
      </SkiperCard>
    </main>
  )
}
