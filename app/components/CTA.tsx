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
        <h4 className="mx-auto mb-4 max-w-100 font-sans text-2xl tracking-tight text-balance md:text-4xl">
          let's talk <a href="mailto:info@atra.xyz">info@atra.xyz</a>
        </h4>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CalendarModal />
          <GeneralInquiryModal />
        </div>
      </div>
    </section>
  );
}
