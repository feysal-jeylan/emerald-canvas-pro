import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Skill { name: string; pct: number; detail: string; }

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", pct: 90, detail: "Semantic, SEO, Accessibility" },
      { name: "CSS3", pct: 90, detail: "Flexbox/Grid, Animations, Variables" },
      { name: "JavaScript ES6+", pct: 80, detail: "DOM, Async, Modules" },
      { name: "React", pct: 50, detail: "Learning — Components, Hooks" },
      { name: "Tailwind", pct: 40, detail: "Exploring" },
      { name: "Responsive Design", pct: 85, detail: "Mobile-first" },
      { name: "Accessibility", pct: 70, detail: "WCAG principles" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git/GitHub", pct: 80, detail: "Version control" },
      { name: "VS Code", pct: 95, detail: "Extensions, shortcuts" },
      { name: "Chrome DevTools", pct: 80, detail: "Debugging" },
      { name: "Figma", pct: 40, detail: "Basic" },
      { name: "Lighthouse", pct: 75, detail: "Performance" },
    ],
  },
  {
    title: "Business Layer",
    skills: [
      { name: "Requirements Analysis", pct: 70, detail: "Academic" },
      { name: "Problem Solving", pct: 80, detail: "" },
      { name: "Communication", pct: 85, detail: "" },
      { name: "Database Design", pct: 50, detail: "" },
      { name: "Systems Analysis", pct: 65, detail: "" },
    ],
  },
];

function SkillBar({ skill, visible, delay }: { skill: Skill; visible: boolean; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-mono text-primary">{skill.pct}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: visible ? `${skill.pct}%` : "0%", transitionDelay: `${delay}ms` }} />
      </div>
      {skill.detail && <p className="text-xs text-muted-foreground mt-1">{skill.detail}</p>}
    </div>
  );
}

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <p className="font-mono text-sm text-primary mb-2">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Technical <span className="gradient-text">Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass-card p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b border-border">{cat.title}</h3>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} skill={s} visible={isVisible} delay={ci * 150 + si * 80} />
              ))}
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className={`mt-8 flex gap-4 justify-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "600ms" }}>
          <div className="glass-card px-6 py-3 flex items-center gap-3">
            <span className="text-sm font-medium text-foreground">English</span>
            <span className="text-xs text-muted-foreground">Professional</span>
          </div>
          <div className="glass-card px-6 py-3 flex items-center gap-3">
            <span className="text-sm font-medium text-foreground">Amharic</span>
            <span className="text-xs text-muted-foreground">Native</span>
          </div>
        </div>
      </div>
    </section>
  );
}
