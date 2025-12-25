'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const taglines = [
  'thoughtful software engineering',
  'full-stack development',
  'design engineering',
  'technical consulting',
  'web3 & decentralized apps',
];

export default function Hero() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!textRef.current) return;

    const scrambleChars = 'abcdefghijklmnopqrstuvwxyz';
    const duration = 1.2;
    const holdDuration = 3;

    const animateText = (targetText: string) => {
      const element = textRef.current;
      if (!element) return;

      const originalText = element.textContent || '';
      const maxLength = Math.max(originalText.length, targetText.length);
      let iteration = 0;
      const totalIterations = 20;

      const interval = setInterval(
        () => {
          iteration++;
          const progress = iteration / totalIterations;

          let result = '';
          for (let i = 0; i < maxLength; i++) {
            if (i < targetText.length) {
              if (progress > i / maxLength) {
                result += targetText[i];
              } else {
                result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
              }
            }
          }

          element.textContent = result;

          if (iteration >= totalIterations) {
            clearInterval(interval);
            element.textContent = targetText;
          }
        },
        (duration * 1000) / totalIterations,
      );
    };

    // Initial text
    textRef.current.textContent = taglines[0];

    const cycleTaglines = () => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % taglines.length;
        animateText(taglines[nextIndex]);
        return nextIndex;
      });
    };

    const intervalId = setInterval(cycleTaglines, (holdDuration + duration) * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative flex min-h-screen items-end"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #ccc, var(--color-background, #fefefe))',
        backgroundColor: 'var(--color-background, #fefefe)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Image
        src="/bg-dither.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-1 h-full w-full object-cover opacity-30 mix-blend-lighten"
      />
      <div className="z-10 container mx-auto grid grid-cols-12 gap-4 px-4 pb-[8dvh]">
        <div className="col-span-6">
          <h1 className="font-mono text-xs uppercase">atra systems</h1>
        </div>
        <div className="col-span-6 text-right">
          <p ref={textRef} className="font-mono text-xs uppercase">
            thoughtful software engineering
          </p>
        </div>
      </div>
    </div>
  );
}
