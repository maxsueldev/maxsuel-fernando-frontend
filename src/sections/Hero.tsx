import { motion, useReducedMotion } from "motion/react";

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="flex min-h-screen items-center px-6 py-28 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
        {/* Coluna esquerda: conteúdo */}
        <div className="min-w-0">
          {/* <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            Desenvolvedor Front-End Júnior
          </motion.p> */}

          <motion.h1
            id="hero-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.15,
            }}
            className="mt-12 whitespace-nowrap font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl"
          >
            Maxsuel Fernando
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="mt-1 text-xl font-medium leading-tight text-accent sm:text-2xl"
          >
            Desenvolvedor Front-End
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            Desenvolvo interfaces modernas, responsivas e bem estruturadas,
            utilizando React, TypeScript e Tailwind CSS. Meu foco é criar
            experiências digitais com atenção à usabilidade, organização e
            qualidade do código.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.45,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projetos"
              className="rounded-sm bg-accent px-6 py-4 font-semibold text-bg transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explorar projetos ↗
            </a>

            <a
              href="https://github.com/maxsueldev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar meu perfil no GitHub (abre em nova aba)"
              className="rounded-sm border border-white/15 px-6 py-4 text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              GitHub ↗
            </a>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: shouldReduceMotion ? 0 : 0.7,
            }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted"
            aria-label="Principais tecnologias e área de atuação"
          >
            <span>REACT</span>
            <span>TYPESCRIPT</span>
            <span>TAILWIND CSS</span>
            <span>UI DEVELOPMENT</span>
          </motion.div>
        </div>

        {/* Coluna direita: imagem */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
          className="flex min-w-0 items-center justify-center"
        >
          <img
            src="/images/laptop_preview.png"
            alt="Imagem em linhas de um laptop e uma caneca"
            className="h-auto w-full max-w-[500px] object-contain rounded-sm"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
