
"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const copy = {
  en: {
    back: "Back to Projects",
    badge: "INDUSTRY PROJECT · CLOUD ENGINEERING",
    title: "AWS Cloud Video Streaming",
    headline: "From an RTSP camera to the AWS cloud.",
    intro:
      "During my industrial training at Bumi Terus ITS Sdn. Bhd., I worked on connecting an RTSP CCTV camera to Amazon Kinesis Video Streams using the C++ Producer SDK, GStreamer, and WSL. This case study explains the integration process, challenges, and documented result.",

    explore: "Explore the Architecture",
    process: "Implementation Steps",
    company: "Company",
    role: "My Role",
    roleValue: "Software Development Intern",
    timeframe: "Project Period",
    timeframeValue: "Industrial Training · 2024–2025",

    outcomeLabel: "DOCUMENTED PROJECT RESULT",
    outcomeTitle:
      "RTSP feed successfully sent to AWS Kinesis Video Streams",
    outcomeDetail:
      "My industrial training report records a successful upload of CCTV video and verification of the stream in AWS. This is a historical project result, not a currently running public feed.",

    overline1: "01 / CONTEXT",
    heading1: "The Problem We Were Solving",
    challenge: "The Challenge",
    challengeText:
      "A security-camera feed is useful locally, but cloud integration requires an end-to-end media pipeline: a camera source, compatible encoding, a producer application, AWS credentials, and a way to verify ingestion.",
    objective: "My Objective",
    objectiveText:
      "Configure a development environment, build the Kinesis Video Streams producer components, stream footage from an RTSP camera using GStreamer, and confirm that AWS received the video.",

    overline2: "02 / SYSTEM DESIGN",
    heading2: "Inside the Video Streaming Pipeline",
    architectureText:
      "Select each stage to explore its role. This is an interactive architecture explanation—not an active stream or connected cloud account.",
    exploreStage: "SELECTED COMPONENT",
    stageDisclaimer:
      "Architecture walkthrough · No live camera or AWS connection",

    stages: [
      {
        icon: "📷",
        label: "01 / VIDEO SOURCE",
        title: "RTSP CCTV Camera",
        short: "Provides the network video source",
        details:
          "The camera supplied footage through an RTSP URL. During testing, the source and credentials were configured locally; real camera addresses and passwords are not shown on this public page.",
      },
      {
        icon: "🐧",
        label: "02 / RUNTIME",
        title: "WSL / Ubuntu",
        short: "Hosts the Linux streaming tools",
        details:
          "I installed Windows Subsystem for Linux and used its Ubuntu environment to build and run the C++ SDK and GStreamer tools.",
      },
      {
        icon: "⚙️",
        label: "03 / MEDIA PIPELINE",
        title: "GStreamer + kvssink",
        short: "Processes and publishes the feed",
        details:
          "GStreamer handled the incoming RTSP stream and encoding pipeline. The kvssink plugin, built from the AWS C++ Producer SDK, published media into Kinesis Video Streams.",
      },
      {
        icon: "☁️",
        label: "04 / CLOUD DESTINATION",
        title: "AWS Kinesis Video Streams",
        short: "Receives and stores video fragments",
        details:
          "AWS Kinesis Video Streams was the cloud destination. I verified that the CCTV footage had reached the stream through the AWS viewing interface.",
      },
    ],

    overline3: "03 / IMPLEMENTATION",
    heading3: "How I Built and Tested It",

    steps: [
      {
        number: "01",
        title: "Prepared WSL 2",
        body:
          "Installed and configured a Linux environment on Windows to work with the SDK and GStreamer.",
      },
      {
        number: "02",
        title: "Retrieved the C++ Producer SDK",
        body:
          "Cloned the AWS-maintained Kinesis Video Streams Producer SDK for C++ from GitHub.",
      },
      {
        number: "03",
        title: "Built the SDK with CMake",
        body:
          "Configured and compiled the project with the GStreamer plugin enabled, then inspected the build output.",
      },
      {
        number: "04",
        title: "Verified the kvssink Plugin",
        body:
          "Configured plugin-library paths and confirmed that GStreamer could find kvssink.",
      },
      {
        number: "05",
        title: "Streamed and Verified the CCTV Feed",
        body:
          "Configured the RTSP pipeline, sent the video toward Kinesis Video Streams, and confirmed the recorded result in AWS.",
      },
    ],

    terminalTitle:
      "Representative Build and Verification Commands",
    terminalNote:
      "Sanitized examples based on the reported workflow; these are not a downloadable configuration and contain no real credentials.",

    overline4: "04 / ENGINEERING NOTES",
    heading4: "Challenges and What I Learned",

    challenges: [
      {
        icon: "🛠️",
        title: "Compiling Native Dependencies",
        body:
          "Working through CMake and C++ SDK build dependencies made me more comfortable debugging native Linux tooling.",
      },
      {
        icon: "🧩",
        title: "GStreamer Plugin Discovery",
        body:
          "A successful SDK build was only part of the process: the plugin also needed the correct environment configuration to become available to GStreamer.",
      },
      {
        icon: "🎞️",
        title: "Media Pipeline Compatibility",
        body:
          "RTSP streaming required the right sequence of media-processing and encoding elements before the feed could be published to AWS.",
      },
      {
        icon: "🔐",
        title: "Cloud Access Configuration",
        body:
          "The cloud destination required authenticated access and an AWS Region. Public demonstrations should never expose production keys or camera URLs.",
      },
    ],

    overline5: "05 / EVIDENCE & SCOPE",
    heading5:
      "Documented Work, Without Exposing Company Systems",
    evidenceTitle: "Original Industry Project · 2024–2025",
    evidenceText:
      "My UTeM industrial training report documents the WSL setup, SDK compilation, kvssink verification, terminal streaming output, and video visible in AWS Kinesis Video Streams. These are the evidence of the historical integration.",
    showcaseTitle: "Portfolio Case Study · 2026",
    showcaseText:
      "This page is a redesigned technical explanation. The architecture selector is interactive, but no real video is streamed and no AWS resources are accessed by visitors.",

    tech: "Technologies Used",
    openSource: "AWS C++ Producer SDK",
    footer: "Back to All Projects",
  },

  ar: {
    back: "العودة إلى المشاريع",
    badge: "مشروع صناعي · هندسة سحابية",
    title: "بث فيديو كاميرات المراقبة عبر AWS",
    headline: "من كاميرا RTSP إلى سحابة AWS.",
    intro:
      "خلال تدريبي الصناعي في شركة Bumi Terus ITS Sdn. Bhd.، عملت على ربط كاميرا مراقبة عبر بروتوكول RTSP بخدمة Amazon Kinesis Video Streams باستخدام C++ Producer SDK وGStreamer وWSL. توضح دراسة الحالة خطوات التكامل والتحديات والنتيجة الموثقة.",

    explore: "استكشف بنية النظام",
    process: "خطوات التنفيذ",
    company: "الشركة",
    role: "دوري",
    roleValue: "متدرب تطوير برمجيات",
    timeframe: "فترة المشروع",
    timeframeValue: "التدريب الصناعي · 2024–2025",

    outcomeLabel: "النتيجة الموثقة",
    outcomeTitle:
      "نجاح إرسال بث كاميرا RTSP إلى AWS Kinesis Video Streams",
    outcomeDetail:
      "يوثق تقرير تدريبي نجاح إرسال فيديو الكاميرا والتحقق من ظهوره في AWS. هذه نتيجة تاريخية للمشروع وليست بثاً عاماً يعمل حالياً.",

    overline1: "01 / خلفية المشروع",
    heading1: "المشكلة التي عملنا على حلها",
    challenge: "التحدي",
    challengeText:
      "لا يكفي وجود بث الكاميرا محلياً عند الرغبة في ربطه بالسحابة؛ إذ نحتاج إلى مصدر فيديو ومعالجة وترميز متوافق وبرنامج إرسال وصلاحيات AWS وطريقة للتحقق من وصول الفيديو.",
    objective: "الهدف من عملي",
    objectiveText:
      "إعداد بيئة التطوير وبناء مكونات Kinesis Video Streams وربط كاميرا RTSP باستخدام GStreamer والتحقق من وصول الفيديو إلى AWS.",

    overline2: "02 / بنية النظام",
    heading2: "كيف ينتقل الفيديو إلى السحابة؟",
    architectureText:
      "اضغط على كل مرحلة لفهم دورها. هذا شرح تفاعلي للبنية وليس بثاً مباشراً أو اتصالاً بحساب AWS.",
    exploreStage: "المكوّن المحدد",
    stageDisclaimer:
      "شرح بنية النظام · لا اتصال مباشر بكاميرات أو AWS",

    stages: [
      {
        icon: "📷",
        label: "01 / مصدر الفيديو",
        title: "كاميرا مراقبة RTSP",
        short: "توفّر بث الفيديو عبر الشبكة",
        details:
          "وفرت الكاميرا البث عبر رابط RTSP. جرى إعداد المصدر وبيانات الاتصال محلياً أثناء الاختبار، ولا تُعرض عناوين الكاميرات أو كلمات المرور الأصلية هنا.",
      },
      {
        icon: "🐧",
        label: "02 / بيئة التشغيل",
        title: "WSL / Ubuntu",
        short: "بيئة لينكس لأدوات البث",
        details:
          "ثبتُّ Windows Subsystem for Linux واستخدمت بيئة Ubuntu لبناء وتشغيل مكتبات C++ وأدوات GStreamer.",
      },
      {
        icon: "⚙️",
        label: "03 / معالجة الفيديو",
        title: "GStreamer + kvssink",
        short: "يعالج الفيديو ويرسله",
        details:
          "عالج GStreamer بث RTSP عبر عناصر المعالجة والترميز، ثم استخدم المكوّن kvssink المبني من مكتبة AWS لإرسال الفيديو إلى Kinesis Video Streams.",
      },
      {
        icon: "☁️",
        label: "04 / الوجهة السحابية",
        title: "AWS Kinesis Video Streams",
        short: "يستقبل مقاطع الفيديو ويحفظها",
        details:
          "كانت خدمة AWS Kinesis Video Streams هي الوجهة السحابية، وتحققتُ من وصول فيديو الكاميرا من خلال واجهة العرض في AWS.",
      },
    ],

    overline3: "03 / خطوات التنفيذ",
    heading3: "كيف بنيت الحل واختبرته؟",

    steps: [
      {
        number: "01",
        title: "تجهيز WSL 2",
        body:
          "تثبيت بيئة لينكس على Windows لإعداد أدوات SDK وGStreamer.",
      },
      {
        number: "02",
        title: "الحصول على مكتبة C++",
        body:
          "استنساخ مستودع AWS الرسمي لبرنامج Kinesis Video Streams Producer SDK for C++.",
      },
      {
        number: "03",
        title: "بناء المكتبة باستخدام CMake",
        body:
          "تجهيز المشروع وتجميعه مع تفعيل إضافة GStreamer وفحص نتائج البناء.",
      },
      {
        number: "04",
        title: "التحقق من إضافة kvssink",
        body:
          "ضبط مسارات المكتبات والتأكد من تعرّف GStreamer على إضافة kvssink.",
      },
      {
        number: "05",
        title: "إرسال الفيديو والتحقق منه",
        body:
          "إعداد مسار RTSP وإرسال الفيديو إلى Kinesis Video Streams والتحقق من النتيجة في AWS.",
      },
    ],

    terminalTitle: "أوامر توضيحية للبناء والتحقق",
    terminalNote:
      "أمثلة خالية من كلمات المرور مستندة إلى خطوات التقرير؛ ليست إعدادات تشغيل حقيقية أو ملفاً يحتوي على بيانات حساسة.",

    overline4: "04 / الجوانب الهندسية",
    heading4: "التحديات وما تعلمته",

    challenges: [
      {
        icon: "🛠️",
        title: "بناء المكتبات الأصلية",
        body:
          "ساعدني التعامل مع CMake ومكتبات C++ في تحسين مهارات تحليل أخطاء البناء في لينكس.",
      },
      {
        icon: "🧩",
        title: "التعرّف على إضافة GStreamer",
        body:
          "لم يكن بناء المكتبة وحده كافياً؛ بل كان من الضروري ضبط البيئة حتى يتمكن GStreamer من اكتشاف kvssink.",
      },
      {
        icon: "🎞️",
        title: "توافق مسار الفيديو",
        body:
          "احتاج بث RTSP إلى تسلسل صحيح من عناصر معالجة وترميز الفيديو قبل إرساله إلى AWS.",
      },
      {
        icon: "🔐",
        title: "صلاحيات الوصول للسحابة",
        body:
          "احتاج الاتصال إلى بيانات اعتماد ومنطقة AWS، ولذلك لا يجب عرض مفاتيح الإنتاج أو عناوين الكاميرات علناً.",
      },
    ],

    overline5: "05 / التوثيق وحدود العرض",
    heading5: "توثيق العمل دون كشف أنظمة الشركة",
    evidenceTitle: "المشروع الصناعي الأصلي · 2024–2025",
    evidenceText:
      "يوثق تقرير التدريب في جامعة UTeM تثبيت WSL وبناء المكتبة وفحص kvssink ومخرجات البث في الطرفية وظهور الفيديو في AWS Kinesis Video Streams.",
    showcaseTitle: "دراسة الحالة في البورتفوليو · 2026",
    showcaseText:
      "هذه الصفحة إعادة تقديم تقنية للمشروع، ويمكن التفاعل مع مخطط البنية، لكنها لا تبث فيديو حقيقياً ولا تصل إلى موارد AWS الخاصة بالشركة.",

    tech: "التقنيات المستخدمة",
    openSource: "مستودع AWS الرسمي لـ C++ Producer SDK",
    footer: "العودة إلى جميع المشاريع",
  },
};

const technologies = [
  "AWS Kinesis Video Streams",
  "GStreamer",
  "kvssink",
  "RTSP",
  "C++ Producer SDK",
  "CMake",
  "WSL 2 / Ubuntu",
  "Linux CLI",
  "H.264 Encoding",
  "AWS Credentials / Region",
];

const codeSample = `# Build overview (sanitized illustration)
cmake .. -DBUILD_GSTREAMER_PLUGIN=ON -DBUILD_JNI=TRUE
make

# Verify the plugin in the configured build environment
gst-inspect-1.0 kvssink

# Historical media flow — not a runnable production command
RTSP camera → decodebin → videoconvert → x264enc
            → h264parse → kvssink → AWS Kinesis`;

export default function AwsVideoStreamingPage() {
  const locale = useLocale();
  const ar = locale === "ar";
  const t = ar ? copy.ar : copy.en;

  const [activeStage, setActiveStage] = useState(0);
  const current = t.stages[activeStage];

  return (
    <main
      dir={ar ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#080B14] text-slate-100"
    >
      {/* Background effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-56 -top-52 h-[720px] w-[720px] rounded-full bg-amber-500/[0.09] blur-[140px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[-250px] top-[1100px] h-[700px] w-[700px] rounded-full bg-blue-500/[0.08] blur-[150px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">
        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <Link
            href="/#projects"
            className="text-slate-400 transition hover:text-amber-300"
          >
            {ar ? "→" : "←"} {t.back}
          </Link>

          <div dir="ltr" className="flex gap-2">
            <Link
              href="/projects/aws"
              locale="en"
              className={`rounded-xl border px-4 py-2 ${
                !ar
                  ? "border-amber-400/60 bg-amber-500/15 text-amber-200"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              English
            </Link>

            <Link
              href="/projects/aws"
              locale="ar"
              className={`rounded-xl border px-4 py-2 ${
                ar
                  ? "border-amber-400/60 bg-amber-500/15 text-amber-200"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              العربية
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header className="mt-16 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-amber-400/25 bg-amber-500/10 px-4 py-2 text-xs font-bold tracking-wider text-amber-300">
              {t.badge}
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 text-xl font-semibold leading-relaxed text-amber-300 sm:text-2xl">
              {t.headline}
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              {t.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#aws-architecture"
                className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-[#0B1220] transition hover:bg-amber-300"
              >
                {t.explore} ↗
              </a>

              <a
                href="#aws-process"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                {t.process}
              </a>
            </div>
          </div>

          {/* CSS-rendered architecture illustration */}
          <aside className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#201E2A] via-[#101A2E] to-[#0B1523] p-6 shadow-2xl shadow-amber-950/20 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                CLOUD PIPELINE
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                RTSP → AWS
              </span>
            </div>

            <div
              className="mt-7 flex flex-col items-center gap-2"
              dir="ltr"
            >
              {[
                ["📷", "RTSP CAMERA", "Video source"],
                ["🎞️", "GSTREAMER", "Media processing"],
                ["🔧", "kvssink", "C++ Producer SDK"],
                ["☁️", "AWS KINESIS", "Cloud video stream"],
              ].map((item, index) => (
                <div
                  key={item[1]}
                  className="flex w-full flex-col items-center gap-2"
                >
                  <div
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 ${
                      index === 3
                        ? "border-amber-400/40 bg-amber-400/10"
                        : "border-white/10 bg-[#18263A]/80"
                    }`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-2xl">
                      {item[0]}
                    </span>

                    <div>
                      <p className="text-xs font-extrabold tracking-wide text-white">
                        {item[1]}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {item[2]}
                      </p>
                    </div>

                    <span className="ms-auto font-mono text-xs text-amber-300">
                      0{index + 1}
                    </span>
                  </div>

                  {index !== 3 && (
                    <span className="text-lg leading-none text-amber-300/70">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </header>

        {/* Company and documented outcome */}
        <section className="mt-14 grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-2xl border border-white/10 bg-[#121C2E] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {t.company}
            </p>

            <p dir="ltr" className="mt-2 text-lg font-bold">
              Bumi Terus ITS Sdn. Bhd.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              {t.role}
            </p>

            <p className="mt-1 text-sm font-semibold">
              {t.roleValue}
            </p>

            <p className="mt-5 text-xs text-slate-500">
              {t.timeframe}
            </p>

            <p className="mt-1 text-sm font-semibold">
              {t.timeframeValue}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-[#122B2D] to-[#101C2D] p-6 sm:p-7">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {t.outcomeLabel}
            </div>

            <h2 className="mt-4 text-xl font-bold leading-relaxed sm:text-2xl">
              {t.outcomeTitle}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {t.outcomeDetail}
            </p>
          </div>
        </section>

        {/* Project context */}
        <section className="mt-24">
          <SectionTitle
            overline={t.overline1}
            title={t.heading1}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ContentCard
              icon="🎯"
              title={t.challenge}
              text={t.challengeText}
            />

            <ContentCard
              icon="💡"
              title={t.objective}
              text={t.objectiveText}
              accent
            />
          </div>
        </section>

        {/* Interactive architecture */}
        <section
          id="aws-architecture"
          className="mt-24 scroll-mt-24"
        >
          <SectionTitle
            overline={t.overline2}
            title={t.heading2}
          />

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            {t.architectureText}
          </p>

          <div className="mt-8 rounded-3xl border border-amber-500/20 bg-[#0D182A] p-4 sm:p-7">
            <div className="grid gap-3 md:grid-cols-4">
              {t.stages.map((stage, index) => (
                <button
                  key={index}
                  type="button"
                  aria-pressed={activeStage === index}
                  onClick={() => setActiveStage(index)}
                  className={`rounded-2xl border p-5 text-start transition duration-200 hover:-translate-y-1 ${
                    activeStage === index
                      ? "border-amber-400/60 bg-amber-500/15 shadow-lg shadow-amber-900/20"
                      : "border-white/10 bg-[#142238] hover:border-amber-400/30"
                  }`}
                >
                  <span className="text-3xl">
                    {stage.icon}
                  </span>

                  <p className="mt-5 text-[10px] font-bold tracking-widest text-amber-300">
                    {stage.label}
                  </p>

                  <h3 className="mt-2 text-base font-bold">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {stage.short}
                  </p>
                </button>
              ))}
            </div>

            <div
              className="mt-5 rounded-2xl border border-amber-400/20 bg-gradient-to-r from-[#1D283B] to-[#111F34] p-6"
              aria-live="polite"
            >
              <p className="text-xs font-bold tracking-wider text-amber-300">
                {t.exploreStage}
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-2xl">
                  {current.icon}
                </span>

                <h3 className="text-xl font-bold">
                  {current.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-8 text-slate-300">
                {current.details}
              </p>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              {t.stageDisclaimer}
            </p>
          </div>
        </section>

        {/* Implementation steps */}
        <section
          id="aws-process"
          className="mt-24 scroll-mt-24"
        >
          <SectionTitle
            overline={t.overline3}
            title={t.heading3}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#111B2D] p-6 transition hover:border-amber-400/30"
              >
                <span className="font-mono text-sm font-bold text-amber-300">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          {/* Code illustration */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#080F1C]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#17243A] px-5 py-3">
              <p className="text-xs font-bold text-slate-200">
                {t.terminalTitle}
              </p>

              <span className="font-mono text-xs text-amber-300">
                BASH
              </span>
            </div>

            <pre
              dir="ltr"
              className="overflow-x-auto p-5 text-left text-xs leading-7 text-emerald-200 sm:text-sm"
            >
              <code>{codeSample}</code>
            </pre>

            <p className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-slate-500">
              {t.terminalNote}
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-24">
          <SectionTitle
            overline={t.overline4}
            title={t.heading4}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.challenges.map((item, index) => (
              <article
                key={index}
                className="rounded-2xl border border-white/10 bg-[#101C2F] p-6"
              >
                <span className="text-3xl">
                  {item.icon}
                </span>

                <h3 className="mt-4 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Evidence and scope */}
        <section className="mt-24">
          <SectionTitle
            overline={t.overline5}
            title={t.heading5}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-400/20 bg-[#211E2A] p-7">
              <p className="text-xs font-bold tracking-wider text-amber-300">
                2024–2025
              </p>

              <h3 className="mt-4 text-lg font-bold">
                {t.evidenceTitle}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                {t.evidenceText}
              </p>
            </article>

            <article className="rounded-2xl border border-blue-400/20 bg-[#112338] p-7">
              <p className="text-xs font-bold tracking-wider text-blue-300">
                2026
              </p>

              <h3 className="mt-4 text-lg font-bold">
                {t.showcaseTitle}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                {t.showcaseText}
              </p>
            </article>
          </div>
        </section>

        {/* Technology stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            {t.tech}
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="rounded-full border border-amber-400/20 bg-amber-500/[0.08] px-4 py-2 text-sm text-amber-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-400">
            <a
              href="https://github.com/awslabs/amazon-kinesis-video-streams-producer-sdk-cpp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-300 underline underline-offset-4"
            >
              {t.openSource} ↗
            </a>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-9">
          <Link
            href="/#projects"
            className="inline-flex rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            {ar ? "→" : "←"} {t.footer}
          </Link>
        </footer>
      </div>
    </main>
  );
}

function SectionTitle({
  overline,
  title,
}: {
  overline: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-widest text-amber-300">
        {overline}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ContentCard({
  icon,
  title,
  text,
  accent = false,
}: {
  icon: string;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-7 ${
        accent
          ? "border-amber-400/25 bg-[#211F2D]"
          : "border-white/10 bg-[#111B2D]"
      }`}
    >
      <span className="text-3xl">
        {icon}
      </span>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-8 text-slate-400">
        {text}
      </p>
    </article>
  );
}
