export default function EmergencyBanner() {
  return (
    <div style={{ background: 'var(--color-red)' }} className="py-4 px-4">
      <div className="max-w-container mx-auto flex items-center justify-center gap-3 text-center flex-wrap">
        <span className="material-symbols-outlined icon-filled pulsing-bolt text-white text-2xl">
          bolt
        </span>
        <span className="text-white font-bold text-sm md:text-base tracking-tight">
          24/7 Emergency Electrical Service — Call{' '}
          <a
            href="tel:0291234567"
            className="underline font-black hover:opacity-80 transition-opacity"
          >
            (02) 9123 4567
          </a>{' '}
          Now
        </span>
        <span className="material-symbols-outlined icon-filled pulsing-bolt text-white text-2xl">
          bolt
        </span>
      </div>
    </div>
  );
}
