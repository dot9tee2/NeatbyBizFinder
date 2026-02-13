'use client'

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, Mesh, MeshStandardMaterial, Color } from 'three'
import gsap from 'gsap'

export interface KeyModelHandle {
    group: Group | null
    setMaterialColor: (hex: string) => void
}

interface KeyModelProps {
    heroMode?: boolean
    onReady?: () => void
    [key: string]: any
}

const KeyModel = forwardRef<KeyModelHandle, KeyModelProps>(function KeyModel({ heroMode = true, onReady, ...props }, ref) {
    const groupRef = useRef<Group>(null)
    const { scene } = useGLTF('/aj-locksmith/models/key4.glb')
    const materialRef = useRef<MeshStandardMaterial | null>(null)
    const entranceDone = useRef(false)

    useEffect(() => {
        onReady?.()
    }, [onReady])

    // Expose group and material control to parent
    useImperativeHandle(ref, () => ({
        get group() {
            return groupRef.current
        },
        setMaterialColor(hex: string) {
            if (materialRef.current) {
                gsap.to(materialRef.current.color, {
                    r: new Color(hex).r,
                    g: new Color(hex).g,
                    b: new Color(hex).b,
                    duration: 0.4,
                    ease: 'power2.inOut',
                })
            }
        },
    }))

    // Apply premium metal material
    useEffect(() => {
        scene.traverse((child) => {
            if ((child as Mesh).isMesh) {
                const mesh = child as Mesh
                const mat = new MeshStandardMaterial({
                    color: new Color('#e0c9a6'),
                    metalness: 1,
                    roughness: 0.2,
                    envMapIntensity: 1.5,
                })
                mesh.material = mat
                materialRef.current = mat
                mesh.castShadow = true
                mesh.receiveShadow = true
            }
        })
    }, [scene])

    // Hero entrance animation — responsive positioning
    useEffect(() => {
        if (!groupRef.current) return

        const group = groupRef.current
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

        // On mobile: center the key; on desktop: position right
        const startX = isMobile ? 0 : 2.5
        const endX = isMobile ? 0 : 2.5
        const endY = isMobile ? 0 : -1.0
        const endScale = isMobile ? 1.2 : 1.6

        // Start invisible, above viewport
        group.position.set(startX, 4, 0)
        group.rotation.set(-0.5, 2.0, 0.8)
        group.scale.set(0, 0, 0)

        const entranceTl = gsap.timeline({
            onComplete: () => {
                entranceDone.current = true
            },
        })

        entranceTl.to(group.scale, {
            x: endScale, y: endScale, z: endScale,
            duration: 1.2,
            ease: 'elastic.out(1, 0.5)',
            delay: 0.3,
        })

        entranceTl.to(group.position, {
            x: endX,
            y: endY,
            duration: 1.4,
            ease: 'elastic.out(1, 0.6)',
        }, '<')

        entranceTl.to(group.rotation, {
            x: 0.3, y: 0.5, z: 0.1,
            duration: 1.6,
            ease: 'elastic.out(1, 0.7)',
        }, '<0.1')

        return () => { entranceTl.kill() }
    }, [])

    // Idle: gentle float + continuous Y spin only in hero mode
    useFrame((state, delta) => {
        if (!groupRef.current || !entranceDone.current) return

        const t = state.clock.getElapsedTime()
        const floatY = Math.sin(t * 0.8) * 0.12
        groupRef.current.position.y += floatY * delta

        if (heroMode) {
            groupRef.current.rotation.y += 0.4 * delta
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <primitive object={scene} scale={1} />
        </group>
    )
})

export default KeyModel

useGLTF.preload('/aj-locksmith/models/key4.glb')
