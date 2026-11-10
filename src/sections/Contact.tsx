import { motion, useReducedMotion } from "motion/react";

const contactLinks = [
  {
    label: "E-mail",
    value: "maxsuel.dev@gmail.com",
    href: "mailto:maxsuel.dev@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maxsuelfernandob",
    href: "https://linkedin.com/in/maxsuelfernandob",
  },
  {
    label: "GitHub",
    value: "github.com/maxsueldev",
    href: "https://github.com/maxsueldev",
  },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contato"
      className="border-y border-white/10 bg-surface/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mb-12">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-[#64E6C5]"
          >
            04 / CONTATO
          </motion.span>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl font-bold text-[#F1F5F9] md:text-4xl"
          >
            Vamos conversar?
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-[#94A3B8]"
          >
            Estou aberto a oportunidades profissionais e conexões na área de
            tecnologia. Entre em contato pelos canais abaixo.
          </motion.p>
        </div>

        {/* Canais de contato */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "E-mail" ? undefined : "_blank"}
              rel={link.label === "E-mail" ? undefined : "noopener noreferrer"}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#151D30] p-5 transition-all hover:border-[#64E6C5]/50 hover:bg-[#64E6C5]/5"
            >
              <div>
                <span className="block text-xs text-[#64748B]">
                  {link.label}
                </span>

                <span className="mt-2 block break-all text-sm text-[#F1F5F9] transition-colors group-hover:text-[#64E6C5]">
                  {link.value}
                </span>
              </div>

              <motion.span
                animate={shouldReduceMotion ? undefined : { x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="text-lg text-[#64E6C5]"
              >
                ↗
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
