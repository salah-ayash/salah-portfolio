
"use client";

import { motion, MotionConfig } from "motion/react";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  const achievements = [
    { id: "cctv", text: t("cctv") },
    { id: "iot", text: t("iot") },
    { id: "aws", text: t("aws") },
    { id: "support", text: t("support") },
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
    <MotionConfig reducedMotion="user">
      <section
        id="experience"
        className="scroll-mt-24 border-t border-white/10 py-24"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold tracking-wider text-blue-400">
            {t("eyebrow")}
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            {t("title")}
          </h2>

          <div className="my-6 h-1 w-20 rounded-full bg-blue-500" />

          <p className="max-w-2xl leading-8 text-slate-400">
            {t("description")}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="flex items-stretch gap-5">

          {/* Timeline Indicator */}
          <div className="flex shrink-0 flex-col items-center">
            <span className="h-5 w-5 rounded-full border-4 border-blue-400 bg-[#080B14] shadow-[0_0_20px_rgba(59,130,246,0.7)]" />
            <div className="mt-2 w-0.5 flex-1 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />
          </div>

          {/* Experience Card */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#101827] p-5 transition-colors duration-300 hover:border-blue-500/40 sm:p-8"
          >

            {/* Job Header */}
            <div className="mb-8 border-b border-white/10 pb-6">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {t("role")}
              </h3>

              <p className="mt-3 text-base font-medium text-blue-400">
                {t("company")}
              </p>
            </div>

            {/* Professional Achievements */}
            <div className="space-y-5">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />

                  <p className="leading-7 text-slate-300">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    dir="ltr"
                    className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-300 transition-colors hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </MotionConfig>
  );
}
