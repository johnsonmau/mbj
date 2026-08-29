"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { identity } from "@/content/site";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative flex min-h-screen items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pb-12 pt-28 md:gap-12 md:pb-0 md:pt-16 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{identity.name}</span>.
          </h1>
          <p className="mt-3 text-2xl font-semibold text-muted sm:text-3xl">
            {identity.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {identity.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#projects"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-85"
            >
              View my work
            </Link>
            <Link
              href="/#resume"
              className="rounded-full border border-edge bg-surface px-6 py-3 text-sm font-semibold transition hover:border-accent"
            >
              My experience
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-edge bg-surface px-6 py-3 text-sm font-semibold transition hover:border-accent"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-10">
            <SocialLinks size="lg" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="order-1 mx-auto md:order-2 md:mx-0 md:justify-self-start"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-accent-2 opacity-60 blur-lg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={identity.headshot}
              alt={`Photo of ${identity.name}`}
              className="relative h-36 w-36 rounded-full border border-edge object-cover sm:h-80 sm:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
