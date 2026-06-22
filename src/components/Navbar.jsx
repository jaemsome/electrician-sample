'use client';

import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <header
        ref={navRef}
        id="main-nav"
        className={`max-w-container mx-auto rounded-2xl border transition-all duration-300${
          scrolled
            ? ' sticky-nav-active border-white/10 bg-[#0a0f1ee6]'
            : ' border-white/5 bg-[#0a0f1ecc]'
        }`}
        style={{ backdropFilter: 'blur(16px)' }}
      >
        <div className="px-4 md:px-6 flex justify-between items-center h-16 md:h-18">
          <div className="flex flex-col">
            <span className="text-lg font-bold font-heading tracking-tight" style={{ color: 'var(--color-yellow)' }}>
              ⚡ VOLT ELECTRICS
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
              NSW Licence #EL78234C
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-bold uppercase tracking-wide text-white/70 hover:text-[var(--color-yellow)] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <a href="tel:0291234567" className="btn-primary px-6 py-3 text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-base" aria-hidden="true">call</span>
              (02) 9123 4567
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-3">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className="block py-3 font-bold text-sm uppercase tracking-wide text-white/80 border-b border-white/10"
              >
                {label}
              </a>
            ))}
            <a href="tel:0291234567" className="btn-primary block text-center py-4 mt-2 text-sm">
              ⚡ Call (02) 9123 4567
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
