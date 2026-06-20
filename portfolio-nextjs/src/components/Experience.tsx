"use client";

import { experiences } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative scroll-mt-20 border-t border-line bg-ink-900/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading index="02" kicker="Trajetória" title="Experiência" />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-line to-transparent md:left-[9px]"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-12">
            {experiences.map((exp, i) => (
              <li key={`${exp.company}-${exp.period}`} className="relative pl-9 md:pl-12">
                {/* Node */}
                <span
                  className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 ${
                    exp.muted ? "border-white/20 bg-ink-850" : "border-accent bg-ink-950"
                  } md:h-[19px] md:w-[19px]`}
                  aria-hidden="true"
                >
                  {!exp.muted ? <span className="h-1.5 w-1.5 rounded-full bg-accent" /> : null}
                </span>

                <Reveal delay={Math.min(i * 0.05, 0.25)}>
                  <div
                    className={`group rounded-2xl border border-line bg-ink-900/60 p-5 transition-colors hover:border-white/15 md:p-7 ${
                      exp.muted ? "opacity-80" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-accent">{exp.company}</p>
                      </div>
                      <div className="flex flex-none flex-col text-left md:items-end md:text-right">
                        <span className="font-mono text-xs text-white/55">{exp.period}</span>
                        <span className="text-xs text-white/35">
                          {exp.type} · {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/55">{exp.summary}</p>

                    {exp.highlights.length > 0 ? (
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2.5 text-sm leading-relaxed text-white/70"
                          >
                            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/70" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded border border-line bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-white/50"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
