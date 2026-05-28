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
    <section id="contact" className="py-20 px-4 md:px-8" style={{ background: 'var(--color-dark-navy)' }}>
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-black text-white underline-accent-left mb-8">Get a Free Quote</h2>
          <div className="flex flex-col gap-8">
            {[
              { icon: 'call', label: 'Call Us 24/7', content: <a href="tel:0291234567" className="text-2xl font-black hover:opacity-80 transition-opacity" style={{ color: 'var(--color-yellow)' }}>(02) 9123 4567</a> },
              { icon: 'mail', label: 'Email Us', content: <a href="mailto:info@voltelectrics.com.au" className="text-base font-semibold text-white hover:opacity-80 transition-opacity">info@voltelectrics.com.au</a> },
              { icon: 'shield', label: 'Licence Number', content: <span className="text-base font-semibold text-white">#EL78234C — NSW Licensed Electrician</span> },
              { icon: 'location_on', label: 'Service Areas', content: <p className="text-sm text-white leading-relaxed">Parramatta · Northmead · Harris Park · Granville · Merrylands · Westmead · Wentworthville · Toongabbie &amp; surrounds</p> },
              {
                icon: 'schedule', label: 'Business Hours', content: (
                  <>
                    <p className="text-sm text-white">Mon – Fri: 7:00am – 6:00pm</p>
                    <p className="text-sm text-white">Saturday: 8:00am – 4:00pm</p>
                    <p className="text-sm text-white">Sunday &amp; Public Holidays: Emergency Only</p>
                    <span className="inline-block mt-2 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide" style={{ background: 'var(--color-red)', color: 'white' }}>24/7 Emergency Response Active</span>
                  </>
                )
              },
            ].map(({ icon, label, content }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="material-symbols-outlined mt-1" style={{ color: 'var(--color-yellow)' }}>{icon}</span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-muted)' }}>{label}</div>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-8 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Full Name *</label>
                <input type="text" value={fields.name} onChange={set('name')} placeholder="e.g. John Smith" className={inputCls('name')} style={baseStyle} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Phone *</label>
                  <input type="tel" value={fields.phone} onChange={set('phone')} placeholder="0400 000 000" className={inputCls('phone')} style={baseStyle} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Email *</label>
                  <input type="email" value={fields.email} onChange={set('email')} placeholder="your@email.com" className={inputCls('email')} style={baseStyle} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Service Needed *</label>
                <select value={fields.service} onChange={set('service')} className={inputCls('service')} style={{ background: '#0d1526', borderColor: 'rgba(255,255,255,0.12)' }}>
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Job Description *</label>
                <textarea value={fields.description} onChange={set('description')} rows={4} placeholder="Tell us about your electrical job..." className={`${inputCls('description')} resize-none`} style={baseStyle} />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white mb-2">Preferred Contact Time</label>
                <select value={fields.contactTime} onChange={set('contactTime')} className="form-input w-full rounded px-4 py-3 text-sm text-white border" style={{ background: '#0d1526', borderColor: 'rgba(255,255,255,0.12)' }}>
                  {contactTimeOptions.map(({ value, label }) => <option key={label} value={value}>{label}</option>)}
                </select>
              </div>
              {status !== 'success' && (
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full py-4 text-sm mt-2">
                  {status === 'submitting' ? 'Sending...' : 'Send My Enquiry ⚡'}
                </button>
              )}
              {Object.keys(errors).length > 0 && status !== 'submitting' && (
                <p className="text-sm font-bold text-center" style={{ color: 'var(--color-red)' }}>
                  Please fill in all required fields before submitting.
                </p>
              )}
              {status === 'success' && (
                <p className="text-sm font-bold text-center" style={{ color: 'var(--color-yellow)' }}>
                  ⚡ Thanks! We&apos;ll be in touch within 2 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-bold text-center" style={{ color: 'var(--color-red)' }}>
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
