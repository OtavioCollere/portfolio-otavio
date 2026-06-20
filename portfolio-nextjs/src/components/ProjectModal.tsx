"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { CloseIcon, ExternalLinkIcon, LockIcon } from "./icons";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = Boolean(project);

  // Lock background scroll + handle Esc + focus management.
  useEffect(() => {
    if (!open) return;

    lastFocused.current = document.activeElement as HTMLElement;
    document.body.classList.add("no-scroll");

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Move focus into the dialog.
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 30);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
      window.clearTimeout(t);
      lastFocused.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Fechar modal"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-ink-950/80 backdrop-blur-sm"
            tabIndex={-1}
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-desc"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-line bg-ink-900 shadow-2xl sm:rounded-2xl"
          >
            {/* Header */}
            <div className="relative flex-none border-b border-line">
              <div className="relative h-28 overflow-hidden bg-ink-850">
                <div className="absolute inset-0 tech-grid opacity-50" aria-hidden="true" />
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(70% 130% at 85% 0%, rgba(52,211,153,0.22), transparent 60%)",
                  }}
                />
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar"
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg border border-line bg-ink-950/60 text-white/70 backdrop-blur transition-colors hover:bg-ink-800 hover:text-white"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="px-6 pb-5 pt-4 sm:px-8">
                <h2
                  id="project-modal-title"
                  className="font-display text-xl font-bold text-white sm:text-2xl"
                >
                  {project.title}
                </h2>
                <p id="project-modal-desc" className="mt-1.5 text-sm text-white/55">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 space-y-7 overflow-y-auto px-6 py-6 sm:px-8">
              <p className="text-sm leading-relaxed text-white/70">{project.description}</p>

              <ModalBlock label="O desafio">
                <p className="text-sm leading-relaxed text-white/65">{project.challenge}</p>
              </ModalBlock>

              <ModalBlock label="A solução">
                <ul className="space-y-2.5">
                  {project.solution.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-white/65">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </ModalBlock>

              <ModalBlock label="Resultados & aprendizados">
                <ul className="space-y-2.5">
                  {project.results.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-white/65">
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
                      {r}
                    </li>
                  ))}
                </ul>
              </ModalBlock>

              <ModalBlock label="Tecnologias">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </ModalBlock>
            </div>

            {/* Footer */}
            <div className="flex-none border-t border-line px-6 py-4 sm:px-8">
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-soft"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  Ver repositório
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-white/45">
                  <LockIcon className="h-4 w-4" />
                  Repositório privado
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ModalBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{label}</h3>
      {children}
    </div>
  );
}
