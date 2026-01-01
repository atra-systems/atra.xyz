import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  'UI / Frontend Development',
  'Web Applications',
  'SaaS Platforms',
  'E-commerce',
  'Web3 / dApps',
  'Headless & CMS Integration',
  'API Development',
  'Design Engineering',
  'Technical Consulting',
];

const clients = [
  'Condé Nast',
  'Modern Treasury',
  'Legend Labs',
  'VICE',
  'Grey',
  'Axoni',
  'Metropolis',
  'Pentagram',
  'Elara',
];

const technologies = [
  'Frontend: TypeScript, React/Next.js, WebGL / GSAP / Motion',
  'Backend & Data: Node.js, PostgreSQL, Redis, Supabase',
  'CMS & E-commerce: Sanity, Contentful, Shopify, Stripe',
  'Infrastructure: Vercel, Cloudflare, AWS',
];

export default function InformationPage() {
  return (
    <main className="grid grid-cols-1 gap-y-10 p-4 pt-20 md:grid-cols-4 md:gap-y-0">
      {/* About / Approach */}
      <section className="bg-background md:col-span-2 md:row-span-2">
        <h2 className="text-muted-foreground mb-6 font-mono text-xs uppercase">Approach</h2>
        <div className="max-w-3xl space-y-4">
          <p className="font-sans text-lg leading-snug tracking-tight md:text-xl">
            Good engineering means understanding what you're building and why. We start with the
            problem, not the stack — technical decisions follow from project goals, constraints, and
            who's going to live with the code after launch.
          </p>
          <p className="text-muted-foreground font-mono text-xs uppercase">
            The process adapts to what the project requires. Some work needs tight iteration cycles
            and constant collaboration; other projects call for heads-down execution against a clear
            spec. We're comfortable with both.
          </p>
          <p className="text-muted-foreground font-mono text-xs uppercase">
            Technical decisions get discussed in plain language. No jargon for its own sake, no
            black-box handoffs. Software should be maintainable by whoever touches it next — whether
            that's your internal team, another vendor, or us down the line.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="md:col-span-1">
        <h2 className="text-muted-foreground mb-6 font-mono text-xs uppercase">Services</h2>
        <ul className="list-none space-y-1">
          {services.map((service) => (
            <li key={service} className="text-muted-foreground font-mono text-xs uppercase">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Clients */}
      <section className="md:col-span-1">
        <h2 className="text-muted-foreground mb-6 font-mono text-xs uppercase">Previous Clients</h2>
        <ul className="list-none space-y-1">
          {clients.map((client) => (
            <li key={client} className="text-muted-foreground font-mono text-xs uppercase">
              {client}
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="md:col-span-1 md:mt-20">
        <h2 className="text-muted-foreground mb-6 font-mono text-xs uppercase">Stack</h2>
        <ul className="list-none space-y-1">
          {technologies.map((tech) => (
            <li key={tech} className="text-muted-foreground font-mono text-xs uppercase">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="md:col-span-1 md:mt-20">
        <h2 className="text-muted-foreground mb-6 font-mono text-xs uppercase">Pricing</h2>
        <div className="space-y-4">
          <div>
            <p className="font-sans text-sm tracking-tight">Project-based</p>
            <p className="text-muted-foreground font-mono text-xs uppercase">
              Fixed-scope engagements with a clear deliverable. We define requirements upfront and
              quote accordingly. Projects typically start at $12k.
            </p>
          </div>
          <div>
            <p className="font-sans text-sm tracking-tight">Retainer</p>
            <p className="text-muted-foreground font-mono text-xs uppercase">
              Ongoing development hours reserved monthly. Good for teams that need consistent
              support, iterative builds, or don't have a full spec yet.
            </p>
          </div>
          <div>
            <p className="font-sans text-sm tracking-tight">Embedded</p>
            <p className="text-muted-foreground font-mono text-xs uppercase">
              I work as an extension of your team — daily standups, shared tools, full integration.
              Weekly or monthly billing, minimum 3-month commitment.
            </p>
          </div>
          <div>
            <p className="font-sans text-sm tracking-tight">Hourly</p>
            <p className="text-muted-foreground font-mono text-xs uppercase">
              For consulting, code review, or ad-hoc development. $175/hr, billed in 30-minute
              increments.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="md:col-span-1">
        <h2 className="text-muted-foreground mb-6 font-mono text-xs uppercase">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="design">
            <AccordionTrigger className="text-left font-sans text-sm tracking-tight">
              Do you handle design?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-mono text-xs uppercase">
              Yes. Design engineering and UI implementation are core capabilities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="timeline">
            <AccordionTrigger className="text-left font-sans text-sm tracking-tight">
              How long do projects take?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-mono text-xs uppercase">
              Depends on scope. Some go from prototype to production in weeks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="who">
            <AccordionTrigger className="text-left font-sans text-sm tracking-tight">
              Who's behind this?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-mono text-xs uppercase">
              <a
                href="https://ciccarel.li"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Michael Ciccarelli
              </a>
              . Twenty years building web platforms.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="location">
            <AccordionTrigger className="text-left font-sans text-sm tracking-tight">
              Where are you based?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-mono text-xs uppercase">
              Las Vegas, Nevada. Remote-first.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
