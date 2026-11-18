import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { formatPostDate, posts } from "@/content/posts";

const WritingSection = () => (
  <section id="writing" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Writing</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Thoughts & ideas.</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/writing/${post.slug}`} className="group flex items-start justify-between gap-6 py-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{post.subtitle}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="mt-7 shrink-0 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all"
                />
              </Link>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </div>
  </section>
);

export default WritingSection;
