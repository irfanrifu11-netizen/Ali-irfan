"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-[11px] font-medium text-paper/85 transition-colors duration-300 hover:border-electric/50 hover:bg-electric/10 hover:text-paper"
      >
        Live demo
        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      <a
        href={project.sourceUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-medium text-muted transition-colors duration-300 hover:border-white/25 hover:text-paper"
      >
        <Code2 className="h-3 w-3" />
        Source code
      </a>
    </div>
  );
}

function ProjectVisual({
  project,
  className,
  priority,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noreferrer noopener"
      data-cursor="project"
      aria-label={`${project.title} — open live demo`}
      className={cn(
        "group/visual relative block overflow-hidden rounded-[1.4rem] border border-white/10 bg-ink-soft",
        className,
      )}
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        unoptimized
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 65vw"
        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/visual:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover/visual:opacity-90" />
      <div className="absolute inset-0 bg-electric/0 transition-colors duration-700 group-hover/visual:bg-electric/[0.045]" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full border border-white/10 bg-ink/45 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/65 backdrop-blur-md">
          {project.year}
        </span>
      </div>

      <div className="absolute right-4 top-4">
        <span className="grid h-10 w-10 translate-y-1 place-items-center rounded-full border border-white/20 bg-ink/40 text-paper opacity-0 backdrop-blur-md transition-all duration-500 group-hover/visual:translate-y-0 group-hover/visual:opacity-100">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/visual:rotate-45" />
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between rounded-xl border border-white/10 bg-ink/45 px-4 py-3 opacity-0 backdrop-blur-md transition-all duration-500 group-hover/visual:translate-y-0 group-hover/visual:opacity-100">
        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/60">
          Explore the experience
        </span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="work" className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-violet/[0.055] blur-[150px]" />
        <div className="absolute left-[-10%] top-[60%] h-96 w-96 rounded-full bg-electric/[0.055] blur-[140px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <SectionHeading
            index="03"
            label="Selected work"
            title="Built with intent,"
            accent="made to be felt."
          />
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-sm leading-[1.8] text-muted">
              A selection of concept projects exploring the place where
              storytelling, interface design and engineering meet. Each one
              starts with a question and ends with a feeling.
            </p>
            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-paper/80 transition-colors hover:text-paper"
            >
              <Plus className="h-3.5 w-3.5 text-electric-soft transition-transform duration-300 group-hover:rotate-90" />
              Have a project in mind?
            </a>
          </motion.div>
        </div>

        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10 xl:mt-16"
        >
          <ProjectVisual
            project={featured}
            priority
            className="aspect-[4/3] w-full lg:col-span-8 lg:aspect-[16/10]"
          />

          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.14em] text-electric-soft">
                01
              </span>
              <span className="h-px w-8 bg-white/15" />
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                Featured project
              </span>
            </div>
            <h3 className="mt-6 text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-none tracking-[-0.06em]">
              {featured.title}
            </h3>
            <p className="mt-2 font-serif-italic text-xl text-paper/60">
              {featured.subtitle}
            </p>
            <p className="mt-6 text-sm leading-[1.8] text-muted">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <ProjectLinks project={featured} />
            </div>
          </div>
        </motion.article>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {rest.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <ProjectVisual
                project={project}
                className="aspect-[4/3] w-full"
              />

              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[8px] tracking-[0.14em] text-white/30">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <span className="h-px w-5 bg-white/15" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-muted">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[1.65rem] font-medium tracking-[-0.045em]">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-muted">
                    {project.subtitle}
                  </p>
                </div>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/40 transition-colors duration-300 group-hover:border-electric/40 group-hover:text-paper">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>

              <p className="mt-4 line-clamp-2 text-[12px] leading-relaxed text-muted/85">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/[0.08] pt-5">
          <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
            Concept projects · Links are placeholders
          </p>
          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
      </div>
    </section>
  );
}
