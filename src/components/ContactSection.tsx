import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/alpeaden", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/peadenal", label: "GitHub" },
  { icon: Mail, href: "mailto:peadenal@gmail.com", label: "Email" },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in touch.</h2>
          <p className="text-muted-foreground mb-10 max-w-lg">
            Whether you want to connect, collaborate, or just say hello — I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-lg bg-card border border-border">
                <p className="font-medium">Thanks for reaching out.</p>
                <p className="text-sm text-muted-foreground mt-1">I'll get back to you soon.</p>
              </div>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <p className="text-sm font-medium mb-4">Or find me elsewhere</p>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Preferred contact: email. I typically respond within 24 hours.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
