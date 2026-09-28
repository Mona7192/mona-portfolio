
import FadeIn from "@/components/FadeIn";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Core technologies I use to build modern web applications.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "UI & Styling",
    description:
      "Tools I use to create responsive and consistent interfaces.",
    skills: ["Tailwind CSS", "Sass", "Bootstrap", "MUI"],
  },
  {
    title: "Data & API",
    description:
      "Technologies I use for API integration and application state.",
    skills: ["REST APIs", "Axios", "React Query", "Context API"],
  },
  {
    title: "Architecture & Tools",
    description:
      "Tools and patterns for scalable frontend development.",
    skills: [
      "Micro Frontends",
      "Webpack Module Federation",
      "Vite",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Testing & Web",
    description:
      "Additional tools and concepts I work with.",
    skills: ["React Testing Library", "Jest", "CORS", "CSRF", "XSS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 px-6 py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          {/* Section Label */}
          <div className="md:sticky md:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Skills
              </p>
            </div>
          </div>

          {/* Skills Content */}
          <div>
            <FadeIn>
              <div className="mb-10 sm:mb-12">
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Technologies I work with.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
                  A collection of tools and technologies I use to
                  build responsive, maintainable web applications.
                </p>
              </div>
            </FadeIn>

            <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
              {skillGroups.map((group, index) => (
                <FadeIn key={group.title} delay={index * 0.06}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:p-6">
                    {/* Top Accent */}
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {group.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="text-sm text-muted/30 transition-colors duration-200 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {group.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors duration-200 group-hover:border-accent/30 hover:!border-accent/60 hover:!text-accent"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}