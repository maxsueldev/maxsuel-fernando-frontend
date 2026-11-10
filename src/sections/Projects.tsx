import { motion, useReducedMotion } from "motion/react";
import { projects } from "../data/projects";

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="px-6 pt-24 pb-2 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          02 / Project Showcase
        </motion.p>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.h2
            id="projects-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl font-display text-4xl font-semibold sm:text-6xl"
          >
            Projetos que demonstram minha evolução.
          </motion.h2>

          <motion.a
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://github.com/maxsueldev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver todos os projetos no GitHub (abre em nova aba)"
            className="rounded-sm font-mono text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            VER TODOS NO GITHUB ↗
          </motion.a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              aria-labelledby={`project-title-${project.number}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : (index % 2) * 0.12,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.25 } }
              }
              className="group border border-white/10 bg-surface p-6 transition-colors duration-300 hover:border-accent/50 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-accent">
                  / {project.number}
                </span>

                <span className="font-mono text-xs text-muted">
                  {project.category}
                </span>
              </div>

              <div className="mt-10 overflow-hidden border border-white/10 bg-bg">
                <img
                  src={project.image}
                  alt={`Captura de tela do projeto ${project.title}`}
                  className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3
                id={`project-title-${project.number}`}
                className="mt-8 font-display text-2xl font-semibold"
              >
                {project.title}
              </h3>

              <p className="mt-4 min-h-14 leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-bg px-3 py-2 font-mono text-xs text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-6 border-t border-white/10 pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código-fonte de ${project.title} no GitHub (abre em nova aba)`}
                  className="rounded-sm text-sm text-foreground hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Código-fonte ↗
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demonstração de ${project.title} (abre em nova aba)`}
                    className="rounded-sm text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    Demonstração ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
