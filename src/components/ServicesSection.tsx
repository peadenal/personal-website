import { Target, Cpu, Database, Users, Workflow, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const areas = [
  {
    icon: Target,
    title: "Technology & Product Strategy",
    description:
      "Helping enterprises select the right platforms, design system architectures that integrate cohesively, and align technology investments to measurable business outcomes.",
    capabilities: ["Platform evaluation & selection", "System architecture design", "Technology roadmap development"],
  },
  {
    icon: Cpu,
    title: "Enterprise AI Adoption",
    description:
      "Guiding organizations from AI ambition to production reality — standing up secure Azure environments, establishing data governance, and driving the change management that makes adoption stick.",
    capabilities: ["Azure AI environment design", "AI governance & compliance", "Organizational change management"],
  },
  {
    icon: Database,
    title: "Data & Analytics Platforms",
    description:
      "Building end-to-end pipelines that connect raw data to decision-making — giving leadership real visibility across operations, not just dashboards.",
    capabilities: ["Microsoft Fabric & Databricks", "Power Platform & ServiceNow", "LLM-powered decision support"],
  },
  {
    icon: Users,
    title: "Delivery & Team Leadership",
    description:
      "Standing up and scaling globally distributed teams with delivery models, operating rhythms, and governance that grow capacity without sacrificing quality.",
    capabilities: ["Global team design & leadership", "Delivery model development", "Quality & governance frameworks"],
  },
  {
    icon: Workflow,
    title: "Process Intelligence & Redesign",
    description:
      "Mapping existing business processes, identifying inefficiencies and automation opportunities, then redesigning workflows with technology and AI — not just digitizing what's broken, but rethinking how work should flow.",
    capabilities: ["Process mapping & analysis", "Automation opportunity identification", "AI-enabled workflow redesign"],
  },
  {
    icon: Lightbulb,
    title: "Design Thinking & Rapid Prototyping",
    description:
      "Facilitating workshops that translate early-stage ideas into tangible designs and interactive prototypes — building shared vision and alignment, whether the path leads to production now or six months from now.",
    capabilities: ["Design thinking workshops", "Concept-to-prototype sprints", "Stakeholder alignment & visualization"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Areas of Focus</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I do.</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a, i) => (
          <AnimatedSection key={a.title} delay={i * 0.08}>
            <div className="p-6 md:p-8 rounded-lg bg-card border border-border h-full">
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
