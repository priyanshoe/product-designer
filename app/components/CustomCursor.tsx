"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [skew, setSkew] = useState({ x: 0, y: 0 });
    const prevPos = useRef(position);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const dx = e.clientX - prevPos.current.x;
            const dy = e.clientY - prevPos.current.y;

            // Skew factor, adjust for effect strength
            const skewX = Math.max(Math.min(dx * 0.5, 5), -5);
            const skewY = Math.max(Math.min(dy * 0.5, 5), -5);

            setPosition({ x: e.clientX, y: e.clientY });
            setSkew({ x: skewX, y: skewY });
            prevPos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div className="max-sm:hidden"
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                width: "15px",
                height: "15px",
                backgroundColor: 'gray',
                borderRadius: "50%",
                mixBlendMode: "difference",
                pointerEvents: "none",
                transform: `translate(-50%, -50%) skew(${skew.x}deg, ${skew.y}deg)`,
                transition: "transform 0.1s cubic-bezier(0.22, 1, 0.36, 1)",
                zIndex: 9999,
            }}
        />
    );
}
