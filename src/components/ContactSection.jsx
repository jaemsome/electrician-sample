'use client';

import { useState } from 'react';

const serviceOptions = [
  'Power Points & Switches',
  'Switchboard Upgrade',
  'Safety Inspection',
  'Emergency Repair',
  'LED Lighting Installation',
  'Air Conditioning Installation',
  'Other',
];

const contactTimeOptions = [
  { value: '', label: 'Any time is fine' },
  { value: 'morning', label: 'Morning (7am – 12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm – 5pm)' },
  { value: 'evening', label: 'Evening (5pm – 7pm)' },
];

const REQUIRED = ['name', 'phone', 'email', 'service', 'description'];

const contactDetails = [
  { icon: 'call', label: 'Call Us 24/7', id: 'contact-phone-link' },
  { icon: 'mail', label: 'Email Us', id: 'contact-email-link' },
  { icon: 'shield', label: 'Licence Number', id: 'contact-licence' },
  { icon: 'location_on', label: 'Service Areas', id: 'contact-areas' },
  { icon: 'schedule', label: 'Business Hours', id: 'contact-hours' },
];

export default function ContactSection() {
  const [fields, setFields] = useState({
    name: '', phone: '', email: '', service: '', description: '', contactTime: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    REQUIRED.forEach((k) => { if (!fields[k].trim()) next[k] = true; });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus('success');
        setFields({ name: '', phone: '', email: '', service: '', description: '', contactTime: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputCls = (k) =>
    `form-input w-full rounded px-4 py-3 text-sm text-white border${errors[k] ? ' error' : ''}`;
  const baseStyle = { background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)' };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8 overflow-hidden" style={{ background: 'var(--color-dark-navy)' }}>
      <div className="mesh-bg" aria-hidden="true" />
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12 relative">

        <div>
          <h2 className="text-3xl font-bold font-heading text-white underline-accent-left mb-8">Get a Free Quote</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="icon-orb" style={{ width: 48, height: 48 }}>
                <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-yellow)' }} aria-hidden="true">call</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-muted)' }}>Call Us 24/7</div>
                <a href="tel:0291234567" className="text-2xl font-bold font-heading hover:opacity-80 transition-opacity" style={{ color: 'var(--color-yellow)' }}>(02) 9123 4567</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-orb" style={{ width: 48, height: 48 }}>
                <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-yellow)' }} aria-hidden="true">mail</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-muted)' }}>Email Us</div>
                <a href="mailto:info@voltelectrics.com.au" className="text-base font-semibold text-white hover:opacity-80 transition-opacity">info@voltelectrics.com.au</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-orb" style={{ width: 48, height: 48 }}>
                <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-yellow)' }} aria-hidden="true">shield</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-muted)' }}>Licence Number</div>
                <span className="text-base font-semibold text-white">#EL78234C — NSW Licensed Electrician</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-orb" style={{ width: 48, height: 48 }}>
                <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-yellow)' }} aria-hidden="true">location_on</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-muted)' }}>Service Areas</div>
                <p className="text-sm text-white leading-relaxed">Parramatta · Northmead · Harris Park · Granville · Merrylands · Westmead · Wentworthville · Toongabbie &amp; surrounds</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-orb" style={{ width: 48, height: 48 }}>
                <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-yellow)' }} aria-hidden="true">schedule</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-muted)' }}>Business Hours</div>
                <p className="text-sm text-white">Mon – Fri: 7:00am – 6:00pm</p>
                <p className="text-sm text-white">Saturday: 8:00am – 4:00pm</p>
                <p className="text-sm text-white">Sunday &amp; Public Holidays: Emergency Only</p>
                <span className="inline-block mt-2 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide" style={{ background: 'var(--color-red)', color: 'white' }}>24/7 Emergency Response Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Full Name *</label>
                <input id="contact-name" type="text" value={fields.name} onChange={set('name')} placeholder="e.g. John Smith" className={inputCls('name')} style={baseStyle} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Phone *</label>
                  <input id="contact-phone" type="tel" value={fields.phone} onChange={set('phone')} placeholder="0400 000 000" className={inputCls('phone')} style={baseStyle} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Email *</label>
                  <input id="contact-email" type="email" value={fields.email} onChange={set('email')} placeholder="your@email.com" className={inputCls('email')} style={baseStyle} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Service Needed *</label>
                <select id="contact-service" value={fields.service} onChange={set('service')} className={inputCls('service')} style={{ background: '#0d1526', borderColor: 'rgba(255,255,255,0.12)' }}>
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-description" className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Job Description *</label>
                <textarea id="contact-description" value={fields.description} onChange={set('description')} rows={4} placeholder="Tell us about your electrical job..." className={`${inputCls('description')} resize-none`} style={baseStyle} />
              </div>
              <div>
                <label htmlFor="contact-time" className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Preferred Contact Time</label>
                <select id="contact-time" value={fields.contactTime} onChange={set('contactTime')} className="form-input w-full rounded px-4 py-3 text-sm text-white border" style={{ background: '#0d1526', borderColor: 'rgba(255,255,255,0.12)' }}>
                  {contactTimeOptions.map(({ value, label }) => <option key={label} value={value}>{label}</option>)}
                </select>
              </div>
              {status !== 'success' && (
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full py-4 text-sm mt-2">
                  {status === 'submitting' ? 'Sending...' : 'Send My Enquiry ⚡'}
                </button>
              )}
              {Object.keys(errors).length > 0 && status !== 'submitting' && (
                <p role="alert" className="text-sm font-bold text-center" style={{ color: 'var(--color-red)' }}>
                  Please fill in all required fields before submitting.
                </p>
              )}
              {status === 'success' && (
                <p role="status" className="text-sm font-bold text-center" style={{ color: 'var(--color-yellow)' }}>
                  ⚡ Thanks! We&apos;ll be in touch within 2 hours.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-sm font-bold text-center" style={{ color: 'var(--color-red)' }}>
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
