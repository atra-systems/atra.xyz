'use client';

import { useEffect, useState } from 'react';

export default function Header() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        const handleResize = () => {
            setWindowSize({ w: window.innerWidth, h: window.innerHeight });
        };

        // Initial size
        if (typeof window !== 'undefined') {
            handleResize();
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-[#333] bg-[#111]/50 backdrop-blur-sm transition-all duration-300">
            <div className="flex justify-between items-start p-4">
                <h1 className="font-mono text-sm uppercase tracking-widest text-white">
                    atra systems
                    <span className="ml-4 text-[10px] opacity-50">v0.3.0 // sys_ready</span>
                </h1>
                <div className="font-mono text-[10px] opacity-50 text-right text-white">
                    <div>COORD: {mousePos.x}, {mousePos.y}</div>
                    <div>VIEWPORT: {windowSize.w}x{windowSize.h}</div>
                </div>
            </div>
        </header>
    );
}
