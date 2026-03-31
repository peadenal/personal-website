import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/andrewpeaden", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/andrewpeaden", label: "X / Twitter" },
  { icon: Github, href: "https://github.com/andrewpeaden", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@andrewpeaden.com", label: "Email" },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm font-mono text-accent tracking-wider uppercase mb-4">Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something together.</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello —
            I'd love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-4 text-left mb-12"
            >
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-12 p-6 rounded-xl bg-card border border-accent/30">
              <p className="text-foreground font-medium">Thanks for reaching out!</p>
              <p className="text-sm text-muted-foreground mt-1">I'll get back to you soon.</p>
            </div>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
