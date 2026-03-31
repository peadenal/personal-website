import AnimatedSection from "./AnimatedSection";

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-section-alt">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected work.</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-sm text-muted-foreground text-center py-12">Coming soon.</p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProjectsSection;
