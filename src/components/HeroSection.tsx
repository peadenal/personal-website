import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/alpeaden", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/peadenal", label: "GitHub" },
  { icon: Mail, href: "mailto:peadenal@gmail.com", label: "Email" },
];

const previousCompanies = ["Deloitte", "HHS", "NIH", "Wells Fargo", "DOJ"];

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-28">
    <div className="max-w-5xl mx-auto w-full">
      <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-12 md:gap-16 items-center">
        {/* Headshot */}
        <AnimatedSection>
          <div className="w-48 h-48 md:w-full md:h-auto md:aspect-square rounded-2xl bg-secondary border border-border overflow-hidden mx-auto md:mx-0">
            <img
              src="/profile.jpeg"
              alt="Andrew Peaden"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        {/* Text */}
        <div>
          <AnimatedSection delay={0.05}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-3">
              Building at the intersection of technology strategy and enterprise AI
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-6">
              Technology strategist and builder helping organizations move ideas out of slide decks and into production-grade systems. I work across enterprise AI, data platforms, and team leadership — in environments where trust, governance, and execution matter.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Social proof bar */}
      <AnimatedSection delay={0.3}>
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
            Currently at
          </p>
          <span className="text-sm font-medium text-muted-foreground/60">KPMG</span>

          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-6 mb-3">
            Previously worked with
          </p>
          <div className="flex flex-nowrap items-center gap-8 md:gap-12">
            {previousCompanies.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-muted-foreground/60 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
