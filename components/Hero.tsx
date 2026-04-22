"use client";

import { useEffect, useRef, useState } from "react";

const badges = [
  { icon: "🎓", text: "IIT & IIM Certified" },
  { icon: "⚡", text: "Go live in 2 weeks" },
  { icon: "📊", text: "Real-time analytics" },
];

const dashboardStats = [
  { label: "Active Learners", value: "2,847", delta: "+12%", color: "text-emerald-600" },
  { label: "Avg. Score", value: "91.4", delta: "+5.2", color: "text-blue-600" },
  { label: "Completion", value: "96%", delta: "+8%", color: "text-violet-600" },
];

const progressBars = [
  { label: "Data Science & AI", pct: 89, color: "bg-brand-500" },
  { label: "Product Management", pct: 76, color: "bg-amber-400" },
  { label: "Leadership & Strategy", pct: 92, color: "bg-emerald-500" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-mesh relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-100/50 blur-3xl opacity-60" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-amber-100/40 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Trust badge */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-100 rounded-full px-4 py-2 shadow-sm">
            <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
              Trusted by 500+ Enterprise Organizations
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          ref={ref}
          className={`text-center max-w-4xl mx-auto transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 mb-6">
            Build the Skills{" "}
            <br className="hidden sm:block" />
            <span className="text-brand-500">Your Enterprise</span>
            <br className="hidden sm:block" />
            Needs to Win.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global
            universities to upskill your teams at scale — with measurable outcomes.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center mt-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-500/25 text-base"
          >
            Schedule a Free Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 transition-all hover:border-brand-200 text-base">
            <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            See Platform Tour
          </button>
        </div>

        {/* Badges */}
        <div
          className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {badges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-full px-3.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm"
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Dashboard card */}
        <div
          className={`mt-16 max-w-2xl mx-auto transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/80 border border-gray-100 overflow-hidden">
            {/* Header bar */}
            <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="flex-1 text-center text-xs text-gray-400 font-medium">
                Enterprise Dashboard — Q4 Learning Report
              </span>
            </div>

            <div className="p-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {dashboardStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-display font-bold text-gray-900 stat-number">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                    <div className={`text-xs font-semibold mt-1 ${s.color}`}>{s.delta}</div>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                {progressBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs font-medium text-gray-600 mb-1.5">
                      <span>{bar.label}</span>
                      <span>{bar.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${bar.color} transition-all duration-1000`}
                        style={{ width: visible ? `${bar.pct}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D", "E"].map((l) => (
                    <div
                      key={l}
                      className="w-7 h-7 rounded-full bg-brand-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-brand-700"
                    >
                      {l}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-500">
                    +2k
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-gray-500 font-medium">98% Satisfaction · Learner NPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
