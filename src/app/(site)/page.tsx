import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  HeartPulse,
  PhoneCall,
  Search,
  ShieldCheck,
} from "lucide-react";
import { BloodRequests } from "@/components/lifedrop/blood-requests";
import { DonorDirectory } from "@/components/lifedrop/donor-directory";
import { DonorRegistration } from "@/components/lifedrop/donor-registration";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface px-5 pb-16 pt-20 sm:px-8 lg:pb-24 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,35,43,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(201,35,43,0.08),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-outline bg-surface-container-lowest px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
              <HeartPulse size={13} />
              Community blood network
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-on-surface sm:text-6xl lg:text-7xl">
              Blood help,
              <span className="block text-primary">when minutes matter.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              LifeDrop connects urgent requests with nearby volunteer donors. Search,
              request, and register through one simple, trusted flow.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#find"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-on-primary transition hover:bg-brand-dark"
              >
                Find a donor
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/#request"
                className="inline-flex items-center gap-2 rounded-xl border border-outline bg-surface-container-lowest px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-on-surface transition hover:border-primary hover:text-primary"
              >
                Post request
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: "24/7", label: "Community support" },
                { value: "Local", label: "District donors" },
                { value: "Direct", label: "Phone contact" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-outline-variant bg-surface-container-lowest/90 p-4 backdrop-blur"
                >
                  <p className="font-display text-2xl text-on-surface">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-on-surface-variant">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-lowest shadow-xl">
              <div className="border-b border-outline-variant bg-surface-container-low px-6 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
                    LifeDrop network
                  </p>
                  <Droplets size={18} className="text-primary" />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 rounded-2xl bg-primary px-5 py-5 text-on-primary">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                    <Droplets size={28} />
                  </div>
                  <div>
                    <p className="font-display text-2xl">Donate. Request. Save.</p>
                    <p className="text-sm text-white/80">One network, real people.</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { icon: ShieldCheck, text: "Consent-based donor listings" },
                    { icon: PhoneCall, text: "Direct contact with donors/requesters" },
                    { icon: Search, text: "Find by blood group and location" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface px-4 py-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-primary">
                        <item.icon size={16} />
                      </span>
                      <p className="text-sm text-on-surface">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-surface-container-low px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
            How it works
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: Search,
                title: "Search or post",
                text: "Find a matching donor or share what you need in seconds.",
              },
              {
                step: "02",
                icon: PhoneCall,
                title: "Make contact",
                text: "Reach out directly using the contact details shared with consent.",
              },
              {
                step: "03",
                icon: HeartPulse,
                title: "Save a life",
                text: "Coordinate with a donor or volunteer and give the gift of life.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-primary">
                    <item.icon size={18} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-on-surface-variant">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl text-on-surface">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonorDirectory />
      <BloodRequests />
      <DonorRegistration />

      <section className="bg-primary px-5 py-16 text-on-primary sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              Ready to make a difference?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Join the LifeDrop network and be someone&apos;s hope today.
            </p>
          </div>
          <Link
            href="/#donate"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition hover:bg-surface-container"
          >
            Register now
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
