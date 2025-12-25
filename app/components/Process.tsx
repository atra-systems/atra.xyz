'use client';

import { motion } from 'framer-motion';
import ProcessCard from './ProcessCard';

/**
 * Process component displays the development process in three animated steps
 *
 * Features:
 * - Three-step development process with staggered animations
 * - Cards appear on scroll with custom easing
 * - Responsive grid layout with vertical offset on larger screens
 * - Uses Framer Motion for smooth scroll-triggered animations
 */

/**
 * Main Process component that renders the development workflow section
 */
export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom easing for smooth drop
      },
    },
  };

  return (
    <section id="process" className="py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-2xl tracking-tight md:text-4xl">approach</h2>
          <p className="text-muted-foreground mx-auto max-w-100 font-mono text-xs tracking-wide text-balance uppercase">
            the process adapts to what the project requires, not the other way around.
          </p>
        </div>

        {/* Process cards grid with scroll animations */}
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <ProcessCard
              number="01"
              title="understand the tradeoffs"
              description="Technical decisions get discussed in plain language. You shouldn't need a CS degree to understand the tradeoffs in your own product."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-12">
            <ProcessCard
              number="02"
              title="move at the right pace"
              description="Some projects need speed. Others need care. The timeline and methodology fit the problem, not a predetermined process."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-24">
            <ProcessCard
              number="03"
              title="build for the next person"
              description="documentation, tests, and code that explains itself. Software should be maintainable by whoever touches it next, not just the person who wrote"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
