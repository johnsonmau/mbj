import Link from "next/link";
import { projects } from "@/content/site";
import { AppleIcon, ExternalIcon, GitHubIcon } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" kicker="03 · Projects" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <article className="glow-card group flex h-full flex-col rounded-2xl border border-edge bg-surface p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.icon}
                    alt={`${project.title} icon`}
                    className="h-10 w-10 shrink-0 rounded-xl border border-edge object-cover"
                  />
                  <h3 className="text-lg font-semibold">
                    <Link href={`/projects/${project.slug}`} className="transition group-hover:text-accent">
                      {project.title}
                    </Link>
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  {project.privateRepo && (
                    <span
                      title="Source code is in a private repository"
                      className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide"
                    >
                      <GitHubIcon className="h-4 w-4" /> Private
                    </span>
                  )}
                  {(project.repo ?? project.repos?.[0]?.url) && (
                    <a
                      href={project.repo ?? project.repos![0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Repository"
                      className="transition hover:text-foreground"
                    >
                      <GitHubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer" aria-label="App Store" className="transition hover:text-foreground">
                      <AppleIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="transition hover:text-foreground">
                      <ExternalIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 text-sm font-medium text-accent transition hover:opacity-80"
              >
                View details →
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
