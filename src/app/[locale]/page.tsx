
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { useLocale } from "next-intl";

export default function HomePage() {
  const isArabic = useLocale() === "ar";

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#080B14] text-white">
      {/* Futuristic Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]"
      />

      {/* Responsive Navigation Bar */}
      <Navbar />

      {/* Hero - constrained to portfolio width */}
      <div className="relative mx-auto w-full max-w-6xl">
        <Hero />
      </div>

      {/* Full-width sections with their own centered containers */}
      <About />

      <Experience />

      <Skills />

      <Projects />

      <Contact />

      {/* Footer */}
      <footer
        dir={isArabic ? "rtl" : "ltr"}
        className="border-t border-white/10 bg-[#080B14] py-8"
      >
        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-slate-500 sm:px-8">
          {isArabic
            ? "© 2026 صلاح عياش. جميع الحقوق محفوظة."
            : "© 2026 Salah Ayash. All rights reserved."}
        </div>
      </footer>
    </main>
  );
}
