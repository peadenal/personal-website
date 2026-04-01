import { GraduationCap, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type TimelineEntry =
  | { type: "career"; role: string; company: string; period: string; description: string }
  | { type: "education"; institution: string; degree: string; period: string }
  | { type: "achievement"; title: string; period: string };

const timeline: TimelineEntry[] = [
  {
    type: "career",
    role: "Director",
    company: "KPMG US",
    period: "Oct 2024 – Present",
    description:
      "Leading a risk intelligence team building AI-enabled products for risk management, legal, and compliance stakeholders — transforming complex regulatory and operational challenges into scalable, production-grade decision-support tools.",
  },
  {
    type: "career",
    role: "Associate Director",
    company: "KPMG US",
    period: "Oct 2022 – Oct 2024",
    description:
      "Designed and delivered analytics and product solutions for enterprise risk and compliance clients — building the delivery model and client relationships that scaled into the broader risk intelligence practice.",
  },
  {
    type: "career",
    role: "Manager",
    company: "KPMG US",
    period: "Apr 2019 – Oct 2022",
    description:
      "Led the design and delivery of executive dashboards and integrated risk management solutions on ServiceNow, helping enterprise clients gain visibility across operational and compliance risk.",
  },
  {
    type: "education",
    institution: "University of Virginia — Darden School of Business",
    degree: "M.S. Business Analytics",
    period: "2018 – 2019",
  },
  {
    type: "achievement",
    title: "CPA Licensed",
    period: "Jul 2018",
  },
  {
    type: "career",
    role: "Senior Consultant",
    company: "Deloitte",
    period: "Apr 2017 – Apr 2019",
    description: "",
  },
  {
    type: "career",
    role: "Consultant — Cyber Risk",
    company: "Deloitte",
    period: "Jul 2014 – Apr 2017",
    description: "",
  },
  {
    type: "education",
    institution: "James Madison University",
    degree: "B.B.A., Accounting & Computer Information Systems",
    period: "2009 – 2014",
  },
  {
    type: "achievement",
    title: "Eagle Scout",
    period: "Aug 2008",
  },
];

const TimelineDot = ({ type }: { type: TimelineEntry["type"] }) => {
  if (type === "education") {
    return (
      <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-muted-foreground/40 bg-background flex items-center justify-center">
        <GraduationCap size={8} className="text-muted-foreground/60" />
      </div>
    );
  }
  if (type === "achievement") {
    return (
      <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-amber-500 bg-background flex items-center justify-center">
        <Award size={8} className="text-amber-500" />
      </div>
    );
  }
  return (
    <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-accent bg-background" />
  );
};

const TimelineContent = ({ entry }: { entry: TimelineEntry }) => {
  if (entry.type === "education") {
    return (
      <>
        <h3 className="text-base font-semibold">{entry.degree}</h3>
        <p className="text-sm text-muted-foreground">{entry.institution}</p>
      </>
    );
  }
  if (entry.type === "achievement") {
    return <h3 className="text-base font-semibold">{entry.title}</h3>;
  }
  return (
    <>
      <h3 className="text-base font-semibold">{entry.role}</h3>
      <p className="text-sm text-accent mb-1.5">{entry.company}</p>
      {entry.description && (
        <p className="text-sm text-muted-foreground leading-relaxed">{entry.description}</p>
      )}
    </>
  );
};

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
          {timeline.map((entry, i) => (
            <AnimatedSection key={entry.period + (entry.type === "career" ? entry.role : entry.type === "education" ? entry.degree : entry.title)} delay={i * 0.06}>
              <div className="relative pl-8">
                <TimelineDot type={entry.type} />
                <p className="text-xs text-muted-foreground mb-1">{entry.period}</p>
                <TimelineContent entry={entry} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
