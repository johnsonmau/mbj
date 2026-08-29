import { homelab } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function HomeLab() {
  return (
    <Section id="homelab" kicker="04 · Home Lab" title="Infrastructure I run myself">
      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{homelab.intro}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {homelab.stats.map((stat) => (
            <div key={stat.label} className="glow-card rounded-2xl border border-edge bg-surface p-5 text-center">
              <p className="text-gradient text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homelab.hardware.map((node, i) => (
          <Reveal key={node.name} delay={i * 0.06}>
            <div className="glow-card h-full rounded-2xl border border-edge bg-surface p-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <h3 className="font-mono text-sm font-semibold">{node.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{node.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-6 rounded-2xl border border-edge bg-surface p-6">
          <h3 className="font-mono text-sm uppercase tracking-widest text-accent">
            Running in the lab
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homelab.serviceCategories.map((category) => (
              <div key={category.name}>
                <h4 className="text-sm font-semibold">{category.name}</h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-6 rounded-2xl border border-edge bg-surface p-6">
          <h3 className="font-mono text-sm uppercase tracking-widest text-accent">
            What it&apos;s taught me
          </h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {homelab.lessons.map((lesson, i) => (
              <li key={i} className="rounded-xl bg-surface-2 p-4 text-sm leading-relaxed text-muted">
                {lesson}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
