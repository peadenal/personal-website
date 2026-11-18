import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#contact" },
];

const Navbar = () => {
  // Light or dark follows the visitor's local time of day (see public/theme.js).
  const [dark, setDark] = useState(() => window.__siteTheme?.isDarkNow() ?? false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Section links are anchors on the home page; from any other page, point back to it.
  const onHome = useLocation().pathname === "/";
  const to = (hash: string) => (onHome ? hash : `/${hash}`);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Re-check each minute so a page left open switches at sunset or sunrise.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (window.__siteTheme) setDark(window.__siteTheme.isDarkNow());
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  // A manual toggle holds for the rest of the visit.
  const toggleTheme = () => {
    window.__siteTheme?.setOverride(!dark);
    setDark(!dark);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href={onHome ? "#" : "/"} className="text-sm font-semibold tracking-tight text-foreground">
          Andrew Peaden
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={to(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden nav-blur border-b border-border px-6 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={to(l.href)}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
