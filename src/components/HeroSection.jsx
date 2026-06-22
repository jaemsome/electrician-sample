import SwitchboardSvg from './SwitchboardSvg';
import Lightning from './Lightning';

const trustPoints = [
  { icon: 'verified', text: 'Licensed & Insured' },
  { icon: 'timer', text: 'Same Day Service' },
  { icon: 'star', text: '5-Star Rated' },
  { icon: 'payments', text: 'No Call-Out Fee' },
];

export default function HeroSection() {
  return (
    <section
      className="hero-pattern py-24 md:py-32 px-4 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark-navy)' }}
    >
      <div className="mesh-bg" aria-hidden="true" />
      <Lightning
        className="absolute inset-0 w-full h-full hidden md:block"
        hue={48}
        xOffset={-0.6}
        speed={1.1}
        intensity={0.55}
        size={1.6}
      />

      <div className="max-w-container mx-auto grid md:grid-cols-2 items-center gap-12 relative">
        <div className="flex flex-col gap-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit border"
            style={{
              background: 'rgba(255, 215, 0, 0.1)',
              borderColor: 'rgba(255, 215, 0, 0.25)',
              color: 'var(--color-yellow)',
            }}
          >
            <span className="material-symbols-outlined icon-filled pulsing-bolt text-sm" aria-hidden="true">bolt</span>
            Parramatta&#39;s #1 Rated Electrician
          </span>

          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-[1.1] text-white hero-headline">
            Trusted <span className="glow-text" style={{ color: 'var(--color-yellow)' }}>Licensed</span>
            <br />Electrician in<br />Parramatta, NSW
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            Serving Parramatta and surrounds since 2008. Available 7 days a week, no
            call-out fee, 100% licensed and fully insured.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="#contact" className="btn-primary px-8 py-4 text-sm text-center">
              Get a Free Quote
            </a>
            <a
              href="tel:0291234567"
              className="btn-secondary px-8 py-4 text-sm text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">call</span>
              Call Us Now
            </a>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-4 border-t"
            style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
          >
            {trustPoints.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined icon-filled text-lg"
                  style={{ color: 'var(--color-yellow)' }}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <span className="text-xs font-bold text-white">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <SwitchboardSvg />
        </div>
      </div>
    </section>
  );
}
