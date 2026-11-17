
import type { Metadata } from "next";

import {
  NextIntlClientProvider,
  hasLocale,
} from "next-intl";

import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://salahayash.vercel.app";

// SEO Metadata for English and Arabic
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";

  const title = isArabic
    ? "صلاح عياش | مطور ويب وتطبيقات جوال وحلول سحابية"
    : "Salah Ayash | Full-Stack Web, Mobile & Cloud Developer";

  const description = isArabic
    ? "اكتشف الملف المهني لصلاح عياش ومشاريعه في تطوير مواقع الويب وتطبيقات الجوال باستخدام Flutter وNext.js والحلول السحابية وAWS."
    : "Explore Salah Ayash's developer portfolio featuring Next.js web applications, Flutter mobile apps, AWS cloud solutions, and IoT projects.";

  return {
    metadataBase: new URL(siteUrl),

    title,
    description,

verification: {
  google: "9pJFpkJ6OE74oYT0pqqkxZ0jBOeNs5yqAGxRmfK0g7Q",
},


    applicationName: "Salah Ayash Portfolio",

    authors: [
      {
        name: "Salah Ayash",
        url: siteUrl,
      },
    ],

    creator: "Salah Ayash",

    keywords: [
      "Salah Ayash",
      "Salah Mohammed Ayash",
      "Full-Stack Developer",
      "Web Developer",
      "Mobile Developer",
      "Flutter Developer",
      "Next.js Developer",
      "TypeScript",
      "Cloud Developer",
      "AWS",
      "Firebase",
      "IoT Developer",
      "Software Engineer",
      "صلاح عياش",
    ],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      siteName: "Salah Ayash Portfolio",
      title,
      description,
    },

    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

// Generate English and Arabic pages
export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

// Main Locale Layout
export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-[#080B14] text-white antialiased">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
