
"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

// ========================================
// TYPES
// ========================================

type EquipmentStatus = "Available" | "Reserved" | "Rented";
type RentalStatus = "Not Approved Yet" | "Approved" | "Canceled";
type Role = "Customer" | "Staff";
type ReportMode = "monthly" | "yearly";

type Equipment = {
  id: string;
  name: string;
  arabic: string;
  type: string;
  rate: number;
  status: EquipmentStatus;
};

type Rental = {
  id: string;
  equipmentId: string;
  days: number;
  total: number;
  status: RentalStatus;
};

type ReportRow = {
  period: string;
  rentals: number;
  revenue: number;
  profit: number;
};

// ========================================
// DEMO DATA
// Browser-only simulation.
// Not connected to the original MySQL DB.
// ========================================

const seedEquipment: Equipment[] = [
  {
    id: "DEMO-21",
    name: "Bulldozer",
    arabic: "جرافة",
    type: "Dozers",
    rate: 430,
    status: "Available",
  },
  {
    id: "DEMO-22",
    name: "Road Paver",
    arabic: "آلة رصف",
    type: "Pavers",
    rate: 560,
    status: "Reserved",
  },
  {
    id: "DEMO-23",
    name: "Scraper",
    arabic: "كاشطة تربة",
    type: "Scrapers",
    rate: 370,
    status: "Available",
  },
];

const seedRentals: Rental[] = [
  {
    id: "DEMO-R01",
    equipmentId: "DEMO-22",
    days: 2,
    total: 1120,
    status: "Not Approved Yet",
  },
];

// Illustrative financial figures only.
// These are NOT real company financial records.

const monthlyReport: ReportRow[] = [
  {
    period: "Jan 2025",
    rentals: 8,
    revenue: 12000,
    profit: 3600,
  },
  {
    period: "Feb 2025",
    rentals: 10,
    revenue: 15000,
    profit: 4200,
  },
  {
    period: "Mar 2025",
    rentals: 12,
    revenue: 17500,
    profit: 5100,
  },
];

const yearlyReport: ReportRow[] = [
  {
    period: "2023",
    rentals: 64,
    revenue: 90000,
    profit: 24000,
  },
  {
    period: "2024",
    rentals: 89,
    revenue: 130000,
    profit: 36000,
  },
  {
    period: "2025",
    rentals: 108,
    revenue: 165000,
    profit: 47000,
  },
];

// ========================================
// TRANSLATIONS
// ========================================

const translations = {
  en: {
    back: "Back to Projects",
    label: "ACADEMIC PROJECT · C++ & MYSQL",
    title: "Heavy Equipment Rental Management System",
    subtitle:
      "An equipment rental workflow built around C++ logic and relational data.",
    intro:
      "A console-based management application combining user accounts, equipment management, rental requests, approval workflows, rental history, and monthly and yearly financial reporting. The original system was built with C++ and MySQL. This case study includes a separate interactive React demonstration.",

    demoButton: "Try the Interactive Demo",
    detailsButton: "Explore the Case Study",

    badge1: "C++ Console Application",
    badge2: "MySQL Database",
    badge3: "Customer & Staff Roles",

    scope: "01 / PROJECT OVERVIEW",
    overview: "Managing equipment rentals through code",

    problemTitle: "The Challenge",
    problem:
      "Equipment rental operations involve customer accounts, availability, pricing, rental dates, approvals, and financial reporting. Managing these related records consistently requires an organized application and relational database design.",

    solutionTitle: "My Approach",
    solution:
      "I worked on a C++ application with separate customer and staff workflows, MySQL-backed records, equipment selection, rental history, approval and cancellation operations, and financial reporting features.",

    contributionsLabel: "02 / CORE MODULES",
    contributionsTitle: "Features of the Original System",

    modules: [
      {
        icon: "🔐",
        title: "User Accounts",
        body:
          "Registration, login, input validation, and separate customer and staff workflows.",
      },
      {
        icon: "🚜",
        title: "Equipment Management",
        body:
          "View equipment models, categories, pricing, and availability.",
      },
      {
        icon: "📋",
        title: "Rental Management",
        body:
          "Manage rental requests, rental dates, duration, totals, and status information.",
      },
      {
        icon: "✅",
        title: "Staff Approval System",
        body:
          "Review pending requests and update rental and equipment statuses.",
      },
      {
        icon: "🧾",
        title: "Rental History",
        body:
          "Retrieve related rental, customer, and equipment records using MySQL queries and joins.",
      },
      {
        icon: "↩️",
        title: "Rental Cancellation",
        body:
          "Cancel applicable requests and update equipment availability.",
      },
      {
        icon: "📊",
        title: "Monthly & Yearly Profit Reports",
        body:
          "Review rental revenue and profit across monthly and yearly periods to support financial reporting and business analysis.",
      },
    ],

    architectureLabel: "03 / DATABASE DESIGN",
    architectureTitle: "How the Records Connect",
    architectureText:
      "A simplified relationship overview based on the original project's database tables.",

    roles: "Users / Customer / Staff",
    rental: "Rental",
    details: "Rental Details",
    equipment: "Equipment",
    type: "Equipment Type",

    statuses: "Rental Lifecycle",
    statusesHint:
      "An example of the rental status transitions represented in the original source code.",

    demoLabel: "04 / INTERACTIVE SHOWCASE",
    demoTitle: "Explore a Simulated Rental Workflow",
    demoDesc:
      "Switch between customer and staff views. Request equipment, approve pending requests, or cancel a rental. This demonstration runs entirely in your browser and does not connect to the original C++ application or MySQL database.",

    simulation: "SIMULATED DATA · NO DATABASE CONNECTION",

    reportsLabel: "05 / FINANCIAL REPORTING",
    reportsTitle: "Monthly & Yearly Profit Reports",
    reportsIntro:
      "The rental project also covered financial reporting. Explore the monthly and yearly report previews below, including rental totals, revenue, and profit comparisons. The figures are fictional examples used to demonstrate the reporting interface.",

    reportsMonthly: "Monthly Report",
    reportsYearly: "Yearly Report",
    reportsRentals: "Total Rentals",
    reportsRevenue: "Total Revenue",
    reportsProfit: "Total Profit",
    reportsChart: "Profit Comparison",
    reportsPeriod: "Period",
    reportsNote:
      "All financial figures are fictional and provided for presentation only. They are not real rental-system records. The original net-profit calculation has not been verified from the available C++ source files.",

    lessonsLabel: "06 / ENGINEERING EXPERIENCE",
    lessonsTitle: "What This Project Demonstrates",

    lessons: [
      {
        icon: "🧠",
        title: "Object-Oriented C++",
        body:
          "Organizing user, customer, staff, equipment, and rental functionality using C++ classes and application logic.",
      },
      {
        icon: "🗄️",
        title: "Relational Database Design",
        body:
          "Working with MySQL tables, relationships, and SQL joins to retrieve meaningful rental records.",
      },
      {
        icon: "🔄",
        title: "Business Rules",
        body:
          "Coordinating rental approvals, cancellations, and equipment availability.",
      },
      {
        icon: "📈",
        title: "Financial Reporting",
        body:
          "Working with rental financial data and monthly and yearly reporting concepts.",
      },
      {
        icon: "🛠️",
        title: "Debugging & Maintenance",
        body:
          "Troubleshooting login queries, database issues, and console output while maintaining the original application.",
      },
    ],

    honestyLabel: "07 / PROJECT PRESENTATION",
    honestyTitle: "Original Application vs. Portfolio Demo",

    originalTitle: "Original C++ / MySQL Application",
    originalText:
      "The original project is a local console-based rental management system using C++ and MySQL, with customer and staff functions, equipment management, rental operations, and financial reporting.",

    redesignTitle: "Interactive React Demonstration",
    redesignText:
      "The modern interface on this page is a separate simulation created for portfolio presentation. It uses fictional data and browser state instead of the actual MySQL database.",

    stack: "Technologies & Concepts",
    footer: "Back to All Projects",

    demoHeader: "Rental Management Preview",
    customer: "Customer View",
    staff: "Staff View",
    inventory: "Equipment Inventory",
    history: "Rental Requests",

    pending: "Pending",
    approved: "Approved",
    canceled: "Canceled",

    available: "Available",
    reserved: "Reserved",
    rented: "Rented",

    daily: "/ day",
    duration: "Rental Duration",
    request: "Request Rental",
    approve: "Approve",
    cancel: "Cancel",

    actions: "Demo Activity",
    initialActivity:
      "Select an action to see the rental workflow update.",

    reset: "Reset Simulation",
    total: "Total",
    days: "days",
    noRequests: "No rental requests yet.",

    requestDone: "Rental request created",
    approveDone: "Rental request approved",
    cancelDone: "Rental request canceled",

    customerInfo:
      "Customers can request available equipment and review rental records.",

    staffInfo:
      "Staff can review pending rental requests and manage their statuses.",

    inactive: "Only available equipment can be requested.",
  },

  ar: {
    back: "العودة إلى المشاريع",
    label: "مشروع أكاديمي · C++ و MYSQL",
    title: "نظام إدارة تأجير المعدات الثقيلة",
    subtitle:
      "إدارة عمليات التأجير باستخدام منطق C++ وقواعد البيانات العلائقية.",
    intro:
      "تطبيق يعمل عبر واجهة الأوامر لإدارة حسابات المستخدمين والمعدات وطلبات التأجير والموافقات وسجل العمليات والتقارير المالية الشهرية والسنوية. تم تطوير النظام الأصلي باستخدام C++ وMySQL، بينما يتضمن هذا العرض محاكاة تفاعلية مستقلة باستخدام React.",

    demoButton: "جرّب العرض التفاعلي",
    detailsButton: "استكشف دراسة الحالة",

    badge1: "تطبيق C++ عبر الطرفية",
    badge2: "قاعدة بيانات MySQL",
    badge3: "صلاحيات العملاء والموظفين",

    scope: "01 / نظرة عامة",
    overview: "إدارة تأجير المعدات برمجياً",

    problemTitle: "التحدي",
    problem:
      "تتطلب عمليات التأجير التعامل مع حسابات العملاء وتوفر المعدات والأسعار وتواريخ الإيجار والموافقات والتقارير المالية، مع الحفاظ على ترابط البيانات داخل قاعدة المعلومات.",

    solutionTitle: "طريقة التنفيذ",
    solution:
      "عملت على تطبيق C++ يحتوي على مسارات منفصلة للعملاء والموظفين وسجلات تعتمد على MySQL، مع إدارة المعدات والطلبات والموافقات والإلغاء والتقارير المالية.",

    contributionsLabel: "02 / الوحدات الرئيسية",
    contributionsTitle: "وظائف النظام الأصلي",

    modules: [
      {
        icon: "🔐",
        title: "حسابات المستخدمين",
        body:
          "تسجيل الحسابات وتسجيل الدخول والتحقق من المدخلات وتوفير وظائف العملاء والموظفين.",
      },
      {
        icon: "🚜",
        title: "إدارة المعدات",
        body:
          "عرض طرازات المعدات وأنواعها وأسعارها وحالة توفرها.",
      },
      {
        icon: "📋",
        title: "إدارة التأجير",
        body:
          "إدارة طلبات التأجير والتواريخ والمدد والإجماليات والحالات.",
      },
      {
        icon: "✅",
        title: "نظام الموافقات",
        body:
          "مراجعة الطلبات المعلقة وتحديث حالة التأجير والمعدات.",
      },
      {
        icon: "🧾",
        title: "سجل التأجير",
        body:
          "عرض بيانات التأجير والعملاء والمعدات باستخدام استعلامات MySQL.",
      },
      {
        icon: "↩️",
        title: "إلغاء التأجير",
        body:
          "إلغاء الطلبات المناسبة وتحديث حالة توفر المعدات.",
      },
      {
        icon: "📊",
        title: "تقارير الأرباح الشهرية والسنوية",
        body:
          "استعراض إيرادات وأرباح التأجير خلال الفترات الشهرية والسنوية لدعم تحليل أداء النشاط.",
      },
    ],

    architectureLabel: "03 / تصميم قاعدة البيانات",
    architectureTitle: "كيف ترتبط السجلات؟",
    architectureText:
      "مخطط مبسط للعلاقات بين الجداول الموجودة في المشروع الأصلي.",

    roles: "المستخدم / العميل / الموظف",
    rental: "طلب التأجير",
    details: "تفاصيل التأجير",
    equipment: "المعدات",
    type: "نوع المعدات",

    statuses: "دورة حالة التأجير",
    statusesHint:
      "مثال على حالات انتقال الطلب الموجودة في الشفرة الأصلية.",

    demoLabel: "04 / عرض تفاعلي",
    demoTitle: "جرّب محاكاة عمليات التأجير",
    demoDesc:
      "انتقل بين وضع العميل والموظف واطلب إحدى المعدات أو وافق على طلب معلق أو ألغِ طلباً. تعمل المحاكاة داخل المتصفح فقط دون الاتصال ببرنامج C++ الأصلي أو قاعدة البيانات.",

    simulation: "بيانات تجريبية · بدون اتصال بقاعدة البيانات",

    reportsLabel: "05 / التقارير المالية",
    reportsTitle: "تقارير الأرباح الشهرية والسنوية",
    reportsIntro:
      "تضمن المشروع كذلك إعداد تقارير مالية. يتيح العرض التالي استكشاف التقارير الشهرية والسنوية، بما فيها إجمالي التأجيرات والإيرادات والأرباح، باستخدام بيانات افتراضية.",

    reportsMonthly: "التقرير الشهري",
    reportsYearly: "التقرير السنوي",
    reportsRentals: "إجمالي التأجيرات",
    reportsRevenue: "إجمالي الإيرادات",
    reportsProfit: "إجمالي الأرباح",
    reportsChart: "مقارنة الأرباح",
    reportsPeriod: "الفترة",
    reportsNote:
      "جميع الأرقام المالية افتراضية للعرض فقط، ولا تمثل بيانات فعلية من النظام الأصلي. لم يتم التحقق من معادلة احتساب صافي الربح ضمن ملفات C++ المتاحة.",

    lessonsLabel: "06 / الخبرة الهندسية",
    lessonsTitle: "ما الذي يوضحه المشروع؟",

    lessons: [
      {
        icon: "🧠",
        title: "البرمجة كائنية التوجه",
        body:
          "تنظيم وظائف المستخدمين والعملاء والموظفين والمعدات والتأجير باستخدام C++.",
      },
      {
        icon: "🗄️",
        title: "قواعد البيانات العلائقية",
        body:
          "التعامل مع جداول MySQL والعلاقات والاستعلامات التي تعرض بيانات التأجير.",
      },
      {
        icon: "🔄",
        title: "منطق العمليات",
        body:
          "تنسيق حالات الموافقات والإلغاء مع حالة توفر المعدات.",
      },
      {
        icon: "📈",
        title: "التقارير المالية",
        body:
          "التعامل مع البيانات المالية للتأجير ومفاهيم التقارير الشهرية والسنوية.",
      },
      {
        icon: "🛠️",
        title: "تصحيح الأخطاء والصيانة",
        body:
          "معالجة استعلامات تسجيل الدخول ومشكلات قواعد البيانات ومخرجات الطرفية.",
      },
    ],

    honestyLabel: "07 / طريقة عرض المشروع",
    honestyTitle: "البرنامج الأصلي مقابل العرض التفاعلي",

    originalTitle: "تطبيق C++ وMySQL الأصلي",
    originalText:
      "المشروع الأساسي تطبيق محلي عبر الطرفية يعتمد على C++ وMySQL، ويتضمن وظائف العملاء والموظفين وإدارة المعدات والتأجير والتقارير المالية.",

    redesignTitle: "محاكاة React التفاعلية",
    redesignText:
      "الواجهة الحديثة الموجودة هنا محاكاة مستقلة لعرض فكرة النظام باستخدام بيانات افتراضية دون الاتصال بقاعدة البيانات الأصلية.",

    stack: "التقنيات والمفاهيم",
    footer: "العودة إلى جميع المشاريع",

    demoHeader: "معاينة إدارة التأجير",
    customer: "وضع العميل",
    staff: "وضع الموظف",
    inventory: "قائمة المعدات",
    history: "طلبات التأجير",

    pending: "قيد الموافقة",
    approved: "مقبول",
    canceled: "ملغى",

    available: "متاحة",
    reserved: "محجوزة",
    rented: "مؤجرة",

    daily: " / يوم",
    duration: "مدة التأجير",
    request: "طلب تأجير",
    approve: "موافقة",
    cancel: "إلغاء",

    actions: "نشاط المحاكاة",
    initialActivity:
      "اختر إجراء لمشاهدة تحديثات عملية التأجير.",

    reset: "إعادة ضبط المحاكاة",
    total: "الإجمالي",
    days: "أيام",
    noRequests: "لا توجد طلبات تأجير حتى الآن.",

    requestDone: "تم إنشاء طلب التأجير",
    approveDone: "تمت الموافقة على الطلب",
    cancelDone: "تم إلغاء طلب التأجير",

    customerInfo:
      "يمكن للعملاء طلب المعدات المتاحة ومراجعة سجلات التأجير.",

    staffInfo:
      "يمكن للموظفين مراجعة الطلبات المعلقة وإدارة حالاتها.",

    inactive: "يمكن طلب المعدات المتاحة فقط.",
  },
};

type Translation = typeof translations.en;

const skills = [
  "C++",
  "Object-Oriented Programming",
  "MySQL",
  "SQL Joins",
  "Relational Database Design",
  "Console Application",
  "Input Validation",
  "Rental Business Logic",
  "Monthly & Yearly Reports",
  "Financial Reporting",
];

// ========================================
// MAIN RENTAL CASE STUDY PAGE
// ========================================

export default function RentalPage() {
  const ar = useLocale() === "ar";
  const t = ar ? translations.ar : translations.en;

  return (
    <main
      dir={ar ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#080B14] text-slate-100"
    >
      {/* Background lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-56 h-[680px] w-[680px] rounded-full bg-amber-500/10 blur-[150px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-64 top-[1000px] h-[650px] w-[650px] rounded-full bg-blue-600/[0.08] blur-[150px]"
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
              href="/projects/rental"
              locale="en"
              className={`rounded-xl border px-4 py-2 ${
                !ar
                  ? "border-amber-400 bg-amber-400/10 text-amber-200"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              English
            </Link>

            <Link
              href="/projects/rental"
              locale="ar"
              className={`rounded-xl border px-4 py-2 ${
                ar
                  ? "border-amber-400 bg-amber-400/10 text-amber-200"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              العربية
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header className="mt-16 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-xs font-bold tracking-wider text-amber-300">
              {t.label}
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <h2 className="mt-5 text-xl font-semibold leading-relaxed text-amber-300 sm:text-2xl">
              {t.subtitle}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              {t.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[t.badge1, t.badge2, t.badge3].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            
<div className="mt-8 flex flex-wrap gap-3">
  <a
    href="#rental-demo"
    className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-[#0B1220] transition hover:bg-amber-300"
  >
    {t.demoButton} ↗
  </a>

  <a
    href="#rental-overview"
    className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
  >
    {t.detailsButton}
  </a>

  <a
    href="https://github.com/salah804/heavy-equipment-rental-system"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/20"
  >
    <span>⌘</span>
    {ar ? "عرض الكود على GitHub" : "View Source Code"}
    <span>↗</span>
  </a>
</div>

          </div>

          {/* Console preview */}
          <aside className="overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#22202B] via-[#101B2B] to-[#10192A] p-6 shadow-2xl shadow-amber-950/20 sm:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold tracking-wider text-amber-300">
                C++ / MYSQL
              </span>

              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] text-slate-300">
                CONSOLE APP
              </span>
            </div>

            <div
              dir="ltr"
              className="mt-7 rounded-2xl border border-white/10 bg-[#091422] p-5 font-mono text-xs leading-7 sm:text-sm"
            >
              <p className="text-slate-500">
                // rental-management-system
              </p>

              <p className="text-emerald-300">
                $ ./rental-system
              </p>

              <p className="mt-4 text-amber-200">
                HEAVY EQUIPMENT RENTAL
              </p>

              <p className="text-slate-400">
                --------------------------------
              </p>

              <p>1. Login / Register</p>
              <p>2. Browse Equipment</p>
              <p>3. Rental History</p>
              <p>4. Staff Approval</p>
              <p>5. Financial Reports</p>

              <p className="mt-3 text-cyan-300">
                MySQL &gt; Connected (illustration)
              </p>

              <p className="mt-3 text-slate-500">
                // Conceptual terminal preview
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              {["C++", "MySQL", "OOP"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 font-bold text-amber-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </header>

        {/* 01 Overview */}
        <section
          id="rental-overview"
          className="mt-24 scroll-mt-24"
        >
          <Heading
            eyebrow={t.scope}
            title={t.overview}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard
              icon="🎯"
              title={t.problemTitle}
              description={t.problem}
            />

            <InfoCard
              icon="💡"
              title={t.solutionTitle}
              description={t.solution}
              featured
            />
          </div>
        </section>

        {/* 02 Features */}
        <section className="mt-24">
          <Heading
            eyebrow={t.contributionsLabel}
            title={t.contributionsTitle}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.modules.map((module) => (
              <InfoCard
                key={module.title}
                icon={module.icon}
                title={module.title}
                description={module.body}
              />
            ))}
          </div>
        </section>

        {/* 03 Database Architecture */}
        <section className="mt-24">
          <Heading
            eyebrow={t.architectureLabel}
            title={t.architectureTitle}
          />

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            {t.architectureText}
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[#111B2D] p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                t.roles,
                t.rental,
                t.details,
                t.equipment,
                t.type,
              ].map((name, index) => (
                <div
                  key={name}
                  className="flex items-center gap-3"
                >
                  {index > 0 && (
                    <span
                      className="text-amber-400"
                      aria-hidden
                    >
                      →
                    </span>
                  )}

                  <span className="rounded-xl border border-amber-400/20 bg-amber-500/10 px-4 py-3 text-center text-xs font-semibold text-amber-100 sm:text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-bold">
                {t.statuses}
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                {t.statusesHint}
              </p>

              <div
                dir="ltr"
                className="mt-4 flex flex-wrap items-center gap-3 text-xs"
              >
                <span className="rounded-lg border border-amber-400/25 bg-amber-400/10 px-3 py-2 text-amber-200">
                  Not Approved Yet
                </span>

                <span className="text-slate-500">→</span>

                <span className="rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-emerald-200">
                  Approved
                </span>

                <span className="text-slate-500">/</span>

                <span className="rounded-lg border border-rose-400/25 bg-rose-400/10 px-3 py-2 text-rose-200">
                  Canceled
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Interactive Rental Demo */}
        <section
          id="rental-demo"
          className="mt-24 scroll-mt-24"
        >
          <Heading
            eyebrow={t.demoLabel}
            title={t.demoTitle}
          />

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-400">
            {t.demoDesc}
          </p>

          <div className="mt-5 inline-flex rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300">
            {t.simulation}
          </div>

          <RentalDemo ar={ar} t={t} />
        </section>

        {/* 05 Monthly & Yearly Reports */}
        <section
          id="rental-reports"
          className="mt-24 scroll-mt-24"
        >
          <Heading
            eyebrow={t.reportsLabel}
            title={t.reportsTitle}
          />

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-400">
            {t.reportsIntro}
          </p>

          <FinancialReportPreview t={t} />
        </section>

        {/* 06 Engineering Experience */}
        <section className="mt-24">
          <Heading
            eyebrow={t.lessonsLabel}
            title={t.lessonsTitle}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.lessons.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.body}
              />
            ))}
          </div>
        </section>

        {/* 07 Project Transparency */}
        <section className="mt-24">
          <Heading
            eyebrow={t.honestyLabel}
            title={t.honestyTitle}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard
              icon="💻"
              title={t.originalTitle}
              description={t.originalText}
              featured
            />

            <InfoCard
              icon="🖥️"
              title={t.redesignTitle}
              description={t.redesignText}
            />
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            {t.stack}
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                dir="ltr"
                className="rounded-full border border-amber-400/20 bg-amber-400/[0.08] px-4 py-2 text-sm text-amber-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
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

// ========================================
// REUSABLE UI COMPONENTS
// ========================================

function Heading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-widest text-amber-300">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
  featured = false,
}: {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-7 ${
        featured
          ? "border-amber-400/25 bg-[#211F2D]"
          : "border-white/10 bg-[#111B2D]"
      }`}
    >
      <span className="text-3xl">{icon}</span>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-8 text-slate-400">
        {description}
      </p>
    </article>
  );
}

// ========================================
// INTERACTIVE RENTAL SYSTEM DEMO
// ========================================

function RentalDemo({
  ar,
  t,
}: {
  ar: boolean;
  t: Translation;
}) {
  const [role, setRole] = useState<Role>("Customer");

  const [equipment, setEquipment] =
    useState<Equipment[]>(seedEquipment);

  const [rentals, setRentals] =
    useState<Rental[]>(seedRentals);

  const [days, setDays] = useState(3);
  const [message, setMessage] = useState("");

  function money(value: number) {
    return `MYR ${value.toLocaleString("en-MY", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  function labelStatus(
    status: RentalStatus | EquipmentStatus
  ) {
    if (status === "Available") return t.available;
    if (status === "Reserved") return t.reserved;
    if (status === "Rented") return t.rented;
    if (status === "Approved") return t.approved;
    if (status === "Canceled") return t.canceled;

    return t.pending;
  }

  function statusColors(
    status: RentalStatus | EquipmentStatus
  ) {
    if (
      status === "Available" ||
      status === "Approved"
    ) {
      return "border-emerald-400/25 bg-emerald-400/10 text-emerald-300";
    }

    if (
      status === "Canceled" ||
      status === "Rented"
    ) {
      return "border-rose-400/25 bg-rose-400/10 text-rose-300";
    }

    return "border-amber-400/25 bg-amber-400/10 text-amber-200";
  }

  function request(item: Equipment) {
    if (item.status !== "Available") return;

    const rental: Rental = {
      id: `DEMO-R${String(Date.now())}`,
      equipmentId: item.id,
      days,
      total: item.rate * days,
      status: "Not Approved Yet",
    };

    setEquipment((previous) =>
      previous.map((e) =>
        e.id === item.id
          ? { ...e, status: "Reserved" }
          : e
      )
    );

    setRentals((previous) => [
      rental,
      ...previous,
    ]);

    setMessage(
      `${t.requestDone}: ${
        ar ? item.arabic : item.name
      }`
    );
  }

  function updateRental(
    rental: Rental,
    action: "Approved" | "Canceled"
  ) {
    if (rental.status !== "Not Approved Yet") {
      return;
    }

    setRentals((previous) =>
      previous.map((r) =>
        r.id === rental.id
          ? { ...r, status: action }
          : r
      )
    );

    setEquipment((previous) =>
      previous.map((e) =>
        e.id === rental.equipmentId
          ? {
              ...e,
              status:
                action === "Approved"
                  ? "Rented"
                  : "Available",
            }
          : e
      )
    );

    setMessage(
      action === "Approved"
        ? t.approveDone
        : t.cancelDone
    );
  }

  function reset() {
    setEquipment(
      seedEquipment.map((e) => ({ ...e }))
    );

    setRentals(
      seedRentals.map((r) => ({ ...r }))
    );

    setRole("Customer");
    setDays(3);
    setMessage("");
  }

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0D1728] shadow-2xl shadow-amber-950/10">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#172338] px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚜</span>

          <span className="text-sm font-bold">
            {t.demoHeader}
          </span>
        </div>

        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
          DEMO MODE
        </span>
      </div>

      <div className="p-4 sm:p-7">

        {/* Role and reset buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2 rounded-xl border border-white/10 bg-[#0A1423] p-1">
            {(["Customer", "Staff"] as const).map(
              (value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRole(value)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                    role === value
                      ? "bg-amber-400 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {value === "Customer"
                    ? t.customer
                    : t.staff}
                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold hover:bg-white/10"
          >
            ↻ {t.reset}
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-400">
          {role === "Customer"
            ? t.customerInfo
            : t.staffInfo}
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.95fr]">

          {/* Equipment Inventory */}
          <div className="min-w-0 rounded-2xl border border-white/10 bg-[#111F33] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-bold">
                {t.inventory}
              </h3>

              {role === "Customer" && (
                <label className="flex items-center gap-2 text-xs text-slate-400">
                  {t.duration}

                  <select
                    value={days}
                    onChange={(e) =>
                      setDays(Number(e.target.value))
                    }
                    className="rounded-lg border border-white/15 bg-[#0B1728] px-2 py-2 text-white"
                  >
                    {[1, 2, 3, 5, 7].map((day) => (
                      <option
                        value={day}
                        key={day}
                      >
                        {day} {t.days}
                      </option>
                    ))}
                  </select>
                </label>
              )}
            </div>

            <div className="mt-4 space-y-3">
              {equipment.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-[#0C1829] p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">
                        🚜{" "}
                        {ar
                          ? item.arabic
                          : item.name}
                      </p>

                      <p
                        dir="ltr"
                        className="mt-1 text-left text-xs text-slate-500"
                      >
                        {item.id} · {item.type}
                      </p>
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusColors(
                        item.status
                      )}`}
                    >
                      {labelStatus(item.status)}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <p
                      dir="ltr"
                      className="text-sm font-semibold text-amber-200"
                    >
                      {money(item.rate)}{" "}
                      <span className="text-xs text-slate-500">
                        {t.daily}
                      </span>
                    </p>

                    {role === "Customer" && (
                      <button
                        type="button"
                        disabled={
                          item.status !== "Available"
                        }
                        onClick={() => request(item)}
                        className="rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                      >
                        {t.request}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              {t.inactive}
            </p>
          </div>

          {/* Rental Requests */}
          <div className="min-w-0 rounded-2xl border border-white/10 bg-[#111F33] p-5">
            <h3 className="font-bold">
              {t.history}
            </h3>

            <div className="mt-4 space-y-3">
              {rentals.length === 0 ? (
                <p className="text-sm text-slate-400">
                  {t.noRequests}
                </p>
              ) : (
                rentals.map((rental) => {
                  const item = equipment.find(
                    (e) =>
                      e.id === rental.equipmentId
                  );

                  return (
                    <div
                      key={rental.id}
                      className="rounded-xl border border-white/10 bg-[#0C1829] p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold">
                            {item
                              ? ar
                                ? item.arabic
                                : item.name
                              : rental.equipmentId}
                          </p>

                          <p
                            dir="ltr"
                            className="mt-1 text-left font-mono text-xs text-slate-500"
                          >
                            {rental.id}
                          </p>
                        </div>

                        <span
                          className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusColors(
                            rental.status
                          )}`}
                        >
                          {labelStatus(
                            rental.status
                          )}
                        </span>
                      </div>

                      <p className="mt-3 text-xs text-slate-400">
                        {t.duration}: {rental.days}{" "}
                        {t.days}
                      </p>

                      <p
                        dir="ltr"
                        className="mt-2 text-left text-sm font-bold text-amber-200"
                      >
                        {t.total}:{" "}
                        {money(rental.total)}
                      </p>

                      {rental.status ===
                        "Not Approved Yet" && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {role === "Staff" && (
                            <button
                              type="button"
                              onClick={() =>
                                updateRental(
                                  rental,
                                  "Approved"
                                )
                              }
                              className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-400"
                            >
                              {t.approve}
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              updateRental(
                                rental,
                                "Canceled"
                              )
                            }
                            className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-4 py-2 text-xs font-bold text-rose-300 hover:bg-rose-400/20"
                          >
                            {t.cancel}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Activity */}
        <div
          aria-live="polite"
          className="mt-5 rounded-xl border border-white/10 bg-[#0C1829] p-4"
        >
          <p className="text-xs font-bold text-amber-300">
            {t.actions}
          </p>

          <p className="mt-2 text-sm text-slate-300">
            {message || t.initialActivity}
          </p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// MONTHLY & YEARLY FINANCIAL REPORTS
// ========================================

function FinancialReportPreview({
  t,
}: {
  t: Translation;
}) {
  const [mode, setMode] =
    useState<ReportMode>("monthly");

  const rows =
    mode === "monthly"
      ? monthlyReport
      : yearlyReport;

  const totalRentals = rows.reduce(
    (sum, row) => sum + row.rentals,
    0
  );

  const totalRevenue = rows.reduce(
    (sum, row) => sum + row.revenue,
    0
  );

  const totalProfit = rows.reduce(
    (sum, row) => sum + row.profit,
    0
  );

  const maximumProfit = Math.max(
    ...rows.map((row) => row.profit)
  );

  function money(value: number) {
    return `MYR ${value.toLocaleString("en-MY", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0D1728]">

      {/* Report Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#172338] p-5">
        <div>
          <h3 className="text-lg font-bold">
            📊 {t.reportsTitle}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Interactive Financial Report Preview
          </p>
        </div>

        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
          SAMPLE DATA
        </span>
      </div>

      <div className="p-5 sm:p-7">

        {/* Monthly / Yearly Selector */}
        <div className="flex flex-wrap gap-2">
          {(["monthly", "yearly"] as const).map(
            (value) => (
              <button
                key={value}
                type="button"
                onClick={() => setMode(value)}
                aria-pressed={mode === value}
                className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  mode === value
                    ? "bg-amber-400 text-slate-950"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {value === "monthly"
                  ? t.reportsMonthly
                  : t.reportsYearly}
              </button>
            )
          )}
        </div>

        {/* Financial Summary */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              label: t.reportsRentals,
              value: String(totalRentals),
              icon: "🚜",
              color: "text-cyan-300",
            },
            {
              label: t.reportsRevenue,
              value: money(totalRevenue),
              icon: "💰",
              color: "text-amber-300",
            },
            {
              label: t.reportsProfit,
              value: money(totalProfit),
              icon: "📈",
              color: "text-emerald-300",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 rounded-2xl border border-white/10 bg-[#142238] p-5"
            >
              <div className="text-2xl">
                {stat.icon}
              </div>

              <p className="mt-3 text-xs text-slate-400">
                {stat.label}
              </p>

              <p
                dir="ltr"
                className={`mt-3 break-words text-xl font-extrabold sm:text-2xl ${stat.color}`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Profit Comparison Chart */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-[#111E31] p-5">
          <h4 className="font-bold">
            {t.reportsChart}
          </h4>

          <div className="mt-6 space-y-6">
            {rows.map((row) => (
              <div key={row.period}>
                <div
                  dir="ltr"
                  className="mb-2 flex items-center justify-between gap-3 text-xs"
                >
                  <span className="font-semibold text-slate-300">
                    {row.period}
                  </span>

                  <span className="font-semibold text-amber-200">
                    {money(row.profit)}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#24324B]">
                  <div
                    style={{
                      width: `${
                        (row.profit / maximumProfit) *
                        100
                      }%`,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-300 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Report Table */}
        <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#111E31]">
          <table
            dir="ltr"
            className="w-full min-w-[540px] text-left text-xs sm:text-sm"
          >
            <thead className="bg-[#1C2B42] text-slate-300">
              <tr>
                <th className="p-4">
                  {t.reportsPeriod}
                </th>

                <th className="p-4">
                  {t.reportsRentals}
                </th>

                <th className="p-4">
                  {t.reportsRevenue}
                </th>

                <th className="p-4">
                  {t.reportsProfit}
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.period}
                  className="border-t border-white/10 text-slate-300"
                >
                  <td className="p-4 font-semibold">
                    {row.period}
                  </td>

                  <td className="p-4">
                    {row.rentals}
                  </td>

                  <td className="p-4">
                    {money(row.revenue)}
                  </td>

                  <td className="p-4 font-semibold text-emerald-300">
                    {money(row.profit)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Data Disclaimer */}
        <p className="mt-5 text-xs leading-6 text-slate-500">
          {t.reportsNote}
        </p>
      </div>
    </div>
  );
}
