
"use client";

import { motion, MotionConfig } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

// ==========================================
// PROJECT DATA TYPE
// ==========================================

type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  mark: string;
  image?: string;
  technologies: string[];
  gradient: string;
};

// ==========================================
// CCTV PROJECT LINKS
// ==========================================

const cctvLinks = {
  web: "https://salahayash.helioho.st/cctv/web/",
  android: "https://salahayash.helioho.st/cctv/",
  github: "https://github.com/salah804/cctv-camera-control",
};

// ==========================================
// REUSABLE PROJECT CARD
// ==========================================

function ProjectCard({
  project,
  featured,
  featuredLabel,
  previewLabel,
  isArabic,
}: {
  project: Project;
  featured: boolean;
  featuredLabel: string;
  previewLabel: string;
  isArabic: boolean;
}) {
  const isCctv = project.id === "cctv";
  const isIoT = project.id === "iot";
  const isAws = project.id === "aws";
  const isRental = project.id === "rental";
  const isWanderlust = project.id === "wanderlust";

  const detailsHref = isCctv
    ? "/projects/cctv"
    : isIoT
      ? "/projects/iot"
      : isAws
        ? "/projects/aws"
        : isRental
          ? "/projects/rental"
          : isWanderlust
            ? "/projects/wanderlust"
            : "/projects/iqra";

  const caseStudyLabel = isArabic
    ? "تفاصيل المشروع"
    : "View Case Study";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -5 }}
      className={`
        group relative flex h-full min-w-0 flex-col
        overflow-hidden rounded-[26px] border
        bg-gradient-to-br from-[#111D32]
        via-[#101827] to-[#0D1729]
        p-4 shadow-[0_12px_40px_rgba(0,0,0,0.14)]
        transition-colors duration-300
        ${
          isCctv
            ? "border-cyan-400/35 hover:border-cyan-400/70"
            : "border-blue-400/15 hover:border-blue-400/45"
        }
      `}
    >
      {/* Subtle card glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -end-20 -top-20 h-52 w-52 rounded-full blur-3xl ${
          isCctv ? "bg-cyan-500/10" : "bg-blue-500/[0.07]"
        }`}
      />

      {/* ==========================================
          PROJECT BANNER
      ========================================== */}

      <div
        className={`relative h-52 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br sm:h-56 ${project.gradient}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 sm:p-3"
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -end-10 -top-12 h-48 w-48 rounded-full border border-white/15"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute end-5 top-5 h-28 w-28 rounded-full border border-white/10"
            />

            <div className="absolute bottom-5 start-5" dir="ltr">
              <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {project.mark}
              </h3>

              <p className="mt-2 text-xs text-slate-300">
                {previewLabel}
              </p>
            </div>
          </>
        )}

        {/* Project badge */}
        <div className="pointer-events-none absolute start-3 top-3 z-10">
          {isCctv ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-[#061827]/90 px-3 py-2 text-[10px] font-bold text-cyan-300 shadow-lg backdrop-blur-md sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

              {isArabic
                ? "مشروع خلال التدريب العملي"
                : "COMPANY PROJECT"}
            </span>
          ) : (
            <span className="rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              {featured ? featuredLabel : project.number}
            </span>
          )}
        </div>

        {/* Special CCTV number */}
        {isCctv && (
          <span className="pointer-events-none absolute end-3 top-3 z-10 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            02
          </span>
        )}

        {isCctv && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#081522]/70 to-transparent" />
        )}
      </div>

      {/* ==========================================
          PROJECT INFORMATION
      ========================================== */}

      <div className="relative flex min-w-0 flex-1 flex-col px-2 pb-2 pt-5 sm:px-3">

        {/* Company recognition */}
        {isCctv && (
          <div className="mb-3 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-3">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
              <span aria-hidden="true">🏢</span>

              <span dir="ltr">
                Bumi Terus ITS Sdn. Bhd.
              </span>
            </div>

            <p className="mt-2 text-xs leading-6 text-slate-400">
              {isArabic
                ? "تم تطوير الوظائف الأساسية خلال التدريب العملي في ماليزيا"
                : "Developed during an industry internship in Malaysia"}
            </p>
          </div>
        )}

        {/* Project title */}
        <h3 className="text-start text-xl font-bold leading-8 text-white">
          <Link
            href={detailsHref}
            className={`inline-flex items-start gap-2 transition-colors ${
              isCctv
                ? "hover:text-cyan-300"
                : "hover:text-blue-300"
            }`}
          >
            <span>{project.title}</span>

            <span
              aria-hidden="true"
              className={`shrink-0 text-base ${
                isCctv ? "text-cyan-400" : "text-blue-400"
              }`}
            >
              ↗
            </span>
          </Link>
        </h3>

        {/* Project description */}
        <p className="mt-4 flex-1 text-start text-sm leading-8 text-slate-400">
          {project.description}
        </p>

        {/* CCTV project evolution */}
        {isCctv && (
          <div className="mt-5 rounded-xl border border-cyan-500/15 bg-cyan-500/5 p-4">
            <p className="text-xs font-bold text-cyan-300">
              {isArabic
                ? "من العمل في الشركة إلى نسخة عامة"
                : "FROM COMPANY TO PUBLIC RELEASE"}
            </p>

            <p className="mt-2 text-xs leading-7 text-slate-400">
              {isArabic
                ? "بدأ المشروع بوظائف مراقبة حقيقية خلال التدريب، ثم قمت بتوسيعه لاحقاً ليشمل تطبيق أندرويد ونسخة ويب تفاعلية."
                : "Started with real CCTV monitoring requirements, then independently expanded into an Android app and interactive Web experience."}
            </p>
          </div>
        )}

        {/* ==========================================
            TECHNOLOGY BADGES
        ========================================== */}

        <div className="mt-6 flex flex-wrap content-start gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              dir="ltr"
              className={`max-w-full rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ${
                isCctv
                  ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400/50"
                  : "border-blue-500/20 bg-blue-500/10 text-blue-300 hover:border-blue-400/50"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ==========================================
            PROJECT ACTIONS
        ========================================== */}

        <div className="mt-7 border-t border-white/10 pt-5">

          {isCctv ? (
            <>
              {/* CCTV primary actions */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/projects/cctv"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-2 py-3 text-center text-xs font-bold text-[#07111F] transition-colors hover:bg-cyan-300 sm:text-sm"
                >
                  {isArabic
                    ? "تفاصيل المشروع"
                    : "Case Study"}

                  <span aria-hidden="true">↗</span>
                </Link>

                <a
                  href={cctvLinks.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-2 py-3 text-center text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/20 sm:text-sm"
                >
                  <span aria-hidden="true">🌐</span>

                  {isArabic
                    ? "تجربة الويب"
                    : "Live Web App"}

                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* CCTV secondary actions */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">

                <a
                  href={cctvLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-cyan-300"
                >
                  <span aria-hidden="true">📱</span>

                  {isArabic
                    ? "تحميل أندرويد"
                    : "Android APK"}

                  <span aria-hidden="true">↗</span>
                </a>

                <span
                  aria-hidden="true"
                  className="text-slate-700"
                >
                  •
                </span>

                <a
                  href={cctvLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-cyan-300"
                >
                  GitHub

                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* CCTV platform distinction */}
              <p className="mt-4 text-center text-[11px] leading-6 text-slate-500">
                {isArabic
                  ? "الويب: إعداد الكاميرات ووضع تجريبي. البث المباشر عبر RTSP متاح على أندرويد."
                  : "Web: camera setup and simulated demo. Live RTSP playback is available on Android."}
              </p>
            </>
          ) : (
            /* Other five projects */
            <Link
              href={detailsHref}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-blue-400/25 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-200 transition-colors duration-300 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white"
            >
              {caseStudyLabel}

              <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 start-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
          isCctv
            ? "bg-gradient-to-r from-cyan-500 to-blue-400"
            : "bg-gradient-to-r from-blue-500 to-cyan-400"
        }`}
      />
    </motion.article>
  );
}

// ==========================================
// MAIN PROJECTS SECTION
// ==========================================

export default function Projects() {
  const t = useTranslations("Projects");
  const isArabic = useLocale() === "ar";

  const projects: Project[] = [
    // 01 — IQRA ARABIC LEARNING
    {
      id: "iqra",
      number: "01",
      mark: "IQRA",
      image: "/projects/iqra.png",
      title: t("iqra.title"),
      description: t("iqra.description"),
      technologies: [
        "Flutter",
        "PHP",
        "MySQL",
        "Android",
        "Web",
      ],
      gradient:
        "from-lime-500/30 via-blue-900/30 to-[#0B1220]",
    },

    // 02 — CCTV CAMERA CONTROL
    {
      id: "cctv",
      number: "02",
      mark: "CCTV",
      image: "/projects/cctv-gallery/showcase.png",
      title: t("cctv.title"),

      description: isArabic
        ? "مشروع بدأ خلال تدريبي العملي في شركة Bumi Terus ITS Sdn. Bhd.، حيث عملت على بث كاميرات المراقبة وتشغيل التسجيلات باستخدام RTSP وVLC وDahua API. ثم واصلت تطويره بإضافة ميزات الحسابات وإصدار أندرويد وتطبيق ويب تفاعلي."
        : "Originally developed during my internship at Bumi Terus ITS Sdn. Bhd., where I worked on RTSP camera monitoring and recorded playback using VLC and Dahua APIs. I later enhanced it with account management, an Android release, and an interactive Web application.",

      technologies: [
        "Flutter",
        "RTSP",
        "VLC",
        "Dahua API",
        "PHP",
        "MySQL",
        "Flutter Web",
      ],
      gradient:
        "from-cyan-500/30 via-blue-900/30 to-[#0B1220]",
    },

    // 03 — SMART IOT DASHBOARD
    {
      id: "iot",
      number: "03",
      mark: "IoT",
      title: t("iot.title"),
      description: t("iot.description"),
      image:
        "/projects/iot-gallery/Neon IoT Control Centre Dashboard.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Shelly API",
        "IoT",
      ],
      gradient:
        "from-violet-500/30 via-cyan-900/30 to-[#0B1220]",
    },

    // 04 — AWS VIDEO STREAMING
    {
      id: "aws",
      number: "04",
      mark: "AWS",
      title: t("aws.title"),
      description: t("aws.description"),
      image:
        "/projects/aws-gallery/AWS Cloud Video Streaming Pipeline.png",
      technologies: [
        "AWS Kinesis",
        "GStreamer",
        "RTSP",
        "C++",
        "WSL / Ubuntu",
      ],
      gradient:
        "from-orange-500/25 via-blue-900/20 to-[#0B1220]",
    },

    // 05 — HEAVY EQUIPMENT RENTAL
    {
      id: "rental",
      number: "05",
      mark: "RENTAL",
      title: t("rental.title"),
      description: t("rental.description"),
      image:
        "/projects/rental-gallery/Heavy Equipment Rental System Banner.png",
      technologies: [
        "C++",
        "MySQL",
        "SQL",
        "OOP",
        "Visual Studio",
      ],
      gradient:
        "from-amber-500/25 via-blue-950 to-[#0B1220]",
    },

    // 06 — MELAKA WANDERLUST
    {
      id: "wanderlust",
      number: "06",
      mark: "TRAVEL",
      title: t("wanderlust.title"),
      description: t("wanderlust.description"),
      image:
        "/projects/wanderlust-gallery/Melaka Wanderlust_ Explore, Plan, Discover.png",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Google Maps",
        "Trip Planning",
      ],
      gradient:
        "from-orange-500/25 via-emerald-950 to-[#0B1220]",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="projects"
        dir={isArabic ? "rtl" : "ltr"}
        className="relative isolate w-full scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#080B14] py-20 sm:py-24"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-blue-600/[0.07] blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-cyan-500/[0.05] blur-[120px]"
        />

        {/* Centered content */}
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">

          {/* ======================================
              SECTION HEADING
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-start"
          >
            <span
              className={`inline-block text-xs font-bold text-blue-400 sm:text-sm ${
                isArabic ? "" : "uppercase tracking-[0.15em]"
              }`}
            >
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            <div className="my-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              {t("description")}
            </p>
          </motion.div>

          {/* ======================================
              FEATURED PROJECTS
          ====================================== */}

          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={true}
                featuredLabel={t("featured")}
                previewLabel={t("preview")}
                isArabic={isArabic}
              />
            ))}
          </div>

          {/* ======================================
              OTHER MAJOR PROJECTS
          ====================================== */}

          <div className="mb-7 mt-16 flex items-center gap-4">
            <h3 className="shrink-0 text-xl font-bold text-white sm:text-2xl">
              {t("more")}
            </h3>

            <div className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent" />
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={false}
                featuredLabel={t("featured")}
                previewLabel={t("preview")}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
