import Image from 'next/image';

/**
 * Hero component displays the main landing section with logo and tagline
 *
 * Features:
 * - Full-screen height with gradient background
 * - Overlaid dithered background image with blend mode
 * - Large SVG logo with custom wordmark
 * - Responsive grid layout positioning logo and text
 * - Clean, minimal design emphasizing the brand
 */

/**
 * Main Hero component that renders the landing section
 */
export default function Hero() {
  return (
    <div
      className="relative flex min-h-screen items-end"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #ccc, var(--color-background, #fefefe))',
        backgroundColor: 'var(--color-background, #fefefe)', // Fallback color
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
        <div className="col-span-12 bg-transparent md:col-span-4">
          <h1 className="font-mono text-xs uppercase">atra systems</h1>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 xl:col-span-3 xl:col-start-10">
          <p className="text-xs text-balance uppercase">thoughtful software engineering</p>
        </div>
      </div>
    </div>
  );
}
