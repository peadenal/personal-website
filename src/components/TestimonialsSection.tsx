import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Andrew has a rare combination of technical depth and strategic clarity. He doesn't just build things — he builds the right things, and he makes everyone around him better in the process.",
    name: "Sarah Chen",
    title: "CEO, Northstar Analytics",
  },
  {
    quote:
      "Working with Andrew transformed how our team approaches product development. He brought structure to our chaos and helped us ship faster without sacrificing quality.",
    name: "Marcus Rivera",
    title: "VP Engineering, Lattice",
  },
  {
    quote:
      "I've worked with dozens of product leaders, and Andrew stands out for his ability to translate complex technical challenges into clear business outcomes. Highly recommend.",
    name: "Emily Nakamura",
    title: "Partner, Sequoia Capital",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What people say.</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.08}>
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col h-full">
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground flex-shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
