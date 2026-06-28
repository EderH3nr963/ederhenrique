"use client";

import { useEffect, useRef } from "react";
import { Brain, Code2, Rocket, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Sobre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Card da esquerda (texto sobre mim) entra deslizando da esquerda
      gsap.set(".sobre-card", { opacity: 0, x: -40 });

      // Itens da direita (lista de destaques) entram em stagger
      const items = gsap.utils.toArray<HTMLElement>(".sobre-item");
      gsap.set(items, { opacity: 0, x: 40 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        })
        .to(".sobre-card", { opacity: 1, x: 0, duration: 0.7 })
        .to(
          items,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2"
    >
      <div className="sobre-card rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
        <p className="text-sm font-bold uppercase text-purple-500">
          Sobre mim
        </p>
        <h2 className="mt-2 text-3xl font-bold">Quem sou eu?</h2>

        <p className="mt-5 text-zinc-400">
          Desenvolvedor Full Stack em formação, com experiência prática no
          desenvolvimento de aplicações web utilizando React, Next.js,
          Node.js, TypeScript e Spring Boot. Possui experiência em projetos
          reais, integração com APIs REST, autenticação JWT, bancos de dados
          relacionais e deploy em produção. Busca oportunidade de estágio
          para expandir conhecimentos e contribuir em projetos de software.
        </p>

        <a
          href="#contato"
          className="mt-6 inline-flex rounded-full border border-purple-500 px-5 py-3 text-purple-300 hover:bg-purple-500/10 duration-300"
        >
          Saiba mais sobre mim
        </a>
      </div>

      <div className="grid gap-4">
        {[
          ["Performance e boas práticas", ShieldCheck],
          ["Código limpo e escalável", Code2],
          ["Experiência do usuário", Rocket],
          ["Resolução de problemas", Brain],
        ].map(([text, Icon]: any) => (
          <div
            key={text}
            className="sobre-item flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
          >
            <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400">
              <Icon size={22} />
            </div>
            <span className="text-zinc-300">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}