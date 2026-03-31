import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const posts = [
  {
    date: "Mar 2026",
    title: "Why Most Product Roadmaps Fail (And What to Do Instead)",
    excerpt:
      "The problem isn't planning — it's confusing a list of features with a strategy.",
    readTime: "6 min read",
    link: "#",
  },
  {
    date: "Feb 2026",
    title: "The Case for Boring Technology",
    excerpt:
      "Your startup doesn't need a cutting-edge stack. It needs something that works at 2 AM.",
    readTime: "4 min read",
    link: "#",
  },
  {
    date: "Jan 2026",
    title: "Building Teams That Ship",
    excerpt:
      "Velocity isn't about speed — it's about removing the things that slow people down.",
    readTime: "5 min read",
    link: "#",
  },
  {
    date: "Dec 2025",
    title: "On Taste in Software",
    excerpt:
      "The difference between good and great products usually comes down to a thousand tiny decisions.",
    readTime: "3 min read",
    link: "#",
  },
];

const WritingSection = () => (
  <section id="writing" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Writing</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Thoughts & ideas.</h2>
      </AnimatedSection>

      <div className="divide-y divide-border">
        {posts.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.06}>
            <a
              href={post.link}
              className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-6 first:pt-0 last:pb-0"
            >
              <span className="text-xs text-muted-foreground whitespace-nowrap pt-0.5 sm:w-24 flex-shrink-0">
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
                <p className="text-xs text-muted-foreground mt-1.5">{post.readTime}</p>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-8">
          <a href="#" className="text-sm text-accent hover:underline">
            View all posts →
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WritingSection;
