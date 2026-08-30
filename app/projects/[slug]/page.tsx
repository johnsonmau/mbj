import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { AppleIcon, ExternalIcon, GitHubIcon } from "@/components/icons";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project
    ? { title: project.title, description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-32">
        <Link href="/#projects" className="font-mono text-sm text-muted transition hover:text-foreground">
          ← Back to projects
        </Link>

        <div className="mt-6 flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.icon}
            alt={`${project.title} icon`}
            className="h-14 w-14 shrink-0 rounded-2xl border border-edge object-cover"
          />
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        </div>
        <p className="mt-4 text-lg text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-edge bg-surface px-3 py-1 font-mono text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.privateRepo && (
            <span
              title="Source code is in a private repository"
              className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium text-muted"
            >
              <GitHubIcon className="h-4 w-4" /> Private repo
            </span>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium"
            >
              <GitHubIcon className="h-4 w-4" /> Source code
            </a>
          )}
          {project.repos?.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium"
            >
              <GitHubIcon className="h-4 w-4" /> {repo.label} code
            </a>
          ))}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium"
            >
              <AppleIcon className="h-4 w-4" /> App Store
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium"
            >
              <ExternalIcon className="h-4 w-4" /> Live site
            </a>
          )}
        </div>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
