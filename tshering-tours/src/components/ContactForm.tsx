"use client";
import { useState } from "react";
import { Send } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  travelDates: string;
  travelers: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    travelDates: "",
    travelers: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-brand-orange text-3xl">✓</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 font-sans">
          Thank you, {form.fullName}. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold font-sans text-brand-dark mb-1.5 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-bold font-sans text-brand-dark mb-1.5 uppercase tracking-wider">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold font-sans text-brand-dark mb-1.5 uppercase tracking-wider">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-bold font-sans text-brand-dark mb-1.5 uppercase tracking-wider">
            Travel Dates
          </label>
          <input
            type="text"
            name="travelDates"
            value={form.travelDates}
            onChange={handleChange}
            placeholder="e.g. October 2025"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold font-sans text-brand-dark mb-1.5 uppercase tracking-wider">
          Number of Travelers
        </label>
        <select
          name="travelers"
          value={form.travelers}
          onChange={handleChange}
          className={inputClass}
        >
          {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
            <option key={n} value={n}>
              {n} traveler{n === "1" ? "" : "s"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold font-sans text-brand-dark mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your dream Bhutan trip — interests, special requirements, or questions…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-maroon text-white py-3.5 rounded-full font-sans font-bold flex items-center justify-center gap-2 hover:bg-brand-red transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
        ) : (
          <Send size={16} />
        )}
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
