
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "motion/react";
import { useLocale } from "next-intl";

// ==========================================
// UPDATED CCTV SCREENSHOTS
// ==========================================

type Screenshot = {
  image: string;
  en: string;
  ar: string;
  wide?: boolean;
};

const screenshots: Screenshot[] = [
  {
    image: "/projects/cctv-gallery/showcase.png",
    en: "Application Showcase",
    ar: "نظرة عامة على التطبيق",
    wide: true,
  },
  {
    image: "/projects/cctv-gallery/dashboard.png",
    en: "Camera Dashboard",
    ar: "لوحة تحكم الكاميرات",
  },
  {
    image: "/projects/cctv-gallery/cctv-demo-live.png",
    en: "CCTV Demo Mode",
    ar: "الوضع التجريبي للكاميرات",
  },
  {
    image: "/projects/cctv-gallery/Login.png",
    en: "Secure Login",
    ar: "تسجيل الدخول الآمن",
  },
  {
    image: "/projects/cctv-gallery/create%20account.png",
    en: "Create Account",
    ar: "إنشاء حساب",
  },
  {
    image: "/projects/cctv-gallery/profile.png",
    en: "User Profile",
    ar: "الملف الشخصي",
  },
  {
    image: "/projects/cctv-gallery/account-security.png",
    en: "Account Security",
    ar: "أمان الحساب",
  },
  {
    image: "/projects/cctv-gallery/change password.png",
    en: "Change Password",
    ar: "تغيير كلمة المرور",
  },
  {
    image: "/projects/cctv-gallery/password-recovery.png",
    en: "Password Recovery",
    ar: "استعادة كلمة المرور",
  },
];

// ==========================================
// CCTV GALLERY
// ==========================================

export default function CctvGallery() {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [activeIndex, setActiveIndex] = useState(0);

  const active = screenshots[activeIndex];

  const previous = () => {
    setActiveIndex((index) =>
      (index - 1 + screenshots.length) %
      screenshots.length
    );
  };

  const next = () => {
    setActiveIndex((index) =>
      (index + 1) % screenshots.length
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full">

        {/* GALLERY HEADING */}
        <div className="mb-8 text-center">

          <span className="text-xs font-semibold tracking-widest text-cyan-400">
            CCTV CAMERA CONTROL
          </span>

          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            {isArabic
              ? "معرض صور التطبيق"
              : "Application Screenshots"}
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            {isArabic
              ? "استكشف واجهات التطبيق وأبرز وظائفه"
              : "Explore the latest CCTV application screens"}
          </p>
        </div>

        {/* MAIN IMAGE VIEWER */}
        <div
          dir="ltr"
          className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#080B14] px-3 py-6 sm:px-10"
        >

          <div className="relative mx-auto h-[400px] w-full sm:h-[540px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 mx-auto ${
                  active.wide
                    ? "max-w-[680px]"
                    : "max-w-[330px]"
                }`}
              >
                <Image
                  src={active.image}
                  alt={
                    isArabic
                      ? active.ar
                      : active.en
                  }
                  fill
                  sizes={
                    active.wide
                      ? "(max-width: 640px) 90vw, 680px"
                      : "(max-width: 640px) 85vw, 330px"
                  }
                  className="object-contain"
                  loading="eager"
                />
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* IMAGE NAME AND COUNTER */}
        <div className="mt-6 text-center">

          <h3 className="text-lg font-semibold text-cyan-300">
            {isArabic ? active.ar : active.en}
          </h3>

          <p className="mt-2 font-mono text-xs text-slate-500">
            {String(activeIndex + 1).padStart(2, "0")}
            {" / "}
            {String(screenshots.length).padStart(2, "0")}
          </p>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div
          dir="ltr"
          className="mt-6 flex items-center justify-center gap-4"
        >

          <button
            type="button"
            onClick={previous}
            aria-label={
              isArabic
                ? "الصورة السابقة"
                : "Previous screenshot"
            }
            className="flex h-12 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#101827] text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/15"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={
              isArabic
                ? "الصورة التالية"
                : "Next screenshot"
            }
            className="flex h-12 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#101827] text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/15"
          >
            →
          </button>

        </div>

        {/* SCREENSHOT THUMBNAILS */}
        <div
          dir="ltr"
          className="mx-auto mt-10 flex max-w-3xl justify-start gap-3 overflow-x-auto pb-4"
        >

          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={
                isArabic
                  ? screenshot.ar
                  : screenshot.en
              }
              aria-pressed={activeIndex === index}
              className={`relative h-24 w-16 shrink-0 overflow-hidden rounded-xl border-2 bg-[#080B14] transition-all duration-300 ${
                activeIndex === index
                  ? "scale-105 border-cyan-400 opacity-100 shadow-lg shadow-cyan-500/20"
                  : "border-white/10 opacity-50 hover:border-cyan-400/60 hover:opacity-100"
              }`}
            >
              <Image
                src={screenshot.image}
                alt={
                  isArabic
                    ? screenshot.ar
                    : screenshot.en
                }
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            </button>
          ))}

        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          {isArabic
            ? "استخدم الأسهم أو الصور المصغرة للتنقل بين صور التطبيق."
            : "Use the arrows or thumbnails to explore the screenshots."}
        </p>

      </section>
    </MotionConfig>
  );
}
