import SwitchboardSvg from './SwitchboardSvg';

const trustPoints = [
  { icon: 'verified', text: 'Licensed & Insured' },
  { icon: 'timer', text: 'Same Day Service' },
  { icon: 'star', text: '5-Star Rated' },
  { icon: 'payments', text: 'No Call-Out Fee' },
];

export default function HeroSection() {
  return (
    <section
      className="hero-pattern py-20 md:py-28 px-4 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark-navy)' }}
    >
      <div className="max-w-container mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6">
          <span
            className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest w-fit"
            style={{ background: 'rgba(255, 215, 0, 0.15)', color: 'var(--color-yellow)' }}
          >
            Parramatta&#39;s #1 Rated Electrician ⚡
          </span>

          <h1 className="text-4xl md:text-5xl font-black leading-tight text-white hero-headline">
            Trusted <span style={{ color: 'var(--color-yellow)' }}>Licensed</span>
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
              <span className="material-symbols-outlined text-base">call</span>
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
