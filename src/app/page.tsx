"use client"

import { SkiperCard } from "@/components/ui/skiper-card"
import { CardCarousel } from "@/components/ui/card-carousel"
import { CardSwipe } from "@/components/ui/card-swipe"
import { Button } from "@/components/ui/button"



const featuredCourses = [

  { src: "/c3.jpg", title: "Master Challenge", desc: "Prove your mastery!" },
  { src: "/c5.jpg", title: "WORK", desc: "Work like hell!" },
  { src: "/c6.jpg", title: "YEHH", desc: "Yeh buddy!" },
  { src : "/c7.jpg", title: "DIVYANSH ", desc: "Rajputana!" },



]

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* ✅ Navbar */}
      

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center p-10">
        <SkiperCard className="mb-6 bg-white shadow-lg">
          <h1 className="text-4xl font-bold text-pink-500">🎮 QuestLearn</h1>
          <p className="mt-2 text-gray-700">
            Turn learning into an epic adventure. Gain XP, unlock badges, and level up your knowledge!
          </p>
        </SkiperCard>

        {/* ✅ Button */}
        <Button className="px-6 py-3 text-lg bg-indigo-600 text-white rounded-2xl shadow-lg mt-4 hover:bg-indigo-700">
          Start Your Journey 🚀
        </Button>
      </section>

      {/* ✅ Carousel Section */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🔥 Featured Quests</h2>
        <CardCarousel
          images={featuredCourses.map(course => ({
            src: course.src,
            title: course.title,
            description: course.desc,
          }))}
        />
      </section>

      {/* ✅ Swipe Section with SkiperCard styling */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🎴 Swipe Quests</h2>
        <div className="flex justify-center">
          <CardSwipe
            images={featuredCourses.map(course => ({
              src: course.src,
              title: course.title,
              description: course.desc,
            }))}
          />
        </div>
      </section>
    </main>
  )
}
