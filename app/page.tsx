import { Skills } from "./_components/Skills";
import { MouseLight } from "./_components/MouseLight";
import Projects from "./_components/Projects";
import Sobre from "./_components/Sobre";
import Contato from "./_components/Contato";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Inicio from "./_components/Inicio";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050509] text-white">
      <MouseLight />

      <Header />
      <Inicio />
      <Skills />
      <Projects />
      <Sobre />
      <Contato />
      <Footer />
    </main>
  );
}