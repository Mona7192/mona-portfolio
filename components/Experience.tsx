import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    company: "Pishgaman Asia",
    role: "Frontend Developer",
    period: "2025 — 2026",
    description:
      "Developed frontend features for a fleet management platform using React and TypeScript. Worked with React Query, Tailwind CSS, reusable components, and Micro Frontend architecture with Webpack Module Federation.",
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Micro Frontends",
      "Webpack Module Federation",
    ],
  },
  {
    company: "Sam Sivan Gostar Arsam",
    role: "Frontend / Web Developer",
    period: "2023 — 2024",
    description:
      "Built and maintained responsive websites and web interfaces using HTML, CSS, JavaScript, Bootstrap, and WordPress. Also worked on SEO and content-related tasks.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "WordPress",
      "WooCommerce",
    ],
  },
  {
    company: "Pars Ovesta",
    role: "Frontend & WordPress Developer",
    period: "2022 — 2023",
    description:
      "Developed and maintained websites using JavaScript, jQuery, HTML, CSS, Bootstrap, and WordPress, with a focus on responsive interfaces and reusable frontend patterns.",
    technologies: [
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Bootstrap",
      "WordPress",
      "Git",
    ],
  },
  {
    company: "Chavosh Data Pardazan",
    role: "WordPress / Web Developer",
    period: "2022",
    description:
      "Worked on WordPress-based websites and web development tasks, contributing to website implementation and maintenance.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-6 py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          {/* Section Label */}
          <div className="md:sticky md:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Experience
              </p>
            </div>
          </div>

          {/* Experience List */}
          <div className="space-y-12 sm:space-y-14">
            {experiences.map((experience) => (
              <FadeIn key={`${experience.company}-${experience.period}`}>
                <article className="group relative border-l border-border pl-6 transition-colors duration-300 hover:border-accent sm:pl-8">
                  {/* Timeline Dot */}
                  <span className="absolute top-1.5 -left-[4.5px] h-2 w-2 rounded-full border border-background bg-border transition-colors duration-300 group-hover:bg-accent" />

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-accent sm:text-base">
                        {experience.company}
                      </p>
                    </div>

                    <p className="text-xs font-medium tracking-wide text-muted sm:text-sm">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:leading-8">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:text-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}