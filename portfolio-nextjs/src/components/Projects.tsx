"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { ArrowRight, GitHubIcon } from "./icons";

/* Visual abstrato/técnico gerado por código (sem imagens externas). */
function ProjectVisual() {
  return (
    <div className="relative h-44 w-full overflow-hidden border-b border-line bg-ink-850">
      <div className="absolute inset-0 tech-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 120% at 80% 0%, rgba(52,211,153,0.18), transparent 60%)",
        }}
      />
      {/* Node graph motif */}
      <svg
        viewBox="0 0 320 176"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="rgba(52,211,153,0.35)" strokeWidth="1.2" fill="none">
          <path d="M40 130 L120 80 L210 110 L280 50" />
          <path d="M120 80 L150 30" />
          <path d="M210 110 L230 150" />
        </g>
        <g fill="#34d399">
          <circle cx="40" cy="130" r="4" />
          <circle cx="120" cy="80" r="5" />
          <circle cx="210" cy="110" r="4.5" />
          <circle cx="280" cy="50" r="4" />
          <circle cx="150" cy="30" r="3" />
          <circle cx="230" cy="150" r="3" />
        </g>
      </svg>
      <span className="absolute bottom-3 left-4 rounded bg-ink-950/70 px-2 py-1 font-mono text-[10px] tracking-widest text-accent/80 backdrop-blur">
        BACKEND · API
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      aria-haspopup="dialog"
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-900/60 text-left transition-shadow hover:border-accent/25 hover:shadow-[0_20px_60px_-24px_rgba(52,211,153,0.35)] focus-visible:border-accent/40"
    >
      <ProjectVisual />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
          <span className="mt-1 grid h-7 w-7 flex-none place-items-center rounded-full border border-line text-white/40 transition-all group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent">
            <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:rotate-0" />
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/55">{project.tagline}</p>

        {/* Detalhe revelado no hover */}
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/45 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-white/50"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 ? (
            <span className="rounded px-2 py-1 font-mono text-[11px] text-white/35">
              +{project.tech.length - 5}
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/35">
          {project.repo ? (
            <>
              <GitHubIcon className="h-3.5 w-3.5" /> Clique para ver detalhes
            </>
          ) : (
            "Clique para ver detalhes"
          )}
        </div>
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const visible = projects.filter((p) => !p.isPlaceholder);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetos" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading index="03" kicker="Seleção" title="Projetos" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 0.06, 0.24)}>
              <ProjectCard project={p} onOpen={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
