import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 py-10 px-6 md:px-20 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Links sociais */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/EderH3nr963"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors"
          >
            <Github size={22} />
          </a>
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors"
          >
            <Linkedin size={22} />
          </a> */}
          <a
            href="mailto:ederjustino104@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Direitos autorais */}
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Eder Henrique. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
