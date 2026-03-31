const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Andrew Peaden. All rights reserved.</span>
      <span className="font-mono">andrewpeaden.com</span>
    </div>
  </footer>
);

export default Footer;
