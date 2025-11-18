import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * FAQ component displays frequently asked questions in an accordion format
 *
 * Features:
 * - Expandable accordion with single-item selection
 * - Covers development process, technologies, pricing, and company info
 * - Rich content with links and formatted lists
 * - Responsive layout with centered content
 */

interface FAQItemProps {
  /** Unique identifier for the accordion item */
  value: string;
  /** Question text to display in the trigger */
  question: string;
  /** Answer content - can be string or JSX for rich content */
  answer: string | React.ReactNode;
}

/**
 * Individual FAQ item component
 */
function FAQItem({ value, question, answer }: FAQItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left font-sans text-xl font-bold tracking-tighter">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pr-4 font-mono text-sm">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

/**
 * Main FAQ component that renders the questions and answers section
 */
export default function FAQ() {
  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-sans text-2xl tracking-tight md:text-4xl">faq</h2>
          <p className="text-muted-foreground mx-auto max-w-lg font-mono text-xs tracking-wide uppercase">
            common questions
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              value="item-1"
              question="what's the stack?"
              answer="typescript, react, next.js, node, postgresql. supabase for database and auth. stripe for payments. vercel or cloudflare for deployment. modern frameworks and services chosen for performance and maintainability. the specific backend adapts to the problem—headless cms, custom api, or integrating with existing systems."
            />
            <FAQItem
              value="item-2"
              question="do you handle design and ui?"
              answer="yes. design engineering and ui implementation are core capabilities. i work with your existing design team, or handle the full spectrum from interface design through implementation. interaction design, animation, and micro-interactions are part of the engineering work, not separate handoffs. the result is cohesive—what you see is what gets built."
            />
            <FAQItem
              value="item-3"
              question="what does it cost and how long does it take?"
              answer="projects start at $12k. timeline depends on scope—some projects go from prototype to production in weeks, others need months of careful refactoring. fixed quotes provided after we discuss technical requirements. no surprises."
            />
            <FAQItem
              value="item-4"
              question="who's behind this?"
              answer={
                <>
                  <a
                    href="https://ciccarel.li"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline transition-colors"
                  >
                    michael ciccarelli
                  </a>
                  . two decades building web platforms across fintech, media, and emerging technology. independent technical consultancy focused on engineering depth and design execution.
                </>
              }
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
}
