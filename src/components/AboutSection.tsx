import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-mono text-accent tracking-wider uppercase mb-4">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">A little context.</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            I'm Andrew — a builder at heart who's spent the last decade working across product development,
            engineering, and strategy. I've worn a lot of hats: founder, developer, consultant, and
            occasional speaker. What ties it all together is a deep curiosity about how technology
            can solve real problems for real people.
          </p>
          <p>
            I care about craft. Whether it's writing clean code, designing a product strategy, or
            building a team culture — I believe the details matter. I'm drawn to projects that sit
            at the intersection of complexity and simplicity: hard problems, elegant solutions.
          </p>
          <p>
            When I'm not building, you'll find me reading about systems thinking, exploring new
            cities, or having one of those conversations that goes three hours longer than expected.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
