
"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

// ========================================
// ORIGINAL PROJECT SCREENSHOTS
// ========================================

const screenshots = [
  {
    src: "/projects/wanderlust-gallery/melaka-home-map.png",
    en: "Map-Based Destination Discovery",
    ar: "استكشاف الوجهات على الخريطة",
    descEn:
      "Browse Melaka attractions through an interactive map and category-based listings.",
    descAr:
      "استكشاف معالم ملاكا من خلال خريطة تفاعلية وقوائم مصنفة.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-itinerary.png",
    en: "Travel Itinerary",
    ar: "مسار الرحلة",
    descEn:
      "Organize saved destinations into a location-aware itinerary with mapped routes and travel information.",
    descAr:
      "تنظيم الأماكن المحفوظة ضمن مسار رحلة يعتمد على الموقع ويعرض الطرق ومعلومات التنقل.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-budget-filter.png",
    en: "Budget & Category Filtering",
    ar: "تصفية الميزانية والفئات",
    descEn:
      "Narrow down destinations using budget limits and selected tourism categories.",
    descAr:
      "تصفية الوجهات بناءً على الميزانية والفئات السياحية المختارة.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-wishlist.png",
    en: "Personal Wishlist",
    ar: "قائمة الأماكن المفضلة",
    descEn:
      "Save interesting destinations and use them later when planning a trip.",
    descAr:
      "حفظ الوجهات المفضلة واستخدامها عند تخطيط الرحلة.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-place-details.png",
    en: "Destination Information",
    ar: "تفاصيل الوجهات",
    descEn:
      "Explore destination photos, descriptions, operating hours, pricing, and related information.",
    descAr:
      "استعراض الصور والوصف وساعات العمل والتكاليف ومعلومات الوجهة.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-top-rated.png",
    en: "Top-Rated Locations",
    ar: "الأماكن الأعلى تقييماً",
    descEn:
      "Discover destinations highlighted by visitor ratings and reviews.",
    descAr:
      "اكتشاف الوجهات المميزة بناءً على تقييمات وآراء الزوار.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-login.png",
    en: "Firebase Authentication",
    ar: "تسجيل الدخول باستخدام Firebase",
    descEn:
      "The application's sign-in experience for accessing personalized features.",
    descAr:
      "واجهة تسجيل الدخول للوصول إلى المميزات الشخصية داخل التطبيق.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-travel-tips.png",
    en: "Travel Tips Menu",
    ar: "قائمة نصائح السفر",
    descEn:
      "A dedicated section for travel guidance and practical local advice.",
    descAr:
      "قسم مخصص لإرشادات السفر والنصائح المحلية العملية.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-travel-guide.png",
    en: "Practical Travel Guide",
    ar: "الدليل العملي للسفر",
    descEn:
      "Useful information about packing, preparation, and organizing a smoother journey.",
    descAr:
      "معلومات مفيدة حول تجهيز الأمتعة والاستعداد وتنظيم الرحلات.",
  },
  {
    src: "/projects/wanderlust-gallery/melaka-local-advice.png",
    en: "Local Melaka Advice",
    ar: "إرشادات محلية في ملاكا",
    descEn:
      "Destination-specific recommendations and advice for exploring local food and culture.",
    descAr:
      "نصائح محلية لاكتشاف المأكولات والثقافة والأماكن في ملاكا.",
  },
];

// ========================================
// BILINGUAL CONTENT
// ========================================

const translations = {
  en: {
    back: "Back to Projects",
    eyebrow: "ACADEMIC TEAM PROJECT · PERSONAL CONTRIBUTIONS",
    title: "Melaka Wanderlust",
    subtitle: "Explore Melaka. Plan Smarter. Travel Better.",
    description:
      "A Flutter tourism application designed to help visitors discover attractions, explore destinations on Google Maps, filter places by budget, save wishlists, read reviews, and organize travel itineraries.",

    role: "Flutter Mobile Developer",
    team: "University Team Project",
    scope: "Personal Contribution Case Study",

    explore: "Explore My Contributions",
    galleryButton: "View Project Screenshots",

    overviewLabel: "01 / PROJECT OVERVIEW",
    overviewTitle: "A Smarter Way to Discover Melaka",

    challengeTitle: "The Challenge",
    challenge:
      "Tourists exploring Melaka may struggle with scattered attraction information, finding destinations within their budget, and creating efficient travel plans. These challenges can make it difficult to organize a trip and discover places that match personal preferences.",

    approachTitle: "The Solution",
    approach:
      "Melaka Wanderlust brings destination discovery, map navigation, budget filtering, wishlists, reviews, and travel guidance into one mobile experience. My contributions focused on the Flutter features and Firebase integrations supporting the tourist journey.",

    contributionLabel: "02 / MY CONTRIBUTIONS",
    contributionTitle: "What I Worked On",
    contributionIntro:
      "These are the areas I personally contributed to within the larger university group project.",

    features: [
      {
        icon: "🗺️",
        title: "Google Maps & Itinerary Planning",
        text:
          "Integrated map-based destination discovery, location services, route visualization, and travel itinerary functionality. The itinerary code orders saved locations by distance from the current position and retrieves route information.",
      },
      {
        icon: "💰",
        title: "Budget & Category Filtering",
        text:
          "Implemented filtering controls that allow users to choose tourism categories and budget limits to discover suitable destinations.",
      },
      {
        icon: "❤️",
        title: "Wishlist Management",
        text:
          "Worked on saving destinations, viewing personal wishlists, and passing selected places into the itinerary planning workflow.",
      },
      {
        icon: "🔐",
        title: "Firebase & Authentication",
        text:
          "Worked with Firebase authentication and application data integration for user accounts and personalized functionality.",
      },
      {
        icon: "⭐",
        title: "Ratings & Reviews",
        text:
          "Contributed to destination review features, including rating submission, written comments, and displaying visitor feedback.",
      },
      {
        icon: "📱",
        title: "Flutter UI Screens",
        text:
          "Developed mobile interface screens, layouts, navigation flows, and user interactions across the tourism application.",
      },
      {
        icon: "🧳",
        title: "Travel Tips & Advice",
        text:
          "Built travel guidance screens presenting practical travel tips and local Melaka advice to support visitors before and during their trips.",
      },
      {
        icon: "📍",
        title: "Destination Discovery",
        text:
          "Worked on exploring attractions and accessing useful destination information, photos, ratings, and related details.",
      },
    ],

    flowLabel: "03 / USER EXPERIENCE",
    flowTitle: "From Discovery to Itinerary",
    flowIntro:
      "A simplified view of how the tourist-facing features work together.",

    steps: [
      {
        number: "01",
        title: "Explore",
        detail: "Browse attractions and destinations on the map.",
      },
      {
        number: "02",
        title: "Filter",
        detail: "Choose categories and a comfortable budget.",
      },
      {
        number: "03",
        title: "Save",
        detail: "Add interesting locations to a personal wishlist.",
      },
      {
        number: "04",
        title: "Plan",
        detail: "Generate a map-based itinerary from saved places.",
      },
    ],

    techLabel: "04 / TECHNICAL IMPLEMENTATION",
    techTitle: "Technologies Behind the Mobile App",
    techIntro:
      "The application combines Flutter interfaces, cloud-backed data, location permissions, and mapping services.",

    architecture:
      "Flutter Mobile UI → Firebase Authentication / Firestore → Wishlist & Destination Data → Geolocation / Google Maps",

    galleryLabel: "05 / ORIGINAL INTERFACE",
    galleryTitle: "Inside Melaka Wanderlust",
    galleryIntro:
      "Real interface screenshots from the university project report. Select a screen to explore the mobile experience.",
    screenshot: "Original Project Screenshot",
    galleryNote:
      "These images document the original group application's interface. They are not screenshots of a new portfolio redesign.",

    testingLabel: "06 / PROJECT TESTING",
    testingTitle: "Documented Test Results",
    testingIntro:
      "The original final report records five successful black-box functional tests. These are documented group-project results, not new tests performed for this portfolio.",

    tests: [
      "User Registration",
      "User Login",
      "Submit Review",
      "View Reviews",
      "View Destination Information",
    ],

    teamworkLabel: "07 / COLLABORATION",
    teamworkTitle: "My Role in a Collaborative Project",
    teamworkText:
      "Melaka Wanderlust was developed collaboratively as a university group project. This case study focuses on the mobile features I personally worked on, including Google Maps, itinerary planning, Firebase, budget filters, wishlists, reviews, user interfaces, and travel guidance. Other modules were developed as part of the wider team effort.",

    learningLabel: "08 / ENGINEERING EXPERIENCE",
    learningTitle: "Key Technical Experience",
    lessons: [
      {
        icon: "📲",
        title: "Flutter Application Architecture",
        text:
          "Connecting multiple screens and reusable components into a consistent mobile user experience.",
      },
      {
        icon: "☁️",
        title: "Firebase Integration",
        text:
          "Working with authentication, cloud-backed application data, and user-specific features.",
      },
      {
        icon: "🧭",
        title: "Location-Aware Features",
        text:
          "Handling permissions, coordinates, destination ordering, Google Maps markers, and routing.",
      },
      {
        icon: "🤝",
        title: "Team Collaboration",
        text:
          "Integrating individual contributions into a larger academic software project.",
      },
    ],

    technologies: "Technologies & Tools",
    endTitle: "Building More Than a Travel Guide",
    endText:
      "This project strengthened my experience building mobile applications that connect users, cloud services, and real-world locations.",
    footer: "Back to All Projects",
  },

  ar: {
    back: "العودة إلى المشاريع",
    eyebrow: "مشروع جامعي جماعي · مساهماتي الشخصية",
    title: "Melaka Wanderlust",
    subtitle: "اكتشف ملاكا، وخطط بذكاء، واستمتع برحلتك.",
    description:
      "تطبيق سياحي باستخدام Flutter يساعد الزوار على اكتشاف المعالم السياحية واستكشاف الوجهات عبر خرائط Google، وتصفية الأماكن حسب الميزانية، وحفظ المفضلة، وقراءة التقييمات، وتنظيم مسارات الرحلات.",

    role: "مطور تطبيقات Flutter",
    team: "مشروع جامعي جماعي",
    scope: "دراسة حالة لمساهماتي الشخصية",

    explore: "استكشف مساهماتي",
    galleryButton: "عرض صور التطبيق",

    overviewLabel: "01 / نظرة عامة",
    overviewTitle: "طريقة أذكى لاكتشاف مملاكا",

    challengeTitle: "التحدي",
    challenge:
      "قد يواجه السياح صعوبة في الوصول إلى معلومات الأماكن السياحية المتفرقة والعثور على وجهات تناسب ميزانياتهم وإنشاء خطط سفر منظمة. تؤثر هذه التحديات على قدرتهم على استغلال الوقت واختيار الأماكن المناسبة.",

    approachTitle: "الحل",
    approach:
      "يجمع Melaka Wanderlust بين اكتشاف الوجهات والخرائط وتصفية الميزانية وقائمة المفضلة والتقييمات والإرشادات السياحية. ركزت مساهماتي على تطوير وظائف Flutter وتكامل Firebase التي تدعم تجربة المستخدم.",

    contributionLabel: "02 / مساهماتي الشخصية",
    contributionTitle: "الوظائف التي عملت عليها",
    contributionIntro:
      "هذه هي الوحدات التي ساهمت شخصياً في تطويرها ضمن المشروع الجامعي الجماعي.",

    features: [
      {
        icon: "🗺️",
        title: "خرائط Google وتخطيط الرحلات",
        text:
          "دمج الخرائط وخدمات الموقع وعرض المسارات وتخطيط الرحلات. يرتب الكود الوجهات المحفوظة حسب المسافة من موقع المستخدم ويجلب معلومات الطريق.",
      },
      {
        icon: "💰",
        title: "التصفية حسب الميزانية والفئات",
        text:
          "تطوير أدوات تسمح باختيار الفئات السياحية وحدود الميزانية لعرض الوجهات المناسبة.",
      },
      {
        icon: "❤️",
        title: "إدارة المفضلة",
        text:
          "العمل على حفظ الوجهات وعرض قائمة المفضلة واستخدام الأماكن المختارة لتخطيط الرحلات.",
      },
      {
        icon: "🔐",
        title: "Firebase وتسجيل الدخول",
        text:
          "العمل على تسجيل المستخدمين وتكامل Firebase لإدارة الحسابات والبيانات والوظائف الشخصية.",
      },
      {
        icon: "⭐",
        title: "التقييمات والمراجعات",
        text:
          "المساهمة في إضافة تقييمات الوجهات والتعليقات وعرض آراء الزوار.",
      },
      {
        icon: "📱",
        title: "واجهات تطبيق Flutter",
        text:
          "تطوير شاشات التطبيق والتخطيطات والتنقل والتفاعلات المختلفة داخل التطبيق السياحي.",
      },
      {
        icon: "🧳",
        title: "نصائح السفر والإرشادات",
        text:
          "تطوير شاشات تعرض نصائح السفر والمعلومات المحلية لمساعدة الزوار قبل رحلاتهم وأثناءها.",
      },
      {
        icon: "📍",
        title: "استكشاف الوجهات",
        text:
          "العمل على استعراض المعالم السياحية ومعلومات الأماكن والصور والتقييمات والتفاصيل المرتبطة بها.",
      },
    ],

    flowLabel: "03 / تجربة المستخدم",
    flowTitle: "من اكتشاف المكان إلى تخطيط الرحلة",
    flowIntro:
      "نظرة مبسطة على كيفية تكامل الوظائف السياحية داخل التطبيق.",

    steps: [
      {
        number: "01",
        title: "استكشف",
        detail: "تصفح المعالم والوجهات عبر الخريطة.",
      },
      {
        number: "02",
        title: "صفِّ النتائج",
        detail: "اختر الفئات والميزانية المناسبة.",
      },
      {
        number: "03",
        title: "احفظ",
        detail: "أضف الوجهات إلى قائمة المفضلة.",
      },
      {
        number: "04",
        title: "خطط",
        detail: "أنشئ مسار رحلة باستخدام الأماكن المحفوظة.",
      },
    ],

    techLabel: "04 / التنفيذ التقني",
    techTitle: "التقنيات المستخدمة في التطبيق",
    techIntro:
      "يجمع التطبيق بين واجهات Flutter والبيانات السحابية وخدمات الموقع والخرائط.",

    architecture:
      "واجهات Flutter → Firebase Authentication / Firestore → بيانات الوجهات والمفضلة → خدمات الموقع وGoogle Maps",

    galleryLabel: "05 / الواجهة الأصلية",
    galleryTitle: "استكشف تطبيق Melaka Wanderlust",
    galleryIntro:
      "صور حقيقية لواجهات التطبيق مأخوذة من التقرير الجامعي. اختر الشاشة التي تريد استعراضها.",
    screenshot: "صورة من التطبيق الأصلي",
    galleryNote:
      "تعرض هذه الصور واجهة التطبيق الجماعي الأصلي، وليست صوراً لتصميم جديد خاص بالمحفظة.",

    testingLabel: "06 / اختبار النظام",
    testingTitle: "نتائج الاختبار الموثقة",
    testingIntro:
      "يوثق التقرير النهائي خمس حالات اختبار وظيفية ناجحة. وهي نتائج المشروع الجامعي الجماعي وليست اختبارات جديدة أجريت لهذه المحفظة.",

    tests: [
      "تسجيل مستخدم جديد",
      "تسجيل الدخول",
      "إرسال تقييم",
      "استعراض التقييمات",
      "عرض معلومات الوجهة",
    ],

    teamworkLabel: "07 / العمل الجماعي",
    teamworkTitle: "دوري في المشروع الجماعي",
    teamworkText:
      "تم تطوير Melaka Wanderlust بالتعاون مع فريق جامعي. تركز دراسة الحالة هذه على الوظائف التي شاركت شخصياً في تطويرها، مثل الخرائط وتخطيط الرحلات وFirebase وتصفية الميزانية والمفضلة والتقييمات وواجهات التطبيق ونصائح السفر. وقد طُورت وحدات أخرى ضمن عمل الفريق ككل.",

    learningLabel: "08 / الخبرة التقنية",
    learningTitle: "المهارات والخبرات المكتسبة",
    lessons: [
      {
        icon: "📲",
        title: "بنية تطبيقات Flutter",
        text:
          "ربط الشاشات والمكونات المختلفة لبناء تجربة متناسقة للمستخدم.",
      },
      {
        icon: "☁️",
        title: "تكامل Firebase",
        text:
          "التعامل مع تسجيل الدخول والبيانات السحابية والوظائف المرتبطة بحسابات المستخدمين.",
      },
      {
        icon: "🧭",
        title: "الوظائف المعتمدة على الموقع",
        text:
          "إدارة صلاحيات الموقع والإحداثيات وترتيب الوجهات وعلامات الخرائط ومسارات التنقل.",
      },
      {
        icon: "🤝",
        title: "العمل ضمن فريق",
        text:
          "دمج المساهمات الفردية في مشروع برمجي جامعي متكامل.",
      },
    ],

    technologies: "التقنيات والأدوات",
    endTitle: "أكثر من مجرد دليل سياحي",
    endText:
      "ساعدني هذا المشروع على تطوير خبرتي في بناء تطبيقات تربط المستخدمين بالخدمات السحابية والمواقع الواقعية.",
    footer: "العودة إلى جميع المشاريع",
  },
};

const technologies = [
  "Flutter",
  "Dart",
  "Firebase Authentication",
  "Cloud Firestore",
  "Firebase Storage",
  "Google Maps",
  "Geolocator",
  "Provider",
  "REST APIs",
  "Android Studio",
  "Git",
];

// ========================================
// REUSABLE COMPONENTS
// ========================================

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.18em] text-orange-300">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function DetailCard({
  icon,
  title,
  text,
  highlight = false,
}: {
  icon: string;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
        highlight
          ? "border-orange-400/25 bg-[#201D29]"
          : "border-white/10 bg-[#111B2D] hover:border-orange-400/20"
      }`}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-5 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-8 text-slate-400">
        {text}
      </p>
    </article>
  );
}

// ========================================
// MAIN PAGE
// ========================================

export default function WanderlustPage() {
  const ar = useLocale() === "ar";
  const t = ar ? translations.ar : translations.en;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screenshots[activeIndex];

  return (
    <main
      dir={ar ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#080B14] text-white"
    >
      {/* Ambient backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-44 -top-48 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[140px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-60 top-[1200px] h-[650px] w-[650px] rounded-full bg-blue-600/[0.08] blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">

        {/* NAVIGATION */}
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-sm text-slate-400 transition hover:text-orange-300"
          >
            {ar ? "→" : "←"} {t.back}
          </Link>

          <div dir="ltr" className="flex gap-2">
            <Link
              href="/projects/wanderlust"
              locale="en"
              className={`rounded-xl border px-4 py-2 text-sm ${
                !ar
                  ? "border-orange-400 bg-orange-400/10 text-orange-200"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              English
            </Link>

            <Link
              href="/projects/wanderlust"
              locale="ar"
              className={`rounded-xl border px-4 py-2 text-sm ${
                ar
                  ? "border-orange-400 bg-orange-400/10 text-orange-200"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              العربية
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <header className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-wide text-orange-300">
              {t.eyebrow}
            </p>

            <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-500 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>

            <p className="mt-6 text-xl font-bold leading-relaxed text-white sm:text-2xl">
              {t.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              {t.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[t.role, t.team, t.scope].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contributions"
                className="rounded-xl bg-orange-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-300"
              >
                {t.explore} ↗
              </a>

              <a
                href="#screenshots"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                {t.galleryButton}
              </a>
            </div>
          </div>

          {/* Original project screenshot showcase */}
          <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center gap-3 rounded-[32px] border border-orange-400/15 bg-gradient-to-br from-orange-500/10 via-[#141D31] to-[#0C1424] p-5 sm:p-8">
            <div className="relative z-10 w-[55%] -rotate-3 overflow-hidden rounded-[25px] border-[5px] border-[#242B3D] bg-white shadow-2xl shadow-black/50">
              <Image
                src="/projects/wanderlust-gallery/melaka-home-map.png"
                alt="Original Melaka Wanderlust map homepage"
                width={768}
                height={1202}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="relative w-[45%] translate-y-9 rotate-6 overflow-hidden rounded-[22px] border-[5px] border-[#242B3D] bg-white shadow-2xl shadow-black/50">
              <Image
                src="/projects/wanderlust-gallery/melaka-itinerary.png"
                alt="Original Melaka Wanderlust itinerary screen"
                width={768}
                height={1201}
                className="h-auto w-full"
              />
            </div>

            <span
              dir="ltr"
              className="absolute bottom-3 left-4 rounded-full border border-white/15 bg-[#10192A]/90 px-3 py-1 text-[10px] font-semibold text-orange-200"
            >
              FLUTTER · FIREBASE · GOOGLE MAPS
            </span>
          </div>
        </header>

        {/* 01 OVERVIEW */}
        <section className="mt-28">
          <SectionHeading
            eyebrow={t.overviewLabel}
            title={t.overviewTitle}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <DetailCard
              icon="🎯"
              title={t.challengeTitle}
              text={t.challenge}
            />

            <DetailCard
              icon="💡"
              title={t.approachTitle}
              text={t.approach}
              highlight
            />
          </div>
        </section>

        {/* 02 PERSONAL CONTRIBUTIONS */}
        <section
          id="contributions"
          className="mt-28 scroll-mt-24"
        >
          <SectionHeading
            eyebrow={t.contributionLabel}
            title={t.contributionTitle}
          />

          <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-400">
            {t.contributionIntro}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature) => (
              <DetailCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </section>

        {/* 03 USER EXPERIENCE FLOW */}
        <section className="mt-28">
          <SectionHeading
            eyebrow={t.flowLabel}
            title={t.flowTitle}
          />

          <p className="mt-5 text-sm leading-8 text-slate-400">
            {t.flowIntro}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-[#111B2D] p-6"
              >
                <div
                  dir="ltr"
                  className="text-3xl font-black text-orange-400/40"
                >
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04 TECHNICAL IMPLEMENTATION */}
        <section className="mt-28">
          <SectionHeading
            eyebrow={t.techLabel}
            title={t.techTitle}
          />

          <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-400">
            {t.techIntro}
          </p>

          <div className="mt-8 rounded-3xl border border-orange-400/20 bg-[#111B2D] p-6 sm:p-9">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                {
                  icon: "📱",
                  name: "Flutter / Dart",
                },
                {
                  icon: "🔐",
                  name: "Firebase Auth",
                },
                {
                  icon: "☁️",
                  name: "Cloud Firestore",
                },
                {
                  icon: "🗺️",
                  name: "Google Maps",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/10 bg-[#0B1424] p-5 text-center"
                >
                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  <p
                    dir="ltr"
                    className="mt-4 text-sm font-bold"
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            <div
              dir="ltr"
              className="mt-7 rounded-xl border border-orange-400/15 bg-orange-400/5 p-5 text-center font-mono text-xs leading-7 text-orange-200 sm:text-sm"
            >
              Flutter UI → Firebase / Firestore → Geolocation / Google Maps
            </div>

            <p className="mt-5 text-center text-xs leading-6 text-slate-500">
              {t.architecture}
            </p>
          </div>
        </section>

        {/* 05 ORIGINAL SCREENSHOT GALLERY */}
        <section
          id="screenshots"
          className="mt-28 scroll-mt-24"
        >
          <SectionHeading
            eyebrow={t.galleryLabel}
            title={t.galleryTitle}
          />

          <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-400">
            {t.galleryIntro}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Active screenshot */}
            <div className="rounded-3xl border border-orange-400/20 bg-gradient-to-b from-[#19243B] to-[#101827] p-5 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-bold text-orange-300">
                  {ar ? activeScreen.ar : activeScreen.en}
                </p>

                <span
                  dir="ltr"
                  className="text-xs text-slate-400"
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                  {" / "}
                  {screenshots.length}
                </span>
              </div>

              <div className="relative mx-auto aspect-[2/3] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30">
                <Image
                  src={activeScreen.src}
                  alt={ar ? activeScreen.ar : activeScreen.en}
                  fill
                  sizes="(max-width: 768px) 85vw, 350px"
                  className="object-contain"
                />
              </div>

              <p className="mt-6 text-center text-sm leading-7 text-slate-400">
                {ar
                  ? activeScreen.descAr
                  : activeScreen.descEn}
              </p>

              <p className="mt-4 text-center text-[11px] text-slate-500">
                {t.screenshot}
              </p>
            </div>

            {/* Screen selector */}
            <div className="grid content-start grid-cols-2 gap-3 sm:grid-cols-2 lg:max-h-[785px] lg:overflow-y-auto lg:pr-2">
              {screenshots.map((screen, index) => {
                const selected = index === activeIndex;

                return (
                  <button
                    key={screen.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={selected}
                    className={`flex items-center gap-3 rounded-2xl border p-3 text-start transition ${
                      selected
                        ? "border-orange-400/60 bg-orange-400/10"
                        : "border-white/10 bg-[#101B2D] hover:border-orange-400/30"
                    }`}
                  >
                    <div className="relative h-24 w-[65px] shrink-0 overflow-hidden rounded-lg bg-white">
                      <Image
                        src={screen.src}
                        alt={ar ? screen.ar : screen.en}
                        fill
                        sizes="65px"
                        className="object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-xs font-semibold leading-6 sm:text-sm ${
                          selected
                            ? "text-orange-200"
                            : "text-slate-200"
                        }`}
                      >
                        {ar ? screen.ar : screen.en}
                      </p>

                      <p
                        dir="ltr"
                        className="mt-2 text-[10px] text-slate-500"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-5 text-xs leading-7 text-slate-500">
            {t.galleryNote}
          </p>
        </section>

        {/* 06 DOCUMENTED TESTING */}
        <section className="mt-28">
          <SectionHeading
            eyebrow={t.testingLabel}
            title={t.testingTitle}
          />

          <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-400">
            {t.testingIntro}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.tests.map((test, index) => (
              <div
                key={test}
                className="flex items-center gap-3 rounded-xl border border-emerald-400/15 bg-[#112020] p-5"
              >
                <span className="text-emerald-400">
                  ✓
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    {test}
                  </p>

                  <p
                    dir="ltr"
                    className="mt-1 text-xs text-emerald-400/80"
                  >
                    TC00{index + 1} · PASS
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 07 TEAM ATTRIBUTION */}
        <section className="mt-28">
          <SectionHeading
            eyebrow={t.teamworkLabel}
            title={t.teamworkTitle}
          />

          <div className="mt-8 rounded-3xl border border-orange-400/20 bg-gradient-to-br from-[#201D2B] to-[#101B2D] p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl">🤝</span>

              <span className="rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2 text-xs font-semibold text-orange-300">
                {t.team}
              </span>
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-9 text-slate-300">
              {t.teamworkText}
            </p>
          </div>
        </section>

        {/* 08 LESSONS */}
        <section className="mt-28">
          <SectionHeading
            eyebrow={t.learningLabel}
            title={t.learningTitle}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.lessons.map((lesson) => (
              <DetailCard
                key={lesson.title}
                icon={lesson.icon}
                title={lesson.title}
                text={lesson.text}
              />
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            {t.technologies}
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                dir="ltr"
                className="rounded-full border border-orange-400/20 bg-orange-400/[0.08] px-4 py-2 text-xs font-medium text-orange-100 sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* FINAL MESSAGE */}
        <section className="mt-24 rounded-3xl border border-white/10 bg-[#111B2D] p-8 text-center sm:p-12">
          <div className="text-4xl">🌍</div>

          <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
            {t.endTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400">
            {t.endText}
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/10 pt-9">
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
