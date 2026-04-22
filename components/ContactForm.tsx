"use client";

import { useState } from "react";

const teamSizes = [
  "1 – 10 employees",
  "11 – 50 employees",
  "51 – 200 employees",
  "201 – 500 employees",
  "501 – 1,000 employees",
  "1,000+ employees",
];

const benefits = [
  "Free 30-min platform walkthrough with your use case",
  "Custom program recommendation for your industry",
  "Pricing tailored to your team size and scope",
  "No commitment, no spam — just a conversation",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid work email required";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.teamSize) e.teamSize = "Please select team size";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's build your learning future together.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fill in the form and one of our enterprise L&D consultants will reach out within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: benefits */}
          <div>
            <div className="bg-gradient-to-br from-brand-900 to-brand-700 rounded-3xl p-8 md:p-10 text-white mb-6">
              <h3 className="font-display text-xl font-bold mb-6">What to expect</h3>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-brand-100">
                    <div className="w-5 h-5 rounded-full bg-brand-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-200" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-brand-700">
                <p className="text-xs text-brand-300 mb-1">Or reach us directly</p>
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-white font-semibold hover:text-brand-200 transition-colors"
                >
                  enterprise@accredian.com
                </a>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🔒", label: "GDPR Compliant" },
                { icon: "⚡", label: "24hr Response" },
                { icon: "🎓", label: "500+ Clients" },
              ].map((t) => (
                <div key={t.label} className="text-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-xl mb-1">{t.icon}</div>
                  <div className="text-xs font-medium text-gray-600">{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            {formState === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Our L&D consultant will reach out to{" "}
                  <span className="font-medium text-brand-600">{form.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", company: "", teamSize: "", message: "" });
                  }}
                  className="text-sm font-medium text-brand-600 hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Priya Sharma"
                    className={`form-input w-full rounded-xl border px-4 py-2.5 text-sm transition-all ${
                      errors.name ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="priya@company.com"
                    className={`form-input w-full rounded-xl border px-4 py-2.5 text-sm transition-all ${
                      errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Technologies"
                    className={`form-input w-full rounded-xl border px-4 py-2.5 text-sm transition-all ${
                      errors.company ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                    }`}
                  />
                  {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Team Size <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    className={`form-input w-full rounded-xl border px-4 py-2.5 text-sm transition-all appearance-none bg-white ${
                      errors.teamSize ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select team size</option>
                    {teamSizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.teamSize && <p className="text-xs text-red-500 mt-1">{errors.teamSize}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your team's learning goals..."
                    className="form-input w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm resize-none transition-all"
                  />
                </div>

                {formState === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={formState === "loading"}
                  className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  {formState === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Request a Free Demo"
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline hover:text-gray-600">
                    Privacy Policy
                  </a>
                  . No spam, ever.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
