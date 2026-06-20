"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const coreChips = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "React",
  "APIs REST",
  "Docker",
  "CI/CD",
  "AWS",
  "PostgreSQL",
  "BullMQ",
  "Clean Architecture",
];

function Portrait() {
  const [error, setError] = useState(false);
  const showImg = profile.photo && !error;

  return (
    <Reveal className="relative mx-auto w-full max-w-[320px]">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)]">
        <div className="tech-grid absolute inset-0 z-0 opacity-40" aria-hidden="true" />
        <div className="relative z-10 h-[500px] w-full">
          {showImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              onError={() => setError(true)}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="h-12 w-12 text-white/25"
                aria-hidden="true"
              >
                <circle cx="12" cy="8.5" r="3.5" />
                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeLinecap="round" />
              </svg>
              <span className="px-6 font-mono text-xs leading-relaxed text-white/35">
                Adicione sua foto em
                <br />
                <span className="text-white/55">public/profile.jpg</span>
              </span>
            </div>
          )}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24"
          aria-hidden="true"
          style={{ background: "linear-gradient(to top, rgba(8,9,11,0.85), transparent)" }}
        />
        <div className="absolute bottom-3.5 left-4 z-30">
          <div className="font-display text-[15px] font-semibold text-white">Otavio Collere</div>
          <div className="font-mono text-[11px] text-accent">// Full Stack Pleno</div>
        </div>
      </div>
      {/* Detalhes técnicos nos cantos */}
      <span className="absolute -right-[7px] -top-[7px] z-40 h-3.5 w-3.5 border-r-2 border-t-2 border-accent" aria-hidden="true" />
      <span className="absolute -bottom-[7px] -left-[7px] z-40 h-3.5 w-3.5 border-b-2 border-l-2 border-accent/50" aria-hidden="true" />
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading index="01" kicker="Quem sou" title="Sobre mim" />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[300px_1fr] lg:gap-14">
          <Portrait />

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">{profile.about}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {coreChips.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* O que entrego — largura total, duas colunas */}
        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl border border-line bg-ink-900/50 p-7 md:px-8">
            <h3 className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              O que entrego na prática
            </h3>
            <ul className="grid grid-cols-1 gap-x-10 gap-y-3.5 md:grid-cols-2">
              {profile.delivers.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-white/65">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 flex-none text-accent"
                    aria-hidden="true"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
