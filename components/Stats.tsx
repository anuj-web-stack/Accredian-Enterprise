"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Enterprise Clients", sub: "Organizations trust Accredian" },
  { value: 50, suffix: "K+", label: "Learners Upskilled", sub: "Professionals transformed" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", sub: "Learner satisfaction score" },
  { value: 500, suffix: "+", label: "Curated Programs", sub: "Across 15+ domains" },
  { value: 94, suffix: "%", label: "Completion Rate", sub: "Industry-leading outcome" },
  { value: 50, suffix: "+", label: "University Partners", sub: "IITs, IIMs & global institutions" },
];

function useCounter(target: number, duration = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, sub, start }: (typeof stats)[0] & { start: boolean }) {
  const count = useCounter(value, 2000, start);
  return (
    <div className="text-center group">
      <div className="text-4xl sm:text-5xl font-display font-bold text-brand-600 mb-1 stat-number tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-base font-semibold text-gray-900 mb-0.5">{label}</div>
      <div className="text-sm text-gray-500">{sub}</div>
    </div>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">By the Numbers</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            The platform enterprises trust
          </h2>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6"
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
