import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const repos = [
  { name: "ecommerce-template", desc: "Full e-commerce template with admin dashboard" },
  { name: "amazon-clone-ecommerce", desc: "Amazon-inspired shopping experience" },
  { name: "Mela-Software-Project", desc: "Educational technology platform" },
  { name: "portfolio", desc: "First portfolio website" },
];

export default function GitHubSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="github" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <p className="font-mono text-sm text-primary mb-2">Open Source</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          GitHub <span className="gradient-text">Activity</span>
        </h2>

        <div className={`glass-card p-6 mb-6 flex items-center gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="p-3 rounded-full bg-primary/10">
            <Github size={24} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">@feysal-jeylan</p>
            <p className="text-sm text-muted-foreground">Building in public • {repos.length}+ repositories</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {repos.map((r, i) => (
            <a
              key={r.name}
              href={`https://github.com/feysal-jeylan/${r.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-5 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-sm font-medium text-foreground group-hover:text-primary transition-colors">{r.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://github.com/feysal-jeylan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-emerald-bright transition-colors font-medium"
          >
            View full profile <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
