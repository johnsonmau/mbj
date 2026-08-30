import { about } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" kicker="01 · About" title="Who I am">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.1}>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h3 className="font-mono text-sm uppercase tracking-widest text-muted">
            Tech I work with
          </h3>
          {about.skills.groups.map((group) => (
            <div key={group.name} className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-muted/80">
                {group.name}
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-surface px-3 py-1.5 font-mono text-xs text-foreground/80 transition hover:border-accent hover:text-foreground"
                  >
                    {skill.icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={skill.icon} alt="" className="h-3.5 w-3.5" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
