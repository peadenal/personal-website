import { Target, Code2, Cpu, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const areas = [
  {
    icon: Target,
    title: "Product Strategy",
    description:
      "Turning ambiguous opportunities into clear roadmaps and outcomes. I help teams define what to build, why it matters, and how to measure success.",
    capabilities: ["Roadmap development", "Market analysis", "Prioritization frameworks"],
  },
  {
    icon: Code2,
    title: "Technical Leadership",
    description:
      "Leading engineering teams through complex builds — from architecture decisions to shipping reliably at scale.",
    capabilities: ["System design", "Team building", "Technical mentorship"],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Helping organizations identify and implement high-leverage AI applications that create real competitive advantage.",
    capabilities: ["LLM integration", "Workflow automation", "Data infrastructure"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Go-to-Market",
    description:
      "Connecting product to market. I've helped startups and established companies find traction and scale what's working.",
    capabilities: ["GTM strategy", "Analytics & attribution", "Conversion optimization"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Areas of Focus</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I do.</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {areas.map((a, i) => (
          <AnimatedSection key={a.title} delay={i * 0.08}>
            <div className="p-6 md:p-8 rounded-lg bg-card border border-border">
              <a.icon size={24} className="text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.description}</p>
              <ul className="space-y-1">
                {a.capabilities.map((c) => (
                  <li key={c} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
