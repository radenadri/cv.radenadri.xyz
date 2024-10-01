import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adriana Eka Prayudha",
  initials: "AEP",
  location: "Bandung, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/sV57Te2gtvwFDWsx9",
  about:
    "Enthusiastic developer with a passion for creating engaging digital experiences",
  summary:
    "Love to creating a usable web and mobile applications. Currently working as a Full Stack Developer.",
  avatarUrl:
    "https://res.cloudinary.com/dvoj90vcy/image/upload/v1727768323/closeup_ogukcv.jpg",
  personalWebsiteUrl: "https://radenadri.xyz",
  contact: {
    email: "radenadriep@gmail.com",
    tel: "-",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/radenadri",
        icon: GitHubIcon,
      },
    ],
  },
  education: [],
  work: [
    {
      company: "Pentacode",
      link: "https://pentacode.id",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      // logo: ParabolLogo,
      start: "2022",
      end: "now",
      description:
        "Maintaining existing and also creating new web and mobile apps and creating new features. Technologies: PHP, Laravel, Node.js, Dart, Flutter.",
    },
  ],
  skills: [
    "Dart",
    "Flutter",
    "Android",
    "Javascript",
    "Node.js",
    "PHP",
    "Laravel",
    "Wordpress",
    "SQLite",
    "Firebase",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "Friends Entertainment",
      techStack: ["PHP", "Laravel", "Bootstrap"],
      description: "A company profile website for Friends Entertainment.",
      // logo: ConsultlyLogo,
      link: {
        label: "friends.co.id",
        href: "https://friends.co.id",
      },
    },
    {
      title: "MMHC Care",
      techStack: ["Side Project", "PHP", "Wordpress", "Elementor"],
      description:
        "A company profile website for wellness clinic named MMHC Care.",
      // logo: ConsultlyLogo,
      link: {
        label: "mmhc-care.id",
        href: "https://mmhc-care.id",
      },
    },
    {
      title: "Jelajah Family Club",
      techStack: ["Dart", "Flutter"],
      description:
        "The mobile apps for Jelajah Family Club, the apps can be downloaded in store. User can register to the apps and attending the class that currently available",
      // logo: ConsultlyLogo,
      link: {
        label: "Play Store / App Store",
        href: "https://play.google.com/store/apps/details?id=id.pentacode.jelajah_family_club",
      },
    },
    {
      title: "Passport",
      techStack: ["Dart", "Flutter"],
      description: "Mobile HR apps. The solution for modern HR.",
      // logo: ConsultlyLogo,
      link: {
        label: "Play Store / App Store",
        href: "https://play.google.com/store/apps/details?id=id.pentacode.portal",
      },
    },
  ],
} as const;
