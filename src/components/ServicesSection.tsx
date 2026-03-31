import { Code2, Lightbulb, Users, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description:
      "Turning vague ideas into clear roadmaps. I help teams figure out what to build, why it matters, and how to get there.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "From frontend polish to backend architecture. I build applications that are fast, reliable, and pleasant to use.",
  },
  {
    icon: Users,
    title: "Team & Culture",
    description:
      "Hiring, mentoring, and shaping engineering culture. Great products start with great teams.",
  },
  {
    icon: BarChart3,
    title: "Growth & GTM",
    description:
      "Connecting product to market. I've helped startups and enterprises find traction and scale what's working.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-mono text-accent tracking-wider uppercase mb-4">What I Do</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Areas of focus.</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300">
              <s.icon
                size={28}
                className="text-accent mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
