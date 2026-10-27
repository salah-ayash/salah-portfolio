
"use client";

import { motion, MotionConfig } from "motion/react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Home");

  // Identical initial values on server and browser
  const fadeUp = { opacity: 0, y: 25 };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className="grid min-h-[80vh] scroll-mt-24 items-center gap-12 py-20 lg:grid-cols-2"
      >
        {/* Introduction */}
        <div className="min-w-0">

          {/* Developer Badge */}
          <motion.div
            initial={fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />
            <span>{t("role")}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t("greeting")}
          </motion.h1>

          {/* Developer Role */}
          <motion.h2
            initial={fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-5 text-xl font-semibold text-blue-400 sm:text-2xl"
          >
            {t("role")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-xl text-base leading-8 text-slate-400"
          >
            {t("description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={fadeUp}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              {t("projects")}
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-blue-400"
            >
              {t("contact")}
            </a>
          </motion.div>
        </div>

        {/* Developer Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="min-w-0"
        >
          <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-[#101827] shadow-[0_0_60px_rgba(37,99,235,0.12)]">

            {/* Terminal Header */}
            <div
              dir="ltr"
              className="flex items-center gap-2 border-b border-white/10 px-5 py-4"
            >
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-3 font-mono text-xs text-slate-400">
                developer.ts
              </span>
            </div>

            {/* Terminal Content */}
            <div
              dir="ltr"
              className="overflow-x-auto p-6 text-left"
            >
              <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-8 text-blue-200 sm:text-sm">
{`const developer = {
  name: "Salah Ayash",
  role: "Software Developer",
  skills: [
    "Flutter",
    "React",
    "Next.js",
    "TypeScript",
    "PHP & MySQL",
    "AWS"
  ],
  passion: "Building the Future"
};`}
              </pre>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
