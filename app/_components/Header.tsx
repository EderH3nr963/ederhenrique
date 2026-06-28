import Image from "next/image";
import Logo from "@/app/_icons/logo.png";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <Image
        src={Logo}
        alt="Logo"
        width={50}
        height={50}
        className="rounded-lg"
      />

      <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
        <a href="#inicio" className="relative py-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-purple-500 after:content-[''] after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors">
          Início
        </a>
        <a href="#sobre" className="relative py-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-purple-500 after:content-[''] after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors">
          Sobre
        </a>
        <a href="#projetos" className="relative py-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-purple-500 after:content-[''] after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors">
          Projetos
        </a>
        <a href="#habilidades" className="relative py-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-purple-500 after:content-[''] after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors">
          Habilidades
        </a>
        <a href="#contato" className="relative py-0.5 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-purple-500 after:content-[''] after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors">
          Contato
        </a>
      </nav>

      <a
        href="#contato"
        className="rounded-full border border-purple-500 px-5 py-2 text-sm hover:bg-purple-500/10 duration-300"
      >
        Vamos conversar
      </a>
    </header>
  )
}