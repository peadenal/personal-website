import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Meridian Platform",
    description:
      "A full-stack SaaS platform for workforce analytics — from MVP to profitability.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    title: "Canopy Design System",
    description:
      "An open-source component library used across three product teams, reducing UI dev time by 40%.",
    tags: ["TypeScript", "Storybook", "Figma"],
    link: "#",
  },
  {
    title: "Signal",
    description:
      "Real-time notification infrastructure serving 2M+ daily events, built for reliability.",
    tags: ["Go", "Redis", "WebSockets"],
    link: "#",
  },
  {
    title: "Fieldwork",
    description:
      "A mobile-first app for field service teams — offline-capable with smart sync.",
    tags: ["React Native", "GraphQL", "Maps API"],
    link: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-section-alt">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected work.</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.06}>
            <a
              href={p.link}
              className="group block p-6 md:p-8 rounded-lg border border-border bg-card hover:border-accent/40 transition-colors"
            >
              {/* Thumbnail placeholder */}
              <div className="w-full h-40 rounded-md bg-secondary mb-5 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Preview</span>
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 flex-shrink-0 ml-2"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-10 text-center">
          <a href="#" className="text-sm text-accent hover:underline">
            View all projects →
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProjectsSection;
