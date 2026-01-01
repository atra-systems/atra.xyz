'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface TextScrambleProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function TextScramble({
  children,
  className,
  delay = 0,
  duration = 0.8,
  as: Tag = 'span',
}: TextScrambleProps) {
  const ref = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = useState(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const originalText = children.toUpperCase();
    const length = originalText.length;
    let frame = 0;
    const totalFrames = Math.ceil(duration * 60);

    const timeline = gsap.timeline({ delay });

    timeline.fromTo(
      el,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );

    const scramble = () => {
      const progress = frame / totalFrames;
      const revealedCount = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (i < revealedCount) {
          result += originalText[i];
        } else if (originalText[i] === ' ') {
          result += ' ';
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);
      frame++;

      if (frame <= totalFrames) {
        requestAnimationFrame(scramble);
      } else {
        setDisplayText(originalText);
      }
    };

    const timeoutId = setTimeout(() => {
      scramble();
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      timeline.kill();
    };
  }, [children, delay, duration]);

  return (
    <Tag ref={ref as React.RefObject<never>} className={className} style={{ opacity: 0 }}>
      {displayText}
    </Tag>
  );
}
