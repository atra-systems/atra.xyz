'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

function AsciiSymbol({ position, color = '#333' }: { position: [number, number, number]; color?: string }) {
    const groupRef = useRef<THREE.Group>(null);
    const textRef = useRef<any>(null);
    const [char, setChar] = useState(() => CHARS[Math.floor(Math.random() * CHARS.length)]);

    // Intensity ref to track the "heat" of the interaction (0 to 1)
    const intensity = useRef(0);

    useFrame((state, delta) => {
        // Decay intensity over time
        intensity.current = THREE.MathUtils.lerp(intensity.current, 0, delta * 4);

        if (groupRef.current) {
            // Elegant 3D effect: "Pop" forward and scale
            // No rotation, just subtle movement towards the viewer
            groupRef.current.position.z = intensity.current * 0.5;

            // Scale effect for "pop"
            const scale = 1 + intensity.current * 0.2;
            groupRef.current.scale.set(scale, scale, scale);
        }

        if (textRef.current) {
            // Color interpolation
            // We can't easily lerp the Text component color prop without re-rendering, 
            // but we can access the material if we want to avoid React state updates for color.
            // For simplicity/performance balance:
            textRef.current.color = intensity.current > 0.1 ? '#999' : color;
        }

        // Scramble character occasionally when intensity is high
        if (intensity.current > 0.1 && Math.random() < 0.1) {
            setChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        }
    });

    const handlePointerOver = () => {
        intensity.current = 1;
        setChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
    };

    return (
        <group
            position={position}
            ref={groupRef}
            onPointerOver={handlePointerOver}
        >
            {/* Invisible Hit Plane for better interaction area */}
            <mesh visible={false}>
                <planeGeometry args={[0.15, 0.15]} />
                <meshBasicMaterial />
            </mesh>

            <Text
                ref={textRef}
                fontSize={0.12}
                color={color}
                anchorX="center"
                anchorY="middle"
            >
                {char}
            </Text>
        </group>
    );
}

function Grid() {
    const { viewport } = useThree();

    // Adjust spacing for text
    const spacing = 0.15;
    const cols = Math.floor(viewport.width / spacing);
    const rows = Math.floor(viewport.height / spacing);

    const gridItems = useMemo(() => {
        const items = [];
        const startX = -(cols * spacing) / 2 + spacing / 2;
        const startY = -(rows * spacing) / 2 + spacing / 2;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                items.push({
                    position: [startX + i * spacing, startY + j * spacing, 0] as [number, number, number],
                    key: `${i}-${j}`
                });
            }
        }
        return items;
    }, [cols, rows, spacing]);

    return (
        <>
            {gridItems.map((item) => (
                <AsciiSymbol key={item.key} position={item.position} />
            ))}
        </>
    );
}

export default function GridAnimation() {
    return (
        <div className="w-full h-full bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <color attach="background" args={['#000']} />
                <Grid />
            </Canvas>
        </div>
    );
}
