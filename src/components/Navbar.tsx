
"use client";

import {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const nav = useTranslations("Navigation");

  const links = [
    {name: nav("home"), href: "#home"},
    {name: nav("projects"), href: "#projects"},
    {name: nav("contact"), href: "#contact"}
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080B14]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tight">
          SA<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-xl border border-white/15 bg-white/5 p-1 text-sm">
            <Link
              href="/"
              locale="en"
              className={`rounded-lg px-3 py-2 transition ${
                locale === "en"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </Link>

            <Link
              href="/"
              locale="ar"
              className={`rounded-lg px-3 py-2 transition ${
                locale === "ar"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              عربي
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="rounded-lg border border-white/15 p-3 md:hidden"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="my-1 block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0B1020] px-5 py-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
