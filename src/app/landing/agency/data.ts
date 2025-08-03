import { LuComponent, LuLayers, LuLayoutGrid } from "react-icons/lu";
import type {
  BlogType,
  FaqType,
  PortfolioSlideType,
  ServiceType,
  SlideType,
} from "./types";

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
    image: "/assets/images/city/City.png",
  },
  {
    title: "Web Design",
    subTitle: "Digital Platform",
    image: "/assets/images/city/City1.png",
  },
  {
    title: "Brand",
    subTitle: "Coder Studio",
    image: "/assets/images/city/City2.png",
  },
  {
    title: "Web Design",
    subTitle: "New Gadgets",
    image: "/assets/images/city/City3.png",
  },
  {
    title: "Web Design",
    subTitle: "New Gadgets",
    image: "/assets/images/city/City4.png",
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
    image: "/assets/images/landing/agency/img-13.jpg",
  },
  {
    title: "Digital Marketing.",
    description:
      "Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...",
    no: "05",
    image: "/assets/images/landing/agency/img-14.jpg",
  },
  {
    title: "Good thinking.",
    description:
      "Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor aliquet. Aenean sollictudin, lorem quis bibendum auctor...",
    no: "04",
    image: "/assets/images/landing/agency/img-15.jpg",
  },
];

export { homeSwiperSlides, services, portfolioSlides, faqContents, blogs };
