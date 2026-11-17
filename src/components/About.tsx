
"use client";

import { motion, MotionConfig } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

// Keep English technical terms in the correct direction
// when they appear inside Arabic sentences.

const technicalTerms =
  /(Bumi Terus ITS Sdn\. Bhd\.|Bumi Terus ITS|Next\.js|UTeM|Flutter|Firebase|MySQL|AWS|React|PHP|IoT|C\+\+)/g;

function formatMixedText(text: string) {
  return text.split(technicalTerms).map((part, index) => {
    // Matched technical terms are at odd indices
    if (index % 2 === 1) {
      return (
        <bdi key={index} dir="ltr">
          {part}
        </bdi>
      );
    }

    return part;
  });
}


export default function About() {
  const t = useTranslations("About");
  const isArabic = useLocale() === "ar";

  const highlights = [
    {
      id: "01",
      label: t("educationTitle"),
      value: t("educationValue"),
      icon: "🎓",
    },
    {
      id: "02",
      label: t("experienceTitle"),
      value: t("experienceValue"),
      icon: "💼",
    },
    {
      id: "03",
      label: t("focusTitle"),
      value: t("focusValue"),
      icon: "💻",
    },
  ];

  const renderText = (text: string) =>
    isArabic ? formatMixedText(text) : text;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        dir={isArabic ? "rtl" : "ltr"}
        
        className="relative isolate w-full scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#080B14] py-20 sm:py-24"
      >
        {/* Background Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[120px]"
        />

        {/* Centered Content Container */}
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="min-w-0 text-start"
            >
              {/* Eyebrow */}
              <span
                className={`mb-5 inline-block text-xs font-bold text-blue-400 sm:text-sm ${
                  isArabic
                    ? ""
                    : "uppercase tracking-[0.15em]"
                }`}
              >
                {t("eyebrow")}
              </span>

              {/* Heading */}
              <h2 className="max-w-xl text-3xl font-extrabold leading-[1.5] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>

              {/* Accent Line */}
              <div className="my-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

              {/* Description */}
              <p
                dir={isArabic ? "rtl" : "ltr"}
                className="max-w-xl text-base leading-9 text-slate-400 sm:text-lg sm:leading-10"
              >
                {renderText(t("description"))}
              </p>
            </motion.div>

            {/* Information Cards */}
            <div className="grid min-w-0 gap-4">
              {highlights.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#111D32] to-[#0D1729] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-blue-400/40 sm:p-6"
                >
                  {/* Card Background Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -end-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.07] blur-3xl transition-colors group-hover:bg-blue-500/[0.12]"
                  />

                  <div className="relative flex min-w-0 items-start gap-4 sm:gap-5">

                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl transition-colors duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
                      <span aria-hidden="true">
                        {item.icon}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="min-w-0 flex-1 text-start">
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-3">

                        <h3 className="text-sm font-bold text-blue-400 sm:text-base">
                          {item.label}
                        </h3>

                        <span
                          dir="ltr"
                          className="font-mono text-xs text-slate-600"
                        >
                          {item.id}
                        </span>
                      </div>

                      <p
                        dir={isArabic ? "rtl" : "ltr"}
                        className="break-words text-sm leading-8 text-slate-300 sm:text-base"
                      >
                        {renderText(item.value)}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 start-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
