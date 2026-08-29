import { resume } from "@/content/site";
import { DownloadIcon } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function ResumeSection() {
  return (
    <Section id="resume" kicker="02 · Resume" title="Where I've worked">
      <Reveal>
        <a
          href={resume.pdf}
          download
          className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-5 py-2.5 text-sm font-semibold"
        >
          <DownloadIcon className="h-4 w-4 text-accent" /> Download resume (PDF)
        </a>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-8">
          {resume.experience.map((company, i) => (
            <Reveal key={company.name} delay={i * 0.08}>
              <article className="glow-card rounded-2xl border border-edge bg-surface p-6 sm:p-8">
                <header className="flex items-center gap-4">
                  {/* Light tile so dark logos stay visible in dark mode */}
                  {company.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="h-12 w-12 shrink-0 rounded-xl border border-edge bg-white object-contain p-1.5"
                    />
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-edge bg-surface-2 text-lg font-bold text-accent">
                      {company.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                    <p className="text-sm text-muted">{company.location}</p>
                  </div>
                </header>

                <ol className="mt-6 space-y-8 border-l border-edge pl-6">
                  {company.roles.map((role) => (
                    <li key={role.title} className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                      <p className="font-mono text-xs text-muted">{role.period}</p>
                      <h4 className="mt-1 font-semibold">{role.title}</h4>
                      <ul className="mt-3 list-disc space-y-2 pl-4 marker:text-accent">
                        {role.bullets.map((bullet, j) => (
                          <li key={j} className="text-sm leading-relaxed text-muted">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal delay={0.1}>
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted">
              Education
            </h3>
          </Reveal>
          <div className="mt-6 space-y-4">
            {resume.education.map((entry, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <div className="glow-card rounded-2xl border border-edge bg-surface p-5">
                  <p className="font-mono text-xs text-muted">{entry.period}</p>
                  <p className="mt-1 font-semibold">{entry.credential}</p>
                  <p className="text-sm text-muted">{entry.institution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
