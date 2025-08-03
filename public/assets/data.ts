import { IconType } from "react-icons";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

export type FooterLink = {
  title: string;
  items: {
    name: string;
    link?: string;
    icon?: IconType;
  }[];
};

export type LandingPage = {
  name: string;
  link: string;
};

export const footerLinks: FooterLink[] = [
  {
    title: "Quick Links",
    items: [
      {
        name: "Job Packages",
      },
      {
        name: "Post New Job ",
      },
      {
        name: "Jobs Style Grid",
      },
      {
        name: "Employer Listing",
      },
      {
        name: "Employers Grid",
      },
    ],
  },
  {
    title: "Social Media",
    items: [
      {
        name: "Facebook",
        icon: LuFacebook,
      },
      {
        name: "Instagram",
        icon: LuInstagram,
      },
      {
        name: "Twitter",
        icon: LuTwitter,
      },
      {
        name: "Linkedin",
        icon: LuLinkedin,
      },
    ],
  },
  {
    title: "Legal & Press",
    items: [
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Conditions",
      },
      {
        name: "Presskit",
      },
    ],
  },
];

export const landingPages: LandingPage[] = [
  {
    name: "Agency",
    link: "",
  },
  {
    name: "Agency Two",
    link: "",
  },
  {
    name: "Charity",
    link: "",
  },
  {
    name: "Company",
    link: "",
  },
  {
    name: "Creative",
    link: "",
  },
  {
    name: "Ebook",
    link: "",
  },
  {
    name: "Finance",
    link: "",
  },
  {
    name: "Hosting",
    link: "",
  },
  {
    name: "Marketing",
    link: "",
  },
  {
    name: "Marketing 2",
    link: "",
  },
  {
    name: "Marketing 3",
    link: "",
  },
  {
    name: "Photography",
    link: "",
  },
  {
    name: "Portfolio",
    link: "",
  },
  {
    name: "Portfolio 2",
    link: "",
  },
  {
    name: "Startup",
    link: "",
  },
  {
    name: "Web Designer",
    link: "",
  },
];

export const jobDemos: LandingPage[] = [
  {
    name: "Home - Default",
    link: "",
  },
  {
    name: "Home - Minimal",
    link: "",
  },
  {
    name: "Home - Developer Focused",
    link: "",
  },
  {
    name: "Home - Employer Focused",
    link: "",
  },
  {
    name: "Home - Agency",
    link: "",
  },
  {
    name: "Job Listing - Grid View",
    link: "",
  },
  {
    name: "Job Listing - List View",
    link: "",
  },
  {
    name: "Job Listing - Map View",
    link: "",
  },
  {
    name: "Job Details - Basic",
    link: "",
  },
  {
    name: "Job Details - With Company Info",
    link: "",
  },
  {
    name: "Job Details - With Apply Sidebar",
    link: "",
  },
  {
    name: "Post a Job",
    link: "",
  },
  {
    name: "Post a Job - Multi-Step",
    link: "",
  },
  {
    name: "Candidate Listing - Grid View",
    link: "",
  },
  {
    name: "Candidate Listing - List View",
    link: "",
  },
  {
    name: "Candidate Profile - Public",
    link: "",
  },
  {
    name: "Candidate Dashboard",
    link: "",
  },
  {
    name: "Employer Dashboard",
    link: "",
  },
];

export const findJobsDemos: LandingPage[] = [
  {
    name: "Grid View",
    link: "",
  },
  {
    name: "List View",
    link: "",
  },
  {
    name: "Map View",
    link: "",
  },
  {
    name: "Sidebar Filters",
    link: "",
  },
  {
    name: "Top Filters",
    link: "",
  },
  {
    name: "Category Based",
    link: "",
  },
  {
    name: "Featured Only",
    link: "",
  },
  {
    name: "Remote Jobs",
    link: "",
  },
  {
    name: "Freelance",
    link: "",
  },
  {
    name: "Saved Jobs",
    link: "",
  },
];

export const employersDemos: LandingPage[] = [
  {
    name: "Dashboard",
    link: "",
  },
  {
    name: "Manage Jobs",
    link: "",
  },
  {
    name: "Post a Job",
    link: "",
  },
  {
    name: "Post a Job - Multi-Step",
    link: "",
  },
  {
    name: "Manage Candidates",
    link: "",
  },
  {
    name: "Candidate Shortlist",
    link: "",
  },
  {
    name: "Company Profile - Public",
    link: "",
  },
  {
    name: "Company Profile - Edit",
    link: "",
  },
  {
    name: "Billing & Invoices",
    link: "",
  },
  {
    name: "Settings",
    link: "",
  },
];

export const candidatesDemos: LandingPage[] = [
  {
    name: "Dashboard",
    link: "",
  },
  {
    name: "My Applications",
    link: "",
  },
  {
    name: "Saved Jobs",
    link: "",
  },
  {
    name: "Job Alerts",
    link: "",
  },
  {
    name: "Profile - Public",
    link: "",
  },
  {
    name: "Profile - Edit",
    link: "",
  },
  {
    name: "Resume Builder",
    link: "",
  },
  {
    name: "Messages",
    link: "",
  },
  {
    name: "Billing & Subscriptions",
    link: "",
  },
  {
    name: "Settings",
    link: "",
  },
];

export const blogDemos: LandingPage[] = [
  {
    name: "List - Classic",
    link: "",
  },
  {
    name: "List - Grid",
    link: "",
  },
  {
    name: "List - Masonry",
    link: "",
  },
  {
    name: "List - Sidebar Left",
    link: "",
  },
  {
    name: "List - Sidebar Right",
    link: "",
  },
  {
    name: "Post - Standard",
    link: "",
  },
  {
    name: "Post - With Author Box",
    link: "",
  },
  {
    name: "Post - With Comments",
    link: "",
  },
  {
    name: "Post - No Sidebar",
    link: "",
  },
  {
    name: "Post - Full Width",
    link: "",
  },
];

export const pagesDemos: LandingPage[] = [
  {
    name: "About Us",
    link: "",
  },
  {
    name: "Contact Us",
    link: "",
  },
  {
    name: "Pricing Plans",
    link: "",
  },
  {
    name: "FAQ",
    link: "",
  },
  {
    name: "How It Works",
    link: "",
  },
  {
    name: "Terms & Conditions",
    link: "",
  },
  {
    name: "Privacy Policy",
    link: "",
  },
  {
    name: "404 Error",
    link: "",
  },
  {
    name: "Coming Soon",
    link: "",
  },
  {
    name: "Maintenance Mode",
    link: "",
  },
];
