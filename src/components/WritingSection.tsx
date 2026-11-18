import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import PostReactions from "./PostReactions";
import { formatPostDate, posts } from "@/content/posts";
import { useEngagement } from "@/hooks/useEngagement";

const WritingSection = () => {
  const { statsFor, voteFor, like } = useEngagement();

  return (
    <section id="writing" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Writing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Thoughts & ideas.</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug} className="py-6">
                <Link to={`/writing/${post.slug}`} className="group flex items-start justify-between gap-6">
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
                <div className="mt-4">
                  <PostReactions
                    slug={post.slug}
                    stats={statsFor(post.slug)}
                    vote={voteFor(post.slug)}
                    onLike={() => like(post.slug)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WritingSection;
