import { contentStats, socials, videos } from "@/content/site";
import { ExternalIcon, TikTokIcon, YouTubeIcon } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function ContentSection() {
  return (
    <Section id="content" kicker="05 · Content" title="I also make videos">
      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          I create tutorials, home lab builds, and self-hosting content as{" "}
          <a
            href={socials.contentSite}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent transition hover:opacity-80"
          >
            nullpointerbro
          </a>{", teaching the same stack I use professionally."}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {contentStats.map((stat) => (
            <div key={stat.label} className="glow-card rounded-2xl border border-edge bg-surface p-5 text-center">
              <p className="text-gradient text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium"
          >
            <YouTubeIcon className="h-4 w-4 text-red-500" /> @nullpointerbro on YouTube
          </a>
          <a
            href={socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium"
          >
            <TikTokIcon className="h-4 w-4" /> @nullpointerbro on TikTok
          </a>
          <a
            href={socials.contentSite}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-sm font-medium"
          >
            <ExternalIcon className="h-4 w-4" /> nullpointerbro.com
          </a>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card group block h-full rounded-2xl border border-edge bg-surface p-6"
            >
              <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent-2/15">
                {video.platform === "YouTube" ? (
                  <YouTubeIcon className="h-10 w-10 text-muted transition group-hover:text-red-500" />
                ) : (
                  <TikTokIcon className="h-10 w-10 text-muted transition group-hover:text-foreground" />
                )}
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-semibold transition group-hover:text-accent">{video.title}</h3>
                <ExternalIcon className="mt-1 h-4 w-4 shrink-0 text-muted" />
              </div>
              <p className="mt-2 text-sm text-muted">{video.blurb}</p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                  {video.platform}
                </span>
                {video.stat && (
                  <span className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-accent">
                    {video.stat}
                  </span>
                )}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
