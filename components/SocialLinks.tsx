import { identity, socials } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon, TikTokIcon, YouTubeIcon } from "./icons";

const links = [
  { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
  { label: "YouTube", href: socials.youtube, Icon: YouTubeIcon },
  { label: "TikTok", href: socials.tiktok, Icon: TikTokIcon },
  { label: "Email", href: `mailto:${identity.email}`, Icon: MailIcon },
];

export default function SocialLinks({ size = "md" }: { size?: "md" | "lg" }) {
  const icon = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const pad = size === "lg" ? "p-3" : "p-2.5";
  return (
    <div className="flex items-center gap-3">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`glow-card rounded-full border border-edge bg-surface ${pad} text-muted hover:text-foreground`}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}
