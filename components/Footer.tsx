
const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          {/* Brand */}
          <div className="shrink-0">
            <a
              href="#home"
              className="text-base font-semibold tracking-tight transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Mona<span className="text-accent">.</span>
            </a>

            <p className="mt-1.5 text-sm text-muted">
              Frontend Developer
            </p>
          </div>

          {/* Footer Navigation */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-center sm:gap-x-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Mona7192"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mona-safari-16720119a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs leading-6 text-muted sm:text-left">
            © {new Date().getFullYear()} Mona Safari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}