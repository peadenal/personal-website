import { Link } from "react-router-dom";
import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import type { PostStats, Vote } from "@/hooks/useEngagement";

interface Props {
  slug: string;
  stats: PostStats;
  vote: Vote;
  onLike: () => void;
  /** On the post page, opens the comment form in thumbs-down mode. Omit on list pages, where thumbs down links to the post instead. */
  onDislike?: () => void;
}

const DISLIKE_HINT = "Thumbs down — you’ll be asked to add a comment";

const item = "inline-flex items-center gap-1.5 text-sm tabular-nums transition-colors";
const idle = "text-muted-foreground hover:text-foreground";
const chosen = "text-accent";
const locked = "text-muted-foreground/60 cursor-default";

const PostReactions = ({ slug, stats, vote, onLike, onDislike }: Props) => {
  const voted = vote !== null;
  const postPath = `/writing/${slug}`;

  return (
    <div className="flex items-center gap-5">
      <button
        type="button"
        onClick={onLike}
        disabled={voted}
        aria-pressed={vote === "up"}
        aria-label={`Thumbs up (${stats.likes})`}
        title={vote === "up" ? "You liked this" : "Thumbs up"}
        className={`${item} ${vote === "up" ? chosen : voted ? locked : idle}`}
      >
        <ThumbsUp size={15} /> {stats.likes}
      </button>

      {voted ? (
        <span
          aria-label={`Thumbs down (${stats.dislikes})`}
          title={vote === "down" ? "You gave this a thumbs down" : undefined}
          className={`${item} ${vote === "down" ? chosen : locked}`}
        >
          <ThumbsDown size={15} /> {stats.dislikes}
        </span>
      ) : onDislike ? (
        <button
          type="button"
          onClick={onDislike}
          aria-label={`Thumbs down (${stats.dislikes}). Requires a comment.`}
          title={DISLIKE_HINT}
          className={`${item} ${idle}`}
        >
          <ThumbsDown size={15} /> {stats.dislikes}
        </button>
      ) : (
        <Link
          to={`${postPath}?feedback=down#discussion`}
          aria-label={`Thumbs down (${stats.dislikes}). Requires a comment.`}
          title={DISLIKE_HINT}
          className={`${item} ${idle}`}
        >
          <ThumbsDown size={15} /> {stats.dislikes}
        </Link>
      )}

      {onDislike ? (
        <a href="#discussion" aria-label={`${stats.comments} comments`} title="Comments" className={`${item} ${idle}`}>
          <MessageSquare size={15} /> {stats.comments}
        </a>
      ) : (
        <Link
          to={`${postPath}#discussion`}
          aria-label={`${stats.comments} comments`}
          title="Comments"
          className={`${item} ${idle}`}
        >
          <MessageSquare size={15} /> {stats.comments}
        </Link>
      )}
    </div>
  );
};

export default PostReactions;
