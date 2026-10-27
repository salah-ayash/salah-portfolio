
"use client";

import { motion, MotionConfig } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Project Data Type
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

// Reusable Project Card
function ProjectCard({
  project,
  featured,
  featuredLabel,
  previewLabel,
}: {
  project: Project;
  featured: boolean;
  featuredLabel: string;
  previewLabel: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group flex min-w-0 flex-col rounded-3xl border border-white/10 bg-[#101827] p-4 transition-colors duration-300 hover:border-blue-500/50"
    >
      {/* Project Preview */}
      <div
        className={`relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
      >
        {project.image ? (
          // Clickable Project Screenshot
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${previewLabel}: ${project.title}`}
            className="absolute inset-0 block cursor-zoom-in"
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        ) : (
          // Gradient Placeholder
          <>
            {/* Decorative Circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -end-10 -top-12 h-48 w-48 rounded-full border border-white/15"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute end-5 top-5 h-28 w-28 rounded-full border border-white/10"
            />

            {/* Project Name */}
            <div
              className="absolute bottom-5 start-5"
              dir="ltr"
            >
              <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {project.mark}
              </h3>

              <p className="mt-2 text-xs text-slate-300">
                {previewLabel}
              </p>
            </div>
          </>
        )}

        {/* Featured Badge */}
        <div className="pointer-events-none absolute start-4 top-4 z-10">
          <span className="rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {featured ? featuredLabel : project.number}
          </span>
        </div>
      </div>

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-3">

        {/* Project Title */}
        <h3 className="mt-3 text-xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              dir="ltr"
              className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// Main Projects Section
export default function Projects() {
  const t = useTranslations("Projects");

  const projects: Project[] = [
    // 01 - IQRA
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

    // 02 - CCTV
    {
      id: "cctv",
      number: "02",
      mark: "CCTV",
      title: t("cctv.title"),
      description: t("cctv.description"),
      technologies: [
        "Flutter",
        "RTSP",
        "VLC",
        "Dahua API",
      ],
      gradient:
        "from-cyan-500/30 via-blue-900/30 to-[#0B1220]",
    },

    // 03 - IoT Dashboard
    {
      id: "iot",
      number: "03",
      mark: "IoT",
      title: t("iot.title"),
      description: t("iot.description"),
      technologies: [
        "Web",
        "JavaScript",
        "Shelly API",
        "IoT",
      ],
      gradient:
        "from-violet-500/30 via-blue-900/30 to-[#0B1220]",
    },

    // 04 - AWS Cloud
    {
      id: "aws",
      number: "04",
      mark: "AWS",
      title: t("aws.title"),
      description: t("aws.description"),
      technologies: [
        "AWS S3",
        "Lambda",
        "Kinesis",
        "GStreamer",
      ],
      gradient:
        "from-orange-500/25 via-slate-900 to-[#0B1220]",
    },

    // 05 - Equipment Rental
    {
      id: "rental",
      number: "05",
      mark: "RENTAL",
      title: t("rental.title"),
      description: t("rental.description"),
      technologies: [
        "C++",
        "MySQL",
        "SQL",
      ],
      gradient:
        "from-amber-500/25 via-blue-950 to-[#0B1220]",
    },

    // 06 - Melaka Wanderlust
    {
      id: "wanderlust",
      number: "06",
      mark: "TRAVEL",
      title: t("wanderlust.title"),
      description: t("wanderlust.description"),
      technologies: [
        "Flutter",
        "Dart",
        "Mobile",
      ],
      gradient:
        "from-emerald-500/25 via-blue-950 to-[#0B1220]",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="projects"
        className="scroll-mt-24 border-t border-white/10 py-24"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold text-blue-400">
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

        {/* Top Three Featured Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={true}
              featuredLabel={t("featured")}
              previewLabel={t("preview")}
            />
          ))}
        </div>

        {/* Other Major Projects */}
        <h3 className="mb-7 mt-16 text-2xl font-bold text-white">
          {t("more")}
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={false}
              featuredLabel={t("featured")}
              previewLabel={t("preview")}
            />
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}
