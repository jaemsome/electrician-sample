const badges = [
  { icon: 'verified_user', label: 'Standards Australia', value: 'AS/NZS 3000' },
  { icon: 'badge', label: 'NSW Contractor Licence', value: '#EL78234C' },
  { icon: 'task_alt', label: 'Compliance Assurance', value: 'Certificate Issued' },
];

function ComplianceBadge({ icon, label, value }) {
  return (
    <div className="compliance-badge">
      <span
        className="material-symbols-outlined icon-filled text-2xl mb-2 block"
        style={{ color: 'var(--color-yellow)' }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">{label}</div>
      <div className="text-lg font-black" style={{ color: 'var(--color-yellow)' }}>
        {value}
      </div>
    </div>
  );
}

export default function ComplianceBadges() {
  return (
    <section className="py-16 px-4 md:px-8" style={{ background: 'var(--color-dark-navy)' }}>
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-2xl font-black text-white mb-2">
          Licensed.{' '}
          <span style={{ color: 'var(--color-yellow)' }}>Compliant.</span>{' '}
          Guaranteed.
        </h2>
        <p className="text-sm mb-10" style={{ color: 'var(--color-muted)' }}>
          All electrical work in Australia requires a licensed electrician. We provide a
          certificate of compliance for every job completed.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((b) => (
            <ComplianceBadge key={b.label} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
