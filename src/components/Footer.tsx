const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Andrew Peaden
      </span>
      <div className="flex items-center gap-6">
        {footerLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
