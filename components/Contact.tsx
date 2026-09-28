
import FadeIn from "@/components/FadeIn";

const contactLinks = [
  {
    label: "Email",
    value: "monasafari992@gmail.com",
    href: "mailto:monasafari992@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Mona7192",
    href: "https://github.com/Mona7192",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mona-safari",
    href: "https://www.linkedin.com/in/mona-safari-16720119a",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          {/* Section Label */}
          <div className="md:sticky md:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Contact
              </p>
            </div>
          </div>

          {/* Contact Content */}
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Let&apos;s build something together.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
                I&apos;m always interested in discussing new opportunities,
                frontend projects, and ways to build better web experiences.
                Feel free to reach out.
              </p>

              <a
                href="mailto:monasafari992@gmail.com"
                className="group mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-[#0a0a0a]! transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7affdf] hover:shadow-[0_8px_24px_rgba(100,255,218,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Get In Touch
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </FadeIn>

            {/* Contact Links */}
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
              {contactLinks.map((link, index) => (
                <FadeIn key={link.label} delay={index * 0.08}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={`${link.label}: ${link.value}`}
                    className="group flex h-full min-w-0 flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-accent">
                        {link.label}
                      </p>

                      <span
                        aria-hidden="true"
                        className="text-sm text-muted/40 transition-colors duration-200 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 break-all text-sm leading-6 text-muted transition-colors duration-200 group-hover:text-foreground">
                      {link.value}
                    </p>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}