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
  email: "maurice.johnson9911@gmail.com",
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
  // Primary skills come straight from the resume's Technical Expertise section.
  skills: {
    primary: [
      "Java",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "Spring Boot",
      "Maven",
      "Hibernate",
      "React",
      "React Native",
      "Expo",
      "Flutter",
      "jQuery",
      "Bootstrap",
      "Oracle",
      "SQL Server",
      "MySQL",
      "Docker",
      "OpenShift",
      "AWS ECS",
      "Apache Tomcat",
      "Jenkins",
      "GitHub Actions",
      "Nginx",
      "Grafana",
      "Selenium",
      "Karate",
      "Ubuntu Server",
      "Raspberry Pi OS",
    ],
    // Picked up through my own products and home lab.
    secondary: [
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Flyway",
      "Prometheus",
      "Zustand",
      "TanStack Query",
      "Stripe",
      "RevenueCat",
      "Claude API",
      "Cloudflare R2 + Tunnel",
    ],
  },
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  stack: string[];
  repo?: string;
  repos?: { label: string; url: string }[];
  live?: string;
  appStore?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "offrrd",
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
    slug: "monster-tag",
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
    title: "brainzzy.com",
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
    slug: "nullpointerbro",
    title: "nullpointerbro.com",
    summary:
      "The home base for my content brand: tutorials, guides, home lab projects, tech reviews, and shop-my-setup.",
    description: [
      "The companion site for my TikTok and YouTube presence as nullpointerbro. Tutorials, guides, home lab project write-ups, and tech reviews, plus affiliate links to the gear in my setup.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Self-hosted"],
    live: "https://nullpointerbro.com",
    featured: true,
  },
  {
    slug: "vulnerability-dashboard",
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
    slug: "this-website",
    title: "This Website",
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
    slug: "eazyweather",
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
    { value: "6", label: "servers & Pis" },
    { value: "52", label: "services running" },
    { value: "23ms", label: "avg response time" },
  ],
  hardware: [
    { name: "ubuntu-server-public", detail: "Production node where my public-facing apps are hosted, behind Nginx and hardened with CrowdSec and Cloudflare Tunnel" },
    { name: "ubuntu-server-home", detail: "Internal services: Home Assistant, Grafana, Jenkins, Gitea, and the smart home stack" },
    { name: "ubuntu-media-server", detail: "Jellyfin media stack with the full *arr suite (Sonarr, Radarr, Prowlarr, Bazarr, Jellyseerr)" },
    { name: "garage-pi", detail: "Relay-wired Raspberry Pi Zero exposing my garage door as a secure API" },
    { name: "matrix-pi", detail: "Drives an RGB LED sports scoreboard via a custom Sportsmatrix UI" },
    { name: "og-pi", detail: "The Pi that started it all: network utilities and monitoring agents" },
  ],
  serviceCategories: [
    { name: "Observability", items: ["Grafana", "Prometheus", "Uptime Kuma", "Beszel", "cAdvisor", "GoAccess", "Metabase"] },
    { name: "Network & Security", items: ["Nginx Proxy Manager", "WireGuard", "AdGuard Home", "CrowdSec", "Cloudflare Tunnel"] },
    { name: "DevOps", items: ["Jenkins", "Gitea", "Nexus", "Portainer", "Code-server"] },
    { name: "Smart Home", items: ["Home Assistant", "Zigbee2MQTT", "Z-Wave JS UI", "MQTT Explorer", "go2rtc"] },
    { name: "Media & Files", items: ["Jellyfin", "Sonarr", "Radarr", "Prowlarr", "Jellyseerr", "Nextcloud"] },
    { name: "AI & Production Apps", items: ["Open WebUI", "Offrrd API + Postgres + Redis", "Monster Tag API", "nullpointerbro.com"] },
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
      location: "McLean, VA",
      logo: "/logos/oddball.png",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Aug 2025 - Present",
          bullets: [
            "Design and implement API endpoints and backend services in Java/Spring Boot for MyHealtheVet, the VA's primary health portal serving millions of Veterans.",
            "Drive technical design for backend features: design docs, integration approaches, and alignment with healthcare compliance requirements.",
            "Led the design and rollout of Java and library upgrades across backend services: dependency compatibility, security patches, long-term maintainability.",
            "Designed the Grafana metrics instrumentation strategy for production monitoring; expanded test suites across critical Veteran-facing workflows.",
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
            "Designed backend services in Java/Spring Boot supporting enterprise risk models, improving system throughput by 30%.",
            "Refactored monolithic logic into microservices, cutting deployment risk and improving feature delivery speed by 25%.",
            "Automated data refreshes, usage stats, and alerting with Python, eliminating 10+ hours/week of manual monitoring and helping reduce MTTR by 40%.",
          ],
        },
        {
          title: "Associate Software Engineer, Enterprise Risk Management",
          period: "Sep 2019 - May 2022",
          bullets: [
            "Built backend microservices in Java/Spring Boot powering risk management workflows for critical internal systems.",
            "Contributed frontend work in React, JavaScript, and jQuery for internal dashboards; wrote JUnit and Selenium test suites.",
            "Shipped in a high-velocity DevOps workflow with CI/CD across GitHub, Jenkins, uDeploy, and OpenShift.",
          ],
        },
        {
          title: "Junior Developer, Enterprise Publishing Management",
          period: "Feb 2018 - Aug 2019",
          bullets: [
            "Delivered backend Java modules for internal publishing tools supporting Personal and Commercial Lines.",
            "Maintained xPression xDesign policy document templates, accelerating document generation.",
            "Coordinated with QA, Performance Testing, and Production Support to triage issues and drive down defect resolution time.",
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
    },
    {
      credential: "B.S., Computer Science",
      institution: "Eastern Connecticut State University",
      period: "Fall 2017",
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
