'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import Scene, { SceneHandle } from './components/Scene'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesShowcase from './components/ServicesShowcase'
import RoadsideServices from './components/RoadsideServices'
import WhyChooseUs from './components/WhyChooseUs'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ServiceAreas from './components/ServiceAreas'
import EmergencyCallout from './components/EmergencyCallout'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const sceneRef = useRef<SceneHandle>(null)
  const [heroMode, setHeroMode] = useState(true)
  const lastServiceIndex = useRef(-1)
  const heroTransitionDone = useRef(false)

  const handleModelReady = useCallback(() => {
    const timer = setTimeout(() => {
      const keyModel = sceneRef.current?.keyModel
      if (!keyModel?.group) return

      const group = keyModel.group

      const isMobile = window.innerWidth < 768
      const posProxy = { x: isMobile ? 0 : 2.5, y: isMobile ? 0 : -1.0, z: 0 }
      const scaleProxy = { v: isMobile ? 1.2 : 1.6 }
      const rotProxy = { x: 0.3, y: 0.5, z: 0.1 }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'center center',
          end: 'bottom top',
          scrub: 0.5,
          onEnterBack: () => {
            heroTransitionDone.current = false
            setHeroMode(true)
            lastServiceIndex.current = -1
          },
          onLeave: () => {
            heroTransitionDone.current = true
            setHeroMode(false)
          },
        },
      })

      tl.to(posProxy, {
        x: 0, y: -1.2, z: 0.5,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          if (!heroTransitionDone.current) group.position.set(posProxy.x, posProxy.y, posProxy.z)
        },
      })

      tl.to(scaleProxy, {
        v: 1.3,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          if (!heroTransitionDone.current) group.scale.setScalar(scaleProxy.v)
        },
      }, '<')

      tl.to(rotProxy, {
        x: 0.2, y: Math.PI * 0.25, z: 0,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          if (!heroTransitionDone.current) group.rotation.set(rotProxy.x, rotProxy.y, rotProxy.z)
        },
      }, '<')

    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  const handleServiceChange = useCallback((index: number, color: string) => {
    const scene = sceneRef.current
    if (!scene) return

    const useCarKey = index === 2 || index === 3
    if (useCarKey) {
      scene.switchModel('car')
    } else {
      scene.switchModel('house')
    }

    if (index === lastServiceIndex.current) return
    const isFirstEntry = lastServiceIndex.current === -1
    lastServiceIndex.current = index

    scene.keyModel?.setMaterialColor(color)
    scene.carKeyModel?.setMaterialColor(color)

    const activeGroup = useCarKey
      ? scene.carKeyModel?.group
      : scene.keyModel?.group

    if (!activeGroup) return
    if (isFirstEntry) return

    const targetY = useCarKey ? -0.5 : -1.2
    const rotationY = Math.PI * 0.25 * (index + 1)

    gsap.to(activeGroup.position, {
      y: targetY, z: 0.5, duration: 0.6, ease: 'power2.out', overwrite: true,
    })
    gsap.to(activeGroup.scale, {
      x: 1.3, y: 1.3, z: 1.3, duration: 0.5, ease: 'power2.out', overwrite: true,
    })
    gsap.to(activeGroup.rotation, {
      x: 0.2, y: rotationY, z: 0, duration: 0.6, ease: 'power2.out', overwrite: true,
    })
  }, [])

  const handleExitToWhyChooseUs = useCallback(() => {
    const keyModel = sceneRef.current?.keyModel
    if (!keyModel?.group) return

    gsap.to(keyModel.group.position, { x: 0, y: -2.5, z: 0, duration: 0.8, ease: 'power3.inOut' })
    gsap.to(keyModel.group.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 0.8, ease: 'power3.inOut' })
  }, [])

  const handleReturnToHero = useCallback(() => {
    lastServiceIndex.current = -1
  }, [])

  return (
    <main className="relative w-full overflow-hidden bg-[#05070a]">
      <Navbar />
      <Scene ref={sceneRef} heroMode={heroMode} onModelReady={handleModelReady} />

      {/* Hero */}
      <Hero />

      {/* Pinned Services Showcase */}
      <ServicesShowcase
        onServiceChange={handleServiceChange}
        onExitToWhyChooseUs={handleExitToWhyChooseUs}
        onReturnToHero={handleReturnToHero}
      />

      {/* Roadside */}
      <RoadsideServices />

      {/* Emergency CTA */}
      <EmergencyCallout />

      {/* Trust Signals */}
      <WhyChooseUs />

      {/* Social Proof */}
      <Testimonials />

      {/* Service Coverage Map — Local SEO */}
      <ServiceAreas />

      {/* FAQ — Rich Snippet SEO */}
      <FAQ />

      {/* Quote Form */}
      <ContactForm />

      <Footer />
    </main>
  )
}
