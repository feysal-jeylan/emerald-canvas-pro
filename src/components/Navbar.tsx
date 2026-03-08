import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive("#" + e.target.id); }),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
        Skip to content
      </a>
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-mono text-lg font-semibold text-foreground hover:text-primary transition-colors">
          FJ<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-primary ${active === l.href ? "text-primary" : "text-muted-foreground"}`}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-emerald-bright transition-colors">
            Let's Talk
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-slide-down">
          <div className="section-container py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
