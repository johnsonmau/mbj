import { identity } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <Section id="contact" kicker="06 · Contact" title="Get in touch">
      <Reveal>
        <div className="hero-glow rounded-3xl border border-edge bg-surface p-8 sm:p-12">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Questions about something I&apos;ve built, ideas worth building, or
            just want to talk shop about home labs? My inbox is open.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${identity.email}`}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-85"
            >
              {identity.email}
            </a>
            <SocialLinks />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
