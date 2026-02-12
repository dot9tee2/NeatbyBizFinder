'use client'

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, Mesh, MeshStandardMaterial, Color } from 'three'
import gsap from 'gsap'

export interface CarKeyModelHandle {
    group: Group | null
    setMaterialColor: (hex: string) => void
    setVisible: (visible: boolean) => void
}

interface CarKeyModelProps {
    onReady?: () => void
    [key: string]: any
}

const CarKeyModel = forwardRef<CarKeyModelHandle, CarKeyModelProps>(function CarKeyModel({ onReady, ...props }, ref) {
    const groupRef = useRef<Group>(null)
    const { scene } = useGLTF('/aj-locksmith/models/generic_car_key.glb')
    const materialRef = useRef<MeshStandardMaterial | null>(null)

    useEffect(() => {
        onReady?.()
    }, [onReady])

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
        setVisible(visible: boolean) {
            if (groupRef.current) {
                groupRef.current.visible = visible
                if (visible) {
                    gsap.to(groupRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.5, ease: 'back.out(1.7)' })
                } else {
                    gsap.to(groupRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.3, ease: 'power2.in' })
                }
            }
        }
    }))

    // Same premium gold material as the house key
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

    // Start hidden
    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.scale.set(0, 0, 0)
            groupRef.current.visible = false
        }
    }, [])

    // Idle float + rotation (same as house key)
    useFrame((state, delta) => {
        if (!groupRef.current || !groupRef.current.visible) return
        const t = state.clock.getElapsedTime()
        groupRef.current.position.y += Math.sin(t * 0.8) * 0.12 * delta
        groupRef.current.rotation.y += 0.4 * delta
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <primitive object={scene} scale={0.002} />
        </group>
    )
})

export default CarKeyModel

useGLTF.preload('/aj-locksmith/models/generic_car_key.glb')

