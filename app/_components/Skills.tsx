"use client";

import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSpring,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Skill = { name: string; icon: IconType; color: string };

const skillGroups: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
    ],
  },
  {
    category: "Banco de Dados & Tools",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".skills-eyebrow, .skills-title", { opacity: 0, y: 20 });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      })
        .to(".skills-eyebrow", { opacity: 1, y: 0, duration: 0.5 })
        .to(".skills-title", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

      // Cada grupo de categoria anima o título e depois os cards em stagger
      const categories = gsap.utils.toArray<HTMLElement>(".skill-category");

      categories.forEach((category) => {
        const title = category.querySelector(".skill-category-title");
        const cards = category.querySelectorAll(".skill-card");

        gsap.set(title, { opacity: 0, y: 16 });
        gsap.set(cards, { opacity: 0, y: 24, scale: 0.92 });

        gsap.timeline({
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
          .to(title, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          })
          .to(
            cards,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.45,
              stagger: 0.08,
              ease: "back.out(1.6)",
            },
            "-=0.2"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <p className="skills-eyebrow text-center text-sm font-bold uppercase text-purple-500">
        Habilidades
      </p>
      <h2 className="skills-title my-2 text-center text-3xl font-bold">
        Tecnologias que trabalho
      </h2>
      <div className="space-y-8">
        {skillGroups.map(({ category, items }) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title mb-4 text-sm font-semibold uppercase tracking-wider text-purple-400">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {items.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="skill-card flex flex-col items-center gap-2 rounded-2xl border border-zinc-800 bg-black/40 p-4 transition-transform hover:scale-105"
                >
                  <Icon size={36} style={{ color }} />
                  <span className="text-sm text-zinc-300">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}