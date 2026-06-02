const reasons = [
  {
    icon: 'verified',
    title: 'Fully Licensed & Insured',
    description: 'All work meets Australian Standards AS/NZS 3000. NSW Licence #EL78234C.',
  },
  {
    icon: 'price_check',
    title: 'Upfront Fixed Pricing',
    description: 'No hidden fees. You know the full cost before we start any work. Guaranteed.',
  },
  {
    icon: 'schedule',
    title: 'Same Day Response',
    description: 'We show up when we say we will. Fast response guaranteed for all urgent jobs.',
  },
  {
    icon: 'military_tech',
    title: 'Lifetime Workmanship Guarantee',
    description: 'We stand behind every single job we complete. No questions asked.',
  },
];

function WhyCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
      <div className="why-icon">
        <span
          className="material-symbols-outlined icon-filled text-3xl"
          style={{ color: 'var(--color-yellow)' }}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <h4 className="font-black text-base mb-2">{title}</h4>
      <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
        {description}
      </p>
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 px-4 md:px-8"
      style={{ background: 'var(--color-section-grey)' }}
    >
      <div className="max-w-container mx-auto">
        <div className="section-title text-center">
          <h2 className="text-3xl font-black underline-accent-center">
            Why Parramatta Locals Choose Volt Electrics
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <WhyCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
