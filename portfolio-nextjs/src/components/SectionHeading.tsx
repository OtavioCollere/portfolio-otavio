import Reveal from "./Reveal";

type Props = {
  index: string;
  title: string;
  kicker?: string;
};

export default function SectionHeading({ index, title, kicker }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs tracking-widest text-accent">{index}</span>
        <span className="h-px w-12 bg-gradient-to-r from-accent/60 to-transparent" />
        {kicker ? (
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            {kicker}
          </span>
        ) : null}
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </Reveal>
  );
}
