'use client'

import { SkiperCard } from "@/components/ui/skiper-card"
import c1 from '/public/c1.jpg'
import c2 from '/public/c2.jpg'
import c3 from '/public/c3.jpg'
import c4 from '/public/c4.jpg'


import { cn } from "@/lib/utils"
import { CardCarousel } from "@/components/ui/card-carousel"

const Page = () => {
  const images=[ 
    {src:"/c1.jpg",alt:"image1"},
    {src:"/c3.jpg",alt:"image2"},
    {src:"/c4.jpg",alt:"image2"}

  ]

  
  return (
    
    <div className="bg-white min-h-screen flex items-center justify-center">\
    <div>
      <CardCarousel images={images}/>
    </div>
      <SkiperCard
        title="Div-dev"
        description="Best in the town"
        step1img1Class={cn(
                    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                    "md:group-hover:-translate-y-6 "
                  )}
                  step2img1Class={cn(
                    "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
                    "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                    "md:group-hover:-translate-y-6"
                  )}
                  step3imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
                  
        image={{
          step1dark1: c1,
          step1dark2: c2,
          step1light1: c1,
          step1light2: c2,
          step2dark1: c3,
          step2dark2: c4,
          step2light1: c3,
          step2light2: c4,
          step3dark: c1,
          step3light: c2,
          step4light: c3,
          alt: "Demo image",
        }}
      />
    </div>
  )
}

export default Page
