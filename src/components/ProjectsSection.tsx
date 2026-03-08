import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "E-Commerce Template",
    category: "E-commerce",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    description: "Full-featured e-commerce template with product catalog, order tracking, and admin dashboard.",
    live: "https://feysal-jeylan.github.io/ecommerce-template/",
    github: "https://github.com/feysal-jeylan/ecommerce-template",
    featured: true,
  },
  {
    title: "Amazon Clone",
    category: "E-commerce",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description: "Amazon-inspired clone featuring product listings, cart UI, and authentication flow.",
    github: "https://github.com/feysal-jeylan/amazon-clone-ecommerce",
  },
  {
    title: "Mela Software Project",
    category: "Tools",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description: "Educational technology platform for Mela Software.",
    github: "https://github.com/feysal-jeylan/Mela-Software-Project",
  },
  {
    title: "Calendar Converter",
    category: "Tools",
    tech: ["Python", "Algorithms"],
    description: "Converts between Ethiopian, Gregorian, and Julian calendars side-by-side.",
  },
  {
    title: "First Portfolio",
    category: "Learning",
    tech: ["HTML", "CSS"],
    description: "My first portfolio website—where the journey began.",
    live: "https://feysi-best.github.io/portfolio/",
    github: "https://github.com/feysal-jeylan/portfolio",
  },
  {
    title: "Mini Projects Collection",
    category: "Learning",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Calculators, to-do apps, landing pages, and UI components.",
  },
];

const filters = ["All", "E-commerce", "Tools", "Learning"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="section-container" ref={ref}>
        <p className="font-mono text-sm text-primary mb-2">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Featured <span className="gradient-text">Work</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setSelected(p)}
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-emerald-bright/5 flex items-center justify-center">
                <span className="font-mono text-sm text-primary/60">{p.tech[0]}</span>
              </div>
              <div className="p-5">
                {p.featured && <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded mb-2 inline-block">Most Advanced</span>}
                <h3 className="text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="glass-card max-w-lg w-full p-6 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Close">
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-foreground mb-2">{selected.title}</h3>
            <p className="text-muted-foreground mb-4">{selected.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">{t}</span>)}
            </div>
            <div className="flex gap-3">
              {selected.live && (
                <a href={selected.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-emerald-bright transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {selected.github && (
                <a href={selected.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                  <Github size={16} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
