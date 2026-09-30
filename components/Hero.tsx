
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase sm:text-sm">
            Frontend Developer
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-accent">Mona Safari.</span>
          </h1>

          <h2 className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-foreground/80 sm:mt-6 sm:text-3xl">
            I build modern, responsive web applications.
          </h2>

          <div className="mt-6 max-w-2xl space-y-3 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            <p>
              I&apos;m a Frontend Developer focused on building responsive,
              user-friendly web applications with React, Next.js, and
              TypeScript.
            </p>

            <p>
              I enjoy turning complex requirements into clean, maintainable
              interfaces and continuously improving my skills through
              real-world projects.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-[#0a0a0a]! transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7affdf] hover:shadow-[0_8px_24px_rgba(100,255,218,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-6"
            >
              View My Work
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_rgba(100,255,218,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:px-6"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}