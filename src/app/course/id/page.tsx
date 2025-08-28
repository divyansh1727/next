"use client"

import { CardCarousel } from "@/components/ui/card-carousel"
import { CardSwipe } from "@/components/ui/card-swipe"
import Navbar from "@/components/layout/Navbar"

const courses = [
  { src: "/c1.jpg", title: "Beginner Quest", desc: "Your first adventure starts here" },
  { src: "/c2.jpg", title: "Explorer Path", desc: "Unlock new skills & XP" },
  { src: "/c3.jpg", title: "Master Challenge", desc: "Prove your mastery!" },
]

export default function CoursesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <section className="p-10 flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center">🎓 All Quests</h1>

        {/* ✅ Carousel */}
        <h2 className="text-xl font-bold mb-4">Featured</h2>
        <CardCarousel images={courses} />

        {/* ✅ Swipe Deck */}
        <h2 className="text-xl font-bold mt-10 mb-4">Swipe to Explore</h2>
        <div className="flex justify-center">
          <CardSwipe images={courses} />
        </div>
      </section>
    </main>
  )
}
