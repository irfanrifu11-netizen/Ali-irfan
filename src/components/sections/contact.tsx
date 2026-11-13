"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Camera,
  Check,
  Code2,
  Copy,
  Loader2,
  LockKeyhole,
  Mail,
  MapPin,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { MagneticSubmit } from "@/components/ui/magnetic-submit";
import { Reveal } from "@/components/ui/reveal";
import { WordReveal } from "@/components/ui/word-reveal";
import { siteConfig } from "@/lib/data";

const socialIconMap: Record<string, LucideIcon> = {
  GitHub: Code2,
  LinkedIn: Briefcase,
  Instagram: Camera,
  Dribbble: Palette,
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "opening" | "ready">("idle");
  const [copied, setCopied] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please add a valid email address.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = "Tell me a little more — at least 10 characters.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("opening");

    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Ali,\n\n${form.message}\n\n— ${form.name}\n${form.email}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    window.setTimeout(() => setStatus("ready"), 900);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-space relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-electric/[0.08] blur-[160px]" />
        <div className="absolute bottom-[5%] right-[10%] h-[26rem] w-[26rem] rounded-full bg-violet/[0.08] blur-[140px]" />
        <div className="grid-lines absolute inset-0 opacity-40" />
      </div>

      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-end">
          <div>
            <Reveal y={16}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.14em] text-electric-soft">
                  06
                </span>
                <span className="h-px w-8 bg-white/20" />
                <span className="eyebrow">Contact</span>
              </div>
            </Reveal>

            <h2 className="mt-6 max-w-[13ch] text-[clamp(3rem,6.6vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              <WordReveal text="Let's create" />
              <br />
              <WordReveal text="something" delay={0.12} />{" "}
              <span className="font-serif-italic text-gradient">
                extraordinary.
              </span>
            </h2>
          </div>

          <Reveal delay={0.15} y={20} className="lg:pb-2">
            <p className="max-w-sm text-sm leading-[1.8] text-muted">
              Have an idea, a half-formed thought or a project that needs a
              fresh perspective? I&apos;d love to hear about it.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-emerald-300/80">
                {siteConfig.availability}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 xl:mt-16">
          <div className="lg:col-span-5">
            <Reveal y={30}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="eyebrow">Email</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="link-underline break-all text-[clamp(1.15rem,2.3vw,1.8rem)] font-medium tracking-[-0.035em] text-paper"
                  >
                    {siteConfig.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-colors hover:border-white/25 hover:text-paper"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                <p className="mt-3 text-[11px] text-muted/70">
                  Replace this with your real email address before launch.
                </p>

                <div className="hairline my-6" />

                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-electric-soft">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[11px] text-paper/80">
                      {siteConfig.location}
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                      Working worldwide
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={30} className="mt-4">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Elsewhere</p>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/25" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {siteConfig.socials.map((social) => {
                    const Icon = socialIconMap[social.label] ?? ArrowUpRight;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                      >
                        <Icon className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-paper" />
                        <span className="text-[11px] text-muted transition-colors group-hover:text-paper">
                          {social.label}
                        </span>
                        <ArrowUpRight className="ml-auto h-3 w-3 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper/60" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14} y={24} className="mt-4">
              <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <div>
                  <p className="text-[12px] font-medium text-paper/90">
                    Currently taking on new projects
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted">
                    Typical response time: within 24–48 hours.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={34} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass relative overflow-hidden rounded-[1.75rem] p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-electric/10 blur-[80px]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                    Tell me about your idea
                  </h3>
                  <p className="mt-1.5 text-[11px] text-muted">
                    A few details are all it takes to start the conversation.
                  </p>
                </div>
                <span className="hidden rounded-full border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35 sm:block">
                  No commitment
                </span>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[8px] uppercase tracking-[0.15em] text-muted"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="h-12 w-full rounded-xl border border-white/[0.09] bg-ink/40 px-4 text-sm text-paper outline-none transition-colors placeholder:text-white/20 focus:border-electric/60 focus:bg-ink/60"
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-[10px] text-rose-400">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[8px] uppercase tracking-[0.15em] text-muted"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@studio.com"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="h-12 w-full rounded-xl border border-white/[0.09] bg-ink/40 px-4 text-sm text-paper outline-none transition-colors placeholder:text-white/20 focus:border-electric/60 focus:bg-ink/60"
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 text-[10px] text-rose-400">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.15em] text-muted"
                >
                  <span>The project</span>
                  <span className="text-white/25">{form.message.length} / 1000</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={1000}
                  placeholder="What are you building, and what would success look like?"
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-xl border border-white/[0.09] bg-ink/40 px-4 py-3.5 text-sm leading-relaxed text-paper outline-none transition-colors placeholder:text-white/20 focus:border-electric/60 focus:bg-ink/60"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-[10px] text-rose-400">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <MagneticSubmit disabled={status === "opening"}>
                  {status === "opening" ? (
                    <span className="flex items-center gap-2">
                      Opening email
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    </span>
                  ) : (
                    "Send message"
                  )}
                </MagneticSubmit>

                <p className="flex items-center gap-2 text-[10px] text-muted/70">
                  <LockKeyhole className="h-3 w-3" />
                  Your details stay between us.
                </p>
              </div>

              <div aria-live="polite" className="min-h-0">
                {status === "ready" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] p-3.5"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    <p className="text-[11px] leading-relaxed text-emerald-100/70">
                      Your email app should be opening with the message ready to
                      send. If it doesn&apos;t, write to{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-emerald-300 underline decoration-emerald-300/30 underline-offset-2"
                      >
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  </motion.div>
                ) : null}
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.11em] text-white/25">
                  <Mail className="h-3 w-3" />
                  Simple form · Opens your email client
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
