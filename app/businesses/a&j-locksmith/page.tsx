'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import Scene, { SceneHandle } from './components/Scene'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesShowcase from './components/ServicesShowcase'
import RoadsideServices from './components/RoadsideServices'
import WhyChooseUs from './components/WhyChooseUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const sceneRef = useRef<SceneHandle>(null)
  const [heroMode, setHeroMode] = useState(true)
  const lastServiceIndex = useRef(-1)
  const heroTransitionDone = useRef(false)

  // Scrubbed ScrollTrigger: as user scrolls past hero, key glides from right to center
  const handleModelReady = useCallback(() => {
    // Wait for the entrance animation (approx 2s) to finish before hooking up the scroll scrubber
    const timer = setTimeout(() => {
      const keyModel = sceneRef.current?.keyModel
      if (!keyModel?.group) return

      const group = keyModel.group

      // Create proxy objects for GSAP to tween (we'll apply them to the group)
      const posProxy = { x: 2.5, y: -1.0, z: 0 }
      const scaleProxy = { v: 1.6 }
      const rotProxy = { x: 0.3, y: 0.5, z: 0.1 }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'center center',
          end: 'bottom top',
          scrub: 0.5,
          onEnterBack: () => {
            // Returning to hero: re-enable spin
            heroTransitionDone.current = false
            setHeroMode(true)
            lastServiceIndex.current = -1
          },
          onLeave: () => {
            // Leaving hero: stop spin, key is now centered
            heroTransitionDone.current = true
            setHeroMode(false)
          },
        },
      })

      // Animate position from hero (right) to center
      tl.to(posProxy, {
        x: 0, y: -1.2, z: 0.5,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          if (!heroTransitionDone.current) group.position.set(posProxy.x, posProxy.y, posProxy.z)
        },
      })

      // Animate scale from 1.6 to 1.3
      tl.to(scaleProxy, {
        v: 1.3,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          if (!heroTransitionDone.current) group.scale.setScalar(scaleProxy.v)
        },
      }, '<')

      // Animate rotation
      tl.to(rotProxy, {
        x: 0.2, y: Math.PI * 0.25, z: 0,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          if (!heroTransitionDone.current) group.rotation.set(rotProxy.x, rotProxy.y, rotProxy.z)
        },
      }, '<')

    }, 2200) // Wait for entrance animation to finish

    return () => clearTimeout(timer)
  }, [])

  const handleServiceChange = useCallback((index: number, color: string) => {
    const keyModel = sceneRef.current?.keyModel
    const scene = sceneRef.current

    // Toggle between House and Car key based on service index
    // Index 2 is "Automotive Help" (0=Residential, 1=Commercial, 2=Automotive, 3=Roadside, 4=Smart Lock)
    // Roadside (3) should probably also use the car key?
    // Let's say 2 and 3 use Car Key, others use House Key
    if (scene) {
      if (index === 2 || index === 3) {
        scene.switchModel('car')
      } else {
        scene.switchModel('house')
      }
    }

    if (!keyModel?.group) return

    // Only animate if the service index actually changed
    if (index === lastServiceIndex.current) return
    const isFirstEntry = lastServiceIndex.current === -1
    lastServiceIndex.current = index

    // Change material color
    // We need to apply color to whichever model is active, or both?
    // The current KeyModel handle has setMaterialColor. 
    // The CarKeyModel also has it.
    // Let's try to set it on both for simplicity/consistency or just the active one.
    keyModel.setMaterialColor(color)
    sceneRef.current?.carKeyModel?.setMaterialColor(color)

    const group = keyModel.group

    // POSITIONAL ANIMATIONS
    // Note: The current logic animates 'keyModel.group' (the house key).
    // If we switched to car key, we might need to animate IT instead.
    // However, CarKeyModel logic in Scene handle hides/shows it.
    // If we want the swiping animation to apply to the CAR key too, we need to target it.

    // Simplification: 
    // We will apply the animation to the *active* model's group.

    let activeGroup = group
    if ((index === 2 || index === 3) && sceneRef.current?.carKeyModel?.group) {
      activeGroup = sceneRef.current.carKeyModel.group
    }

    // If we just switched models, the new model might need to "enter" from the side 
    // instead of just popping in.
    // The 'setVisible' in CarKeyModel handles a scale in.
    // Let's let that handle the "switch" appearance and just do the swipe for subsequent changes *within* the same model type.

    // Actually, for consistency, let's just run the swipe on the active group.
    if (!activeGroup) return

    // First entry: key is already centered from the hero scroll transition, skip position animation
    if (isFirstEntry) return

    // Subsequent services: swipe animation
    const tl = gsap.timeline()

    // Exit: swipe right and shrink
    tl.to(activeGroup.position, {
      x: 4,
      duration: 0.25,
      ease: 'power2.in',
    })
    tl.to(activeGroup.scale, {
      x: 0.8, y: 0.8, z: 0.8,
      duration: 0.25,
      ease: 'power2.in',
    }, '<')

    // Reposition to left (instant)
    tl.set(activeGroup.position, { x: -4 })

    // Enter: swipe to center and scale up
    const targetY = (index === 2 || index === 3) ? -0.5 : -1.2

    tl.to(activeGroup.position, {
      x: 0,
      y: targetY,
      z: 0.5,
      duration: 0.35,
      ease: 'power2.out',
    })
    tl.to(activeGroup.scale, {
      x: 1.3, y: 1.3, z: 1.3,
      duration: 0.35,
      ease: 'power2.out',
    }, '<')

    // Rotation
    tl.to(activeGroup.rotation, {
      x: 0.2,
      y: Math.PI * 0.25 * (index + 1),
      z: 0,
      duration: 0.35,
      ease: 'power2.out',
    }, '<')
  }, [])

  const handleExitToWhyChooseUs = useCallback(() => {
    const keyModel = sceneRef.current?.keyModel
    if (!keyModel?.group) return

    gsap.to(keyModel.group.position, {
      x: 0, y: -2.5, z: 0,
      duration: 0.8,
      ease: 'power3.inOut',
    })
    gsap.to(keyModel.group.scale, {
      x: 0.6, y: 0.6, z: 0.6,
      duration: 0.8,
      ease: 'power3.inOut',
    })
  }, [])

  const handleReturnToHero = useCallback(() => {
    // The scrubbed ScrollTrigger on the hero handles this now
    lastServiceIndex.current = -1
  }, [])

  return (
    <main className="relative w-full overflow-hidden bg-[#05070a]">
      <Navbar />
      <Scene ref={sceneRef} heroMode={heroMode} onModelReady={handleModelReady} />

      {/* Hero Section */}
      <Hero />

      {/* Services Showcase — Pinned Scroll Carousel */}
      <ServicesShowcase
        onServiceChange={handleServiceChange}
        onExitToWhyChooseUs={handleExitToWhyChooseUs}
        onReturnToHero={handleReturnToHero}
      />

      {/* Roadside Assistance Grid */}
      <RoadsideServices />

      <WhyChooseUs />
      <ContactForm />

      <footer className="py-12 border-t border-white/10 text-center relative z-10 hidden">
        {/* hidden to keep original reference if needed, but we are replacing it */}
      </footer>
      <Footer />
    </main>
  )
}
