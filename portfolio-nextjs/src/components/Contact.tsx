"use client";

import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import { ArrowRight, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Contact() {
  const { links } = profile;

  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden py-24 md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(700px 360px at 50% 0%, rgba(52,211,153,0.10), transparent 65%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-content px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            06 · Vamos conversar
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Vamos construir algo escalável juntos.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Aberto a oportunidades full stack e back-end. Me chame no LinkedIn ou
            veja meu código no GitHub.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-soft hover:shadow-[0_8px_30px_-8px_rgba(52,211,153,0.5)]"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
              LinkedIn
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
              GitHub
            </a>
            {links.email ? (
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <MailIcon className="h-[18px] w-[18px]" />
                E-mail
              </a>
            ) : null}
          </div>

          <p className="mt-8 font-mono text-xs text-white/35">
            📍 {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
