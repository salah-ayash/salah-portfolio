
"use client";

import { motion, MotionConfig } from "motion/react";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");

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
        "Speech Recognition",
        "speech_to_text",
        "audioplayers",
        "flutter_vlc_player",
        "shared_preferences",
        "image_picker",
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
        "Shelly Devices",
        "Shelly API",
        "Real-Time Monitoring",
        "Remote Device Control",
        "Device Integration",
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
        "Java Swing",
        "MySQL Workbench",
        "WAMP",
        "WSL / Ubuntu",
        "CMake",
        "Netlify",
        "HelioHost",
        "Vercel",
      ],
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/10 py-24"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Technical Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101827] p-6 transition-colors duration-300 hover:border-blue-500/50"
            >
              {/* Decorative Background Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -end-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"
              />

              <div className="relative">
                {/* Category Number and Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-sm text-blue-400">
                    {category.id}
                  </span>

                  <span className="text-3xl">
                    {category.icon}
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="mb-6 text-xl font-bold text-white">
                  {category.title}
                </h3>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      dir="ltr"
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}
