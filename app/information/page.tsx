import { TextReveal } from '@/components/TextReveal';
import { TextScramble } from '@/components/TextScramble';

const services = [
  'UI / Frontend Development',
  'Web Applications & SaaS Platforms',
  'E-commerce',
  'Content Platforms & CMS Integration',
  'Web3 / dApps',
  'API Development',
  'Design Engineering',
  'Technical Consulting',
];

const technologies = [
  'Frontend: TypeScript, React/Next.js, WebGL / GSAP / Motion',
  'Backend & Data: Node.js, PostgreSQL, Redis, Supabase',
  'CMS & E-commerce: Sanity, Contentful, Shopify',
  'Payments: Stripe, PayPal, Braintree, Square',
  'Infrastructure: Vercel, Cloudflare, DigitalOcean, AWS',
];

export default function InformationPage() {
  return (
    <main className="grid grid-cols-1 gap-y-10 p-4 pt-20 md:grid-cols-4 md:gap-y-0">
      {/* Spacer for indent - aligns content with "information" in header */}
      <div className="hidden md:block" />

      {/* Main content column */}
      <section className="md:col-span-2 md:pr-12">
        {/* Approach */}
        <TextReveal as="h2" className="text-muted-foreground mb-6 font-mono text-xs uppercase">
          Approach
        </TextReveal>
        <div className="space-y-4">
          <TextReveal
            as="p"
            delay={0.1}
            className="font-sans text-lg leading-snug tracking-tight md:text-2xl"
          >
            Good engineering means understanding what you're building and why. We start with the
            problem, not the stack — technical decisions follow from project goals, constraints, and
            who will live with the code after launch.
          </TextReveal>
          <TextReveal
            as="p"
            delay={0.2}
            className="text-muted-foreground font-mono text-xs uppercase"
          >
            The process adapts to the project. Tight iteration or heads-down execution against a
            clear spec — we're comfortable with both. Technical decisions are discussed in plain
            language. No jargon for its own sake, no black-box handoffs.
          </TextReveal>
          <TextReveal
            as="p"
            delay={0.3}
            className="text-muted-foreground font-mono text-xs uppercase"
          >
            Consulting and shipping products for Condé Nast, Modern Treasury, Vice, Pentagram, and
            others.
          </TextReveal>
          <TextReveal
            as="p"
            delay={0.4}
            className="text-muted-foreground font-mono text-xs uppercase"
          >
            Founded by <a href="https://ciccarel.li">Michael Ciccarelli</a>. Twenty years building
            for the web. Based in Las Vegas, working remotely worldwide.
          </TextReveal>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-20">
          <TextReveal delay={0.5}>
            <p className="font-sans text-lg leading-snug tracking-tight md:text-2xl">
              Have a project in mind?{' '}
              <a href="/contact" className="underline underline-offset-4 hover:no-underline">
                Let's talk
              </a>
              .
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Right sidebar - stacked sections */}
      <aside className="space-y-10 md:space-y-12">
        {/* Services */}
        <div>
          <TextReveal as="h2" className="text-muted-foreground mb-6 font-mono text-xs uppercase">
            Services
          </TextReveal>
          <ul className="list-none space-y-1">
            {services.map((service, i) => (
              <li key={service} className="text-muted-foreground font-mono text-xs">
                <TextScramble delay={0.1 + i * 0.05} duration={0.6}>
                  {service}
                </TextScramble>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <TextReveal as="h2" className="text-muted-foreground mb-6 font-mono text-xs uppercase">
            Technologies
          </TextReveal>
          <ul className="list-none space-y-1">
            {technologies.map((tech, i) => (
              <li key={tech} className="text-muted-foreground font-mono text-xs">
                <TextScramble delay={0.1 + i * 0.05} duration={0.8}>
                  {tech}
                </TextScramble>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div>
          <TextReveal as="h2" className="text-muted-foreground mb-6 font-mono text-xs uppercase">
            Pricing
          </TextReveal>
          <div className="space-y-4">
            <TextReveal delay={0.1}>
              <p className="font-sans text-sm tracking-tight">Project-based</p>
              <p className="text-muted-foreground font-mono text-xs uppercase">
                Fixed-scope engagements with a clear deliverable. We define requirements upfront and
                quote accordingly. Projects typically start at $12k.
              </p>
            </TextReveal>
            <TextReveal delay={0.15}>
              <p className="font-sans text-sm tracking-tight">Retainer</p>
              <p className="text-muted-foreground font-mono text-xs uppercase">
                Ongoing development hours reserved monthly. Good for teams that need consistent
                support, iterative builds, or don't have a full spec yet.
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="font-sans text-sm tracking-tight">Embedded</p>
              <p className="text-muted-foreground font-mono text-xs uppercase">
                I work as an extension of your team — daily standups, shared tools, full
                integration. Weekly or monthly billing, minimum 3-month commitment.
              </p>
            </TextReveal>
            <TextReveal delay={0.25}>
              <p className="font-sans text-sm tracking-tight">Hourly</p>
              <p className="text-muted-foreground font-mono text-xs uppercase">
                For consulting, code review, or ad-hoc development. $175/hr, billed in 30-minute
                increments.
              </p>
            </TextReveal>
          </div>
        </div>
      </aside>
    </main>
  );
}
