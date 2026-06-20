"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import {
  ArrowRight,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./icons";

const codeLines: { t: string; c?: string }[] = [
  { t: "const engineer = {" },
  { t: "  role: 'Full Stack Pleno'," },
  { t: "  core: ['Node.js', 'NestJS', 'TS']," },
  { t: "  focus: ['APIs', 'integrações']," },
  { t: "  arch: ['Clean Arch', 'DDD', 'SOLID']," },
  { t: "  ship: () => scalableProducts()," },
  { t: "}" },
];

export default function Hero() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(820px 520px at 14% 4%, rgba(52,211,153,0.16), transparent 58%), radial-gradient(680px 480px at 96% 14%, rgba(45,212,191,0.12), transparent 55%), radial-gradient(900px 600px at 70% 110%, rgba(99,102,241,0.10), transparent 60%), linear-gradient(180deg, rgba(28,32,40,0.6), transparent 40%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(52,211,153,0.05) 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:grid-cols-[3fr_2fr] lg:gap-8">
        {/* Left: text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wide text-white/60">
              Disponível · Curitiba · Híbrido / Remoto
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-white/40">{profile.name.split(" ").slice(2).join(" ")}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            <span className="font-medium text-accent">{profile.role}</span> — {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-soft hover:shadow-[0_8px_30px_-8px_rgba(52,211,153,0.5)]"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <DownloadIcon className="h-4 w-4" />
              Baixar CV
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-lg border border-line text-white/60 transition-colors hover:border-white/20 hover:text-white"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-lg border border-line text-white/60 transition-colors hover:border-white/20 hover:text-white"
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-xl font-bold text-white md:text-2xl">{s.value}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-white/45">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right: technical detail (code card) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-w-0 overflow-hidden lg:block"
        >
          <div
            className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
            aria-hidden="true"
            style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(52,211,153,0.14), transparent 70%)" }}
          />
          <div className="relative overflow-hidden rounded-xl border border-line bg-ink-900/80 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-white/35">engineer.ts</span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed">
              <code>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.09 }}
                    className="whitespace-pre text-white/80"
                  >
                    <span className="mr-4 select-none text-white/20">{String(i + 1).padStart(2, "0")}</span>
                    <CodeLine text={line.t} />
                  </motion.div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type Token = { text: string; color?: string };

function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  let rest = line;
  while (rest.length > 0) {
    // string literal 'value'
    const str = rest.match(/^('([^']*)')/);
    if (str) { tokens.push({ text: str[1], color: "#6ee7b7" }); rest = rest.slice(str[1].length); continue; }
    // keyword const
    const kw = rest.match(/^(const)\b/);
    if (kw) { tokens.push({ text: kw[1], color: "#7aa2f7" }); rest = rest.slice(kw[1].length); continue; }
    // arrow =>
    const arrow = rest.match(/^(=>)/);
    if (arrow) { tokens.push({ text: "=>", color: "#7aa2f7" }); rest = rest.slice(2); continue; }
    // property key followed by colon
    const prop = rest.match(/^(\w+)(:)/);
    if (prop) { tokens.push({ text: prop[1], color: "#e0af68" }, { text: ":" }); rest = rest.slice(prop[0].length); continue; }
    tokens.push({ text: rest[0] }); rest = rest.slice(1);
  }
  return tokens;
}

function CodeLine({ text }: { text: string }) {
  return (
    <>
      {tokenize(text).map((tok, i) =>
        tok.color
          ? <span key={i} style={{ color: tok.color }}>{tok.text}</span>
          : <span key={i}>{tok.text}</span>
      )}
    </>
  );
}
