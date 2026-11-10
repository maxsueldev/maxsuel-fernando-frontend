const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Contato", href: "#contato" },
];

function Navbar() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:font-medium focus:text-bg focus:outline-none"
      >
        Pular para o conteúdo
      </a>

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/90 backdrop-blur-md">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
        >
          <a
            href="#inicio"
            aria-label="Maxsuel - Página inicial"
            className="rounded-sm font-display text-xl font-bold tracking-wider focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            MAXSUEL<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm py-2 text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="rounded-sm border border-accent px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            VAMOS CONVERSAR
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
