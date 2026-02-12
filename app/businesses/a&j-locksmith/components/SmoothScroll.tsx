'use client'

import { ReactNode, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function LenisSync() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    const updateScrollTrigger = () => ScrollTrigger.update()

    lenis.on('scroll', updateScrollTrigger)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', updateScrollTrigger)
    }
  }, [lenis])

  return null
}

function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <LenisSync />
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
