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
          <h2 className="mb-4 font-sans text-2xl text-balance md:text-4xl tracking-tight">services</h2>
          <p className="text-muted-foreground font-mono text-xs leading-relaxed text-balance uppercase tracking-wide">
            projects begin at $12k
          </p>
        </div>

        <div className="space-y-12">
          {/* Web Applications */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h3 className="font-sans text-2xl tracking-tight">web applications</h3>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wide">6-10 weeks</div>
            </div>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-6">
              full-stack development. database architecture. ui/ux design. api development. deployment infrastructure. testing and optimization.
            </p>
          </div>

          {/* Marketing Sites */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h3 className="font-sans text-2xl tracking-tight">marketing sites</h3>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wide">3-5 weeks</div>
            </div>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-6">
              responsive design. cms integration. performance optimization. seo architecture. analytics implementation. conversion tracking.
            </p>
          </div>

          {/* Development Retainer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <h3 className="font-sans text-2xl tracking-tight">ongoing partnership</h3>
              <div className="font-mono text-sm text-muted-foreground uppercase tracking-wide">monthly</div>
            </div>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wide mb-6">
              sustained development. technical consulting. performance monitoring. feature evolution. priority support. strategic guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
