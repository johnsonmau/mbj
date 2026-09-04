// ---------------------------------------------------------------------------
// Single source of truth for all site content. No placeholders remain.
// ---------------------------------------------------------------------------

export const identity = {
  name: "Maurice Johnson",
  firstName: "Maurice",
  domain: "mbjohnsonjr.com",
  url: "https://mbjohnsonjr.com",
  role: "Senior Software Engineer",
  tagline:
    "8+ years building scalable Java & Spring Boot systems, currently supporting a health portal used by millions of Veterans. I ship my own products, run a home lab, and make content about all of it.",
  location: "Connecticut, USA",
  email: "mj@mbjohnsonjr.com",
  phone: "203-873-8099",
  headshot: "/headshot.jpg",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/mauricej95/",
  github: "https://github.com/johnsonmau",
  youtube: "https://www.youtube.com/@nullpointerbro",
  tiktok: "https://www.tiktok.com/@nullpointerbro",
  contentSite: "https://nullpointerbro.com",
};

export const about = {
  paragraphs: [
    "I'm a Senior Software Engineer with 8+ years of experience building scalable Java enterprise solutions. Right now I'm at Oddball, building and maintaining backend services for MyHealtheVet, the VA's primary health portal serving millions of Veterans. Before that I spent seven years at The Hartford, working my way up from Junior Developer to Software Engineer on the Enterprise Risk Management team.",
    "Outside of work I ship my own products, including Offrrd, an AI-powered job search assistant live on the App Store. I self-host a full home lab on Ubuntu Server and Raspberry Pis, and create content as nullpointerbro (160K+ likes on TikTok, 174K+ views on my top YouTube tutorial). I finished my M.S. in Computer Information Technology, with a concentration in Computer Science, at CCSU in Fall 2025.",
  ],
  // Skill groups mirror the resume's Technical Skills section.
  skills: {
    groups: [
      {
        name: "Languages",
        items: [
          { name: "Java", icon: "/tech/java.svg" },
          { name: "Python", icon: "/tech/python.svg" },
          { name: "JavaScript", icon: "/tech/javascript.svg" },
          { name: "TypeScript", icon: "/tech/typescript.svg" },
          { name: "SQL" },
        ],
      },
      {
        name: "Backend & Data",
        items: [
          { name: "Spring Boot", icon: "/tech/spring-boot.svg" },
          { name: "Hibernate", icon: "/tech/hibernate.svg" },
          { name: "REST APIs" },
          { name: "Microservice Architecture" },
          { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
          { name: "Oracle", icon: "/tech/oracle.svg" },
          { name: "SQL Server", icon: "/tech/sql-server.svg" },
          { name: "MySQL", icon: "/tech/mysql.svg" },
          { name: "Redis", icon: "/tech/redis.svg" },
        ],
      },
      {
        name: "Infrastructure & CI/CD",
        items: [
          { name: "Docker", icon: "/tech/docker.svg" },
          { name: "AWS ECS", icon: "/tech/aws-ecs.svg" },
          { name: "OpenShift", icon: "/tech/openshift.svg" },
          { name: "Nginx", icon: "/tech/nginx.svg" },
          { name: "Jenkins", icon: "/tech/jenkins.svg" },
          { name: "GitHub Actions", icon: "/tech/github-actions.svg" },
          { name: "Linux (Ubuntu Server)", icon: "/tech/linux.svg" },
        ],
      },
      {
        name: "Observability & Testing",
        items: [
          { name: "Grafana", icon: "/tech/grafana.svg" },
          { name: "Prometheus", icon: "/tech/prometheus.svg" },
          { name: "JUnit", icon: "/tech/junit.svg" },
          { name: "Selenium", icon: "/tech/selenium.svg" },
          { name: "Karate", icon: "/tech/karate.svg" },
        ],
      },
      {
        name: "Frontend",
        items: [
          { name: "React", icon: "/tech/react.svg" },
          { name: "React Native", icon: "/tech/react.svg" },
          { name: "Expo", icon: "/tech/expo.svg" },
          { name: "Next.js", icon: "/tech/nextjs.svg" },
          { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
        ],
      },
    ],
  },
};

export type Skill = { name: string; icon?: string };

export type Project = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  description: string[];
  stack: string[];
  repo?: string;
  repos?: { label: string; url: string }[];
  live?: string;
  appStore?: string;
  privateRepo?: boolean;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "offrrd",
    privateRepo: true,
    icon: "/projects/offrrd.png",
    title: "Offrrd",
    summary:
      "AI-powered job search assistant, live on the web and the iOS App Store. Find matching jobs, generate AI-tailored resumes and cover letters, and track every application.",
    description: [
      "Offrrd doesn't just help you apply, it coaches you. Upload a resume, set preferences, and browse a job catalog served from my own Postgres pipeline. Open a job and AI tailors your resume, writes a cover letter, or builds an interview-prep guide. An AI career coach analyzes your whole pipeline (interview rate, where you stall, what's ghosting you) and tells you exactly what to fix.",
      "The backend is Java 21 / Spring Boot with PostgreSQL (Flyway-managed), Redis for caching and rate limiting, JWT auth with Google/Apple/biometric sign-in, Anthropic Claude for the AI layer, Cloudflare R2 for file storage, and Stripe + RevenueCat for payments. The frontend is React Native + Expo, one codebase shipping to iOS and web.",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "Claude AI", "React Native", "Expo", "Stripe"],
    live: "https://offrrd.com",
    appStore: "https://apps.apple.com/us/app/offrrd/id6782119504",
    featured: true,
  },
  {
    slug: "bugged",
    privateRepo: true,
    icon: "/projects/bugged.png",
    title: "Bugged",
    summary:
      "A debugging gym for developers. One free \"spot the bug\" puzzle every day with a shareable result grid, plus a paid gym of tracks and real broken boxes you fix in a live sandbox.",
    description: [
      "Interview prep trains algorithms; the job is debugging. Bugged trains debugging. The free daily puzzle is a snippet or config with exactly one bug, a timer, three guesses, and a Wordle-style share grid. Pro unlocks the archive, tracks by language and bug class, and sandbox puzzles where the challenge is a real broken box you SSH into and fix. Teams buy seats for onboarding and per-candidate hiring screens that record how someone investigates, not just whether they found it.",
      "The API is Java 21 / Spring Boot 3.5 with PostgreSQL (Flyway-managed), Redis, and JWT auth via Google, GitHub, and email. Answers are verified server-side and never shipped to the client. Sandbox puzzles run in Docker containers started by a Spring Boot runner, with hosts joined over Tailscale, one on the VPS and one on my home lab. The app is React Native + Expo shipping iOS and web from one codebase, served at the edge by a Cloudflare Worker, with Stripe for billing and Remotion generating the share cards and vertical clips for the channel.",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "React Native", "Expo", "Docker", "Cloudflare Workers", "Stripe"],
    live: "https://bugged.dev",
    featured: true,
  },
  {
    slug: "rally",
    privateRepo: true,
    icon: "/projects/rally.png",
    title: "Rally",
    summary:
      "Group fitness challenges powered by Apple HealthKit and Health Connect. Goals are personalized to each member's body metrics and every day caps at 1,000 points, so everyone competes on effort, not fitness level.",
    description: [
      "Rally scores your day out of 1,000 points against goals computed from your own body metrics, so a beginner and a marathoner can share a leaderboard and both have a real shot. Health data is read on-device from HealthKit or Health Connect and uploaded as daily aggregates only; the server owns the scoring, snapshots goals when a challenge starts, and locks days 48 hours after midnight. Around that core: leaderboards, streaks, trophies, a challenge feed, and push notifications, all anchored by a signature four-segment activity ring.",
      "The backend is Java 21 / Spring Boot 3.5 with PostgreSQL (Flyway-managed), Redis caching, and an exhaustively tested scoring engine that shipped before any UI touched it. The mobile app is React Native + Expo with Skia-drawn rings, Reanimated, native HealthKit and Health Connect providers, and a custom Expo module wrapping Apple's HKActivityRingView so your real Apple Watch rings show up in-app.",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "React Native", "Expo", "HealthKit", "Health Connect"],
    featured: true,
  },
  {
    slug: "this-website",
    icon: "/projects/this-website.png",
    title: "mbjohnsonjr",
    summary:
      "The site you're looking at: a modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    description: [
      "A fully static portfolio built on Next.js 16 (App Router) with TypeScript, Tailwind CSS v4, and Framer Motion for scroll animations. Dark theme by default with a persisted light-mode toggle.",
      "All content lives in a single typed data file, so projects, roles, and stats update without touching a component. Project pages are statically generated from that same data.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/johnsonmau/mbj",
    featured: false,
  },
  {
    slug: "nullpointerbro",
    privateRepo: true,
    icon: "/projects/nullpointerbro.png",
    title: "Nullpointerbro",
    summary:
      "The home base for my content brand, rebuilt from scratch as a full-stack app: home lab guides, an affiliate gear shop, and a small community, self-hosted end to end.",
    description: [
      "A complete rewrite of the original nullpointerbro.com. Guides are written in a Tiptap rich-text admin studio, stored as structured JSON, and rendered server-side with code highlighting, per-post view counts, and auto-generated social preview images. The gear shop routes every product link through a click-logging redirect, so affiliate performance is measurable per product, and admin dashboards surface clicks, views, and comments to moderate.",
      "Community members sign in with Google, GitHub, or Discord, or classic username/password with one-time recovery codes, and can leave comments with replies and emoji reactions. The backend is Java 21 / Spring Boot 4 with PostgreSQL and Flyway; the frontend is Next.js 16 with TypeScript and Tailwind CSS. The whole stack, Caddy, backend, frontend, Postgres, and Umami analytics, ships as one Docker Compose deploy on my home lab.",
    ],
    stack: ["Java 21", "Spring Boot 4", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker", "Self-hosted"],
    live: "https://nullpointerbro.com",
    featured: true,
  },
  {
    slug: "monster-tag",
    privateRepo: true,
    icon: "/projects/monster-tag.png",
    title: "Monster Tag",
    summary:
      "Kids' peek-a-scare timing game for ages 6-12: collect monsters, build loadouts, and pull off the perfect scare. React Native + Expo with a server-authoritative Spring Boot backend.",
    description: [
      "Your monsters hide around a sleeping kid's bedroom: the closet, the window, under the bed. Tap them as they pop out to fill the Scare Meter before time runs out, but freeze when the parent's flashlight comes on. Open packs to collect 62 monsters with rarity and stats, build a loadout of tools, and earn stars to unlock 20 bedrooms.",
      "Fully playable offline as a guest; signing in makes the server authoritative. The backend is Java 21 / Spring Boot 3.3 with PostgreSQL, Redis, Flyway, and JWT. The frontend is React Native + Expo with Zustand, React Query, and RevenueCat for in-app purchases.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Java 21", "Spring Boot", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    slug: "brainzzy",
    icon: "/projects/brainzzy.png",
    title: "Brainzzy",
    summary:
      "Cross-platform trivia game with a Flutter front-end, Spring Boot API, and MySQL, self-hosted end to end.",
    description: [
      "A trivia game with a Flutter front-end and a Java Spring Boot back-end, backed by MySQL and self-hosted on my Ubuntu server.",
      "It integrates modern frameworks and database management to deliver an engaging, cross-platform user experience: one codebase for web and mobile on the front, a clean REST API behind it.",
    ],
    stack: ["Flutter", "Java", "Spring Boot", "MySQL"],
    repos: [
      { label: "Front-end", url: "https://github.com/johnsonmau/trivia-ui" },
      { label: "Back-end", url: "https://github.com/johnsonmau/trivia-api" },
    ],
    featured: true,
  },
  {
    slug: "vulnerability-dashboard",
    privateRepo: true,
    icon: "/projects/vulnerability-dashboard.png",
    title: "Vulnerability Assessment Dashboard",
    summary:
      "M.S. capstone: a security analysis platform for CS education, integrating static analysis tools and scanners into one dashboard.",
    description: [
      "A vulnerability assessment platform designed for educational environments in Computer Science and Cybersecurity. It integrates multiple static analysis tools, dependency checkers, and security scanners behind a single dashboard.",
      "Features containerized analysis environments, GitHub-integrated code submission workflows, vulnerability trend analysis, and historical progress tracking, helping students identify recurring security issues and watch themselves improve over time.",
    ],
    stack: ["Java", "Docker", "Static Analysis", "GitHub API"],
    featured: false,
  },
  {
    slug: "eazyweather",
    icon: "/projects/eazyweather.png",
    title: "Eazyweather",
    summary:
      "Full-stack weather application built with Java, Spring Boot, Thymeleaf, Bootstrap, and jQuery.",
    description: [
      "A full-stack weather application that pulls live conditions and forecasts, built with Java and Spring Boot on the back end and Thymeleaf, Bootstrap, and jQuery on the front.",
    ],
    stack: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap", "jQuery"],
    repo: "https://github.com/johnsonmau/weather",
    featured: false,
  },
];

export const homelab = {
  intro:
    "Six nodes, 50+ containerized services, and real production workloads: Offrrd's backend, the Monster Tag API, and nullpointerbro.com all serve the public from this rack. Everything is monitored in Grafana, and it's the subject of most of my content.",
  stats: [
    { value: "6", label: "servers" },
    { value: "52", label: "services running" },
  ],
  hardware: [
    { name: "Public App Server", detail: "Ubuntu Server. Production node where my public-facing apps are hosted, behind Nginx and hardened with CrowdSec and Cloudflare Tunnel" },
    { name: "Home Server", detail: "Ubuntu Server. Internal services: Home Assistant, Grafana, Jenkins, Gitea, and the smart home stack" },
    { name: "Media Server", detail: "Ubuntu Server. Jellyfin media stack with the full *arr suite (Sonarr, Radarr, Prowlarr, Bazarr, Jellyseerr)" },
    { name: "Garage Pi", detail: "Raspberry Pi OS. Relay-wired Raspberry Pi Zero exposing my garage door as a secure API" },
    { name: "Scoreboard Pi", detail: "Raspberry Pi OS. Raspberry Pi 4B driving an RGB LED sports scoreboard via a custom Sportsmatrix UI" },
    { name: "OG Pi", detail: "Raspberry Pi OS. The Pi that started it all: network utilities and monitoring agents" },
  ],
  serviceCategories: [
    { name: "Observability", items: ["Grafana", "Prometheus", "Uptime Kuma", "Beszel", "cAdvisor", "GoAccess", "Metabase"] },
    { name: "Network & Security", items: ["Nginx Proxy Manager", "WireGuard", "AdGuard Home", "CrowdSec", "Cloudflare Tunnel"] },
    { name: "DevOps", items: ["Jenkins", "Gitea", "Nexus", "Portainer", "Code-server"] },
    { name: "Smart Home", items: ["Home Assistant", "Zigbee2MQTT", "Z-Wave JS UI", "MQTT Explorer", "go2rtc"] },
    { name: "Media & Files", items: ["Jellyfin", "Sonarr", "Radarr", "Prowlarr", "Jellyseerr", "Nextcloud"] },
    { name: "AI & Production Apps", items: ["Open WebUI", "Offrrd API + Postgres + Redis", "Monster Tag API", "nullpointerbro.com", "Bugged sandbox runner"] },
  ],
  lessons: [
    "Running real production apps from my own rack. DNS, SSL, reverse proxying, intrusion prevention (CrowdSec), and uptime are my problem, and I like it that way.",
    "A full self-hosted DevOps loop: code in Gitea, builds in Jenkins, artifacts in Nexus, mirroring the enterprise CI/CD stacks I've worked in professionally.",
    "Observability as a habit: Grafana + Prometheus dashboards across every node and container, with Uptime Kuma and Beszel for alerting, the same tooling I use at work.",
  ],
};

export const contentStats = [
  { value: "160K+", label: "TikTok likes" },
  { value: "9.5K", label: "TikTok followers" },
  { value: "174K+", label: "views, top YouTube tutorial" },
  { value: "2K+", label: "YouTube subscribers" },
];

export type Video = {
  title: string;
  platform: "YouTube" | "TikTok";
  url: string;
  blurb: string;
  stat?: string;
};

export const videos: Video[] = [
  {
    title: "Create your FIRST CRUD RESTful API",
    platform: "YouTube",
    url: "https://youtube.com/watch?v=YVl6M5ztOu8",
    blurb: "Java, MySQL, Spring Boot, JPA & Maven. My most-watched tutorial.",
    stat: "174K views",
  },
  {
    title: "Java Tutorial Series",
    platform: "YouTube",
    url: "https://youtube.com/watch?v=5R_OMZyH3Lg",
    blurb: "From Hello World to methods, classes, and objects. A five-part beginner series.",
    stat: "5 episodes",
  },
  {
    title: "Home lab shorts as @nullpointerbro",
    platform: "TikTok",
    url: socials.tiktok,
    blurb: "Home lab builds, self-hosting guides, and shop-my-setup, short-form.",
    stat: "160K+ likes",
  },
];

export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Company = {
  name: string;
  location: string;
  logo?: string; // path under /public, swap for higher-res versions anytime
  roles: Role[];
};

export const resume = {
  pdf: "/resume.pdf",
  experience: [
    {
      name: "Oddball",
      location: "Remote / McLean, VA",
      logo: "/logos/oddball.png",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Aug 2025 - Present",
          bullets: [
            "Design and ship Java 21 / Spring Boot API endpoints and backend services for MyHealtheVet, the VA's primary health portal serving millions of Veterans nationwide.",
            "Own technical design for backend features end to end: author design docs, evaluate integration approaches across upstream VA systems, and align solutions with federal healthcare compliance requirements before implementation.",
            "Led Java runtime and dependency upgrades across backend services, resolving compatibility breaks and closing outstanding security advisories with no production downtime.",
            "Instrumented backend APIs with Grafana metrics and dashboards, surfacing latency and error-rate regressions in production before they reached Veterans.",
            "Expanded unit and integration test suites across critical Veteran-facing workflows, raising coverage and reducing regression escapes into production.",
          ],
        },
      ],
    },
    {
      name: "The Hartford",
      location: "Hartford, CT",
      logo: "/logos/thehartford.png",
      roles: [
        {
          title: "Software Engineer, Enterprise Risk Management",
          period: "Jun 2022 - Aug 2025",
          bullets: [
            "Designed and built Java / Spring Boot backend services powering enterprise risk models, improving system throughput 30%.",
            "Decomposed a monolithic risk platform into independently deployable Java microservices, reducing deployment risk and improving feature delivery speed 25%.",
            "Built Python automation for data refreshes, usage reporting, and stale-job alerting, eliminating 10+ hours/week of manual monitoring and reducing MTTR 40%.",
          ],
        },
        {
          title: "Associate Software Engineer, Enterprise Risk Management",
          period: "Sep 2019 - May 2022",
          bullets: [
            "Built backend microservices in Java / Spring Boot powering risk management workflows for business-critical internal systems.",
            "Shipped in a high-velocity CI/CD workflow across GitHub, Jenkins, uDeploy, and OpenShift; wrote JUnit and Selenium suites that raised deployment confidence and reduced production defects.",
            "Contributed React and JavaScript frontend work for internal risk dashboards used daily by analysts and team leads.",
          ],
        },
        {
          title: "Junior Developer, Enterprise Publishing Management",
          period: "Feb 2018 - Aug 2019",
          bullets: [
            "Delivered Java backend modules for internal publishing tools supporting Personal and Commercial Lines; partnered with QA and Production Support to triage and resolve defects.",
          ],
        },
      ],
    },
    {
      name: "HAI Group",
      location: "Cheshire, CT",
      logo: "/logos/haigroup.png",
      roles: [
        {
          title: "Information Technology Intern",
          period: "May 2016 - Aug 2016",
          bullets: [
            "Managed end-user support requests for the Help Desk, resolving desktop and printer issues to improve user productivity.",
            "Administered users and resources on Windows Server 2012 with Active Directory and Group Policy.",
            "Used Dell KACE for software distribution, inventory, and patching, ensuring consistent updates and minimal downtime.",
            "Configured and installed hardware and software for office relocations, supporting seamless transitions for employees.",
          ],
        },
      ],
    },
  ] satisfies Company[],
  education: [
    {
      credential: "M.S., Computer Information Technology (Computer Science concentration)",
      institution: "Central Connecticut State University",
      period: "Fall 2025",
      logo: "/logos/ccsu.png",
    },
    {
      credential: "B.S., Computer Science",
      institution: "Eastern Connecticut State University",
      period: "Fall 2017",
      logo: "/logos/ecsu.png",
    },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Home Lab", href: "#homelab" },
  { label: "Content", href: "#content" },
  { label: "Contact", href: "#contact" },
];
