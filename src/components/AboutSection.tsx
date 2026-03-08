import { Clock, FolderGit2, GraduationCap, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Clock, value: "150+", label: "Hours Learning" },
  { icon: FolderGit2, value: "6+", label: "Projects Built" },
  { icon: GraduationCap, value: "BSc", label: "University Candidate" },
  { icon: MapPin, value: "🇪🇹", label: "Based in Ethiopia" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24">
      <div className="section-container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-mono text-sm text-primary mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            I bridge <span className="gradient-text">code</span> and context
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
            I build responsive web experiences where clean code meets business context. Based in Addis Ababa, I'm completing my BSc in Business & Information Systems at Addis Ababa University while actively developing frontend projects. My approach combines technical precision with business understanding—I don't just write code, I solve problems.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass-card p-6 text-center hover:border-primary/30 transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <s.icon className="mx-auto mb-3 text-primary" size={24} />
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
