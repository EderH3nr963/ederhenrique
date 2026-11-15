"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AssociacaoImage from "@/app/_images/projects/associaoPaulistaBJJ.png";
import MoneyMagnetImage from "@/app/_images/projects/moneyMagnet.png";
import ChatConnectImage from "@/app/_images/projects/chatConnect.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectLinks {
  github?: string;
  backend?: string;
}

interface Project {
  title: string;
  type: string;
  image: StaticImageData;
  description: string;
  techs: string[];
  link?: string;
  links?: ProjectLinks;
}

const projects: Project[] = [
  {
    title: "MoneyMagnet",
    type: "Dashboard",
    links: {
      github: "https://github.com/EderH3nr963/moneyMagnet",
      backend: "https://github.com/EderH3nr963/moneyMagnetApi"
    },
    image: MoneyMagnetImage,
    description:
      "Sistema financeiro para controle de receitas, despesas e gráficos.",
    techs: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "ChatConnect",
    type: "Aplicação Web",
    links: {
      github: "https://github.com/EderH3nr963/chatConnectReact",
      backend: "https://github.com/EderH3nr963/chatConnectSpring",
    },
    image: ChatConnectImage,
    description:
      "Plataforma de comunicação em tempo real com recursos de mensagens e videochamadas.",
    techs: ["React", "SpringBoot", "Java", "Redis", "PostgreSQL", "AWS(S3, EC2, SQS)"],
  },
  {
    title: "Associação BJJ",
    type: "Landing Page",
    image: AssociacaoImage,
    description:
      "Site institucional com painel administrativo, notícias e portal da transparência.",
    techs: ["Next.js", "Supabase", "Tailwind"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".projects-eyebrow, .projects-title", { opacity: 0, y: 20 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        })
        .to(".projects-eyebrow", { opacity: 1, y: 0, duration: 0.5 })
        .to(".projects-title", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      gsap.set(cards, { opacity: 0, y: 32 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <p className="projects-eyebrow text-sm font-bold uppercase text-purple-500">
        Projetos
      </p>
      <h2 className="projects-title mt-2 text-3xl font-bold">
        Alguns projetos em destaque
      </h2>

      <div className="projects-grid mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
          >
            {project.image ? (
              <Image src={project.image} alt="" />
            ) : (
              <div className="h-44 bg-linear-to-br from-purple-900/80 to-zinc-900" />
            )}

            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  {project.type}
                </span>
                <div className="flex items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:scale-105 hover:text-white hover:cursor-pointer duration-300"
                    >
                      {project.link.includes("github.com") ? <BsGithub size={18} /> : <ExternalLink size={18} />}
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-zinc-400 hover:text-white duration-300"
                    >
                      <BsGithub size={18} className="group-hover:scale-105" />
                      <span className="text-[10px] font-bold">FRONT</span>
                    </a>
                  )}
                  {project.links?.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-zinc-400 hover:text-white duration-300"
                    >
                      <BsGithub size={18} className="group-hover:scale-105" />
                      <span className="text-[10px] font-bold">API</span>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 hover:bg-zinc-900 duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
