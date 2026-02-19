import ImageMoneyMagnet from "../assets/images/projeto-moneymagnet.png";
import ImageChatMagnetApi from "../assets/images/projeto-chat-magnet-api.png";
import ImageBankingApi from "../assets/images/projeto-api-banking.png";

export default function ProjetosSection() {
  const projetos = [
    {
      nomeProjeto: "MoneyMagnet",
      linkGit: "https://github.com/EderH3nr963/money_magnet",
      linkWeb: "https://money-magnet-iota.vercel.app",
      description:
        "Dashboard inteligente para controle financeiro de microempreendedores. Permite cadastrar transações, visualizar métricas e gerar relatórios com um design moderno e responsivo.",
      image: ImageMoneyMagnet,
    },
    {
      nomeProjeto: "ChatConnectApi",
      linkGit: "https://github.com/EderH3nr963/chatConnectBack",
      linkWeb: "",
      description:
        "API robusta para aplicação de mensagens em tempo real, construída com Express e TypeScript. Inclui autenticação JWT, gerenciamento de usuários, criação de chats em grupo, envio e listagem de mensagens, integração com WebSockets e arquitetura escalável seguindo boas práticas.",
      image: ImageChatMagnetApi,
    },
    {
      nomeProjeto: "ApiSitemaBancario",
      linkGit: "https://github.com/EderH3nr963/apiSistemaBancario",
      linkWeb: "",
      description:
        "API para gerenciamento de um sistema bancário, desenvolvida com Node.js e TypeScript. Permite criação de contas, operações de depósito e saque, consultas de saldo, histórico de transações e autenticação segura com JWT. Estruturada com arquitetura limpa e foco em segurança e consistência dos dados.",
      image: ImageBankingApi,
    },
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-6 md:px-20 py-20 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
        &lt; Meus <span className="text-green-600">Projetos</span> /&gt;
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projetos.map((projeto) => (
          <article
            key={projeto.nomeProjeto}
            className="group bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Imagem do projeto */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={projeto.image}
                alt={projeto.nomeProjeto}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Conteúdo */}
            <div className="flex-1 flex flex-col justify-between p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {projeto.nomeProjeto}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {projeto.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {projeto.linkWeb && (
                  <a
                    href={projeto.linkWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Ver Online
                  </a>
                )}
                <a
                  href={projeto.linkGit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    !projeto.linkWeb ? "w-1/2" : "flex-1"
                  } text-center border-2  border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium py-2 rounded-full transition-all duration-300`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
