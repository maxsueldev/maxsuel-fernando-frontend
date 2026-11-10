import { motion, useReducedMotion } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReactrouter,
  SiGit,
  SiGithub,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "React Router", icon: SiReactrouter },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-stack-title"
      className="overflow-hidden border-y border-white/10 bg-surface/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          01 / Stack tecnológica
        </motion.p>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-end">
          <motion.h2
            id="tech-stack-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold sm:text-5xl"
          >
            Ferramentas que transformam ideias em interfaces.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg leading-7 text-muted"
          >
            Tecnologias e ferramentas que utilizo nos meus estudos e projetos de
            desenvolvimento Front-End.
          </motion.p>
        </div>
      </div>

      <div
        className="mt-16 overflow-hidden"
        aria-label="Ícones das tecnologias utilizadas"
      >
        <div
          className={`flex w-max gap-16 ${
            shouldReduceMotion
              ? ""
              : "animate-tech-scroll hover:[animation-play-state:paused]"
          }`}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-16"
              aria-hidden={group === 1}
            >
              {technologies.map(({ name, icon: Icon }) => (
                <div
                  key={`${group}-${name}`}
                  className="flex min-w-20 flex-col items-center gap-3 text-muted transition-colors duration-300 hover:text-accent"
                  title={name}
                >
                  <Icon aria-hidden="true" className="text-5xl" />
                  <span className="font-mono text-xs">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
