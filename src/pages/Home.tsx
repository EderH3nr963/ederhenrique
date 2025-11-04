import { useEffect, useRef } from "react";
import Typed from "typed.js";

// Ícones das linguagens de programação
import ExpressIcon from "../assets/icons/express-original.png";
import GitIcon from "../assets/icons/git-original-wordmark.png";
import JavascriptIcon from "../assets/icons/javascript-plain.png";
import MysqlIcon from "../assets/icons/mysql-original-wordmark.png";
import NodeJsIcon from "../assets/icons/nodejs-original.png";
import PhpIcon from "../assets/icons/php-plain.png";
import ReactIcon from "../assets/icons/react-original.png";
import RedisIcon from "../assets/icons/redis-original.png";
import TailwindCssIcon from "../assets/icons/tailwindcss-plain.png";
import TypescriptIcon from "../assets/icons/typescript-original.png";

// Imagem de perfil
import Perfil from "../assets/images/perfil.png"

// Imagem de projetos
import ProjetosSection from "../components/ProjectSession";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomePage() {
  const refProfissao = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    typedInstance.current = new Typed(refProfissao.current!, {
      strings: [
        "&lt; Desenvolvedor Web /&gt;",
        "&lt; Desenvolvedor Full-Stack /&gt;",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1200,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* ===== Section Home ===== */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
      >
        <Navbar/>

        <div className="min-h-[calc(100vh-50px)] not-md:mt-10 flex flex-col-reverse md:flex-row items-center justify-center w-full px-6 md:px-20 gap-10">
          {/* Texto principal */}
          <article className="flex-1 text-center md:text-left space-y-4 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Olá, eu sou <span className="text-green-600">Eder</span>!
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold min-h-10 duration-200">
              <span ref={refProfissao} className="text-green-600" />
              <span className="typed-cursor ml-1 dark:text-gray-100 animate-blink">
                |
              </span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0">
              Sou um desenvolvedor apaixonado por criar experiências digitais modernas,
              rápidas e responsivas. Gosto de transformar ideias em interfaces
              funcionais e elegantes.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a
                href="#projetos"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Ver Projetos
              </a>
              <a
                href="https://wa.me/+5516993979822?text='Ola, estaria interessado em contratar os seus serviços.'"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Entrar em Contato
              </a>
            </div>
          </article>

          {/* Foto */}
          <article className="flex-1 flex justify-center animate-fadeIn md:mt-0 mt-10">
            <div className="relative">
              <img
                src={Perfil}
                alt="Foto de Eder"
                className="w-[280px] h-[280px] z-10 md:w-[320px] md:h-80 rounded-full object-cover border-4 border-green-600 shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </article>
        </div>
      </section>

      {/* ===== Section Habilidades ===== */}
      <section
        id="habilidades"
        className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          &lt; Minhas <span className="text-green-600">Habilidades</span> /&gt;
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-12">
          Tenho experiência em desenvolvimento web completo — do front-end dinâmico à
          criação de APIs robustas no back-end. Gosto de escrever código limpo,
          performático e escalável.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {[
            { name: "React", icon: ReactIcon, color: "text-sky-500" },
            { name: "Node.js", icon: NodeJsIcon, color: "text-green-600" },
            { name: "TypeScript", icon: TypescriptIcon, color: "text-blue-600" },
            { name: "PHP", icon: PhpIcon, color: "text-indigo-500" },
            { name: "Tailwind", icon: TailwindCssIcon, color: "text-cyan-400" },
            { name: "Redis", icon: RedisIcon, color: "text-red-500" },
            { name: "MySQL", icon: MysqlIcon, color: "text-blue-400" },
            { name: "Git", icon: GitIcon, color: "text-orange-500" },
            { name: "Javascript", icon: JavascriptIcon, color: "text-yellow-500" },
            { name: "Express", icon: ExpressIcon, color: "text-gray-500" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 transform hover:scale-110 transition-all duration-300"
            >
              <div className="p-5 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <span
                className={`text-sm font-medium ${skill.color} dark:text-gray-100 group-hover:text-green-500`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Section Projetos ===== */}
      <ProjetosSection />

      {/* ===== Section Sobre Mim ===== */}
      {/* ===== Section Sobre Mim ===== */}
      <section
        id="sobre-mim"
        className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center px-6 md:px-20 py-20 transition-colors duration-500"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          &lt; <span className="text-green-600">Sobre</span> mim /&gt;
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Texto de apresentação */}
          <article className="flex-1 space-y-5 text-center md:text-left">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Sou <span className="text-green-600 font-medium">Eder Henrique</span>, um
              desenvolvedor apaixonado por tecnologia e criação de soluções inteligentes.
              Tenho experiência no desenvolvimento de aplicações completas, desde o
              <span className="text-green-600 font-medium"> front-end</span> moderno e
              responsivo até o <span className="text-green-600 font-medium">back-end</span>{" "}
              robusto com APIs seguras e escaláveis.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Valorizo um código limpo, bem estruturado e de fácil manutenção. Acredito que
              cada projeto é uma oportunidade de aprendizado e evolução — e adoro transformar
              ideias em experiências digitais reais.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Atualmente, foco meus estudos em{" "}
              <span className="text-green-600 font-medium">React, Node.js</span> e{" "}
              <span className="text-green-600 font-medium">TypeScript</span>, mas estou sempre
              explorando novas tecnologias e boas práticas de desenvolvimento.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
              <a
                href="https://wa.me/+5516993979822?text='Ola, estaria interessado em contratar os seus serviços.'"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Entrar em Contato
              </a>
              <a
                href="/cv.pdf"
                download
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
              >
                Baixar CV
              </a>
            </div>
          </article>

          {/* Imagem com efeito */}
          <article className="flex-1 flex justify-center">
            <div className="relative">
              <img
                src={Perfil}
                alt="Foto de Eder Henrique"
                className="w-[280px] h-[320px] md:w-[340px] md:h-[380px] object-cover rounded-3xl border-4 border-green-600 shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </article>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
