'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="grid grid-cols-1 p-4 font-mono text-xs uppercase md:grid-cols-4">
        <Link
          href="/"
          className={`hover:text-foreground transition-colors ${
            pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
          }`}
        >
          atra systems
        </Link>

        <div className="flex items-center">
          <Link
            href="/information"
            className={`hover:text-foreground transition-colors ${
              pathname === '/information' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            information
          </Link>
          {/*<span className="text-muted-foreground">,&nbsp;</span>*/}
          {/*<Link
            href="/work"
            className={`hover:text-foreground transition-colors ${
              pathname === '/work' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            work
          </Link>*/}
        </div>

        <Link
          href="/contact"
          className={`hover:text-foreground transition-colors ${
            pathname === '/contact' ? 'text-foreground' : 'text-muted-foreground'
          }`}
        >
          contact
        </Link>
      </nav>
    </header>
  );
}
