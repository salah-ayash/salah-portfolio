
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import CctvGallery from "@/components/CctvGallery";

type Props = {
  params: Promise<{ locale: string }>;
};

const projectLinks = {
  web: "https://salahayash.helioho.st/cctv/web/",
  android: "https://salahayash.helioho.st/cctv/",
  github:
    "https://github.com/salah804/cctv-camera-control/tree/feature/cctv-web-demo",
};

const technologies = [
  "Flutter",
  "Dart",
  "RTSP",
  "VLC",
  "Dahua API",
  "PHP",
  "MySQL",
  "REST APIs",
  "Google Sign-In",
  "Flutter Web",
];

export default async function CctvPage({
  params,
}: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Projects",
  });

  const ar = locale === "ar";

  const content = ar
    ? {
        back: "العودة إلى المشاريع",
        badge: "مشروع عملي خلال التدريب في شركة",
        subtitle: "من تجربة عمل حقيقية إلى تطبيق متاح للجميع",
        description:
          "مشروع لتطوير نظام مراقبة كاميرات CCTV، بدأ خلال فترة تدريبي العملي في شركة Bumi Terus ITS Sdn. Bhd. في ماليزيا. عملت على وظائف البث المباشر وتشغيل التسجيلات والتكامل مع كاميرات المراقبة، ثم واصلت تطوير المشروع بإضافة ميزات إدارة الحسابات وإصدار أندرويد ونسخة تفاعلية للويب.",

        webButton: "تجربة تطبيق الويب",
        androidButton: "تحميل تطبيق أندرويد",
        githubButton: "عرض الكود على GitHub",

        companyLabel: "الجهة التي طُوّر المشروع خلالها",
        companyType: "مشروع خلال التدريب العملي",
        roleLabel: "دوري في المشروع",
        role: "متدرب في تطوير تطبيقات الويب والهاتف",
        locationLabel: "الموقع",
        location: "ماليزيا",
        contributionLabel: "طبيعة مساهمتي",
        contribution:
          "تطوير وظائف المراقبة بالفيديو والتعامل مع التسجيلات، ثم توسيع المشروع لاحقاً ليصبح نموذجاً عملياً متاحاً عبر أندرويد والويب.",

        storyEyebrow: "القصة وراء المشروع",
        storyTitle: "مشروع بدأ من بيئة عمل حقيقية",
        storyDescription:
          "ما يميز هذا المشروع أنه لم يبدأ كتجربة برمجية عادية، بل انطلق من متطلبات عملية في مجال أنظمة المراقبة. واصلت لاحقاً تطويره بنفسي لإظهار قدراتي في بناء تطبيقات متعددة المنصات.",

        phases: [
          {
            number: "01",
            label: "المرحلة الأولى",
            title: "التطوير خلال التدريب",
            description:
              "تطوير وظائف المراقبة المباشرة باستخدام RTSP وVLC، والعمل على استرجاع تسجيلات كاميرات Dahua وتشغيلها حسب التاريخ.",
          },
          {
            number: "02",
            label: "المرحلة الثانية",
            title: "توسيع المشروع وتطويره",
            description:
              "تحسين الواجهات وإضافة ميزات المصادقة وإدارة الحسابات والتكامل مع خدمات PHP وMySQL، مع توفير وضع تجريبي للمستخدمين.",
          },
          {
            number: "03",
            label: "المرحلة الثالثة",
            title: "النشر على أندرويد والويب",
            description:
              "إنشاء إصدار Android APK ونشر تطبيق Flutter Web يتيح تجربة الواجهات وإضافة إعدادات الكاميرات باستخدام عنوان RTSP أو عنوان IP.",
          },
        ],

        galleryTitle: "استعرض التطبيق",
        galleryDescription:
          "مجموعة من لقطات المشروع توضح تصميم لوحة التحكم ووظائف الحسابات والمراقبة وتشغيل التسجيلات.",

        featuresTitle: "الميزات والوظائف",
        featuresDescription:
          "الوظائف الرئيسية التي عملت عليها خلال تطوير نظام CCTV وتوسيعه ليشمل أندرويد والويب.",

        features: [
          {
            number: "01",
            title: "البث المباشر عبر RTSP",
            description:
              "عرض بث كاميرات IP المتوافقة مباشرة في تطبيق أندرويد باستخدام Flutter وتقنية VLC.",
            platform: "Android",
          },
          {
            number: "02",
            title: "تشغيل التسجيلات حسب التاريخ",
            description:
              "اختيار يوم محدد والوصول إلى فيديوهات المراقبة المسجلة مع واجهة للتحكم في التشغيل.",
            platform: "Android",
          },
          {
            number: "03",
            title: "التكامل مع Dahua API",
            description:
              "التواصل مع واجهات كاميرات Dahua للبحث عن التسجيلات واسترجاع معلومات الفيديو وتشغيله.",
            platform: "Camera Integration",
          },
          {
            number: "04",
            title: "إعداد وإدارة الكاميرات",
            description:
              "إضافة وتعديل وحذف إعدادات الكاميرات. تدعم نسخة الويب إدخال رابط RTSP أو عنوان IP مع بيانات الاتصال.",
            platform: "Android & Web",
          },
          {
            number: "05",
            title: "المصادقة وإدارة المستخدم",
            description:
              "تسجيل الدخول وإنشاء الحسابات وتسجيل الدخول باستخدام Google وتعديل الملف الشخصي واستعادة كلمة المرور.",
            platform: "Android & Web",
          },
          {
            number: "06",
            title: "الوضع التجريبي",
            description:
              "تجربة واجهات المراقبة وعرض فيديوهات محاكاة دون الحاجة إلى امتلاك كاميرا فعلية.",
            platform: "Android & Web",
          },
          {
            number: "07",
            title: "تطبيق ويب متجاوب",
            description:
              "توسيع مشروع Flutter للعمل عبر متصفحات الكمبيوتر والهاتف، مع تجربة مستخدم متجاوبة.",
            platform: "Flutter Web",
          },
          {
            number: "08",
            title: "خدمات الواجهة الخلفية",
            description:
              "استخدام PHP وMySQL وواجهات REST API لدعم المصادقة والجلسات وعمليات حساب المستخدم.",
            platform: "Backend",
          },
        ],

        techTitle: "التقنيات المستخدمة",
        techDescription:
          "مجموعة من الأدوات والتقنيات المستخدمة في تطوير التطبيق والتكامل مع الكاميرات والخدمات الخلفية.",

        showcaseTitle: "جرب المشروع بنفسك",
        showcaseDescription:
          "يمكنك تجربة التطبيق مباشرة في المتصفح، أو تحميل نسخة أندرويد للاستفادة من وظائف تشغيل بث كاميرات RTSP المتوافقة.",

        webNote:
          "تتيح نسخة الويب إعداد الكاميرات وتجربة الفيديوهات المحاكية. أما تشغيل بث RTSP الحقيقي عبر المتصفح فيتطلب خادماً وسيطاً للبث، ولم يتم تفعيله بعد.",

        footer: "عرض جميع المشاريع",
      }
    : {
        back: "Back to Projects",
        badge: "REAL-WORLD INDUSTRY PROJECT",
        subtitle:
          "From an industry challenge to a cross-platform CCTV solution.",
        description:
          "Originally developed during my Mobile & Web Development internship at Bumi Terus ITS Sdn. Bhd. in Malaysia, this project began with practical CCTV monitoring and recorded playback functionality. I later expanded it with account management, an Android release, and an interactive Flutter Web application.",

        webButton: "Launch Web App",
        androidButton: "Download Android APK",
        githubButton: "View Source Code",

        companyLabel: "Developed During Internship At",
        companyType: "INDUSTRY INTERNSHIP PROJECT",
        roleLabel: "My Role",
        role: "Mobile & Web Development Intern",
        locationLabel: "Location",
        location: "Malaysia",
        contributionLabel: "My Contribution",
        contribution:
          "Developed CCTV monitoring and recording workflows, then independently expanded the project into a public Android and Web showcase.",

        storyEyebrow: "BEHIND THE BUILD",
        storyTitle: "Built from real industry experience.",
        storyDescription:
          "This project started with practical camera-monitoring requirements during my internship—not just a classroom exercise. I continued developing the solution to demonstrate my ability to build, integrate, and deploy cross-platform applications.",

        phases: [
          {
            number: "01",
            label: "INDUSTRY DEVELOPMENT",
            title: "Built During My Internship",
            description:
              "Worked on RTSP live monitoring, VLC video playback, and date-based CCTV recording retrieval using Dahua camera APIs.",
          },
          {
            number: "02",
            label: "INDEPENDENT EXPANSION",
            title: "Enhanced into a Complete App",
            description:
              "Expanded the application with refined interfaces, authentication, user management, PHP/MySQL services, and a simulated camera demo.",
          },
          {
            number: "03",
            label: "PUBLIC DEPLOYMENT",
            title: "Released for Android & Web",
            description:
              "Published an Android APK and a responsive Flutter Web version with camera configuration through RTSP URLs or IP addresses.",
          },
        ],

        galleryTitle: "Explore the Application",
        galleryDescription:
          "A closer look at the camera dashboard, authentication screens, monitoring experience, and recording playback.",

        featuresTitle: "Key Features & Contributions",
        featuresDescription:
          "A combination of real CCTV integration, mobile development, backend services, and interactive Web functionality.",

        features: [
          {
            number: "01",
            title: "Real-Time RTSP Streaming",
            description:
              "Display live video from compatible IP cameras on Android using Flutter and VLC.",
            platform: "Android",
          },
          {
            number: "02",
            title: "Date-Based Video Playback",
            description:
              "Select a date to retrieve and watch recorded CCTV footage with playback controls.",
            platform: "Android",
          },
          {
            number: "03",
            title: "Dahua API Integration",
            description:
              "Integrate with Dahua camera endpoints to search recordings, retrieve video information, and manage playback.",
            platform: "Camera Integration",
          },
          {
            number: "04",
            title: "Camera Configuration",
            description:
              "Add, edit, and remove camera configurations. The Web version supports RTSP URL or IP address-based camera setup.",
            platform: "Android & Web",
          },
          {
            number: "05",
            title: "Secure Account Management",
            description:
              "Login, registration, Google Sign-In, profile updates, password recovery, and account session management.",
            platform: "Android & Web",
          },
          {
            number: "06",
            title: "Interactive Demo Mode",
            description:
              "Explore simulated camera monitoring and video playback without requiring physical CCTV hardware.",
            platform: "Android & Web",
          },
          {
            number: "07",
            title: "Responsive Flutter Web",
            description:
              "Adapted the application for desktop and mobile browsers with a responsive monitoring interface.",
            platform: "Flutter Web",
          },
          {
            number: "08",
            title: "PHP & MySQL Backend",
            description:
              "REST API integration for authentication, account data, password operations, and server-side sessions.",
            platform: "Backend",
          },
        ],

        techTitle: "Technology Stack",
        techDescription:
          "Technologies used across the Flutter application, camera integrations, and backend services.",

        showcaseTitle: "Experience the Project",
        showcaseDescription:
          "Explore the live Web application or download the Android APK to test supported RTSP camera streaming and playback.",

        webNote:
          "The Web version supports camera configuration and simulated footage. Live RTSP playback in browsers requires an additional streaming gateway and is not yet available.",

        footer: "View All Projects",
      };

  return (
    <main
      dir={ar ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#080B14] text-white"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[850px] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-14">

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-between gap-4">

          <Link
            href="/#projects"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            {ar ? "→" : "←"} {content.back}
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/projects/cctv"
              locale="en"
              className={`rounded-xl border px-4 py-2 text-sm transition ${
                !ar
                  ? "border-cyan-500 bg-cyan-500/15 text-cyan-300"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              English
            </Link>

            <Link
              href="/projects/cctv"
              locale="ar"
              className={`rounded-xl border px-4 py-2 text-sm transition ${
                ar
                  ? "border-cyan-500 bg-cyan-500/15 text-cyan-300"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              العربية
            </Link>
          </div>
        </nav>

        {/* =========================
            PROJECT HERO
           ========================= */}

        <header className="mt-14 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold tracking-wide text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              {content.badge}
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("cctv.title")}
            </h1>

            <p className="mt-6 max-w-3xl text-xl font-semibold leading-relaxed text-cyan-300 sm:text-2xl">
              {content.subtitle}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              {content.description}
            </p>

            {/* Platform badges */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Industry Project",
                "Flutter",
                "Android",
                "Flutter Web",
              ].map((item) => (
                <span
                  key={item}
                  dir="ltr"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Project links */}
            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href={projectLinks.web}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#07111F] shadow-lg shadow-cyan-500/15 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                <span>🌐</span>
                {content.webButton}
                <span>↗</span>
              </a>

              <a
                href={projectLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-200 transition hover:-translate-y-1 hover:bg-cyan-500/20"
              >
                <span>📱</span>
                {content.androidButton}
              </a>

              <a
                href={projectLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/30"
              >
                {content.githubButton}
                <span>↗</span>
              </a>

            </div>
          </div>

          {/* Industry / company card */}
          <aside className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-[#15354B] via-[#101D30] to-[#0B1423] p-7 shadow-2xl shadow-cyan-950/20 sm:p-8">

            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-widest text-cyan-300">
                  {content.companyType}
                </span>
                <span className="text-2xl">🏢</span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {content.companyLabel}
              </p>

              <h2
                dir="ltr"
                className="mt-3 text-2xl font-extrabold leading-snug text-white"
              >
                Bumi Terus ITS
                <span className="block text-lg font-semibold text-cyan-300">
                  Sdn. Bhd.
                </span>
              </h2>

              <div className="my-6 h-px bg-white/10" />

              <div className="space-y-5">
                <div>
                  <p className="text-xs text-slate-400">
                    {content.roleLabel}
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    {content.role}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    {content.locationLabel}
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    {content.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    {content.contributionLabel}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {content.contribution}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </header>

        {/* =========================
            PROJECT STORY
           ========================= */}

        <section className="mt-24">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
              {content.storyEyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {content.storyTitle}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              {content.storyDescription}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {content.phases.map((phase) => (
              <article
                key={phase.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-500/5 blur-3xl" />

                <div className="relative">
                  <span className="text-3xl font-black text-cyan-400/70">
                    {phase.number}
                  </span>

                  <p className="mt-5 text-xs font-bold tracking-widest text-cyan-400">
                    {phase.label}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {phase.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {phase.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            SCREENSHOT GALLERY
           ========================= */}

        <section className="mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {content.galleryTitle}
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-400">
              {content.galleryDescription}
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#0D1527] p-4 shadow-xl shadow-black/20 sm:p-8">
            <CctvGallery />
          </div>
        </section>

        {/* =========================
            KEY FEATURES
           ========================= */}

        <section className="mt-24">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {content.featuresTitle}
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-400">
            {content.featuresDescription}
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {content.features.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#122039]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-cyan-400">
                    {feature.number}
                  </span>

                  <span
                    dir="ltr"
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-300"
                  >
                    {feature.platform}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            TECHNOLOGIES
           ========================= */}

        <section className="mt-24">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {content.techTitle}
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-slate-400">
            {content.techDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-500/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* =========================
            FINAL PROJECT CTA
           ========================= */}

        <section className="mt-24 overflow-hidden rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-[#133047] via-[#102137] to-[#0B1425] p-7 sm:p-11">

          <div className="max-w-3xl">
            <span className="text-3xl">🚀</span>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              {content.showcaseTitle}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {content.showcaseDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={projectLinks.web}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#07111F] transition hover:bg-cyan-300"
              >
                🌐 {content.webButton} ↗
              </a>

              <a
                href={projectLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                📱 {content.androidButton}
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs leading-6 text-slate-400">
              {content.webNote}
            </p>
          </div>
        </section>

        {/* =========================
            BACK TO PROJECTS
           ========================= */}

        <div className="mt-20 border-t border-white/10 pt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            {ar ? "→" : "←"} {content.footer}
          </Link>
        </div>

      </div>
    </main>
  );
}
