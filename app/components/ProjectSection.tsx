import Image from 'next/image';

interface ProjectSectionProps {
  title: string;
  meta: {
    client?: string;
    year?: string;
    services?: string[];
  };
  imageUrl: string;
}

export default function ProjectSection({ title, meta, imageUrl }: ProjectSectionProps) {
  return (
    <section className="relative h-screen">
      {/* Sticky header with title and metadata - minimal style */}
      <div className="sticky top-0 z-10 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-sm font-mono text-white">
            <div className="uppercase tracking-wider">{title}</div>
            <div className="flex items-center gap-8">
              {meta.services && meta.services.length > 0 && (
                <div className="hidden md:block">{meta.services.join(', ')}</div>
              )}
              {meta.year && <div>{meta.year}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Full screen image */}
      <div className="relative w-full h-[calc(100vh-49px)]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
