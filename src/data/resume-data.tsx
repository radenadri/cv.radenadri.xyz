import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adriana Eka Prayudha",
  initials: "AE",
  location: "Bandung, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/sV57Te2gtvwFDWsx9",
  about:
    "Enthusiastic mobile developer with a passion for creating engaging digital experiences",
  summary:
    "Love to creating a usable mobile applications. Currently working as a Flutter Developer.",
  avatarUrl:
    "https://lh3.googleusercontent.com/d/1QijJiJCKnASrp6_wAex_HeJeVkfBDDT8",
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
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/radenadri",
        icon: LinkedInIcon,
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
      badges: ["Hybrid"],
      title: "Mobile Developer",
      // logo: ParabolLogo,
      start: "2022",
      end: "now",
      description:
        "Maintaining existing apps and creating new features, also creating new apps. Technologies: Dart, Flutter, Firebase.",
    },
  ],
  skills: [
    "Laravel",
    "Vue.js",
    "Node.js",
    "Dart",
    "Flutter",
    "Firebase",
    "SQLite",
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
    {
      title: "Sound of Justice Radio",
      techStack: ["Dart", "Flutter"],
      description:
        "Sound of Justice is an apps that used by Kemenkumham for their official radio station program. User can listen the broadcast through this app.",
      // logo: ConsultlyLogo,
      link: {
        label: "Play Store / App Store",
        href: "https://play.google.com/store/apps/details?id=id.pentacode.sound_of_justice",
      },
    },
  ],
} as const;
