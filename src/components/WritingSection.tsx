import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const posts = [
  {
    date: "Mar 2026",
    title: "Why Most Product Roadmaps Fail (And What to Do Instead)",
    excerpt:
      "The problem isn't planning — it's confusing a list of features with a strategy. Here's a better framework.",
    link: "#",
  },
  {
    date: "Feb 2026",
    title: "The Case for Boring Technology",
    excerpt:
      "Your startup doesn't need a cutting-edge stack. It needs something that works at 2 AM when things break.",
    link: "#",
  },
  {
    date: "Jan 2026",
    title: "Building Teams That Ship",
    excerpt:
      "Velocity isn't about speed — it's about removing the things that slow people down.",
    link: "#",
  },
  {
    date: "Dec 2025",
    title: "On Taste in Software",
    excerpt:
      "The difference between good and great products usually comes down to a thousand tiny decisions made with care.",
    link: "#",
  },
];

const WritingSection = () => (
  <section id="writing" className="section-padding bg-section-alt">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-mono text-accent tracking-wider uppercase mb-4">Thoughts</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Writing & ideas.</h2>
      </AnimatedSection>

      <div className="space-y-0 divide-y divide-border">
        {posts.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.08}>
            <a
              href={post.link}
              className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-6 first:pt-0 last:pb-0"
            >
              <span className="text-xs font-mono text-muted-foreground whitespace-nowrap pt-1 sm:w-24 flex-shrink-0">
                {post.date}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors flex items-center gap-1.5">
                  {post.title}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WritingSection;
