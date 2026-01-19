
import work1 from "../assets/images/work-1.png";

import work2 from "../assets/images/work-2.png";

import work3 from "../assets/images/work-3-1.png";
import work3b from "../assets/images/work-3-2.png";
import work3c from "../assets/images/work-3-3.png";

export interface Project {
  name: string;
  description: string;
  url: string;
  badges: string[];
  images: readonly typeof work1[];
}

export const projects: Project[] = [
  {
    name: "MoviesPedia",
    description: "Aplicación Web de películas que permite el registro de usuarios.",
    url: "https://github.com/GerardoEgR/moviesPediaPage",
    badges: ["React", "Zustand", "Java", "Spring Boot", "Maven", "Spring Security", "MySQL"],
    images: [work1],
  },
  {
    name: "BarberShop",
    description: "Landing Page para la empresa de barbería BarberShop.",
    url: "https://gerardoegr.github.io/barber-landing-page/",
    badges: ["HTML", "CSS", "Astro", "Tailwind", "JavaScript"],
    images: [work3, work3b, work3c],
  },
  {
    name: "Vientos del Sur",
    description: "Landing Page para la empresa turística Vientos del Sur.",
    url: "https://gerardoegr.github.io/region-aysen-page/",
    badges: ["HTML", "CSS", "Astro", "Bootstrap", "JavaScript"],
    images: [work2],
  },
];


