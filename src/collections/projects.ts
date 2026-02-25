
import work1 from "../assets/images/work1-1.png";
import work1b from "../assets/images/work1-2.png";
import work1c from "../assets/images/work1-3.png";
import work2 from "../assets/images/work2-1.png";
import work2b from "../assets/images/work2-2.png";
import work3c from "../assets/images/work2-3.png";

export interface Project {
  name: string;
  description: string;
  url: string;
  badges: string[];
  images: readonly typeof work1[];
}

export const projects: Project[] = [
  {
    name: "BarberShop",
    description: "Landing Page para la empresa de barbería BarberShop.",
    url: "https://gerardoegr.github.io/barber-landing-page/",
    badges: ["HTML", "CSS", "Astro", "Tailwind", "JavaScript"],
    images: [work1, work1b, work1c],
  },
  {
    name: "Noir Atelier",
    description: "Landing Page para restaurante Noir Atelier.",
    url: "https://gerardoegr.github.io/restaurant-landing-page/",
    badges: ["HTML", "CSS", "Astro", "Tailwind", "JavaScript"],
    images: [work2, work2b, work3c],
  },
];


