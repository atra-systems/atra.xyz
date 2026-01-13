'use client';

import { useState } from 'react';
import { TextReveal } from '@/components/TextReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const projects = [
  {
    title: 'Legend',
    role: 'frontend development',
    url: 'https://legend.xyz',
    description:
      'Marketing site for Legend, an embedded smart contract wallet built as a UI/UX layer on top of existing open DeFi protocols.',
    technologies: 'next.js, tailwind, webgl',
  },
  {
    title: 'Modern Treasury',
    role: 'frontend development',
    url: 'https://moderntreasury.com',
    description:
      'Marketing site for fintech platform that processes $1 billion in instant payments annually.',
    technologies: 'next.js, sanity, tailwind',
  },
  {
    title: 'Amazon: The Bar',
    role: 'frontend development',
    url: 'https://amazonthe.bar',
    description:
      'Sleek portfolio for creative collective featuring custom animations and dynamic layouts.',
    technologies: 'next.js, sanity, tailwind, motion',
  },
  {
    title: 'One/Of',
    role: 'design & development',
    url: 'https://shoponeof.com',
    description:
      'Headless e-commerce platform with custom product configurator and seamless checkout.',
    technologies: 'shopify (headless), next.js, sanity, tailwind',
  },
  {
    title: 'Unsplash Image Feed',
    role: 'design & development',
    url: 'https://image-feed-chi.vercel.app',
    description: 'Interactive demo showcasing smooth infinite scroll.',
    technologies: 'next.js, unsplash api, tailwind, framer motion',
  },
  {
    title: 'Kelvonagee.com',
    role: 'design & development',
    url: 'https://kelvonagee.com',
    description:
      'Photography portfolio with optimized image delivery and immersive viewing experience.',
    technologies: 'next.js, cloudinary, tailwind, motion',
  },
  {
    title: 'elara.world',
    role: 'fullstack development',
    url: 'https://elara.world',
    description: 'Community hub combining content publishing with integrated merchandise store.',
    technologies: 'next.js, sanity, shopify',
  },
  {
    title: 'The Well',
    role: 'fullstack development',
    url: 'https://the-well.com',
    description:
      'Wellness platform merging e-commerce with appointment booking and member management.',
    technologies: 'vue.js, sanity, shopify',
  },
  {
    title: 'EL DORADO',
    role: 'frontend development',
    url: 'https://eldo.us/',
    description:
      'Minimalist architecture portfolio emphasizing visual storytelling and project narratives.',
    technologies: 'next.js, contentful',
  },
  {
    title: 'Revolve Law',
    role: 'frontend development',
    url: 'https://revolvelawgroup.com',
    description: 'Professional services site with subtle animations and streamlined contact flows.',
    technologies: 'next.js, framer motion',
  },
  {
    title: 'VICE',
    role: 'lead frontend development',
    url: 'https://vice.com',
    description:
      'High-traffic editorial platform serving millions of readers with real-time content delivery.',
    technologies: 'react.js, redux, node.js',
  },
];

export default function WorkPage() {
  const [expandedProject, setExpandedProject] = useState<string | undefined>(undefined);

  return (
    <main className="px-4 pt-32 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 md:col-span-3">
          <Accordion
            type="single"
            collapsible
            value={expandedProject}
            onValueChange={setExpandedProject}
          >
            {projects.map((project, index) => (
              <AccordionItem key={project.title} value={project.title} className="border-b-0">
                <AccordionTrigger className="py-0 hover:no-underline [&>svg]:hidden">
                  <TextReveal
                    as="span"
                    delay={0.05 * index}
                    className="text-foreground text-left font-sans text-3xl leading-[1.10] font-semibold tracking-tight transition-opacity hover:opacity-60 md:text-4xl lg:text-5xl"
                  >
                    {project.title}
                  </TextReveal>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="max-w-xl space-y-4 pt-2">
                    <p className="text-muted-foreground font-mono text-xs uppercase">
                      {project.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-muted-foreground/60 font-mono text-xs">
                      {project.technologies}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary inline-flex items-center gap-2 font-mono text-xs uppercase transition-colors"
                    >
                      Visit Site
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
