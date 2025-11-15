'use client';

import CalendarModal from './CalendarModal';
import GeneralInquiryModal from './GeneralInquiryModal';

/**
 * CTA (Call to Action) component displays the bottom section with contact options
 * 
 * Features:
 * - Two primary actions: schedule a call and send message
 * - Uses modal dialogs for both interactions
 * - Direct email link as alternative contact method
 * - Responsive layout with centered content
 */

/**
 * Main CTA component that renders the contact section
 */
export default function CTA() {
  return (
    <section id="contact" className="py-32 text-center md:py-40">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-4 font-sans text-2xl tracking-tight md:text-4xl lg:text-6xl">initiate</h2>
        <p className="text-muted-foreground mx-auto mb-6 max-w-lg font-mono text-xs uppercase tracking-wide">
          discuss technical requirements
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CalendarModal />
          <GeneralInquiryModal />
        </div>
        <p className="text-muted-foreground mt-4 font-mono text-xs uppercase tracking-wide">
          <a href="mailto:info@atra.xyz">info@atra.xyz</a>
        </p>
      </div>
    </section>
  );
}
