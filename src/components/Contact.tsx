
"use client";

import type { FormEvent } from "react";
import { motion, MotionConfig } from "motion/react";
import { useLocale } from "next-intl";


const CONTACT_EMAIL = "salahayash8@gmail.com";

const GITHUB_URL = "https://github.com/salah-ayash";

const translations = {
  en: {
    eyebrow: "LET'S CONNECT",
    title: "Let's Build Something Great Together",
    description:
      "Have a project, job opportunity, or collaboration in mind? I'm always interested in discussing software development and meaningful technical challenges.",
    emailTitle: "Email Me",
    emailDescription: "Reach out directly via email.",
    githubTitle: "GitHub",
    githubDescription: "Explore my repositories and development work.",
    formTitle: "Send Me a Message",
    formDescription:
      "Fill in the details below to prepare an email.",
    name: "Your Name",
    namePlaceholder: "Enter your full name",
    email: "Your Email",
    emailPlaceholder: "you@example.com",
    message: "Your Message",
    messagePlaceholder:
      "Tell me about your project or opportunity...",
    send: "Compose Email",
   
  },
  ar: {
    eyebrow: "لنبقَ على تواصل",
    title: "لنبنِ شيئاً رائعاً معاً",
    description:
      "هل لديك مشروع أو فرصة عمل أو فكرة للتعاون؟ يسعدني التواصل معك ومناقشة مشاريع تطوير البرمجيات والتحديات التقنية.",
    emailTitle: "البريد الإلكتروني",
    emailDescription: "تواصل معي مباشرة عبر البريد الإلكتروني.",
    githubTitle: "GitHub",
    githubDescription: "استكشف مستودعاتي ومشاريعي البرمجية.",
    formTitle: "أرسل لي رسالة",
    formDescription:
      "أدخل معلوماتك أدناه لتحضير رسالة بريد إلكتروني.",
    name: "الاسم",
    namePlaceholder: "أدخل اسمك الكامل",
    email: "بريدك الإلكتروني",
    emailPlaceholder: "you@example.com",
    message: "رسالتك",
    messagePlaceholder:
      "أخبرني عن مشروعك أو فرصة العمل...",
    send: "إنشاء رسالة بريدية",
    
  },
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#0A1425] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10";

export default function Contact() {
  const isArabic = useLocale() === "ar";
  const t = isArabic ? translations.ar : translations.en;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) return;

    const subject = isArabic
      ? `رسالة من موقع أعمالي - ${name}`
      : `Portfolio Inquiry - ${name}`;

    const body = isArabic
      ? `الاسم: ${name}\nالبريد: ${email}\n\nالرسالة:\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
        dir={isArabic ? "rtl" : "ltr"}
        className="relative isolate w-full scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#080B14] py-20 sm:py-24"
      >
        {/* Background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/[0.08] blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[120px]"
        />

        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-start"
          >
            <span
              className={`text-xs font-bold text-blue-400 sm:text-sm ${
                isArabic ? "" : "tracking-[0.15em]"
              }`}
            >
              {t.eyebrow}
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>

            <div className="my-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

            <p className="max-w-2xl text-base leading-9 text-slate-400 sm:text-lg">
              {t.description}
            </p>
          </motion.div>

          {/* Contact layout */}
          <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-4"
            >
              {/* Email */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#111D32] to-[#0D1729] p-6 transition-colors duration-300 hover:border-blue-400/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl">
                    <span aria-hidden="true">✉️</span>
                  </div>

                  <div className="min-w-0 flex-1 text-start">
                    <h3 className="text-lg font-bold text-white">
                      {t.emailTitle}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {t.emailDescription}
                    </p>

                    <p
                      dir="ltr"
                      className="mt-4 break-all text-start text-sm font-medium text-blue-300 transition-colors group-hover:text-cyan-300"
                    >
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#111D32] to-[#0D1729] p-6 transition-colors duration-300 hover:border-blue-400/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl">
                    <span aria-hidden="true">💻</span>
                  </div>

                  <div className="min-w-0 flex-1 text-start">
                    <h3 className="text-lg font-bold text-white">
                      {t.githubTitle}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {t.githubDescription}
                    </p>

                    <p
                      dir="ltr"
                      className="mt-4 text-start text-sm font-medium text-blue-300 transition-colors group-hover:text-cyan-300"
                    >
                      github.com/salah-ayash
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative overflow-hidden rounded-[26px] border border-blue-400/25 bg-gradient-to-br from-[#111D32] via-[#0F192B] to-[#0A1425] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.2)] sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {t.formTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {t.formDescription}
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-slate-200"
                  >
                    {t.name}
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder={t.namePlaceholder}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-slate-200"
                  >
                    {t.email}
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    dir="ltr"
                    placeholder={t.emailPlaceholder}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-slate-200"
                  >
                    {t.message}
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={3000}
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_12px_35px_rgba(37,99,235,0.3)]"
                >
                  <span aria-hidden="true">✉</span>
                  {t.send}
                  <span aria-hidden="true">
                    {isArabic ? "↖" : "↗"}
                  </span>
                </button>

                
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
