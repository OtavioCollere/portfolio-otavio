import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-ink-800 font-mono text-xs font-semibold text-accent">
            OC
          </span>
          <span className="text-sm text-white/45">
            © {year} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md text-white/45 transition-colors hover:bg-white/5 hover:text-white"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md text-white/45 transition-colors hover:bg-white/5 hover:text-white"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
