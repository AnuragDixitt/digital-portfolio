import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import examinationImg from "@/public/examination.png";
import foodImg from "@/public/food.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer at NIIT Foundation",
    location: "Work from home",
    description:
      "I did the internship for 2 months as a full stack developer at NIIT Foundation.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Examination Suite",
    description:
      "I worked as a full-stack developer on this startup project for 2 months. Under priveledged students can give tests with the help of this web application.",
    tags: ["React", "CSS", "MongoDB", "NodeJs", "Express"],
    imageUrl: examinationImg,
  },

  {
    title: "NuOrder",
    description:
      "I worked as a full-stack developer on this project for 3 months. It has full business cycle and is two role based application i.e vendor and buyer.",
    tags: ["React", "CSS", "Node.js", "MongoDB"],
    imageUrl: foodImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
