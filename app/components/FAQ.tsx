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
            questions answered
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              value="item-2"
              question="technology stack"
              answer="react. next.js. typescript. node.js. postgresql. modern frameworks chosen for performance and longevity."
            />
            <FAQItem
              value="item-3"
              question="timelines and scope"
              answer="fixed scope. defined timelines. web applications: 6-10 weeks. marketing sites: 3-5 weeks. buffer included for precision."
            />
            <FAQItem
              value="item-4"
              question="ongoing support"
              answer="retainer agreements available. sustained maintenance. continuous optimization. technical evolution as systems scale."
            />
            <FAQItem
              value="item-5"
              question="collaboration model"
              answer="integrated with existing teams or independent execution. technical leadership when required. adaptive to organizational structure."
            />
            <FAQItem
              value="item-6"
              question="positioning"
              answer="not an agency. independent technical consultancy. engineering depth over marketing breadth. long-term system architecture over transactional delivery."
            />
            <FAQItem
              value="item-7"
              question="design capability"
              answer="full-spectrum execution. strategy through implementation. design and engineering unified. or integration with existing design systems."
            />
            <FAQItem
              value="item-8"
              question="principal"
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
                  . twenty years buineering web platforms. fintech to media to emerging technology.
                </>
              }
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
}
