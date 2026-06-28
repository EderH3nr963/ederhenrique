"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contato() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".contato-card", { opacity: 0, y: 40, scale: 0.96 });
      gsap.set([".contato-eyebrow", ".contato-title", ".contato-text"], {
        opacity: 0,
        y: 16,
      });
      gsap.set(".contato-cta", { opacity: 0, y: 16 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        })
        .to(".contato-card", { opacity: 1, y: 0, scale: 1, duration: 0.7 })
        .to(
          ".contato-eyebrow",
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.35"
        )
        .to(".contato-title", { opacity: 1, y: 0, duration: 0.5 }, "-=0.25")
        .to(".contato-text", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(".contato-cta", { opacity: 1, y: 0, duration: 0.5 }, "-=0.25");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contato" ref={sectionRef} className="mx-auto max-w-7xl px-6 py-16">
      <div className="contato-card rounded-3xl bg-linear-to-r from-purple-900 to-zinc-950 p-10 md:flex md:items-center md:justify-between">
        <div>
          <p className="contato-eyebrow text-sm font-bold uppercase text-purple-300">
            Vamos trabalhar juntos?
          </p>
          <h2 className="contato-title mt-2 text-3xl font-bold">
            Tem um projeto em mente?
          </h2>
          <p className="contato-text mt-2 text-zinc-300">
            Vamos conversar e transformar sua ideia em realidade.
          </p>
        </div>

        <a
          href="mailto:ederhenriquevicentejust18@gmail.com"
          className="contato-cta mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-medium hover:bg-purple-700 md:mt-0 duration-300 group"
        >
          Entrar em contato <ArrowRight size={18} className="group-hover:translate-x-2 duration-300"/>
        </a>
      </div>
    </section>
  );
}