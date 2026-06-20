"use client";

import { competencies } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/* Um ícone por grupo de competência (mesma ordem do array `competencies`). */
const ICONS = [
  // Arquitetura & Escalabilidade — camadas
  <svg key="a" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 3 9 5-9 5-9-5 9-5z" />
    <path d="m3 13 9 5 9-5" />
  </svg>,
  // Segurança & Autenticação — escudo
  <svg key="b" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // Qualidade & Entrega — checklist
  <svg key="c" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
];

export default function Competencies() {
  return (
    <section id="competencias" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading index="05" kicker="Como construo" title="Competências" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((group, i) => (
            <Reveal key={group.group} delay={Math.min(i * 0.06, 0.2)}>
              <div className="h-full rounded-2xl border border-line bg-ink-900/60 p-6 transition-colors hover:border-white/15">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-[10px] border border-accent/25 bg-accent/[0.08] text-accent">
                    {ICONS[i]}
                  </span>
                  <h3 className="font-display text-[17px] font-semibold text-white">{group.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1.5 text-[13px] text-white/70 transition-colors hover:border-accent/30 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
