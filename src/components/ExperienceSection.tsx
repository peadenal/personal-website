import AnimatedSection from "./AnimatedSection";

const experience = [
  {
    role: "VP of Product & Engineering",
    company: "Meridian Technologies",
    period: "2022 – Present",
    description:
      "Leading a 30-person product and engineering organization. Drove the platform from Series A to profitability while scaling the customer base 4x.",
  },
  {
    role: "Head of Product",
    company: "Canopy Systems",
    period: "2019 – 2022",
    description:
      "Rebuilt the product org from the ground up. Shipped a new platform that reduced churn by 35% and became the company's primary growth driver.",
  },
  {
    role: "Senior Software Engineer",
    company: "Stripe",
    period: "2017 – 2019",
    description:
      "Built internal tools and APIs for the payments infrastructure team. Led a cross-functional initiative that improved developer onboarding time by 60%.",
  },
  {
    role: "Co-Founder & CTO",
    company: "Fieldwork (acquired)",
    period: "2014 – 2017",
    description:
      "Co-founded a mobile-first platform for field service teams. Built the product from zero to acquisition, serving 500+ businesses.",
  },
  {
    role: "Software Engineer",
    company: "IBM",
    period: "2012 – 2014",
    description:
      "Started my career in enterprise software, working on cloud infrastructure and learning what scale really means.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Career timeline.</h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experience.map((e, i) => (
            <AnimatedSection key={e.company} delay={i * 0.06}>
              <div className="relative pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-accent bg-background" />

                <p className="text-xs text-muted-foreground mb-1">{e.period}</p>
                <h3 className="text-base font-semibold">{e.role}</h3>
                <p className="text-sm text-accent mb-1.5">{e.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
