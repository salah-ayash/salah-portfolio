
"use client";

import { motion, MotionConfig } from "motion/react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  const highlights = [
    {
      label: t("educationTitle"),
      value: t("educationValue"),
      icon: "🎓",
    },
    {
      label: t("experienceTitle"),
      value: t("experienceValue"),
      icon: "💼",
    },
    {
      label: t("focusTitle"),
      value: t("focusValue"),
      icon: "💻",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/10 py-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-blue-400">
              {t("eyebrow")}
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl">
              {t("title")}
            </h2>

            <div className="mb-6 h-1 w-20 rounded-full bg-blue-500" />

            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              {t("description")}
            </p>
          </motion.div>

          {/* Information Cards */}
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-[#101827] p-6 transition-colors hover:border-blue-500/40 hover:bg-[#152039]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="mb-2 font-semibold text-blue-400">
                      {item.label}
                    </h3>

                    <p className="text-sm leading-7 text-slate-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
