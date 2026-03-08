import { ExternalLink, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const bullets = [
  "Mobile-first websites that adapt perfectly to any screen",
  "Faster load times through Lighthouse-optimized performance",
  "Clean, maintainable code that's easy to scale",
  "Cross-browser compatibility and accessibility best practices",
  "Clear communication and reliable delivery",
];

export default function UpworkSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="upwork" className="py-24">
      <div className="section-container" ref={ref}>
        <div className={`glass-card p-8 md:p-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-primary/15 text-primary border border-primary/30 animate-pulse-glow">
              AVAILABLE FOR WORK
            </span>
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Mobile-First Web Developer
          </h2>
          <p className="text-muted-foreground mb-8">HTML, CSS, JavaScript Pro</p>

          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">What I Deliver</h3>
          <ul className="space-y-3 mb-8">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <blockquote className="border-l-2 border-primary pl-4 mb-8 italic text-muted-foreground">
            "Clear communication, reliable delivery"
          </blockquote>

          <a
            href="https://upwork.com/freelancers/~01cad10ded435b78f3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-emerald-bright transition-all emerald-glow"
          >
            View Upwork Profile <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
