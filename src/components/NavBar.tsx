import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre Mim", href: "#sobre-mim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-green-600 hover:text-emerald-500 transition-colors"
        >
          &lt;Eder /&gt;
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-gray-800 dark:text-gray-100 hover:text-green-600 duration-200
                  after:content-[''] after:block after:h-[2px] after:bg-green-600
                  after:w-0 hover:after:w-full after:transition-all after:duration-300 after:mt-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md md:hidden shadow-md">
            <ul className="flex flex-col items-center py-6 space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-800 dark:text-gray-100 text-lg hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
