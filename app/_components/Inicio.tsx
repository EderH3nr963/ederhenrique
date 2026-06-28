"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Code2, Download, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Inicio() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const cardRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const leftItems = [
        badgeRef.current,
        titleRef.current,
        textRef.current,
        buttonsRef.current,
        socialRef.current,
      ];

      gsap.set(leftItems, { opacity: 0, y: 32 });
      gsap.set(cardRef.current, { opacity: 0, x: 60, scale: 0.92 });
      if (statsRef.current) {
        gsap.set(statsRef.current.children , { opacity: 0, y: 16 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.25")
        .to(textRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(socialRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(
          cardRef.current,
          { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );

      if (statsRef.current) {
        tl.to(
          statsRef.current.children,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2"
    >
      <div>
        <span
          ref={badgeRef}
          className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs uppercase text-purple-300"
        >
          Desenvolvedor Full Stack
        </span>

        <h2
          ref={titleRef}
          className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
        >
          Transformo ideias em experiências digitais{" "}
          <span className="text-purple-500">incríveis.</span>
        </h2>

        <p ref={textRef} className="mt-6 max-w-xl text-zinc-400">
          Desenvolvedor focado em criar aplicações modernas, performáticas e
          centradas no usuário.
        </p>

        <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-medium hover:bg-purple-700 hover:scale-110 duration-300 group"
          >
            Ver meus projetos{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>

          <a
            href="/curriculo.pdf"
            download={true}
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 hover:bg-zinc-900 hover:scale-110 duration-300 group"
          >
            Baixar currículo{" "}
            <Download
              size={18}
              className="group-hover:translate-y-1 transition-transform duration-300 "
            />
          </a>
        </div>

        <div
          ref={socialRef}
          className="mt-10 flex items-center gap-4 text-zinc-400"
        >
          <span className="text-xs uppercase tracking-widest">
            Me encontre em
          </span>
          <a
            href=""
            className="hover:text-white transition-colors duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-github group-hover:scale-110 duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <a
            href=""
            className="hover:text-white transition-colors duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-linkedin group-hover:scale-110 duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a
            href=""
            className="hover:text-white transition-colors duration-300 group"
          >
            <Mail size={20} className="group-hover:scale-110 duration-300" />
          </a>
        </div>
      </div>

      <div ref={cardRef} className="relative">
        <div className="absolute inset-0 rounded-full bg-purple-700/30 blur-3xl" />

        <div className="relative rounded-3xl border border-purple-500/20 bg-zinc-950 p-8">
          <Code2 className="ml-auto text-purple-400" size={52} />

          <div
            ref={statsRef}
            className="mt-32 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-800 bg-black/40 p-6"
          >
            <div>
              <strong className="text-2xl text-purple-400">+2</strong>
              <p className="text-sm text-zinc-400">Projetos em produção</p>
            </div>
            <div>
              <strong className="text-2xl text-purple-400">15+</strong>
              <p className="text-sm text-zinc-400">Projetos feitos</p>
            </div>
            <div>
              <strong className="text-2xl text-purple-400">100%</strong>
              <p className="text-sm text-zinc-400">Foco em resultado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}