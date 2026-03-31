import AnimatedSection from "./AnimatedSection";

const quickFacts = [
  { label: "Experience", value: "12+ years" },
  { label: "Based in", value: "Richmond, VA" },
  { label: "Focus", value: "Technology Strategy & AI" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">A bit of context.</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-[1fr_240px] gap-12">
        <AnimatedSection delay={0.1}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm Andrew — a technology strategist and builder with over a decade of experience helping organizations turn complex ideas into production-grade systems that drive real decisions. My career has spanned U.S. federal agencies, financial services, IT, and hospitality — often in regulated, high-stakes environments where clarity, trust, and execution matter most.
            </p>
            <p>
              I specialize in designing and operating enterprise AI environments on Azure, where organizations retain control over their infrastructure, data, and applications. I work across Microsoft's data and AI ecosystem — Azure, Power Platform, Fabric — alongside Databricks and ServiceNow, building end-to-end pipelines that connect raw data, business logic, and user experience. Increasingly, that includes layering LLM-powered reasoning on top of trusted data foundations to support judgment, not just visualization.
            </p>
            <p>
              Beyond the technology, I spend significant time building and leading globally distributed teams — designing delivery models, platforms, and operating rhythms that scale capability on demand without sacrificing quality or governance. I believe great solutions are built through collaboration, grounded in insight, and measured by outcomes — not outputs.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-5">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{fact.label}</p>
                <p className="text-sm font-medium text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
