// card-carousel.tsx
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules"
import Image from "next/image"

interface CardCarouselProps {
  images: { src: string; title?: string; desc?: string }[]
}

export const CardCarousel: React.FC<CardCarouselProps> = ({ images }) => {
  return (
    <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={"auto"}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  navigation
  modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
  className="bg-white p-6 rounded-3xl"   // 👈 container bg
>
  {images.map((image, index) => (
    <SwiperSlide key={index} className="bg-white rounded-3xl">  {/* 👈 slide bg */}
      <div className="size-full rounded-3xl bg-white flex items-center justify-center">
        <Image
          src={image.src}
          alt={`Slide ${index}`}
          width={500}
          height={300}
          className="rounded-3xl object-cover"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  )
}
