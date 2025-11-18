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
          <h2 className="mb-4 font-sans text-2xl text-balance md:text-4xl tracking-tight">the work</h2>
          <p className="text-muted-foreground font-mono text-xs leading-relaxed text-balance uppercase tracking-wide">
            projects start at $12k
          </p>
        </div>

        <div className="space-y-12">
          {/* Full-Stack Development */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h3 className="font-sans text-2xl tracking-tight">full-stack development</h3>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wide">core offering</div>
            </div>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-6">
              frontend, backend, database, deployment. but the boundaries blur. good engineering requires understanding what you're building and why. bad handoffs between design and engineering create bad products, so i work with your designers or provide design direction when needed. animation and interaction design are part of the implementation, not separate deliverables.
            </p>
          </div>

          {/* Fast Projects */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h3 className="font-sans text-2xl tracking-tight">prototype to production</h3>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wide">weeks</div>
            </div>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-6">
              some projects need speed. mvp to market fast. the technical decisions still matter—how the data flows, how the cache invalidates, how the error states behave. they matter because they affect the end result.
            </p>
          </div>

          {/* Legacy/Maintenance */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h3 className="font-sans text-2xl tracking-tight">legacy systems</h3>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wide">careful work</div>
            </div>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-6">
              others need care. refactoring systems without breaking what already works. the goal is software that works well and can be maintained by whoever touches it next. i write documentation, tests, and code that explains itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
