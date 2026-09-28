
import FadeIn from "@/components/FadeIn";

const featuredProjects = [
  {
    title: "Fleet Management Platform",
    type: "Enterprise Application",
    description:
      "A fleet management platform built with React and TypeScript, featuring reusable components, API integration, multilingual interfaces, and a Micro Frontend architecture.",
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Micro Frontends",
      "Webpack Module Federation",
    ],
    github: null,
    demo: null,
  },
  {
    title: "Online Dry Cleaning Platform",
    type: "Web Application",
    description:
      "A web platform for an online dry cleaning business, including customer, driver, and admin workflows, order management, tracking, service management, and a blog.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "REST API",
    ],
    github:
      "https://github.com/Mona7192/dry-Cleaning-site-Next",
    demo: "https://dry-cleaning-nine.vercel.app",
  },
  {
    title: "Ride Request Application",
    type: "Web Application",
    description:
      "A responsive ride request application with authentication, interactive maps, pickup and drop-off selection, vehicle selection, ride requests, and API integration.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Query",
      "Context API",
      "Leaflet",
    ],
    github: "https://github.com/Mona7192/request-vehicle",
    demo: null,
  },
];

const moreProjects = [
  {
    title: "Elkimo",
    description:
      "A production website for an international client, currently available on the main domain.",
    technologies: ["Next.js", "React"],
    github: null,
    demo: "https://elkimo.com/",
  },
  {
    title: "React Blog",
    description:
      "A React-based blog project built to practice component-based UI development and working with GraphQL data.",
    technologies: ["React", "MUI", "GraphQL"],
    github:
      "https://github.com/Mona7192/blog-MUI-React-project",
    demo: null,
  },
  {
    title: "React Shopping Cart",
    description:
      "A React shopping cart project focused on product interaction, cart functionality, and frontend state management.",
    technologies: ["React", "JavaScript"],
    github:
      "https://github.com/Mona7192/cart-shop-project-react",
    demo: null,
  },
  {
    title: "Clinic Taadol",
    description:
      "A modern clinic website built with Next.js and TypeScript, with a responsive interface and reusable frontend components.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github:
      "https://github.com/Mona7192/Clinic-Taadol-nextjs",
    demo: null,
  },
];

function ProjectLinks({
  github,
  demo,
  compact = false,
}: {
  github: string | null;
  demo: string | null;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-3 ${compact ? "mt-5" : "mt-6"}`}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      )}

      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View live project"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {compact ? "Live" : "Live Demo"}
          <span aria-hidden="true">↗</span>
        </a>
      )}

      {!github && !demo && (
        <span className="text-sm text-muted/60">
          Private Project
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 grid items-start gap-8 md:mb-16 md:grid-cols-[180px_1fr] md:gap-16">
          <div className="md:sticky md:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Projects
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A selection of things I&apos;ve built.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
              A mix of professional applications, client projects, and
              personal projects that reflect my experience with modern
              frontend technologies.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <div className="mb-6 flex items-center gap-4 sm:mb-8">
            <h3 className="shrink-0 text-lg font-semibold">
              Featured Projects
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.08}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:p-6">
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-medium tracking-wide text-accent uppercase">
                      {project.type}
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-lg text-muted/40 transition-colors duration-200 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </div>

                  <h4 className="mt-4 text-xl font-semibold tracking-tight">
                    {project.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-muted sm:mt-5">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 sm:pt-7">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted transition-colors duration-200 group-hover:border-accent/30 sm:px-3"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <ProjectLinks
                      github={project.github}
                      demo={project.demo}
                    />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* More Projects */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="mb-6 flex items-center gap-4 sm:mb-8">
            <h3 className="shrink-0 text-lg font-semibold">
              More Projects
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {moreProjects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-[#151515]">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg font-semibold tracking-tight">
                      {project.title}
                    </h4>

                    <span
                      aria-hidden="true"
                      className="text-base text-muted/30 transition-colors duration-200 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-muted sm:mt-4">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <ProjectLinks
                      github={project.github}
                      demo={project.demo}
                      compact
                    />
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