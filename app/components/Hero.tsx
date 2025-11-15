import Image from 'next/image';

/**
 * Hero component displays the main landing section with logo and tagline
 *
 * Features:
 * - Full-screen height with gradient background
 * - Overlaid dithered background image with blend mode
 * - Large SVG logo with custom wordmark
 * - Responsive grid layout positioning logo and text
 * - Clean, minimal design emphasizing the brand
 */

/**
 * Main Hero component that renders the landing section
 */
export default function Hero() {
  return (
    <div
      className="relative flex min-h-screen items-end"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #ccc, var(--color-background, #fefefe))',
        backgroundColor: 'var(--color-background, #fefefe)', // Fallback color
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Image
        src="/bg-dither.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-[1] h-full w-full object-cover mix-blend-lighten"
      />
      <div className="z-[10] container mx-auto grid grid-cols-12 gap-4 px-4 pb-[8dvh]">
        <div className="col-span-12 flex flex-col justify-end bg-transparent md:col-span-4">
          {/* <svg width="60" height="60" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1512_342" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="800">
              <circle cx="400" cy="400" r="400" fill="white"/>
            </mask>
            <g mask="url(#mask0_1512_342)">
              <path d="M0 464H800V496H632V488H416V480H192V472H40H0V464Z" fill="currentColor"/>
              <path d="M0 504H800V536H592V528H376V520H152V512H0V504Z" fill="currentColor"/>
              <path d="M0 544H800V576H552V568H336V560H112V552H0V544Z" fill="currentColor"/>
              <path d="M0 584H800V616H512V608H296V600H72V592H0V584Z" fill="currentColor"/>
              <path d="M0 624H800V656H472V648H256V640H0V624Z" fill="currentColor"/>
              <path d="M0 664H800V696H432V688H216V680H0V664Z" fill="currentColor"/>
              <path d="M0 704H800V736H400V728H176H0V704Z" fill="currentColor"/>
              <path d="M0 744H800V776H360V768H0V744Z" fill="currentColor"/>
              <rect y="784" width="800" height="32" fill="currentColor"/>
              <path d="M64 376V384H280V392H504V400H660H720V408H767.5H800V368H0V376H64Z" fill="currentColor"/>
              <path d="M16 424V432H232V440H456V448H660H672V456H767.5H800V416H0V424H16Z" fill="currentColor"/>
              <path d="M112 328V336H328V344H552V352H768V360H800V320H1V328H112Z" fill="currentColor"/>
              <path d="M152 288V296H368V304H592V312H800V280H1V288H152Z" fill="currentColor"/>
              <path d="M192 248V256H408V264H632V272H800V240H1V248H192Z" fill="currentColor"/>
              <path d="M232 208V216H448V224H672V232H800V200H1V208H232Z" fill="currentColor"/>
              <path d="M272 168V176H488V184H712V192H800V160H1V168H272Z" fill="currentColor"/>
              <path d="M312 128V136H528V144H599H728.5L800 152V120H1V128H312Z" fill="currentColor"/>
              <path d="M352 88V96H568V104H688.5L687.5 112H800V80H1V88H352Z" fill="currentColor"/>
              <path d="M392 48V56H440.5H615.5L640 64V72H800V40H1V48H392Z" fill="currentColor"/>
              <path d="M432 8V16H536L557 24H599V32H800V0H1V8H432Z" fill="currentColor"/>
            </g>
          </svg> */}
          <h1 className="font-mono text-xs uppercase">atra systems</h1>
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-2 md:col-span-6 md:col-start-7 xl:col-span-3 xl:col-start-10">
          <p className="text-xs text-balance uppercase">
            We design and develop web applications for companies that value quality execution.
          </p>
        </div>
      </div>
    </div>
  );
}
