import { FormEvent, useEffect, useRef, useState } from "react";

// Comments live in a small Supabase table. Visitors can read approved comments
// and submit new ones; a new comment stays hidden until `approved` is set to
// true in the Supabase dashboard (Table Editor → comments). The key below is a
// publishable key, safe to ship in the browser — database rules do the gating.
const SUPABASE_URL = "https://hstokmebfvxaniqmjdug.supabase.co";
const SUPABASE_KEY = "sb_publishable_PZpaPAzUAe7IS_YX86PFfw_uSKU9VCw";
const ENDPOINT = `${SUPABASE_URL}/rest/v1/comments`;
const HEADERS = { apikey: SUPABASE_KEY, "Content-Type": "application/json" };

const MAX_NAME = 80;
const MAX_BODY = 2000;
const MIN_FILL_MS = 3000; // faster than a person can type a comment

interface Comment {
  id: string;
  author_name: string;
  body: string;
  created_at: string;
}

type Status = "idle" | "sending" | "sent" | "error";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const Comments = ({ slug }: { slug: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [trap, setTrap] = useState(""); // honeypot: people never see or fill this
  const [status, setStatus] = useState<Status>("idle");
  const renderedAt = useRef(Date.now());

  useEffect(() => {
    let cancelled = false;
    const query = `?post_slug=eq.${encodeURIComponent(slug)}&select=id,author_name,body,created_at&order=created_at.asc`;
    fetch(ENDPOINT + query, { headers: HEADERS })
      .then((res) => (res.ok ? res.json() : []))
      .then((rows: Comment[]) => {
        if (!cancelled) setComments(rows);
      })
      .catch(() => {
        /* the post still reads fine without comments */
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const author = name.trim();
    const text = body.trim();
    if (!author || !text || status === "sending") return;

    // Bots fill hidden fields and submit instantly. Show them success and send nothing.
    if (trap || Date.now() - renderedAt.current < MIN_FILL_MS) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { ...HEADERS, Prefer: "return=minimal" },
        body: JSON.stringify({ post_slug: slug, author_name: author, body: text }),
      });
      if (!res.ok) throw new Error(`Comment failed: ${res.status}`);
      setName("");
      setBody("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section aria-label="Comments" className="mt-16 pt-10 border-t border-border">
      <h2 className="text-xl font-semibold mb-2">Discussion</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Agree, disagree, or seeing something different on your team? Add your thoughts below.
      </p>

      {comments.length > 0 && (
        <ul className="space-y-8 mb-12">
          {comments.map((c) => (
            <li key={c.id}>
              <p className="text-sm mb-1.5">
                <span className="font-semibold">{c.author_name}</span>
                <span className="text-muted-foreground"> · {formatDate(c.created_at)}</span>
              </p>
              <p className="text-base leading-relaxed text-foreground/90 whitespace-pre-line">{c.body}</p>
            </li>
          ))}
        </ul>
      )}

      {status === "sent" ? (
        <p role="status" className="text-sm rounded-md border border-border bg-card px-4 py-3">
          Thanks. Your comment was received and will appear here once it’s been reviewed.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="comment-name" className="block text-sm font-medium mb-1.5">
              Name
            </label>
            <input
              id="comment-name"
              type="text"
              required
              maxLength={MAX_NAME}
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Honeypot field, hidden from people and screen readers */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="comment-website">Website</label>
            <input
              id="comment-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={trap}
              onChange={(e) => setTrap(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="comment-body" className="block text-sm font-medium mb-1.5">
              Comment
            </label>
            <textarea
              id="comment-body"
              required
              rows={5}
              maxLength={MAX_BODY}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Post comment"}
            </button>
            <span className="text-xs text-muted-foreground">Comments appear after review.</span>
          </div>

          {status === "error" && (
            <p role="alert" className="text-sm text-destructive">
              That didn’t go through. Please try again in a few minutes.
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default Comments;
