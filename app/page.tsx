import { TextReveal } from '@/components/TextReveal';

export default function Home() {
  return (
    <main className="px-4 pt-32 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <TextReveal
          as="h1"
          perWord
          className="text-foreground col-span-1 font-sans text-3xl leading-[1.10] tracking-tight md:col-span-3 md:text-4xl lg:text-5xl"
        >
          ATRA SYSTEMS is a digital studio. We build modern web applications with TypeScript and
          tailored backend architectures, focused on user interfaces, motion, and interaction—across
          SaaS, e-commerce, fintech, web3, and content-driven platforms.
        </TextReveal>
      </div>
    </main>
  );
}
