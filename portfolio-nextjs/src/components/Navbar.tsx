"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, navItems } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const initials = "OC";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Início"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-ink-800 font-mono text-[13px] font-semibold text-accent">
            {initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white/90 sm:block">
            Otavio Collere
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isContact = item.href === "#contato";
            return (
              <li key={item.href}>
                <a
                  href={isContact ? profile.links.whatsapp : item.href}
                  target={isContact ? "_blank" : undefined}
                  rel={isContact ? "noopener noreferrer" : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    active === item.href
                      ? "text-accent"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md text-white/55 transition-colors hover:bg-white/5 hover:text-white"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md text-white/55 transition-colors hover:bg-white/5 hover:text-white"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-md border border-accent/30 bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20 sm:block"
          >
            Contato
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md text-white/80 transition-colors hover:bg-white/5 md:hidden"
          >
            <div className="flex flex-col items-end gap-[5px]">
              <span
                className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => {
                const isContact = item.href === "#contato";
                return (
                  <li key={item.href}>
                    <a
                      href={isContact ? profile.links.whatsapp : item.href}
                      target={isContact ? "_blank" : undefined}
                      rel={isContact ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
