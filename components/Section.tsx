import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          {kicker}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
