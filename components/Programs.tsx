"use client";

import { useState } from "react";

const categories = ["All", "Data Science & AI", "Product", "Leadership", "Analytics", "Cloud"];

const programs = [
  {
    title: "PG Program in Data Science & AI",
    institute: "IIT Guwahati",
    duration: "11 Months",
    category: "Data Science & AI",
    level: "Advanced",
    badge: "🏆 Top Rated",
    color: "from-blue-500 to-brand-600",
    features: ["Live mentorship", "Capstone project", "IIT certificate"],
  },
  {
    title: "Executive Program in Product Management",
    institute: "IIM Kozhikode",
    duration: "6 Months",
    category: "Product",
    level: "Executive",
    badge: "🔥 Popular",
    color: "from-violet-500 to-purple-700",
    features: ["Weekend cohort", "Case studies", "IIM alumni status"],
  },
  {
    title: "Leadership & Strategic Management",
    institute: "IIM Visakhapatnam",
    duration: "8 Months",
    category: "Leadership",
    level: "Senior",
    badge: null,
    color: "from-emerald-500 to-teal-600",
    features: ["CHRO roundtables", "360° feedback", "Executive coaching"],
  },
  {
    title: "Business Analytics & Intelligence",
    institute: "Great Lakes",
    duration: "6 Months",
    category: "Analytics",
    level: "Intermediate",
    badge: "⭐ New",
    color: "from-amber-400 to-orange-500",
    features: ["Tableau, Power BI", "SQL & Python", "Industry datasets"],
  },
  {
    title: "Cloud Computing & DevOps",
    institute: "IIT Kanpur + AWS",
    duration: "9 Months",
    category: "Cloud",
    level: "Advanced",
    badge: null,
    color: "from-cyan-500 to-blue-600",
    features: ["AWS certification prep", "Real infra labs", "Mentorship"],
  },
  {
    title: "Machine Learning Engineering",
    institute: "IIT Bombay",
    duration: "10 Months",
    category: "Data Science & AI",
    level: "Advanced",
    badge: "🆕 Batch 2026",
    color: "from-rose-500 to-pink-600",
    features: ["MLOps pipeline", "GPU lab access", "Research mentors"],
  },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">Programs</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            500+ programs across 15+ domains.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Co-designed with India's top institutions and global tech leaders for real-world impact.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === c
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-brand-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => (
            <div key={prog.title} className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100">
              {/* Color banner */}
              <div className={`h-28 bg-gradient-to-br ${prog.color} relative p-5 flex flex-col justify-between`}>
                {prog.badge && (
                  <span className="self-start text-xs font-semibold bg-white/25 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                    {prog.badge}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white/80 bg-white/15 px-2.5 py-1 rounded-full">
                    {prog.level}
                  </span>
                  <span className="text-xs font-medium text-white/80">{prog.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-semibold text-brand-600 mb-1">{prog.institute}</div>
                <h3 className="font-display font-bold text-gray-900 text-base mb-3 leading-snug">
                  {prog.title}
                </h3>
                <ul className="space-y-1.5 mb-5">
                  {prog.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-50 hover:bg-brand-50 hover:text-brand-700 text-gray-700 text-sm font-semibold py-2.5 rounded-xl border border-gray-200 hover:border-brand-200 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="text-sm font-semibold text-brand-600 hover:text-brand-800 border border-brand-200 hover:border-brand-400 px-6 py-2.5 rounded-full transition-all">
            View all 500+ programs →
          </button>
        </div>
      </div>
    </section>
  );
}
