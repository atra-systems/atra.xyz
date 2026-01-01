function ProjectSkeleton() {
  return (
    <div className="border-border border-t py-12 first:border-t-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-muted-foreground/10 aspect-video w-full animate-pulse" />
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="bg-muted-foreground/10 mb-4 h-8 w-3/4 animate-pulse" />
              <div className="space-y-2">
                <div className="bg-muted-foreground/10 h-3 w-1/2 animate-pulse" />
                <div className="bg-muted-foreground/10 h-3 w-1/3 animate-pulse" />
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-muted-foreground/10 h-3 w-24 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="p-4 pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h1 className="mb-4 font-sans text-2xl tracking-tight md:text-4xl">selected work</h1>
            <p className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
              projects coming soon
            </p>
          </div>
          <div className="space-y-0">
            {[1, 2, 3].map((i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
