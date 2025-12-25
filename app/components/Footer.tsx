/**
 * Footer component displays the site footer with copyright and time information
 *
 * Features:
 * - Copyright notice with dynamic current year
 * - Real-time clock display component
 * - Responsive layout with justified content
 * - Consistent typography and spacing
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative flex items-end justify-center p-4 text-xs md:h-24">
      <div className="text-muted-foreground my-4 flex items-center text-center font-mono text-xs leading-loose uppercase">
        © {currentYear} Atra Systems LLC <br />
      </div>
    </footer>
  );
}
