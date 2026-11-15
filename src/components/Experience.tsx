
"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

type IconName = "camera" | "monitor" | "cloud" | "tools";

function ExperienceIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      {name === "camera" && (
        <>
          <path d="m3 7 15 4-2 6-15-4 2-6Z" />
          <path d="m18 11 3-1-2 6-3 1" />
          <path d="M11 16v5" />
          <path d="M7 21h8" />
        </>
      )}

      {name === "monitor" && (
        <>
          <rect x="2" y="3" width="20" height="15" rx="2" />
          <path d="M8 22h8M12 18v4" />
          <path d="m6 13 4-4 3 2 5-5" />
        </>
      )}

      {name === "cloud" && (
        <>
          <path d="M7 18a5 5 0 0 1-.6-9.96A7 7 0 0 1 20 10a4 4 0 0 1-1 8H7Z" />
          <path d="m9 14 3-3 3 3" />
          <path d="M12 11v9" />
        </>
      )}

      {name === "tools" && (
        <>
          <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 17.6 6.4 21l5.3-5.3a5 5 0 0 0 6.4-6.4L15 12l-3-3 2.7-2.7Z" />
          <path d="m15 15 6 6" />
        </>
      )}
    </svg>
  );
}

export default function Experience() {
  const t = useTranslations("Experience");
  const isArabic = useLocale() === "ar";

  const highlights: {
    icon: IconName;
    title: string;
    description: string;
  }[] = [
    {
      icon: "camera",
      title: isArabic
        ? "تطوير تطبيق كاميرات المراقبة"
        : "Flutter CCTV Application",
      description: t("cctv"),
    },
    {
      icon: "monitor",
      title: isArabic
        ? "لوحة تحكم إنترنت الأشياء"
        : "IoT Monitoring Dashboard",
      description: t("iot"),
    },
    {
      icon: "cloud",
      title: isArabic
        ? "بث الفيديو عبر AWS"
        : "AWS Video Streaming",
      description: t("aws"),
    },
    {
      icon: "tools",
      title: isArabic
        ? "الدعم الفني الميداني"
        : "On-site Technical Support",
      description: t("support"),
    },
  ];

  const technologies = [
    "Flutter",
    "PHP",
    "MySQL",
    "AWS",
    "IoT",
    "RTSP",
    "REST APIs",
  ];

  return (
    <section
      id="experience"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#080B14] py-24 sm:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 sm:text-sm">
            {t("eyebrow")}
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            {t("description")}
          </p>
        </motion.div>

        {/* Career timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute bottom-0 top-3 hidden w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent sm:block ${
              isArabic ? "right-2" : "left-2"
            }`}
          />

          {/* Timeline marker */}
          <div
            className={`absolute top-5 z-10 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-blue-400 bg-[#080B14] shadow-[0_0_20px_rgba(59,130,246,0.45)] sm:flex ${
              isArabic ? "right-0" : "left-0"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className={`relative ${
              isArabic ? "sm:mr-12" : "sm:ml-12"
            }`}
          >
            {/* Main career card */}
            <div className="overflow-hidden rounded-[28px] border border-blue-500/35 bg-gradient-to-br from-[#111D32] via-[#0D1729] to-[#0A1425] shadow-[0_20px_65px_rgba(0,0,0,0.2)]">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

              <div className="p-5 sm:p-8 lg:p-10">
                {/* Job header */}
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {t("role")}
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-blue-400 sm:text-base">
                      {t("company")}
                    </p>
                  </div>

                  <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-300 sm:text-xs">
                    {isArabic
                      ? "خبرة مهنية"
                      : "Industry Experience"}
                  </span>
                </div>

                <div className="my-8 h-px bg-white/10" />

                {/* Experience highlight cards */}
                <div className="grid gap-4 md:grid-cols-2">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.icon}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl border border-blue-400/15 bg-[#0B182C]/90 p-5 transition-colors duration-300 hover:border-blue-400/40 hover:bg-[#10213C] sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/15 to-cyan-400/5 text-cyan-400 transition-colors group-hover:border-cyan-400/40">
                          <ExperienceIcon name={item.icon} />
                        </div>

                        {/* Card information */}
                        <div className="min-w-0 flex-1">
                          <h4 className="text-base font-bold leading-7 text-white sm:text-lg">
                            {item.title}
                          </h4>

                          <p className="mt-3 text-sm leading-7 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-9 border-t border-white/10 pt-7">
                  <div className="flex flex-wrap gap-2.5">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        dir="ltr"
                        className="rounded-lg border border-blue-500/25 bg-blue-500/10 px-3.5 py-2 text-xs font-medium text-blue-200 transition-colors hover:border-blue-400/50 hover:bg-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
