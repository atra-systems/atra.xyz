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
          <h2 className="font-sans mb-4 text-2xl tracking-tight md:text-4xl">process</h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide">
            methodology refined through execution
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
              title="discovery"
              description="requirements mapped. architecture defined. scope crystallized before execution begins."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-12">
            <ProcessCard
              number="02"
              title="execution"
              description="iterative development. continuous integration. weekly visibility into progress and refinement."
            />
          </motion.div>

          <motion.div variants={cardVariants} className="md:mt-24">
            <ProcessCard
              number="03"
              title="deployment"
              description="production infrastructure. performance monitoring. sustained optimization as systems evolve."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
