/**
 * Services component displays available service offerings
 *
 * Features:
 * - Minimal list-based layout
 * - Service descriptions with scope indicators
 * - Clean typography matching site aesthetic
 */

export default function Services() {
  return (
    <section id="services-list" className="py-32 md:py-40">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-sans text-2xl tracking-tight text-balance md:text-4xl">
            services
          </h2>
          <p className="text-muted-foreground font-mono text-xs leading-relaxed tracking-wide text-balance uppercase">
            Projects start at $12k
          </p>
        </div>

        <div className="space-y-12">
          {/* Full-Stack Development */}
          <div className="border-border border-t pt-8">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <h3 className="font-sans text-2xl tracking-tight">full-stack development</h3>
              <div className="text-muted-foreground font-mono text-sm tracking-wide uppercase">
                core offering
              </div>
            </div>
            <p className="text-muted-foreground mb-6 font-mono text-xs tracking-wide uppercase">
              Frontend, backend, database, deployment—though the boundaries blur. Good engineering
              means understanding what you're building and why. Bad handoffs between design and
              engineering create bad products, so I work with your designers or provide design
              direction when needed. Animation and interaction design are part of the
              implementation, not separate deliverables.
            </p>
          </div>

          {/* Fast Projects */}
          <div className="border-border border-t pt-8">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <h3 className="font-sans text-2xl tracking-tight">new builds</h3>
              <div className="text-muted-foreground font-mono text-sm tracking-wide uppercase">
                weeks
              </div>
            </div>
            <p className="text-muted-foreground mb-6 font-mono text-xs tracking-wide uppercase">
              Some projects need speed—MVP to market fast. The technical decisions still matter: how
              the data flows, how the cache invalidates, how the error states behave. They matter
              because they affect the end result.
            </p>
          </div>

          {/* Legacy/Maintenance */}
          <div className="border-border border-t pt-8">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <h3 className="font-sans text-2xl tracking-tight">existing systems</h3>
              <div className="text-muted-foreground font-mono text-sm tracking-wide uppercase">
                careful work
              </div>
            </div>
            <p className="text-muted-foreground mb-6 font-mono text-xs tracking-wide uppercase">
              Others need care. Refactoring without breaking what already works. The goal is
              software that works well and can be maintained by whoever touches it next. I write
              documentation, tests, and code that explains itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
