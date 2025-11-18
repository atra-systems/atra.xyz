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
          <h2 className="font-sans mb-4 text-2xl tracking-tight md:text-4xl">approach</h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide">
            the process adapts to what the project requires, not the other way around
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
              description="technical decisions get discussed in plain language. you shouldn't need a cs degree to understand the tradeoffs in your own product. we talk through what matters and why."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-12">
            <ProcessCard
              number="02"
              title="adapt to the need"
              description="each project is different. some need speed—prototype to production in weeks. others need care—refactoring legacy systems without breaking what already works. the approach fits the problem."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-24">
            <ProcessCard
              number="03"
              title="maintain what's built"
              description="documentation, tests, and code that explains itself. the goal is software that can be maintained by whoever touches it next, not just the person who wrote it."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
