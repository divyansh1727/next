"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-cards"

import { SkiperCard } from "@/components/ui/skiper-card"

interface ImageItem {
  src: string
  title?: string
  description?: string
}

interface CardSwipeProps {
  images: ImageItem[]
}

export function CardSwipe({ images }: CardSwipeProps) {
  return (
    <Swiper
      effect="cards"
      grabCursor
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[EffectCards, Autoplay]}
      className="w-[320px] h-[440px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <SkiperCard className="w-full h-full flex flex-col overflow-hidden rounded-3xl shadow-xl">
            {/* ✅ Image Section */}
            <div className="relative w-full h-2/3">
              <Image
                src={image.src}
                alt={image.title ?? `slide-${index}`}
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>

            {/* ✅ Text Section */}
            <div className="p-4 text-center bg-white">
              {image.title && <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>}
              {image.description && <p className="text-sm text-gray-600 mt-2">{image.description}</p>}
            </div>
          </SkiperCard>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
