import type { ImageMetadata } from "astro";

import work1 from "../assets/images/work1-1.png";
import work1b from "../assets/images/work1-2.png";
import work1c from "../assets/images/work1-3.png";
import work2 from "../assets/images/work2-1.png";
import work2b from "../assets/images/work2-2.png";
import work3c from "../assets/images/work2-3.png";

export interface Project {
  images: readonly ImageMetadata[];
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    images: [work1, work1b, work1c],
    title: "BarberShop",
    description: "Landing Page para la empresa de barbería BarberShop.",
    tags: ["HTML", "CSS", "Astro", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/GerardoEgR/barber-landing-page",
    demoUrl: "https://gerardoegr.github.io/barber-landing-page/",
  },
  {
    images: [work2, work2b, work3c],
    title: "Noir Atelier",
    description: "Landing Page para restaurante Noir Atelier.",
    tags: ["HTML", "CSS", "Astro", "Tailwind", "JavaScript"],
    githubUrl: "https://github.com/GerardoEgR/restaurant-landing-page",
    demoUrl: "https://gerardoegr.github.io/restaurant-landing-page/",
  },

];


