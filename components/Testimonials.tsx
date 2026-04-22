"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Priya Sharma",
    title: "Chief People Officer",
    company: "Razorpay",
    initials: "PS",
    color: "bg-brand-500",
    metric: "40% velocity improvement",
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Vikram Nair",
    title: "VP of Engineering",
    company: "PhonePe",
    initials: "VN",
    color: "bg-violet-500",
    metric: "Full ML project ownership",
  },
  {
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: "Ananya Krishnan",
    title: "Head of Learning & Development",
    company: "Infosys BPM",
    initials: "AK",
    color: "bg-emerald-500",
    metric: "96% completion rate",
  },
  {
    quote:
      "What impressed us most was how quickly programs were customized for our fintech context. From kickoff to first cohort in under two weeks — genuinely remarkable.",
    name: "Rohit Mehta",
    title: "CHRO",
    company: "Paytm",
    initials: "RM",
    color: "bg-amber-500",
    metric: "2-week launch turnaround",
  },
  {
    quote:
      "The mentor network is extraordinary. My team's sessions with ML engineers from top product companies were worth the entire program investment on their own.",
    name: "Deepa Iyer",
    title: "Director of Engineering",
    company: "Swiggy",
    initials: "DI",
    color: "bg-rose-500",
    metric: "500+ expert mentors",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">Client Stories</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Trusted by India's fastest-growing companies.
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-7xl font-serif text-brand-100 leading-none select-none">"</div>
            <div className="relative z-10">
              <div
                className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6 text-white ${testimonials[active].color}`}
              >
                ✦ {testimonials[active].metric}
              </div>
              <blockquote className="text-xl text-gray-800 font-medium leading-relaxed mb-8">
                {testimonials[active].quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonials[active].color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[active].name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonials[active].title} · {testimonials[active].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side selector */}
          <div className="space-y-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                  active === i
                    ? "border-brand-400 bg-brand-50 shadow-sm"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500 truncate">
                      {t.title} · {t.company}
                    </div>
                  </div>
                  {active === i && (
                    <div className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
