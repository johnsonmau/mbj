import { identity } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge/60">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} {identity.name}</p>
      </div>
    </footer>
  );
}
