import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Comments from "@/components/Comments";
import NotFound from "./NotFound.tsx";
import { formatPostDate, getPost } from "@/content/posts";

const Post = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) return;
    const previous = document.title;
    document.title = `${post.title} — Andrew Peaden`;
    return () => {
      document.title = previous;
    };
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        <article className="max-w-2xl mx-auto">
          <Link
            to="/#writing"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Writing
          </Link>

          <header className="mb-10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-snug">{post.subtitle}</p>
          </header>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <Comments slug={post.slug} />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Post;
