const testimonials = [
  {
    text: '"Called them at 7pm for a tripped switchboard. They were here within the hour and fixed it on the spot. Absolute legends. Won\'t use anyone else."',
    author: '— Mark T.',
    location: 'Parramatta, NSW · Google Review',
  },
  {
    text: '"Got three quotes. Volt Electrics were upfront with their pricing and showed up exactly on time. Quality work, no dramas whatsoever."',
    author: '— Sarah K.',
    location: 'Penrith, NSW · Google Review',
  },
  {
    text: '"Had all the power points in our new kitchen replaced and new LED downlights installed. Clean work, fast, and very reasonably priced. Highly recommend."',
    author: '— Jason M.',
    location: 'Blacktown, NSW · Google Review',
  },
];

function StarRating({ count = 5, size = 'text-lg', label }) {
  return (
    <div className="flex gap-1" role="img" aria-label={label ?? `${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined icon-filled ${size}`}
          style={{ color: 'var(--color-yellow)' }}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ text, author, location }) {
  return (
    <div className="testimonial-card bg-white border border-gray-200 rounded-xl p-8">
      <StarRating />
      <p className="italic text-sm leading-relaxed mb-6 mt-4" style={{ color: 'var(--color-muted)' }}>
        {text}
      </p>
      <div className="text-sm font-black">{author}</div>
      <div className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
        {location}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-container mx-auto">
        <div className="section-title text-center">
          <h2 className="text-3xl font-black underline-accent-center">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <StarRating size="text-2xl" label="Overall rating: 4.9 out of 5 stars" />
          <span className="text-xl font-black">4.9 / 5</span>
          <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
            Based on 147 Google Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
