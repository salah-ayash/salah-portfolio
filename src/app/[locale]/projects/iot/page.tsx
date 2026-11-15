
"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

type Device = {
  id: string;
  en: string;
  ar: string;
  icon: string;
  areaEn: string;
  areaAr: string;
  on: boolean;
  online: boolean;
};

// DEMO DEVICES ONLY — NOT REAL COMPANY DEVICES
const initialDevices: Device[] = [
  {
    id: "DEMO-001",
    en: "Smart Light",
    ar: "إضاءة ذكية",
    icon: "💡",
    areaEn: "Meeting Room",
    areaAr: "غرفة الاجتماعات",
    on: true,
    online: true,
  },
  {
    id: "DEMO-002",
    en: "Smart Plug",
    ar: "مقبس ذكي",
    icon: "🔌",
    areaEn: "Office",
    areaAr: "المكتب",
    on: false,
    online: true,
  },
  {
    id: "DEMO-003",
    en: "Wall Relay",
    ar: "مفتاح ذكي",
    icon: "⚡",
    areaEn: "Control Room",
    areaAr: "غرفة التحكم",
    on: true,
    online: true,
  },
  {
    id: "DEMO-004",
    en: "Ventilation Fan",
    ar: "مروحة تهوية",
    icon: "🌀",
    areaEn: "Server Room",
    areaAr: "غرفة الخوادم",
    on: false,
    online: false,
  },
];

const copy = {
  en: {
    back: "Back to Projects",
    eyebrow: "INDUSTRY PROJECT · CASE STUDY",
    title: "Smart IoT Device Control Dashboard",
    hero: "From connected hardware to a usable monitoring experience.",
    intro:
      "During my internship at Bumi Terus ITS Sdn. Bhd. in Malaysia, I worked on a custom web dashboard for monitoring and controlling Shelly IoT devices through API integration. This case study covers my original work and an independently redesigned, safe interactive demonstration.",

    explore: "Explore Interactive Demo",
    story: "Read the Case Study",
    company: "Company",
    role: "My Role",
    roleValue: "Mobile & Web Development Intern",
    period: "Internship Period",
    periodValue: "Oct 2024 – Mar 2025",
    format: "Project Format",
    formatValue: "Industry Project + Portfolio Redesign",

    overline: "01 / PROJECT OVERVIEW",
    overview: "The Challenge and Solution",
    problem: "The Challenge",
    problemText:
      "The existing device management workflow needed a clearer, company-branded interface for checking device information and controlling compatible Shelly equipment without relying on raw service responses.",
    solution: "My Implementation",
    solutionText:
      "I developed a custom HTML/CSS/JavaScript control interface, connecting it to local HTTP endpoints for device status and control. The interface included ON/OFF actions, status indicators, device search, theme switching, a live clock, and company branding.",

    contributionOverline: "02 / MY CONTRIBUTIONS",
    contributionTitle: "What I Worked On",
    features: [
      {
        icon: "🎛️",
        title: "Custom Dashboard UI",
        body:
          "Created a branded device-control screen with clear status information and action buttons.",
      },
      {
        icon: "🔗",
        title: "API Integration",
        body:
          "Connected the frontend to device-status GET requests and control-command POST requests.",
      },
      {
        icon: "📡",
        title: "Status Feedback",
        body:
          "Displayed ON, OFF, and unknown states, with handling for API errors and unavailable devices.",
      },
      {
        icon: "🔍",
        title: "Usability Improvements",
        body:
          "Added device search, dark-mode switching, and a continuously updated clock.",
      },
    ],

    architectureOverline: "03 / SYSTEM ARCHITECTURE",
    architectureTitle: "How the Original System Worked",
    architectureNote:
      "This represents the historical internship architecture. The public demo below does not connect to any of these services or devices.",
    steps: [
      {
        icon: "🔌",
        title: "Shelly Devices",
        body: "Physical IoT devices used during the internship",
      },
      {
        icon: "☁️",
        title: "Shelly / uShelly",
        body: "Open-source cloud integration and device events",
      },
      {
        icon: "⚙️",
        title: "Local Service Layer",
        body: "HTTP routes returning status and processing commands",
      },
      {
        icon: "🖥️",
        title: "Web Interface",
        body: "My device-control dashboard and user interactions",
      },
    ],

    originalRoutes: "Original API Endpoints",
    routesNote:
      "Documented routes from the original project, shown for explanation only. They are never called by this portfolio demo.",

    lessonsOverline: "04 / ENGINEERING LEARNINGS",
    lessonsTitle: "Challenges and Lessons",
    lessons: [
      {
        title: "Offline Is Different from OFF",
        body:
          "An offline device can still have a cached last-reported switch state. Connectivity and switch position must be displayed separately.",
      },
      {
        title: "Error Responses Matter",
        body:
          "A historical command returned WRONG_ID. I learned to handle rejected commands rather than assume every request succeeded.",
      },
      {
        title: "Clear Source Attribution",
        body:
          "The project used Allterco's open-source uShelly implementation as a foundation, alongside my custom interface and integration work.",
      },
    ],

    demoOverline: "05 / INTERACTIVE SHOWCASE",
    demoTitle: "Try the Redesigned IoT Dashboard",
    demoIntro:
      "A modern React demonstration of the ideas behind my original dashboard. Try searching, switching simulated devices ON/OFF, and checking the activity log. All data is fictional and stays inside your browser.",
    demoNotice:
      "SAFE DEMO · No Real Devices · No Company API · No Network Commands",

    evidenceOverline: "06 / EVIDENCE & TRANSPARENCY",
    evidenceTitle: "Real Industry Work. Clearly Labeled Redesign.",
    original: "Original Internship Work · 2024–2025",
    originalBody:
      "My UTeM industrial training report, original HTML/JavaScript interface, and historical API logs document the device-monitoring and control work. Company screenshots and private device information are not published here.",
    redesign: "Independent Portfolio Demo · 2026",
    redesignBody:
      "The interactive dashboard on this page is newly designed and powered entirely by local React state. It is a demonstration of skills, not a recording of the company system.",

    stack: "Technologies and Concepts",
    attribution: "Open-source foundation:",
    source: "Allterco uShelly on GitHub",
    footer: "Back to All Projects",

    dashboard: "IoT Control Center",
    demonstration: "Interactive Simulation",
    dashboardOverview: "Device Overview",
    dashboardSub: "Monitor and control sample smart devices",
    sample: "SIMULATED DATA",
    devices: "Devices",
    connected: "Online",
    switchedOn: "Switched ON",
    switchedOff: "Switched OFF",
    search: "Search demo devices...",
    reset: "Reset Demo",
    online: "Online",
    offline: "Offline",
    on: "ON",
    off: "OFF",
    lastKnown: "Last simulated state",
    commands: "Recent Demo Activity",
    noActivity:
      "Try switching a device ON or OFF to see its activity here.",
    changedOn: "turned ON",
    changedOff: "turned OFF",
    disabled: "Controls unavailable in offline demo state",
    chart: "Example Activity Chart",
    chartSub: "Illustrative values only — not real telemetry",
    localOnly:
      "All interactions update browser state only. No HTTP or Shelly requests are sent.",
  },

  ar: {
    back: "العودة إلى المشاريع",
    eyebrow: "مشروع صناعي · دراسة حالة",
    title: "لوحة تحكم أجهزة إنترنت الأشياء",
    hero: "تحويل الأجهزة المتصلة إلى تجربة مراقبة وتحكم واضحة.",
    intro:
      "خلال تدريبي في شركة Bumi Terus ITS Sdn. Bhd. في ماليزيا، عملت على لوحة تحكم ويب لمراقبة أجهزة Shelly والتعامل معها عبر واجهات API. تعرض هذه الصفحة تجربتي الأصلية وإعادة تصميم مستقلة وآمنة يمكن تجربتها مباشرة.",

    explore: "جرّب لوحة التحكم",
    story: "اقرأ دراسة الحالة",
    company: "الشركة",
    role: "دوري",
    roleValue: "متدرب تطوير الويب وتطبيقات الهاتف",
    period: "فترة التدريب",
    periodValue: "أكتوبر 2024 – مارس 2025",
    format: "نوع المشروع",
    formatValue: "مشروع صناعي + إعادة تصميم للمعرض الشخصي",

    overline: "01 / نظرة عامة",
    overview: "المشكلة والحل",
    problem: "التحدي",
    problemText:
      "كانت هناك حاجة إلى واجهة منظمة تحمل هوية الشركة لعرض بيانات الأجهزة والتحكم بالمعدات المتوافقة، بدلاً من الاعتماد على ردود الخدمات الخام.",
    solution: "ما نفذته",
    solutionText:
      "طورت واجهة تحكم باستخدام HTML وCSS وJavaScript وربطتها بواجهات HTTP محلية لجلب الحالة وإرسال الأوامر. تضمنت أزرار التشغيل والإيقاف ومؤشرات الحالة والبحث والوضع الداكن والساعة وهوية الشركة.",

    contributionOverline: "02 / مساهماتي",
    contributionTitle: "ما الذي عملت عليه؟",
    features: [
      {
        icon: "🎛️",
        title: "واجهة تحكم مخصصة",
        body:
          "تطوير شاشة تحمل هوية الشركة وتعرض حالة الأجهزة وأزرار التحكم بوضوح.",
      },
      {
        icon: "🔗",
        title: "ربط واجهات API",
        body:
          "ربط الواجهة بطلبات GET لحالة الأجهزة وPOST لإرسال أوامر التحكم.",
      },
      {
        icon: "📡",
        title: "متابعة حالة الأجهزة",
        body:
          "عرض حالات التشغيل والإيقاف وعدم توفر المعلومات مع معالجة أخطاء الاتصال.",
      },
      {
        icon: "🔍",
        title: "تحسين تجربة الاستخدام",
        body:
          "إضافة البحث عن الأجهزة وتغيير المظهر الداكن وعرض الساعة المباشرة.",
      },
    ],

    architectureOverline: "03 / بنية النظام",
    architectureTitle: "كيف عمل النظام الأصلي؟",
    architectureNote:
      "يمثل هذا مخطط المشروع أثناء التدريب. العرض العام في الأسفل لا يتصل بهذه الخدمات أو الأجهزة.",
    steps: [
      {
        icon: "🔌",
        title: "أجهزة Shelly",
        body: "أجهزة فعلية استُخدمت أثناء التدريب",
      },
      {
        icon: "☁️",
        title: "Shelly / uShelly",
        body: "تكامل مفتوح المصدر مع السحابة وأحداث الأجهزة",
      },
      {
        icon: "⚙️",
        title: "الخادم المحلي",
        body: "واجهات HTTP لحالة الأجهزة وأوامر التحكم",
      },
      {
        icon: "🖥️",
        title: "واجهة الويب",
        body: "لوحة التحكم وتجربة المستخدم",
      },
    ],

    originalRoutes: "واجهات API الأصلية",
    routesNote:
      "هذه مسارات موثقة من المشروع السابق لأغراض الشرح فقط، ولا يستدعيها العرض التفاعلي في هذا الموقع.",

    lessonsOverline: "04 / ما تعلمته",
    lessonsTitle: "التحديات والدروس",
    lessons: [
      {
        title: "عدم الاتصال يختلف عن الإيقاف",
        body:
          "يمكن للجهاز غير المتصل الاحتفاظ بآخر حالة مسجلة؛ لذلك يجب فصل حالة الاتصال عن حالة المفتاح.",
      },
      {
        title: "معالجة أخطاء الأوامر",
        body:
          "أعاد أحد اختبارات التحكم السابقة الخطأ WRONG_ID، مما يوضح ضرورة التحقق من الاستجابة وعدم إظهار نجاح غير حقيقي.",
      },
      {
        title: "توضيح المصدر المفتوح",
        body:
          "اعتمد التكامل على مشروع uShelly مفتوح المصدر من Allterco، بالإضافة إلى عملي في الواجهة والربط وتحسين الاستخدام.",
      },
    ],

    demoOverline: "05 / عرض تفاعلي",
    demoTitle: "جرّب لوحة التحكم بتصميمها الجديد",
    demoIntro:
      "نسخة React حديثة مستوحاة من المشروع الأصلي. يمكنك البحث وتشغيل الأجهزة الافتراضية وإيقافها ومراجعة سجل النشاط. جميع البيانات تجريبية ومحلية داخل المتصفح.",
    demoNotice:
      "عرض آمن · بدون أجهزة حقيقية · بدون API للشركة · بدون أوامر خارجية",

    evidenceOverline: "06 / التوثيق والشفافية",
    evidenceTitle: "ععمل صناعي واقعي. إعادة تصميم مُصنَّفة بوضوح.",
    original: "المشروع الأصلي · 2024–2025",
    originalBody:
      "يوثق تقرير التدريب بجامعة UTeM وملفات HTML/JavaScript الأصلية وسجلات اختبارات API العمل على لوحة التحكم. لا يتم نشر صور الشركة أو بيانات أجهزتها هنا.",
    redesign: "إعادة تصميم مستقلة · 2026",
    redesignBody:
      "لوحة التحكم التفاعلية في هذه الصفحة مصممة حديثاً وتعمل باستخدام حالة React محلية فقط. ليست صورة للنظام الإنتاجي لدى الشركة.",

    stack: "التقنيات والمفاهيم",
    attribution: "المشروع المفتوح المصدر المستخدم:",
    source: "مشروع Allterco uShelly على GitHub",
    footer: "العودة إلى المشاريع",

    dashboard: "مركز تحكم IoT",
    demonstration: "محاكاة تفاعلية",
    dashboardOverview: "نظرة على الأجهزة",
    dashboardSub: "مراقبة أجهزة ذكية تجريبية والتحكم بها",
    sample: "بيانات تجريبية",
    devices: "الأجهزة",
    connected: "متصل",
    switchedOn: "في وضع التشغيل",
    switchedOff: "في وضع الإيقاف",
    search: "ابحث عن جهاز تجريبي...",
    reset: "إعادة الضبط",
    online: "متصل",
    offline: "غير متصل",
    on: "تشغيل",
    off: "إيقاف",
    lastKnown: "آخر حالة تجريبية",
    commands: "النشاط التجريبي الأخير",
    noActivity:
      "جرّب تشغيل جهاز أو إيقافه ليظهر النشاط هنا.",
    changedOn: "تم تشغيله",
    changedOff: "تم إيقافه",
    disabled: "التحكم غير متاح بالجهاز غير المتصل",
    chart: "مخطط نشاط تجريبي",
    chartSub: "قيم توضيحية فقط وليست بيانات فعلية",
    localOnly:
      "جميع التفاعلات محلية داخل المتصفح. لا يتم إرسال أي طلب إلى Shelly أو إلى الشركة.",
  },
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "HTTP / JSON",
  "Shelly Cloud API",
  "uShelly",
  "WebSocket",
  "React (2026 redesign)",
];

export default function IotProjectPage() {
  const ar = useLocale() === "ar";
  const t = ar ? copy.ar : copy.en;

  return (
    <main
      dir={ar ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#080B14] text-slate-100"
    >
      {/* Background effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-violet-600/10 blur-[125px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[-250px] top-[1000px] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <Link
            href="/#projects"
            className="text-slate-400 transition hover:text-white"
          >
            {ar ? "→" : "←"} {t.back}
          </Link>

          <div dir="ltr" className="flex gap-2">
            <Link
              href="/projects/iot"
              locale="en"
              className={`rounded-lg border px-3 py-2 ${
                !ar
                  ? "border-violet-400 bg-violet-500/20 text-white"
                  : "border-white/10 text-slate-400"
              }`}
            >
              English
            </Link>

            <Link
              href="/projects/iot"
              locale="ar"
              className={`rounded-lg border px-3 py-2 ${
                ar
                  ? "border-violet-400 bg-violet-500/20 text-white"
                  : "border-white/10 text-slate-400"
              }`}
            >
              العربية
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header className="mt-16 grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-bold tracking-widest text-violet-300">
              {t.eyebrow}
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <h2 className="mt-5 text-xl font-semibold leading-relaxed text-violet-300 sm:text-2xl">
              {t.hero}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              {t.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#iot-demo"
                className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-400"
              >
                {t.explore} ↗
              </a>

              <a
                href="#iot-story"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                {t.story}
              </a>
            </div>
          </div>

          {/* Company information */}
          <aside className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-[#231D42] to-[#101A2D] p-7 shadow-xl shadow-violet-950/20">
            <div className="text-4xl">🏢</div>

            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-violet-300">
              {t.company}
            </p>

            <p dir="ltr" className="mt-2 text-2xl font-extrabold">
              Bumi Terus ITS
              <span className="block text-base text-violet-200">
                Sdn. Bhd. · Malaysia
              </span>
            </p>

            <div className="my-6 border-t border-white/10" />

            <p className="text-xs text-slate-400">{t.role}</p>
            <p className="mt-1 font-semibold">{t.roleValue}</p>

            <p className="mt-5 text-xs text-slate-400">{t.period}</p>
            <p className="mt-1 font-semibold">{t.periodValue}</p>

            <p className="mt-5 text-xs text-slate-400">{t.format}</p>
            <p className="mt-1 text-sm font-semibold">{t.formatValue}</p>
          </aside>
        </header>

        {/* Project overview */}
        <section id="iot-story" className="mt-24 scroll-mt-24">
          <SectionTitle eyebrow={t.overline} title={t.overview} />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#101A2B] p-7">
              <div className="text-3xl">🎯</div>

              <h3 className="mt-4 text-xl font-bold">
                {t.problem}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                {t.problemText}
              </p>
            </article>

            <article className="rounded-2xl border border-violet-500/25 bg-[#171D36] p-7">
              <div className="text-3xl">💡</div>

              <h3 className="mt-4 text-xl font-bold">
                {t.solution}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                {t.solutionText}
              </p>
            </article>
          </div>
        </section>

        {/* Contributions */}
        <section className="mt-24">
          <SectionTitle
            eyebrow={t.contributionOverline}
            title={t.contributionTitle}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-[#101A2B] p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mt-24">
          <SectionTitle
            eyebrow={t.architectureOverline}
            title={t.architectureTitle}
          />

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            {t.architectureNote}
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-cyan-500/20 bg-[#0F1D2F] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.icon}</span>

                  <span
                    dir="ltr"
                    className="font-mono text-xs text-cyan-300"
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Historical endpoints */}
          <div className="mt-5 rounded-2xl border border-white/10 bg-[#101A2B] p-6">
            <h3 className="font-bold">{t.originalRoutes}</h3>

            <div
              dir="ltr"
              className="mt-4 grid gap-3 sm:grid-cols-2"
            >
              <div className="min-w-0 rounded-xl bg-[#0A1424] p-4 font-mono text-xs text-slate-200">
                <span className="me-2 font-bold text-emerald-400">
                  GET
                </span>
                <span className="break-all">
                  /device-status?deviceId=...
                </span>
              </div>

              <div className="min-w-0 rounded-xl bg-[#0A1424] p-4 font-mono text-xs text-slate-200">
                <span className="me-2 font-bold text-amber-400">
                  POST
                </span>
                /control-device
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              {t.routesNote}
            </p>
          </div>
        </section>

        {/* Engineering lessons */}
        <section className="mt-24">
          <SectionTitle
            eyebrow={t.lessonsOverline}
            title={t.lessonsTitle}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.lessons.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-white/10 bg-[#101A2B] p-6"
              >
                <span className="font-mono text-xs text-violet-300">
                  0{i + 1}
                </span>

                <h3 className="mt-4 font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Interactive demo */}
        <section id="iot-demo" className="mt-24 scroll-mt-24">
          <SectionTitle
            eyebrow={t.demoOverline}
            title={t.demoTitle}
          />

          <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-400">
            {t.demoIntro}
          </p>

          <p className="mt-5 inline-block rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-300">
            {t.demoNotice}
          </p>

          <DemoDashboard ar={ar} t={t} />
        </section>

        {/* Evidence and transparency */}
        <section className="mt-24">
          <SectionTitle
            eyebrow={t.evidenceOverline}
            title={t.evidenceTitle}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-violet-500/20 bg-[#171D34] p-7">
              <p className="text-xs font-bold text-violet-300">
                2024–2025
              </p>

              <h3 className="mt-4 text-xl font-bold">
                {t.original}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                {t.originalBody}
              </p>
            </article>

            <article className="rounded-2xl border border-cyan-500/20 bg-[#102438] p-7">
              <p className="text-xs font-bold text-cyan-300">
                2026
              </p>

              <h3 className="mt-4 text-xl font-bold">
                {t.redesign}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                {t.redesignBody}
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-[#101A2B] px-5 py-4 text-sm text-slate-400">
            {t.attribution}{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ALLTERCO/ushelly/tree/main"
              className="font-semibold text-cyan-300 underline underline-offset-4"
            >
              {t.source} ↗
            </a>
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">{t.stack}</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                dir="ltr"
                key={skill}
                className="rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-9">
          <Link
            href="/#projects"
            className="inline-block rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            {ar ? "→" : "←"} {t.footer}
          </Link>
        </footer>
      </div>
    </main>
  );
}

// Reusable section heading
function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-widest text-violet-300">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

// ====================================================
// SAFE INTERACTIVE DEMO
// React state only — no real API or company devices.
// ====================================================
function DemoDashboard({
  ar,
  t,
}: {
  ar: boolean;
  t: typeof copy.en;
}) {
  const [devices, setDevices] = useState<Device[]>(initialDevices);
  const [query, setQuery] = useState("");

  const [activity, setActivity] = useState<
    { id: string; name: string; on: boolean }[]
  >([]);

  const totalOnline = devices.filter((d) => d.online).length;

  const totalOn = devices.filter(
    (d) => d.online && d.on
  ).length;

  const totalOff = devices.filter(
    (d) => d.online && !d.on
  ).length;

  const visible = devices.filter((device) =>
    `${device.id} ${device.en} ${device.ar} ${device.areaEn} ${device.areaAr}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  function changeDevice(id: string, on: boolean) {
    const device = devices.find((d) => d.id === id);

    if (!device || !device.online || device.on === on) {
      return;
    }

    // Only update simulated state in the browser.
    setDevices((previous) =>
      previous.map((d) =>
        d.id === id ? { ...d, on } : d
      )
    );

    setActivity((previous) =>
      [
        {
          id: `${Date.now()}-${id}`,
          name: ar ? device.ar : device.en,
          on,
        },
        ...previous,
      ].slice(0, 6)
    );
  }

  function reset() {
    setDevices(initialDevices.map((d) => ({ ...d })));
    setActivity([]);
    setQuery("");
  }

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-400/25 bg-[#0B1424] shadow-2xl shadow-cyan-950/20">

      {/* Demo window header */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#14243B] px-5 py-4">
        <div
          className="flex gap-1.5"
          aria-hidden="true"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <span className="text-xs font-bold text-slate-300">
          {t.dashboard}
        </span>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
          {t.sample}
        </span>
      </div>

      <div className="grid lg:grid-cols-[190px_minmax(0,1fr)]">

        {/* Dashboard sidebar */}
        <aside className="hidden border-e border-white/10 bg-[#0D192C] p-5 lg:block">
          <div className="flex items-center gap-2 text-lg font-bold text-cyan-300">
            <span>◈</span>
            <span>DeviceFlow</span>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            {t.demonstration}
          </p>

          <div className="mt-10 rounded-xl border border-cyan-400/25 bg-cyan-500/10 px-4 py-3 text-sm font-bold text-cyan-200">
            ◉ {t.dashboardOverview}
          </div>

          <div className="mt-4 px-4 text-sm text-slate-500">
            ▣ {t.devices}
          </div>

          <div className="mt-12 rounded-xl border border-white/10 p-4 text-xs leading-6 text-slate-400">
            {t.localOnly}
          </div>
        </aside>

        {/* Main dashboard content */}
        <div className="min-w-0 p-4 sm:p-7">

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                {t.dashboardOverview}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {t.dashboardSub}
              </p>
            </div>

            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold hover:bg-white/10"
            >
              ↻ {t.reset}
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                name: t.devices,
                value: devices.length,
                icon: "▣",
                color: "text-cyan-300",
              },
              {
                name: t.connected,
                value: totalOnline,
                icon: "◉",
                color: "text-emerald-300",
              },
              {
                name: t.switchedOn,
                value: totalOn,
                icon: "⏻",
                color: "text-violet-300",
              },
              {
                name: t.switchedOff,
                value: totalOff,
                icon: "○",
                color: "text-rose-300",
              },
            ].map((stat) => (
              <div
                key={stat.name}
                className="rounded-xl border border-white/10 bg-[#14243B] p-4"
              >
                <div className={`text-lg ${stat.color}`}>
                  {stat.icon}
                </div>

                <p className="mt-3 text-2xl font-bold tabular-nums">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-lg font-bold">
              {t.devices}
            </h4>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              aria-label={t.search}
              className="w-full rounded-xl border border-white/15 bg-[#111F33] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 sm:w-72"
            />
          </div>

          {/* Device cards */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">

            {visible.map((device) => (
              <article
                key={device.id}
                className="min-w-0 rounded-2xl border border-white/10 bg-[#132138] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-2xl">
                      {device.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold">
                        {ar ? device.ar : device.en}
                      </p>

                      <p
                        dir="ltr"
                        className="mt-1 text-xs text-slate-500"
                      >
                        {device.id}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                      device.online
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-rose-400/10 text-rose-300"
                    }`}
                  >
                    {device.online ? t.online : t.offline}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
                  <span>
                    {ar ? device.areaAr : device.areaEn}
                  </span>

                  <span>
                    {t.lastKnown}:{" "}
                    <b
                      className={
                        device.on
                          ? "text-emerald-300"
                          : "text-slate-300"
                      }
                    >
                      {device.on ? t.on : t.off}
                    </b>
                  </span>
                </div>

                {/* Safe simulated controls */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={!device.online}
                    onClick={() =>
                      changeDevice(device.id, true)
                    }
                    className={`rounded-lg border py-2.5 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-40 ${
                      device.on && device.online
                        ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-200"
                        : "border-white/15 bg-[#192B44] text-slate-300 hover:border-emerald-500/40"
                    }`}
                  >
                    {t.on}
                  </button>

                  <button
                    type="button"
                    disabled={!device.online}
                    onClick={() =>
                      changeDevice(device.id, false)
                    }
                    className={`rounded-lg border py-2.5 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-40 ${
                      !device.on && device.online
                        ? "border-rose-400/50 bg-rose-500/15 text-rose-200"
                        : "border-white/15 bg-[#192B44] text-slate-300 hover:border-rose-500/40"
                    }`}
                  >
                    {t.off}
                  </button>
                </div>

                {!device.online && (
                  <p className="mt-3 text-[11px] text-amber-300">
                    {t.disabled}
                  </p>
                )}
              </article>
            ))}

            {visible.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-white/15 p-8 text-center text-sm text-slate-400">
                {ar
                  ? "لم يتم العثور على جهاز مطابق."
                  : "No devices match your search."}
              </div>
            )}
          </div>

          {/* Analytics and activity */}
          <div className="mt-5 grid gap-4 md:grid-cols-2">

            {/* Example chart */}
            <div className="rounded-2xl border border-white/10 bg-[#132138] p-5">
              <h4 className="font-semibold">
                {t.chart}
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                {t.chartSub}
              </p>

              <div
                dir="ltr"
                className="mt-5 flex h-32 items-end gap-2 border-b border-white/10 px-2"
              >
                {[
                  32, 45, 38, 58, 67, 54,
                  71, 62, 83, 73, 92, 78,
                ].map((height, index) => (
                  <div
                    key={index}
                    style={{ height: `${height}%` }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-800/50 to-cyan-400/80"
                  />
                ))}
              </div>
            </div>

            {/* Activity history */}
            <div className="rounded-2xl border border-white/10 bg-[#132138] p-5">
              <h4 className="font-semibold">
                {t.commands}
              </h4>

              <div className="mt-4 space-y-3">
                {activity.length === 0 ? (
                  <p className="text-xs leading-6 text-slate-500">
                    {t.noActivity}
                  </p>
                ) : (
                  activity.map((item) => (
                    <p
                      key={item.id}
                      className="rounded-lg bg-[#0C1A2D] px-3 py-2 text-xs text-slate-300"
                    >
                      <span
                        className={
                          item.on
                            ? "text-emerald-300"
                            : "text-rose-300"
                        }
                      >
                        ●
                      </span>{" "}
                      {item.name} —{" "}
                      {item.on
                        ? t.changedOn
                        : t.changedOff}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-slate-500">
            {t.localOnly}
          </p>
        </div>
      </div>
    </div>
  );
}
