import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Meridian Platform",
    description:
      "A full-stack SaaS platform for workforce analytics. Built the frontend, designed the API layer, and led the team from MVP to launch.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    title: "Canopy Design System",
    description:
      "An open-source component library used across three product teams. Reduced UI development time by 40%.",
    tags: ["TypeScript", "Storybook", "Figma"],
    link: "#",
  },
  {
    title: "Signal",
    description:
      "A real-time notification infrastructure serving 2M+ daily events. Designed for reliability and developer experience.",
    tags: ["Go", "Redis", "WebSockets"],
    link: "#",
  },
  {
    title: "Fieldwork",
    description:
      "A mobile-first app for field service teams. Offline-capable with smart sync and route optimization.",
    tags: ["React Native", "GraphQL", "Maps API"],
    link: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-mono text-accent tracking-wider uppercase mb-4">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected work.</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.08}>
            <a
              href={p.link}
              className="group block p-6 md:p-8 rounded-xl border border-border hover:border-accent/40 bg-card transition-all duration-300"
            >
              {/* Thumbnail placeholder */}
              <div className="w-full h-40 rounded-lg bg-secondary mb-5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <span className="text-xs font-mono text-muted-foreground">Preview</span>
                </div>
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0 ml-2"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
