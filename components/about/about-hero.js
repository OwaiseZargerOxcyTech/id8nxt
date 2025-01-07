'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const image = imageRef.current
    const section = sectionRef.current
    const container = containerRef.current

    if (!image || !section || !container) return // Ensure refs are initialized

    // Create timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
      },
    })

    // Add animations to timeline
    tl.to(image, {
      scale: 1.2,
      duration: 1,
    }).to(
      container,
      {
        opacity: 0,
        duration: 0.5,
      },
      '>-0.5' // Overlap timing with the previous animation
    )

    // Cleanup ScrollTrigger and timeline
    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <div
          ref={containerRef}
          className="relative z-10 flex h-full w-full items-center justify-start px-4"
        >
          <div className="text-left">
            <h1 className="mb-6 ml-20 text-4xl font-light text-white md:text-6xl lg:text-9xl">
              Creatively Led.
              <br />
              Results Driven.
            </h1>
            <p className="text-lg ml-20 text-gray-200 md:text-xl">
              Transforming visions into remarkable realities
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-60">
          <img
            ref={imageRef}
            src="https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-png-david-michelangelo-aesthetic-photo-david-michelangelo-sculpture-png-ai-generated-png-image_11565027.png"
            alt="Classical statues with modern neon elements"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}
