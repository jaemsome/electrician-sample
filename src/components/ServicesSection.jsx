const services = [
  {
    icon: 'power',
    iconColor: 'var(--color-yellow)',
    title: 'Power Points & Switches',
    description:
      'Installation, replacement and repair of all indoor and weatherproof outdoor power outlets with surge protection.',
  },
  {
    icon: 'settings_input_component',
    iconColor: 'var(--color-yellow)',
    title: 'Switchboard Upgrades',
    description:
      'Safety switch installations and complete switchboard modernisation to meet current Australian compliance standards.',
  },
  {
    icon: 'health_and_safety',
    iconColor: 'var(--color-yellow)',
    title: 'Safety Inspections',
    description:
      'Comprehensive electrical audits to ensure your property fully meets AS/NZS 3000 wiring standards with a compliance certificate.',
  },
  {
    icon: 'emergency',
    iconColor: 'var(--color-red)',
    title: 'Emergency Repairs',
    description:
      'Rapid 24/7 response for power outages, sparking outlets, tripped switchboards, or electrical fire hazards — any time, any day.',
  },
  {
    icon: 'lightbulb',
    iconColor: 'var(--color-yellow)',
    title: 'LED Lighting Installation',
    description:
      'Energy-efficient LED design and installation for homes and commercial spaces. Reduce your power bill from day one.',
  },
  {
    icon: 'ac_unit',
    iconColor: 'var(--color-yellow)',
    title: 'AC Installation',
    description:
      'Authorised supply and installation of split system and ducted air conditioning units with full electrical wiring and testing.',
  },
];

function ServiceCard({ icon, iconColor, title, description }) {
  return (
    <div className="service-card glass-card-light p-8 cursor-default">
      <div className="icon-orb mb-5">
        <span
          className="material-symbols-outlined icon-filled text-3xl"
          style={{ color: iconColor }}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <h3 className="text-lg font-bold font-heading mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="dot-grid-bg py-20 px-4 md:px-8">
      <div className="max-w-container mx-auto">
        <div className="section-title">
          <h2 className="text-3xl font-bold font-heading underline-accent-left">Our Electrical Services</h2>
          <p className="mt-6 text-base" style={{ color: 'var(--color-muted)' }}>
            Residential and commercial electrical work done right, the first time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
