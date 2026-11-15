
"use client";

import { motion, MotionConfig } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");
  const isArabic = useLocale() === "ar";

  const categories = [
    {
      id: "01",
      icon: "💻",
      title: t("languages"),
      technologies: [
        "Dart",
        "Java",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "C++",
        "SQL",
      ],
    },
    {
      id: "02",
      icon: "🎨",
      title: t("frontend"),
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Motion",
        "next-intl",
        "Responsive Web Design",
      ],
    },
    {
      id: "03",
      icon: "⚙️",
      title: t("backend"),
      technologies: [
        "PHP",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JSON",
        "OAuth",
        "CORS",
        "API Integration",
      ],
    },
    {
      id: "04",
      icon: "📱",
      title: t("mobile"),
      technologies: [
        "Flutter",
        "Dart",
        "Android",
        "Flutter Web",
        "Google Maps",
        "Geolocator",
        "Provider",
        "Firebase Integration",
        "Google Sign-In",
        "Speech Recognition",
        "RTSP Video Playback",
        "Image Picker",
      ],
    },
    {
      id: "05",
      icon: "🗄️",
      title: t("database"),
      technologies: [
        "MySQL",
        "SQLite",
        "SQL",
        "Database Design",
        "CRUD Operations",
      ],
    },
    {
      id: "06",
      icon: "🔥",
      title: t("firebase"),
      technologies: [
        "Firebase",
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Storage",
      ],
    },
    {
      id: "07",
      icon: "☁️",
      title: t("aws"),
      technologies: [
        "AWS S3",
        "AWS Lambda",
        "AWS Kinesis Video Streams",
        "AWS CloudWatch",
        "AWS IAM",
        "Cloud Storage",
        "S3 Event Triggers",
      ],
    },
    {
      id: "08",
      icon: "📹",
      title: t("video"),
      technologies: [
        "RTSP",
        "VLC",
        "GStreamer",
        "FFmpeg",
        "Dahua API",
        "ExacqVision",
        "NVR Playback",
        "Video Streaming",
      ],
    },
    {
      id: "09",
      icon: "🌐",
      title: t("iot"),
      technologies: [
        "IoT Dashboards",
        "Shelly Smart Switches",
        "Shelly API",
        "Real-Time Monitoring",
        "Remote Device Control",
        "Device API Integration",
      ],
    },
    {
      id: "10",
      icon: "🛠️",
      title: t("tools"),
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Android Studio",
        "Visual Studio",
        "MySQL Workbench",
        "WAMP",
        "WSL / Ubuntu",
        "CMake",
        "Netlify",
        "HelioHost",
        "Vercel",
        "Java Swing",
      ],
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="skills"
        dir={isArabic ? "rtl" : "ltr"}
        className="relative isolate w-full scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#080B14] py-20 sm:py-24"
      >
        {/* Background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/[0.07] blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[120px]"
        />

        {/* Centered content */}
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-start"
          >
            <span
              className={`inline-block text-xs font-bold uppercase text-blue-400 sm:text-sm ${
                isArabic ? "" : "tracking-[0.15em]"
              }`}
            >
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            {/* Accent line */}
            <div className="my-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              {t("description")}
            </p>
          </motion.div>

          {/* Technical skills grid */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#111D32] via-[#101827] to-[#0D1729] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-blue-400/45 sm:p-6"
              >

                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -end-12 -top-12 h-36 w-36 rounded-full bg-blue-500/[0.07] blur-3xl transition-colors duration-300 group-hover:bg-blue-500/[0.14]"
                />

                <div className="relative flex h-full flex-col">

                  {/* Category number and icon */}
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span
                      dir="ltr"
                      className="font-mono text-xs font-semibold tracking-widest text-blue-400 sm:text-sm"
                    >
                      {category.id}
                    </span>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl transition-colors duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
                      <span aria-hidden="true">
                        {category.icon}
                      </span>
                    </div>
                  </div>

                  {/* Category title */}
                  <h3 className="min-h-[3.5rem] text-start text-lg font-bold leading-7 text-white sm:text-xl">
                    {category.title}
                  </h3>

                  {/* Small accent separator */}
                  <div className="my-5 h-px w-full bg-gradient-to-r from-blue-500/30 via-white/10 to-transparent" />

                  {/* Technology badges */}
                  <div className="flex flex-wrap content-start gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        dir="ltr"
                        className="max-w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium leading-5 text-slate-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom hover accent */}
                <div className="absolute bottom-0 start-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
