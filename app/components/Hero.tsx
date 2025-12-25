'use client';


import GridAnimation from './GridAnimation';

export default function Hero() {
  return (
    <div className="relative h-[100dvh] w-full bg-[#111] text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <GridAnimation />
      </div>

      {/* Technical Frame Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end">

        {/* Bottom Bar */}
        <div className="w-full border-t border-[#333] bg-[#111]/50 backdrop-blur-sm p-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <p className="font-mono text-xs uppercase leading-relaxed opacity-80 text-balance">
                software for the web
                <br />
                <span className="opacity-50 text-[10px]">
                  [status: operational] [mode: technical]
                </span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 text-right hidden md:block">
              <p className="font-mono text-[10px] opacity-30 uppercase">
                // scroll for data
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
