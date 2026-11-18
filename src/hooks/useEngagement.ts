import { useCallback, useEffect, useState } from "react";
import { rpc } from "@/lib/supabase";

export interface PostStats {
  likes: number;
  dislikes: number;
  comments: number;
}

export type Vote = "up" | "down" | null;

const EMPTY: PostStats = { likes: 0, dislikes: 0, comments: 0 };

// A visitor's vote is remembered in their browser so they can't vote twice on
// the same post from it. There are no accounts, so this is a courtesy limit.
const voteKey = (slug: string) => `vote:${slug}`;

const readVote = (slug: string): Vote => {
  try {
    const v = localStorage.getItem(voteKey(slug));
    return v === "up" || v === "down" ? v : null;
  } catch {
    return null;
  }
};

const writeVote = (slug: string, vote: Vote) => {
  try {
    if (vote) localStorage.setItem(voteKey(slug), vote);
    else localStorage.removeItem(voteKey(slug));
  } catch {
    /* storage unavailable: the vote still counts, it just isn't remembered */
  }
};

export const useEngagement = () => {
  const [stats, setStats] = useState<Record<string, PostStats>>({});
  // Votes cast on this page, kept apart from the fetched totals so a late response can't erase them.
  const [deltas, setDeltas] = useState<Record<string, PostStats>>({});
  const [votes, setVotes] = useState<Record<string, Vote>>({});

  useEffect(() => {
    let cancelled = false;
    rpc("post_stats")
      .then((rows: Array<PostStats & { post_slug: string }>) => {
        if (cancelled || !Array.isArray(rows)) return;
        setStats(Object.fromEntries(rows.map(({ post_slug, ...s }) => [post_slug, s])));
      })
      .catch(() => {
        /* counts simply show as zero if this fails */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const statsFor = (slug: string): PostStats => {
    const base = stats[slug] ?? EMPTY;
    const delta = deltas[slug] ?? EMPTY;
    return {
      likes: Math.max(0, base.likes + delta.likes),
      dislikes: Math.max(0, base.dislikes + delta.dislikes),
      comments: base.comments,
    };
  };
  const voteFor = (slug: string): Vote => (slug in votes ? votes[slug] : readVote(slug));

  const bump = useCallback((slug: string, key: keyof PostStats, by: number) => {
    setDeltas((prev) => {
      const current = prev[slug] ?? EMPTY;
      return { ...prev, [slug]: { ...current, [key]: current[key] + by } };
    });
  }, []);

  const setVote = useCallback((slug: string, vote: Vote) => {
    writeVote(slug, vote);
    setVotes((prev) => ({ ...prev, [slug]: vote }));
  }, []);

  const like = async (slug: string) => {
    if (voteFor(slug)) return;
    setVote(slug, "up");
    bump(slug, "likes", 1);
    try {
      await rpc("like_post", { p_post_slug: slug });
    } catch {
      setVote(slug, null);
      bump(slug, "likes", -1);
    }
  };

  /** Call after a thumbs down (with its comment) has been saved. */
  const recordDislike = (slug: string) => {
    setVote(slug, "down");
    bump(slug, "dislikes", 1);
  };

  return { statsFor, voteFor, like, recordDislike };
};
