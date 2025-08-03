import { LuComponent, LuLayers, LuLayoutGrid } from "react-icons/lu";
import type {
  BlogType,
  FaqType,
  PortfolioSlideType,
  ServiceType,
  SlideType,
} from "./types";
import agency13 from "@/assets/images/landing/agency/img-13.jpg";
import agency14 from "@/assets/images/landing/agency/img-14.jpg";
import agency15 from "@/assets/images/landing/agency/img-15.jpg";

import city from "@/assets/images/city/City.png";
import city1 from "@/assets/images/city/City1.png";
import city2 from "@/assets/images/city/City2.png";
import city3 from "@/assets/images/city/City3.png";
import city4 from "@/assets/images/city/City4.png";

const homeSwiperSlides: SlideType[] = [
  {
    title: "@JobPoint",
    name: "Where Careers Connect — Discover Jobs, Build Networks, and Grow Professionally.",
    description:
      "A performance-driven job board with 10,000+ new resumes daily—no subscriptions, no user licenses",
  },
  {
    title: "@JobPoint",
    name: "Where Careers Connect — Discover Jobs, Build Networks, and Grow Professionally.",
    description:
      "A performance-driven job board with 10,000+ new resumes daily—no subscriptions, no user licenses",
  },
  {
    title: "@JobPoint",
    name: "Where Careers Connect — Discover Jobs, Build Networks, and Grow Professionally.",
    description:
      "A performance-driven job board with 10,000+ new resumes daily—no subscriptions, no user licenses",
  },
];

const services: ServiceType[] = [
  {
    title: "Developer",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
    icon: LuComponent,
  },
  {
    title: "Digital Product Design",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
    icon: LuLayers,
  },
  {
    title: "Branding & Design",
    description:
      "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design",
    icon: LuLayoutGrid,
  },
];

const portfolioSlides: PortfolioSlideType[] = [
  {
    title: "Web Design",
    subTitle: "Branding Process",
    image: city,
  },
  {
    title: "Web Design",
    subTitle: "Digital Platform",
    image: city1,
  },
  {
    title: "Brand",
    subTitle: "Coder Studio",
    image: city2,
  },
  {
    title: "Web Design",
    subTitle: "New Gadgets",
    image: city3,
  },
  {
    title: "Web Design",
    subTitle: "New Gadgets",
    image: city4,
  },
];

const faqContents: FaqType[] = [
  {
    title: "What is web design, and why is it important?",
    description:
      "Web design is the process of creating the visual and functional elements of a website.",
  },
  {
    title: "Are These Projects Real Or Concepts?",
    description:
      "The projects featured in my portfolio are a mix of real-world projects I've completed and conceptual designs that showcase my creative thinking and design skills.",
  },
  {
    title: "How Often Is The Portfolio Updated?",
    description:
      "I strive to keep my portfolio up-to-date with my latest work and projects. I regularly update it to reflect my evolving skills and design philosophy.",
  },
  {
    title: "Can I Leave Feedback Or Comments On The Portfolio Projects?",
    description:
      "At the moment, I don't have a comments section on the portfolio pages. However, I welcome feedback and inquiries.",
  },
];

const blogs: BlogType[] = [
  {
    title: "Brilliant minds.",
    description:
      "Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...",
    no: "06",
    image: agency13,
  },
  {
    title: "Digital Marketing.",
    description:
      "Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...",
    no: "05",
    image: agency14,
  },
  {
    title: "Good thinking.",
    description:
      "Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...",
    no: "04",
    image: agency15,
  },
];

export { homeSwiperSlides, services, portfolioSlides, faqContents, blogs };
