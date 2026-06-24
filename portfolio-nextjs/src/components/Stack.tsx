"use client";

import { useEffect, useRef, useState } from "react";
import { stack } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ICON_SLUGS: Record<string, string> = {
  "Node.js": "nodedotjs",
  NestJS: "nestjs",
  TypeScript: "typescript",
  JavaScript: "javascript",
  Express: "express",
  Fastify: "fastify",
  "React.js": "react",
  "React Native": "react",
  HTML: "html5",
  CSS: "css3",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Redis: "redis",
  "Prisma ORM": "prisma",
  Mongoose: "mongoose",
  "Drizzle ORM": "drizzle",
  Docker: "docker",
  "GitHub Actions": "githubactions",
  "Google Cloud (GCP)": "googlecloud",
  Pulumi: "pulumi",
  "AWS (ECS Fargate, S3/R2, ALB)": "amazonwebservices",
};
const FORCE_WHITE = new Set(["prisma", "express", "fastify", "amazonwebservices"]);

function TechChip({ label }: { label: string }) {
  const slug = ICON_SLUGS[label];
  const [hide, setHide] = useState(false);
  const src = slug ? `https://cdn.simpleicons.org/${slug}${FORCE_WHITE.has(slug) ? "/white" : ""}` : null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/[0.04] px-2.5 py-1.5 text-[13px] text-white/70">
      {src && !hide ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" width={15} height={15} loading="lazy" onError={() => setHide(true)} className="block flex-none" />
      ) : null}
      {label}
    </span>
  );
}

const SPEED = 0.008; // cards por frame a 60fps → ~0.48 cards/s, ida e volta em ~17s

const CARDS_PER_SECOND = SPEED * 60;

const wrap = (value: number, total: number) => ((value % total) + total) % total;

const circularDistance = (from: number, to: number, total: number) => {
  const diff = to - from;
  if (diff > total / 2) return diff - total;
  if (diff < -total / 2) return diff + total;
  return diff;
};

const smoothstep = (value: number) => {
  const x = Math.max(0, Math.min(1, value));
  return x * x * (3 - 2 * x);
};

export default function Stack() {
  // useReducedMotion retorna null no servidor — usar false como valor inicial
  // garante que servidor e cliente rendam o mesmo HTML antes da hidratação.
  // Lazy init lê matchMedia já no primeiro render (componente é client-only via ssr:false)
  // evita o flash do layout 3D em mobile antes do effect corrigir o estado.
  const [reduce, setReduce] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const total = stack.length;

  const offsetRef = useRef<number>(Math.floor(total / 2));
  const targetRef = useRef<number | null>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const lastTickRef = useRef<number | undefined>(undefined);
  const pausedRef = useRef(false);
  const [offset, setOffset] = useState(offsetRef.current);

  useEffect(() => {
    if (isMobile) {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = (time: number) => {
      const lastTick = lastTickRef.current ?? time;
      const delta = Math.min((time - lastTick) / 1000, 0.08);
      lastTickRef.current = time;

      if (targetRef.current !== null) {
        const diff = targetRef.current - offsetRef.current;
        if (Math.abs(diff) < 0.005) {
          offsetRef.current = wrap(targetRef.current, total);
          targetRef.current = null;
        } else {
          offsetRef.current += diff * Math.min(delta * 7, 0.35);
        }
      } else if (!pausedRef.current) {
        offsetRef.current = wrap(offsetRef.current + CARDS_PER_SECOND * delta, total);
      }
      setOffset(offsetRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
      lastTickRef.current = undefined;
    };
  }, [isMobile, total]);

  const go = (i: number) => {
    const current = wrap(offsetRef.current, total);
    const target = wrap(i, total);
    targetRef.current = current + circularDistance(current, target, total);
  };

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    pausedRef.current = false;
  };

  const active = wrap(Math.round(offset), total);

  return (
    <section
      id="stack"
      className="relative scroll-mt-20 overflow-hidden border-t border-line bg-ink-900/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading index="04" kicker="Tecnologias" title="Stack" />
        <Reveal>
          <p className="-mt-8 mb-2 text-[15px] text-white/50">
            Navegue pelos domínios — clique em um card para trazê-lo à frente.
          </p>
        </Reveal>
      </div>

      {/* Palco coverflow (full-bleed) */}
      <Reveal className="relative mt-9 w-full">
        <div
          className="relative h-[430px] max-md:flex max-md:h-auto max-md:flex-col max-md:gap-4 max-md:px-5"
          style={{ perspective: "1700px" }}
        >
          {stack.map((cat, i) => {
            const d = circularDistance(offset, i, total);
            const ad = Math.abs(d);
            const isActive = i === active;
            const focus = smoothstep(1 - Math.min(ad, 1));
            const bgAlpha = 0.82 + focus * 0.14;
            const borderAlpha = 0.08 + focus * 0.27;
            const glowAlpha = focus * 0.45;
            const ambientShadowAlpha = 0.7 - focus * 0.25;
            const opacity = Math.max(0, 1 - ad * 0.42);
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => go(i)}
                onPointerEnter={pause}
                onPointerLeave={resume}
                aria-label={`Mostrar ${cat.category}`}
                aria-current={isActive}
                className="group absolute left-1/2 top-1/2 w-[430px] cursor-pointer text-left max-md:static max-md:left-auto max-md:top-auto max-md:w-full max-md:!opacity-100 max-md:[transform:none!important] max-md:[filter:none!important]"
                style={
                  isMobile
                    ? undefined
                    : reduce
                    ? {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: `translate(-50%,-50%) translateX(${d * 330}px)`,
                        opacity,
                        zIndex: Math.round(1000 - ad * 100),
                      }
                    : {
                        transform: `translate(-50%, -50%) translateX(${d * 330}px) translateZ(${-ad * 200}px) rotateY(${d * -22}deg) scale(${Math.max(0.7, 1 - ad * 0.08)})`,
                        opacity,
                        filter: `brightness(${Math.max(0.5, 1 - ad * 0.17)})`,
                        zIndex: Math.round(1000 - ad * 100),
                        willChange: "transform",
                      }
                }
              >
                <div
                  className="box-border min-h-[300px] rounded-[18px] border p-[30px] backdrop-blur"
                  style={{
                    borderColor: `rgba(52, 211, 153, ${borderAlpha})`,
                    backgroundColor: `rgba(27, 30, 37, ${bgAlpha})`,
                    boxShadow: `0 ${24 + focus * 6}px ${60 + focus * 20}px -34px rgba(0, 0, 0, ${ambientShadowAlpha}), 0 30px 80px -30px rgba(52, 211, 153, ${glowAlpha})`,
                  }}
                >
                  <div className="mb-[22px] flex items-center gap-2.5">
                    <span className="font-mono text-xs tracking-widest text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[22px] font-semibold text-white">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((it) => (
                      <TechChip key={it} label={it} />
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Controles */}
        <div
          className="mt-2 flex items-center justify-center gap-[18px] max-md:hidden"
          onPointerEnter={pause}
          onPointerLeave={resume}
        >
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Anterior"
            className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/15 bg-[rgba(27,30,37,0.6)] text-white/70 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <div className="flex gap-2">
            {stack.map((cat, i) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => go(i)}
                aria-label={cat.category}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === active ? 28 : 8,
                  background: i === active ? "#34d399" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Próximo"
            className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/15 bg-[rgba(27,30,37,0.6)] text-white/70 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </Reveal>
    </section>
  );
}
