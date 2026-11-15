
"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "motion/react";

const screenshots = [
  {
    src: "/projects/iqra-gallery/iqra.png",
    en: "Login",
    ar: "تسجيل الدخول",
  },
  {
    src: "/projects/iqra-gallery/home.png",
    en: "Home",
    ar: "الرئيسية",
  },
  {
    src: "/projects/iqra-gallery/lessons.png",
    en: "Arabic Lessons",
    ar: "دروس العربية",
  },
  {
    src: "/projects/iqra-gallery/quiz2.png",
    en: "Interactive Quiz",
    ar: "اختبار تفاعلي",
  },
  {
    src: "/projects/iqra-gallery/quiz3.png",
    en: "Matching Exercise",
    ar: "اختبار المطابقة",
  },
  {
    src: "/projects/iqra-gallery/pronunciation.png",
    en: "Pronunciation Practice",
    ar: "تدريب النطق",
  },
  {
    src: "/projects/iqra-gallery/profile.png",
    en: "User Profile",
    ar: "الملف الشخصي",
  },
];

export default function IqraGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale();
  const isArabic = locale === "ar";

  const active = screenshots[activeIndex];

  const previous = () => {
    setActiveIndex((index) =>
      (index - 1 + screenshots.length) % screenshots.length
    );
  };

  const next = () => {
    setActiveIndex((index) =>
      (index + 1) % screenshots.length
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto w-full max-w-3xl">

        {/* Gallery Heading */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white">
            {isArabic ? "معرض صور تطبيق إقرأ" : "IQRA App Gallery"}
          </h3>

          <span className="font-mono text-sm text-blue-400">
            {activeIndex + 1} / {screenshots.length}
          </span>
        </div>

        {/* Main Screenshot */}
        <div className="overflow-hidden rounded-2xl border border-blue-500/20 bg-[#101827]">

          <div className="relative h-96 sm:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={isArabic ? active.ar : active.en}
                  fill
                  sizes="(max-width: 640px) 100vw, 768px"
                  className="object-contain p-4"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Gallery Controls */}
          <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">

            <button
              type="button"
              onClick={previous}
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              {isArabic ? "السابق" : "Previous"}
            </button>

            <span className="px-2 text-center text-sm text-slate-300">
              {isArabic ? active.ar : active.en}
            </span>

            <button
              type="button"
              onClick={next}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-500"
            >
              {isArabic ? "التالي" : "Next"}
            </button>

          </div>
        </div>

        {/* Screenshot Thumbnails */}
        <div className="mt-5 flex gap-3 overflow-x-auto pb-3">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={
                isArabic
                  ? `عرض ${screenshot.ar}`
                  : `View ${screenshot.en}`
              }
              aria-pressed={activeIndex === index}
              className={`shrink-0 rounded-xl border-2 p-1.5 transition ${
                activeIndex === index
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 hover:border-blue-400/50"
              }`}
            >
              <div className="relative h-24 w-16 overflow-hidden rounded-lg bg-[#101827]">
                <Image
                  src={screenshot.src}
                  alt={isArabic ? screenshot.ar : screenshot.en}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
            </button>
          ))}
        </div>

      </div>
    </MotionConfig>
  );
}
