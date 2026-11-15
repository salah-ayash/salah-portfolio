
"use client";

import { motion, MotionConfig } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const developerInfo = [
  {
    key: "name",
    value: '"Salah Ayash"',
  },
  {
    key: "role",
    value: '"Software Developer"',
  },
  {
    key: "frontend",
    value: '["React", "Next.js", "TypeScript"]',
  },
  {
    key: "mobile",
    value: '["Flutter", "Dart"]',
  },
  {
    key: "backend",
    value: '["PHP", "Node.js", "MySQL"]',
  },
  {
    key: "cloud",
    value: '["AWS", "Firebase"]',
  },
];

export default function Hero() {
  const t = useTranslations("Home");
  const isArabic = useLocale() === "ar";

  const displayName = isArabic ? "صلاح عياش" : "Salah Ayash";
const greetingPrefix = t("greeting")
  .replace(displayName, "")
  .trim();

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        dir={isArabic ? "rtl" : "ltr"}
        
className="relative grid min-h-[75vh] scroll-mt-24 items-center gap-10 overflow-hidden px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:px-12"

      >
        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]"
        />

        {/* LEFT: Introduction */}
        
<div className="relative z-10 min-w-0 lg:ps-4">

          {/* Developer badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2.5"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/40" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-blue-400" />
            </span>

            <span className="text-xs font-semibold tracking-wide text-blue-300 sm:text-sm">
              {isArabic
                ? "تطوير الويب • تطبيقات الجوال • الحوسبة السحابية"
                : "WEB • MOBILE • CLOUD"}
            </span>
          </motion.div>

          {/* Name */}
          
<motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.7, delay: 0.12 }}
  
className="mb-6 max-w-full text-4xl font-extrabold leading-[1.35] tracking-tight sm:text-5xl"

>
  <span className="block text-slate-200">
    {greetingPrefix}
  </span>

  <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
    {displayName}
  </span>
</motion.h1>


          {/* Developer role */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mb-5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-lg font-bold leading-relaxed text-transparent sm:text-xl lg:text-2xl"
          >
            {t("role")}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.32 }}
            className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)]"
            >
              {t("projects")}
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              {t("contact")}
            </a>
          </motion.div>

          {/* Technical highlights */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.52 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {[
              "Next.js",
              "Flutter",
              "Firebase",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="rounded-lg border border-blue-500/20 bg-[#111B2D] px-3 py-2 font-mono text-xs font-medium text-slate-400"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Developer terminal */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative z-10 min-w-0"
        >
          {/* Terminal glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-[35px] bg-blue-600/10 blur-3xl"
          />

          <div
            dir="ltr"
            className="relative overflow-hidden rounded-3xl border border-blue-400/25 bg-gradient-to-br from-[#111D32] via-[#0D1729] to-[#0A1220] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
          >
            {/* Top highlight */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="font-mono text-xs text-slate-400">
                developer.ts
              </span>

              <span className="text-blue-400">
                {"</>"}
              </span>
            </div>

            {/* Terminal code */}
            <div className="overflow-x-auto px-4 py-7 text-left sm:px-7">
              <pre className="whitespace-pre-wrap break-words font-mono text-[11px] leading-8 sm:text-sm">
                <code>
                  <span className="text-purple-400">
                    const
                  </span>
                  {" "}
                  <span className="text-cyan-300">
                    developer
                  </span>
                  {" = {\n"}

                  {developerInfo.map((item, index) => (
                    <span
                      key={item.key}
                      className="block"
                    >
                      <span className="text-slate-400">
                        {"  "}
                      </span>

                      <span className="text-blue-300">
                        {item.key}
                      </span>

                      <span className="text-slate-400">
                        {": "}
                      </span>

                      <span className="text-emerald-300">
                        {item.value}
                      </span>

                      <span className="text-slate-500">
                        {index < developerInfo.length - 1
                          ? ","
                          : ""}
                      </span>
                    </span>
                  ))}

                  <span className="text-slate-300">
                    {"};"}
                  </span>
                </code>
              </pre>

              {/* Terminal message */}
              <div className="mt-8 border-t border-white/10 pt-6 font-mono text-xs">
                <p className="text-slate-500">
                  <span className="text-green-400">
                    ✓
                  </span>{" "}
                  {isArabic
                    ? "جاهز لبناء حلول رقمية جديدة"
                    : "Ready to build digital solutions"}
                </p>

                <div className="mt-4 flex items-center gap-2 text-blue-300">
                  <span className="text-emerald-400">
                    ➜
                  </span>

                  <span className="text-slate-400">
                    ~
                  </span>

                  <span
                    aria-hidden="true"
                    className="inline-block h-4 w-2 animate-pulse bg-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Terminal footer */}
            <div className="flex items-center justify-between border-t border-white/10 bg-[#0A1324] px-5 py-3 font-mono text-[10px] text-slate-500 sm:text-xs">
              <span>TypeScript</span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Portfolio
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
