import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/andrewpeaden", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/andrewpeaden", label: "X / Twitter" },
  { icon: Github, href: "https://github.com/andrewpeaden", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@andrewpeaden.com", label: "Email" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
    {/* Subtle gradient orb */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none bg-accent" />

    <div className="max-w-3xl mx-auto text-center relative z-10">
      <AnimatedSection>
        <p className="text-sm font-mono text-accent tracking-wider uppercase mb-6">
          Builder · Strategist · Developer
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
          Andrew
          <br />
          <span className="text-gradient">Peaden</span>
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          I build products, teams, and strategies at the intersection of technology and business.
          Currently helping companies turn ambitious ideas into things people actually use.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <a
          href="#about"
          className="inline-flex items-center mt-16 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
