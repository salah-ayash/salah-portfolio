
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");
  const nav = useTranslations("Navigation");

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#080B14] text-white">

      {/* Futuristic Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Responsive Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Animated Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Professional Experience Section */}
        <Experience />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/10 py-24"
        >
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
            {nav("contact")}
          </h2>

          <p className="text-slate-400">
            {t("role")}
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
          © 2026 Salah Ayash. All rights reserved.
        </footer>

      </div>
    </main>
  );
}
