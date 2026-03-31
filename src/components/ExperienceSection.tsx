import AnimatedSection from "./AnimatedSection";

const experience = [
  {
    role: "Director",
    company: "KPMG US",
    period: "Oct 2024 – Present",
    description: "",
  },
  {
    role: "Associate Director",
    company: "KPMG US",
    period: "Oct 2022 – Oct 2024",
    description: "",
  },
  {
    role: "Manager",
    company: "KPMG US",
    period: "Apr 2019 – Oct 2022",
    description: "",
  },
  {
    role: "Senior Consultant",
    company: "Deloitte",
    period: "Apr 2017 – Apr 2019",
    description: "",
  },
  {
    role: "Consultant — Cyber Risk",
    company: "Deloitte",
    period: "Jul 2014 – Apr 2017",
    description: "",
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
            <AnimatedSection key={e.role + e.company} delay={i * 0.06}>
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
