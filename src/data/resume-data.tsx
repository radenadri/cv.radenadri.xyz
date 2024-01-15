import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adriana Eka Prayudha",
  initials: "AE",
  location: "Bandung, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/sV57Te2gtvwFDWsx9",
  about:
    "Enthusiastic developer that specialized in web development with a passion for creating engaging digital experiences",
  summary:
    "Web developer with 3 years of experience. I love creating beautiful websites and web applications. Currently working with PHP and Laravel using TALL (Tailwind, Alpine, Livewire, Laravel) stack and also VILT (Vue, Inertia, Laravel, Tailwind) stack. But it is not limited only with Laravel, i also learning Nuxt and Flutter currently to getting my feets wet with awesome technology.",
  avatarUrl: "https://lh3.googleusercontent.com/d/1QijJiJCKnASrp6_wAex_HeJeVkfBDDT8",
  personalWebsiteUrl: "https://radenadri.xyz",
  contact: {
    email: "radenadriep@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/radenadri",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/radenadri/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/radenadri",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Politeknik Piksi Ganesha",
      degree: "Bachelor's Degree in Information Technology",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Pentacode",
      link: "https://pentacode.id",
      badges: ["Onsite"],
      title: "Web Developer",
      // logo: ParabolLogo,
      start: "2019",
      end: "now",
      description:
        "Implemented new features, worked on improving the website performance, and maintained the website. Technologies: Laravel, Vue, Flutter, and Tailwind.",
    },
  ],
  skills: [
    "Bootstrap",
    "Tailwind",
    "PHP",
    "Laravel",
    "Alpine.js",
    "Livewire",
    "JavaScript",
    "TypeScript",
    "Vue/Nuxt",
    "Flutter",
    "MariaDB",
    "Supabase",
  ],
  projects: [
    {
      title: "Friends Entertainment",
      techStack: [
        "PHP",
        "Laravel",
        "Bootstrap",
      ],
      description: "A company profile website for Friends Entertainment.",
      // logo: ConsultlyLogo,
      link: {
        label: "friends.co.id",
        href: "https://friends.co.id",
      },
    },
    {
      title: "MMHC Care",
      techStack: [
        "Side Project",
        "PHP",
        "Wordpress",
        "Elementor",
      ],
      description: "A company profile website for wellness clinic named MMHC Care.",
      // logo: ConsultlyLogo,
      link: {
        label: "mmhc-care.id",
        href: "https://mmhc-care.id",
      },
    },
    {
      title: "Wadzpay API Sandboxing",
      techStack: [
        "PHP",
        "Laravel",
        "Vue",
      ],
      description: "This site purpose is to be the documentation of how to integrate with WadzPay wallet API",
      // logo: ConsultlyLogo,
      link: {
        label: "integration.wadzpay.id",
        href: "https://integration.wadzpay.com",
      },
    },
    {
      title: "Wadzpay API Sandboxing",
      techStack: [
        "PHP",
        "Laravel",
        "Vue",
      ],
      description: "This site purpose is to be the documentation of how to integrate with WadzPay wallet API",
      // logo: ConsultlyLogo,
      link: {
        label: "integration.wadzpay.id",
        href: "https://integration.wadzpay.com",
      },
    },
    {
      title: "Dishub Live CCTV",
      techStack: [
        "PHP",
        "Laravel",
        "Vue",
      ],
      description: "DISHUB CCTV Monitoring is an online platform that provides monitoring services for CCTV cameras in the several sections of provincial roads in West Java, Indonesia.",
      // logo: ConsultlyLogo,
      link: {
        label: "cctv.jabarprov.go.id",
        href: "https://cctv.jabarprov.go.id",
      },
    },
    {
      title: "Webreg BPOM",
      techStack: [
        "PHP",
        "Laravel",
      ],
      description: "Webreg BPOM is a web application that provides an information for registered commodity in Indonesia including foods, medicine and others.",
      // logo: ConsultlyLogo,
      link: {
        label: "cekbpom.pom.go.id",
        href: "https://cekbpom.pom.go.id/new",
      },
    },
    {
      title: "Jelajah Family Club",
      techStack: [
        "Dart",
        "Flutter",
      ],
      description: "The mobile apps for Jelajah Family Club, the apps can be downloaded in store. User can register to the apps and attending the class that currently available",
      // logo: ConsultlyLogo,
      link: {
        label: "Play Store / App Store",
        href: "https://play.google.com/store/apps/details?id=id.pentacode.jelajah_family_club",
      },
    },
  ],
} as const;
