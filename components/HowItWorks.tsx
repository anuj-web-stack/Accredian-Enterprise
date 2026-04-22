"use client";

import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Needs Assessment",
    short: "We start with a deep-dive audit of your team's skill gaps and strategic objectives.",
    detail:
      "Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda for your organization.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Program Design",
    short: "Custom learning paths are architected with your domain, culture, and timelines in mind.",
    detail:
      "From curriculum selection to cohort composition and mentor matching — every program is built to your specifications, not off-the-shelf.",
    icon: "🎨",
  },
  {
    num: "03",
    title: "Deployment & Onboarding",
    short: "Seamless rollout with zero disruption to your team's workflow.",
    detail:
      "White-glove onboarding, SSO integration, HRMS sync, and dedicated account management ensure a day-one-ready launch.",
    icon: "🚀",
  },
  {
    num: "04",
    title: "Track & Optimize",
    short: "Live dashboards surface progress, risks, and ROI in real time.",
    detail:
      "Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky long after program end.",
    icon: "📊",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">The Process</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live in 14 days. Measurable ROI in 90.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured four-step methodology takes you from assessment to measurable outcomes
            without disrupting your business operations.
          </p>
        </div>

        {/* Desktop: step tabs + detail */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps list */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <button
                key={step.num}
                className={`w-full text-left rounded-2xl p-6 border-2 transition-all ${
                  active === i
                    ? "border-brand-500 bg-brand-50 shadow-md"
                    : "border-gray-100 bg-white hover:border-brand-200"
                }`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-sm transition-colors ${
                      active === i ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900 mb-1">{step.title}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.short}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="bg-gradient-to-br from-brand-900 to-brand-700 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 text-9xl font-display font-bold">{steps[active].num}</div>
            </div>
            <div className="relative z-10">
              <div className="text-5xl mb-6">{steps[active].icon}</div>
              <div className="text-brand-200 text-xs font-semibold tracking-widest uppercase mb-2">
                Step {steps[active].num}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{steps[active].title}</h3>
              <p className="text-brand-100 leading-relaxed mb-3">{steps[active].short}</p>
              <p className="text-brand-200 text-sm leading-relaxed">{steps[active].detail}</p>
            </div>
          </div>
        </div>

        {/* Mobile: vertical accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`rounded-2xl border-2 overflow-hidden transition-all ${
                active === i ? "border-brand-400" : "border-gray-100"
              }`}
            >
              <button
                className="w-full text-left p-5 flex items-center gap-4"
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                    active === i ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {step.num}
                </div>
                <span className="font-display font-bold text-gray-900">{step.title}</span>
                <svg
                  className={`ml-auto w-4 h-4 text-gray-400 transition-transform ${active === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {active === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {step.short} {step.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
