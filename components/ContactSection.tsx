"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/content";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  service: SERVICES[0].title,
  message: "",
};

export default function ContactSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: FormState): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email)) e.email = "Enter a valid email address.";
    if (!values.message.trim()) e.message = "Tell us briefly how we can help.";
    else if (values.message.trim().length < 10)
      e.message = "Please add a little more detail (10+ characters).";
    return e;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-brand/40 transition-colors focus:border-gold";

  return (
    <section id="contact" className="section bg-navy">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left — invitation + coordinates */}
        <Reveal>
          {showHeading ? (
            <>
              <span className="eyebrow text-gold-light">
                <span className="h-px w-6 bg-gold-light" />
                Let’s talk
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                Schedule a confidential consultation.
              </h2>
              <p className="mt-4 max-w-md text-lg text-white/65">
                Tell us where the business is headed and where finance is
                holding it back. We’ll respond within one business day.
              </p>
            </>
          ) : (
            <h2 className="text-xl font-bold text-white">Contact details</h2>
          )}

          <ul className="mt-9 space-y-4">
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 text-white/85 transition-colors hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gold-light">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/45">
                    Email
                  </span>
                  {COMPANY.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center gap-4 text-white/85 transition-colors hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gold-light">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/45">
                    Mobile
                  </span>
                  {COMPANY.phone}
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 text-white/85">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gold-light">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/45">
                  Location
                </span>
                {COMPANY.location}
              </span>
            </li>
          </ul>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
            {status === "success" ? (
              <div className="anim-fade flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-emerald-400" aria-hidden />
                <h3 className="mt-4 font-heading text-xl font-bold text-white">
                  Message received.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-white/60">
                  Thank you for reaching out. We’ll be in touch within one
                  business day to arrange your consultation.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-ghost mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    error={errors.name}
                    htmlFor="name"
                  >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-err" : undefined}
                      className={`${inputBase} ${
                        errors.name ? "border-red-400" : "border-white/15"
                      }`}
                    />
                  </Field>

                  <Field
                    label="Email address"
                    error={errors.email}
                    htmlFor="email"
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="jane@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-err" : undefined}
                      className={`${inputBase} ${
                        errors.email ? "border-red-400" : "border-white/15"
                      }`}
                    />
                  </Field>

                  <Field label="Company" htmlFor="company" optional>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Company (optional)"
                      className={`${inputBase} border-white/15`}
                    />
                  </Field>

                  <Field label="Area of interest" htmlFor="service">
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={`${inputBase} border-white/15`}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field
                    label="How can we help?"
                    error={errors.message}
                    htmlFor="message"
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Briefly describe your goals or challenge…"
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-err" : undefined
                      }
                      className={`${inputBase} resize-none ${
                        errors.message ? "border-red-400" : "border-white/15"
                      }`}
                    />
                  </Field>
                </div>

                {status === "error" && (
                  <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    Something went wrong sending your message. Please try again,
                    or email us directly at {COMPANY.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden />
                      Send message
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${COMPANY.email}?subject=Consultation%20request`}
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Prefer email? Book directly
                </a>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/60"
      >
        {label}
        {optional && <span className="ml-1 text-white/30">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-err`} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
