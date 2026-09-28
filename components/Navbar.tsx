"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="group text-lg font-semibold tracking-tight transition-colors duration-200 hover:text-accent"
        >
          Mona
          <span className="text-accent transition-colors duration-200 group-hover:text-foreground">
            .
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}

              <span className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}

          <a
            href="https://github.com/Mona7192"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-accent/70 px-4 py-2 text-sm text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/10 hover:shadow-[0_6px_20px_rgba(100,255,218,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
        >
          <span className="sr-only">
            {isOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>

          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border/60 bg-background px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://github.com/Mona7192"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-fit rounded-md border border-accent/70 px-4 py-2 text-sm text-accent transition-all duration-200 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}