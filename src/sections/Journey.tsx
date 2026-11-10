import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { journeySections } from "../data/journey";

export default function Journey() {
  const [activeSection, setActiveSection] = useState("skills");
  const [activeItem, setActiveItem] = useState("frontend");

  const shouldReduceMotion = useReducedMotion();

  const selectedSection = journeySections.find(
    (section) => section.id === activeSection,
  );

  const selectedItem = selectedSection?.items.find(
    (item) => item.id === activeItem,
  );

  function handleSectionChange(sectionId: string) {
    const section = journeySections.find((item) => item.id === sectionId);

    if (!section) return;

    setActiveSection(sectionId);
    setActiveItem(section.items[0]?.id ?? "");
  }

  return (
    <section
      id="experiencias"
      aria-labelledby="journey-title"
      className="px-6 pt-12 pb-24 md:px-12 md:pt-24"
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
            03 / TRAJETÓRIA
          </motion.span>

          <motion.h2
            id="journey-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl font-bold text-[#F1F5F9] md:text-4xl"
          >
            Minha trajetória profissional
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-[#94A3B8]"
          >
            Conheça minhas competências, experiências, formações e conhecimentos
            desenvolvidos ao longo da minha trajetória.
          </motion.p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-[#151D30] md:grid-cols-[260px_minmax(0,1fr)]"
        >
          {/* Menu lateral */}
          <aside className="min-w-0 border-b border-white/10 p-4 md:border-b-0 md:border-r md:p-6">
            <p className="mb-4 px-3 font-mono text-xs uppercase tracking-wider text-[#64748B]">
              Navegação
            </p>

            <nav
              aria-label="Categorias da minha trajetória"
              className="flex min-w-0 gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0"
            >
              {journeySections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <motion.button
                    key={section.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleSectionChange(section.id)}
                    whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 rounded-lg px-4 py-3 text-left text-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64E6C5] md:w-full ${
                      isActive
                        ? "bg-[#64E6C5]/10 font-medium text-[#64E6C5]"
                        : "text-[#94A3B8] hover:bg-white/5 hover:text-[#F1F5F9]"
                    }`}
                  >
                    {section.label}
                  </motion.button>
                );
              })}
            </nav>
          </aside>

          {/* Conteúdo dinâmico */}
          <div className="min-w-0 p-5 md:p-8">
            <AnimatePresence mode="wait">
              {selectedSection && (
                <motion.div
                  key={selectedSection.id}
                  role="region"
                  aria-labelledby="journey-section-title"
                  aria-live="polite"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-7">
                    <h3
                      id="journey-section-title"
                      className="text-xl font-semibold text-[#F1F5F9] md:text-2xl"
                    >
                      {selectedSection.label}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                      {selectedSection.description}
                    </p>
                  </div>

                  {/* Botões dos itens */}
                  <div
                    role="group"
                    aria-label={`Itens de ${selectedSection.label}`}
                    className="flex flex-wrap gap-2 border-b border-white/10 pb-6"
                  >
                    {selectedSection.items.map((item) => {
                      const isActive = activeItem === item.id;

                      return (
                        <motion.button
                          key={item.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => setActiveItem(item.id)}
                          whileHover={
                            shouldReduceMotion ? undefined : { y: -2 }
                          }
                          whileTap={
                            shouldReduceMotion ? undefined : { scale: 0.97 }
                          }
                          transition={{ duration: 0.2 }}
                          className={`max-w-full break-words rounded-lg border px-4 py-2.5 text-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64E6C5] ${
                            isActive
                              ? "border-[#64E6C5]/40 bg-[#64E6C5]/10 text-[#64E6C5]"
                              : "border-white/10 text-[#94A3B8] hover:border-white/20 hover:text-[#F1F5F9]"
                          }`}
                        >
                          {item.label}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Detalhes do item selecionado */}
                  <AnimatePresence mode="wait">
                    {selectedItem && (
                      <motion.div
                        key={selectedItem.id}
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, y: 12 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={
                          shouldReduceMotion ? undefined : { opacity: 0, y: -6 }
                        }
                        transition={{ duration: 0.3 }}
                        className="pt-7"
                      >
                        <div className="mb-1">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#64E6C5]">
                            Detalhes
                          </span>

                          <h4 className="mt-2 text-xl font-semibold text-[#F1F5F9]">
                            {selectedItem.title}
                          </h4>

                          {selectedItem.subtitle && (
                            <p className="mt-1 text-sm text-[#64748B]">
                              {selectedItem.subtitle}
                            </p>
                          )}
                        </div>

                        <p className="max-w-3xl text-sm leading-7 text-[#94A3B8]">
                          {selectedItem.description}
                        </p>

                        {selectedItem.details && (
                          <ul className="mt-5 space-y-2">
                            {selectedItem.details.map((detail, index) => (
                              <motion.li
                                key={index}
                                initial={
                                  shouldReduceMotion
                                    ? false
                                    : { opacity: 0, x: -8 }
                                }
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: shouldReduceMotion ? 0 : index * 0.05,
                                }}
                                className="flex gap-3 text-sm leading-relaxed text-[#CBD5E1]"
                              >
                                <span className="mt-1 text-[#64E6C5]">
                                  <span aria-hidden="true">▹</span>
                                </span>

                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        )}

                        {selectedItem.tags && selectedItem.tags.length > 0 && (
                          <div
                            aria-label="Tecnologias e conhecimentos relacionados"
                            className="mt-3 flex flex-wrap gap-2"
                          >
                            {selectedItem.tags.map((tag, index) => (
                              <motion.span
                                key={tag}
                                initial={
                                  shouldReduceMotion
                                    ? false
                                    : { opacity: 0, y: 8 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: shouldReduceMotion ? 0 : index * 0.04,
                                }}
                                className="mt-2 rounded-md border border-white/10 bg-[#0B1020] px-4.5 py-2 font-mono text-xs text-[#94A3B8]"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
