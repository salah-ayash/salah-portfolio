
import IqraGallery from "@/components/IqraGallery";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";

export default async function IqraProjectPage() {
  const t = await getTranslations("Projects");
  const nav = await getTranslations("Navigation");
  const locale = await getLocale();

  // IQRA Technology Stack
  const technologies = [
    "Flutter",
    "Dart",
    "PHP",
    "MySQL",
    "REST APIs",
    "Speech Recognition",
    "Android",
    "Flutter Web",
    "SharedPreferences",
    "HelioHost",
  ];

  // IQRA Main Features
  const features = [
    { number: "01", icon: "🔐", text: t("iqra.feature1") },
    { number: "02", icon: "📚", text: t("iqra.feature2") },
    { number: "03", icon: "📝", text: t("iqra.feature3") },
    { number: "04", icon: "🎤", text: t("iqra.feature4") },
    { number: "05", icon: "📊", text: t("iqra.feature5") },
    { number: "06", icon: "🌍", text: t("iqra.feature6") },
  ];

  return (
    <main className="min-h-screen bg-[#080B14] text-white">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">

        {/* Navigation and Language Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Back to Projects */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-blue-400 transition hover:border-blue-500 hover:bg-blue-500/10"
          >
            <span aria-hidden="true">↩</span>
            {nav("projects")}
          </Link>

          {/* English / Arabic Switcher */}
          <div
            dir="ltr"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1"
          >
            <Link
              href="/projects/iqra"
              locale="en"
              aria-current={locale === "en" ? "page" : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                locale === "en"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              EN
            </Link>

            <Link
              href="/projects/iqra"
              locale="ar"
              aria-current={locale === "ar" ? "page" : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                locale === "ar"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              عربي
            </Link>
          </div>
        </div>

        {/* Project Introduction */}
        <div className="mt-12">
          <span className="text-sm font-semibold tracking-widest text-blue-400">
            IQRA
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            {t("iqra.title")}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
            {t("iqra.description")}
          </p>

          {/* IQRA Application Links */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Live Web Application */}
            <a
              href="https://salahayash.helioho.st/iqra/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span aria-hidden="true">🌐</span>
              {t("iqra.liveWeb")}
            </a>

            {/* Download Android APK */}
            <a
              href="https://salahayash.helioho.st/download/IQRA-v1.2.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-blue-500/40 bg-blue-500/10 px-6 py-3 font-semibold text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/20"
            >
              <span aria-hidden="true">📱</span>
              {t("iqra.downloadApk")}
            </a>

            {/* Official Download Page */}
            <a
              href="https://salahayash.helioho.st/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-purple-500/40 bg-purple-500/10 px-6 py-3 font-semibold text-purple-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/20"
            >
              <span aria-hidden="true">🔗</span>
              {t("iqra.downloadPage")}
            </a>

            {/* GitHub Source Code */}
            <a
              href="https://github.com/salah804/IQRA-Arabic-Learning-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-500/40 bg-slate-500/10 px-6 py-3 font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-500/20 hover:shadow-lg hover:shadow-slate-500/10"
            >
              <span aria-hidden="true">💻</span>
              {locale === "ar"
                ? "عرض الكود على GitHub"
                : "View Source on GitHub"}
            </a>

          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="mt-12 rounded-3xl border border-blue-500/20 bg-[#0D1527] p-4 sm:p-8">
          <IqraGallery />
        </div>

        {/* IQRA Key Features */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {t("iqra.featuresTitle")}
          </h2>

          <div className="my-6 h-1 w-20 rounded-full bg-blue-500" />

          {/* Feature Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-[#101827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_10px_35px_rgba(37,99,235,0.12)]"
              >

                {/* Feature Icon and Number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                    {feature.icon}
                  </div>

                  <span className="font-mono text-sm text-blue-400">
                    {feature.number}
                  </span>
                </div>

                {/* Feature Description */}
                <p className="font-medium leading-7 text-slate-200">
                  {feature.text}
                </p>

              </article>
            ))}
          </div>
        </section>

        {/* IQRA Technology Stack */}
        <section className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {t("iqra.technologiesTitle")}
          </h2>

          <div className="my-6 h-1 w-20 rounded-full bg-blue-500" />

          {/* Technology Badges */}
          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="rounded-xl border border-blue-500/20 bg-[#101827] px-5 py-3 text-sm font-medium text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
