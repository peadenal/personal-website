import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/andrewpeaden", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/andrewpeaden", label: "X / Twitter" },
  { icon: Github, href: "https://github.com/peadenal", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@andrewpeaden.com", label: "Email" },
];

const logos = [
  { name: "KPMG", src: "/logos/kpmg.svg", height: 28 },
  { name: "Deloitte", src: "/logos/deloitte.svg", height: 24 },
  { name: "HHS", src: "/logos/hhs.webp", height: 28 },
  { name: "NIH", src: "/logos/nih.png", height: 28 },
  { name: "Wells Fargo", src: "/logos/wells-fargo.webp", height: 24 },
  { name: "DOJ", src: "/logos/doj.svg", height: 26 },
];

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
              Building at the intersection of technology and strategy
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-2">
              Andrew Peaden
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
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
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-5">
            Previously worked with
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {logos.map(({ name, src, height }) => (
              <img
                key={name}
                src={src}
                alt={name}
                style={{ height }}
                className="opacity-60 hover:opacity-90 transition-opacity grayscale brightness-75 dark:brightness-150 dark:invert"
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
