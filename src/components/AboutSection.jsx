import AboutSvg from './AboutSvg';

const checkPoints = [
  'Australian owned and locally operated since 2008',
  'Ongoing training in the latest electrical safety standards',
  '$20M public liability insurance — every job, every time',
  'All work backed by a lifetime workmanship guarantee',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-black underline-accent-left mb-8">About Volt Electrics</h2>

          <div className="flex items-center gap-6 mb-8">
            <div className="years-badge">
              <span className="text-3xl font-black" style={{ color: 'var(--color-dark-navy)' }}>
                15+
              </span>
              <span
                className="text-xs font-bold uppercase text-center leading-tight"
                style={{ color: 'var(--color-dark-navy)' }}
              >
                Years<br />Exp.
              </span>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Volt Electrics has been the cornerstone of electrical safety in Parramatta and
              the Greater Western Sydney region since 2008.
            </p>
          </div>

          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
            Founded by master electrician <strong>James Hartley</strong>, our team of 6 fully
            licenced technicians handles everything from a single power point to full commercial
            fit-outs. We&apos;re known for showing up on time, communicating clearly, and leaving
            your property spotless.
          </p>

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
            We&apos;re a family-owned local business. When you call Volt Electrics, you speak
            directly with someone who lives and works in your community — not a call centre.
          </p>

          <ul className="flex flex-col gap-3">
            {checkPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-semibold">
                <span
                  className="material-symbols-outlined icon-filled"
                  style={{ color: 'var(--color-yellow)' }}
                  aria-hidden="true"
                >
                  check_circle
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="img-placeholder" style={{ height: '420px' }}>
            <AboutSvg />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: 'rgba(255, 215, 0, 0.08)', backdropFilter: 'blur(8px)' }}
            >
              <p className="text-white text-sm font-bold italic text-center">
                &ldquo;We treat every home as if it were our own.&rdquo; — James Hartley, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
