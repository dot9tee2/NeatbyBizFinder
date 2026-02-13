'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { Environment, useProgress, Html } from '@react-three/drei'
import KeyModel, { KeyModelHandle } from './KeyModel'
import CarKeyModel, { CarKeyModelHandle } from './CarKeyModel'
import { Suspense, forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react'

export interface SceneHandle {
    keyModel: KeyModelHandle | null
    carKeyModel: CarKeyModelHandle | null
    switchModel: (model: 'house' | 'car') => void
}

interface SceneProps {
    heroMode?: boolean
    onModelReady?: () => void
}

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

// Adjusts camera for mobile screens
function ResponsiveCamera() {
    const { camera, size } = useThree()
    useEffect(() => {
        const isMobile = size.width < 768
        const isTablet = size.width >= 768 && size.width < 1024
        if (isMobile) {
            camera.position.set(0, 0, 7)
                ; (camera as any).fov = 55
        } else if (isTablet) {
            camera.position.set(0, 0, 6)
                ; (camera as any).fov = 50
        } else {
            camera.position.set(0, 0, 5)
                ; (camera as any).fov = 45
        }
        ; (camera as any).updateProjectionMatrix()
    }, [camera, size])
    return null
}

const Scene = forwardRef<SceneHandle, SceneProps>(function Scene({ heroMode = true, onModelReady }, ref) {
    const keyRef = useRef<KeyModelHandle>(null)
    const carKeyRef = useRef<CarKeyModelHandle>(null)
    const [activeModel, setActiveModel] = useState<'house' | 'car'>('house')

    useImperativeHandle(ref, () => ({
        get keyModel() {
            return keyRef.current
        },
        get carKeyModel() {
            return carKeyRef.current
        },
        switchModel(model: 'house' | 'car') {
            if (model === activeModel) return

            setActiveModel(model)

            if (model === 'car') {
                carKeyRef.current?.setVisible(true)
                if (keyRef.current?.group) {
                    import('gsap').then(gsap => {
                        gsap.default.to(keyRef.current!.group!.scale, { x: 0, y: 0, z: 0, duration: 0.3 })
                    })
                }
            } else {
                carKeyRef.current?.setVisible(false)
                if (keyRef.current?.group) {
                    import('gsap').then(gsap => {
                        gsap.default.to(keyRef.current!.group!.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.5 })
                    })
                }
            }
        }
    }))

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
                <ResponsiveCamera />
                <Suspense fallback={<Loader />}>
                    <KeyModel ref={keyRef} heroMode={heroMode} onReady={onModelReady} />
                    <CarKeyModel ref={carKeyRef} />

                    {/* 3-point cinematic lighting */}
                    <ambientLight intensity={0.4} />
                    <spotLight
                        position={[8, 8, 6]}
                        angle={0.2}
                        penumbra={1}
                        intensity={3}
                        color="#fff5e6"
                        castShadow
                    />
                    <directionalLight
                        position={[-8, 4, 3]}
                        intensity={1}
                        color="#ffecd1"
                    />
                    <pointLight
                        position={[0, 2, -6]}
                        intensity={2}
                        color="#ffaa00"
                    />
                </Suspense>

                <Suspense fallback={null}>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
})

export default Scene

