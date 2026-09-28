import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <div className="md:sticky md:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                About
              </p>
            </div>
          </div>

          <FadeIn className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Building thoughtful interfaces with modern frontend
              technologies.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                I&apos;m a Frontend Developer with experience building modern
                web applications using React, Next.js, and TypeScript.
              </p>

              <p>
                I enjoy turning complex requirements into clean, responsive,
                and maintainable interfaces. My experience includes working
                with REST APIs, React Query, Tailwind CSS, reusable
                components, and modern frontend architectures.
              </p>

              <p>
                I&apos;m also interested in scalable frontend solutions,
                including Micro Frontend architecture and Webpack Module
                Federation.
              </p>

              <p>
                I care about writing clean code, creating consistent user
                experiences, and continuously improving through real-world
                projects.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}