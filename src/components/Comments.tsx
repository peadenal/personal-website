import { useEffect, useRef } from "react";

// Comments are powered by giscus (https://giscus.app), which stores them as
// GitHub Discussions on the site's repo. Fill in GISCUS_CATEGORY_ID once
// Discussions is enabled and the giscus app is installed on the repo.
const GISCUS_REPO = "peadenal/personal-website";
const GISCUS_REPO_ID = "R_kgDOR2QEzA";
const GISCUS_CATEGORY = "Announcements";
const GISCUS_CATEGORY_ID = "";

const LIGHT_THEME = "light";
const DARK_THEME = "transparent_dark";

const currentTheme = () =>
  document.documentElement.classList.contains("dark") ? DARK_THEME : LIGHT_THEME;

const Comments = () => {
  const ref = useRef<HTMLDivElement>(null);
  const configured = GISCUS_CATEGORY_ID !== "";

  useEffect(() => {
    const container = ref.current;
    if (!configured || !container) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    const attrs: Record<string, string> = {
      "data-repo": GISCUS_REPO,
      "data-repo-id": GISCUS_REPO_ID,
      "data-category": GISCUS_CATEGORY,
      "data-category-id": GISCUS_CATEGORY_ID,
      "data-mapping": "pathname",
      "data-strict": "1",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "top",
      "data-theme": currentTheme(),
      "data-lang": "en",
      "data-loading": "lazy",
    };
    Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v));
    container.appendChild(script);

    // Keep the comment box in step with the site's light/dark toggle.
    const observer = new MutationObserver(() => {
      const frame = container.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
      frame?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: currentTheme() } } },
        "https://giscus.app",
      );
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
      container.replaceChildren();
    };
  }, [configured]);

  return (
    <section aria-label="Comments" className="mt-16 pt-10 border-t border-border">
      <h2 className="text-xl font-semibold mb-2">Discussion</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Agree, disagree, or seeing something different on your team? Add your thoughts below.
      </p>
      {configured ? (
        <div ref={ref} />
      ) : (
        <p className="text-sm text-muted-foreground">Comments are opening soon.</p>
      )}
    </section>
  );
};

export default Comments;
