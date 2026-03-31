import AnimatedSection from "./AnimatedSection";

const quickFacts = [
  { label: "Experience", value: "12+ years" },
  { label: "Based in", value: "San Francisco, CA" },
  { label: "Focus", value: "Product & Engineering" },
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
              I'm Andrew — a builder at heart who's spent over a decade working across product
              development, engineering leadership, and business strategy. I've worn a lot of hats:
              founder, developer, consultant, and advisor. What ties it all together is a deep
              curiosity about how technology can solve real problems for real people.
            </p>
            <p>
              I care about craft. Whether it's writing clean code, shaping a product strategy, or
              building a team culture — I believe the details matter. I'm drawn to work that sits
              at the intersection of complexity and clarity: hard problems that deserve elegant,
              well-considered solutions.
            </p>
            <p>
              When I'm not building, you'll find me reading about systems thinking, exploring new
              cities, or deep in one of those conversations that goes three hours longer than expected.
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
